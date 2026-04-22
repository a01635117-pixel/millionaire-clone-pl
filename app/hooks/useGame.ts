"use client";

import { useState, useCallback } from "react";
import { buildQuestionSet, MONEY_LADDER, SAFE_HAVENS, Question } from "../data/questions";
import { GamePhase, LifelineKey, LifelineState, LifelineResult } from "../types/game";

export interface GameState {
  phase: GamePhase;
  questions: Question[];
  currentIndex: number;
  selectedAnswer: number | null;
  answerState: "idle" | "selected" | "correct" | "wrong";
  lifelinesUsed: LifelineState;
  eliminatedAnswers: number[];
  lifeline: LifelineResult | null;
  winnings: string;
}

const INITIAL_STATE: GameState = {
  phase: "intro",
  questions: [],
  currentIndex: 0,
  selectedAnswer: null,
  answerState: "idle",
  lifelinesUsed: { "fifty-fifty": false, audience: false, phone: false },
  eliminatedAnswers: [],
  lifeline: null,
  winnings: "0 zł",
};

export function useGame() {
  const [state, setState] = useState<GameState>(INITIAL_STATE);

  const startGame = useCallback(() => {
    setState({
      ...INITIAL_STATE,
      phase: "playing",
      questions: buildQuestionSet(),
    });
  }, []);

  const selectAnswer = useCallback(
    (index: number) => {
      if (state.answerState !== "idle") return;
      if (state.eliminatedAnswers.includes(index)) return;
      setState((s) => ({ ...s, selectedAnswer: index, answerState: "selected" }));

      setTimeout(() => {
        setState((s) => {
          const correct = s.questions[s.currentIndex].correct;
          if (index === correct) {
            return { ...s, answerState: "correct" };
          } else {
            const safeHaven = [...SAFE_HAVENS].reverse().find((h) => h < s.currentIndex);
            const winnings =
              safeHaven !== undefined ? MONEY_LADDER[safeHaven] : "0 zł";
            return { ...s, answerState: "wrong", winnings };
          }
        });
      }, 1200);
    },
    [state.answerState, state.eliminatedAnswers]
  );

  const advance = useCallback(() => {
    setState((s) => {
      const nextIndex = s.currentIndex + 1;
      if (nextIndex >= s.questions.length) {
        return { ...s, phase: "won", winnings: MONEY_LADDER[14] };
      }
      return {
        ...s,
        currentIndex: nextIndex,
        selectedAnswer: null,
        answerState: "idle",
        eliminatedAnswers: [],
        lifeline: null,
      };
    });
  }, []);

  const walkAway = useCallback(() => {
    setState((s) => {
      const winnings = s.currentIndex > 0 ? MONEY_LADDER[s.currentIndex - 1] : "0 zł";
      return { ...s, phase: "gameover", winnings };
    });
  }, []);

  const endGame = useCallback(() => {
    setState((s) => {
      if (s.answerState === "wrong") {
        return { ...s, phase: "gameover" };
      }
      return s;
    });
  }, []);

  const useLifeline = useCallback(
    (key: LifelineKey) => {
      if (state.lifelinesUsed[key]) return;
      const q = state.questions[state.currentIndex];

      setState((s) => {
        const updated = { ...s, lifelinesUsed: { ...s.lifelinesUsed, [key]: true } };

        if (key === "fifty-fifty") {
          const wrongAnswers = [0, 1, 2, 3].filter((i) => i !== q.correct);
          const shuffled = wrongAnswers.sort(() => Math.random() - 0.5);
          const eliminated = shuffled.slice(0, 2);
          return {
            ...updated,
            eliminatedAnswers: eliminated,
            lifeline: { type: "fifty-fifty", eliminated },
          };
        }

        if (key === "audience") {
          const percentages = [0, 0, 0, 0];
          percentages[q.correct] = Math.floor(Math.random() * 25) + 55;
          let remaining = 100 - percentages[q.correct];
          const others = [0, 1, 2, 3].filter((i) => i !== q.correct);
          for (let i = 0; i < others.length - 1; i++) {
            const share = Math.floor(Math.random() * remaining * 0.6);
            percentages[others[i]] = share;
            remaining -= share;
          }
          percentages[others[others.length - 1]] = remaining;
          return {
            ...updated,
            lifeline: { type: "audience", data: { percentages } },
          };
        }

        if (key === "phone") {
          const isConfident = Math.random() > 0.2;
          const suggestion = isConfident ? q.correct : Math.floor(Math.random() * 4);
          const confidence = isConfident
            ? "I'm pretty sure it's"
            : "I think it might be";
          return {
            ...updated,
            lifeline: { type: "phone", data: { suggestion, confidence } },
          };
        }

        return updated;
      });
    },
    [state.lifelinesUsed, state.questions, state.currentIndex]
  );

  const dismissLifeline = useCallback(() => {
    setState((s) => ({ ...s, lifeline: s.lifeline?.type === "fifty-fifty" ? s.lifeline : null }));
  }, []);

  return { state, startGame, selectAnswer, advance, walkAway, endGame, useLifeline, dismissLifeline };
}
