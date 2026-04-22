"use client";

import { useEffect } from "react";
import { useGame } from "./hooks/useGame";
import MoneyLadder from "./components/MoneyLadder";
import AnswerButton from "./components/AnswerButton";
import Lifelines from "./components/Lifelines";
import AudienceModal from "./components/AudienceModal";
import PhoneModal from "./components/PhoneModal";
import { MONEY_LADDER } from "./data/questions";

export default function Home() {
  const { state, startGame, selectAnswer, advance, walkAway, endGame, useLifeline, dismissLifeline } = useGame();

  const { phase, questions, currentIndex, selectedAnswer, answerState, lifelinesUsed, eliminatedAnswers, lifeline } =
    state;

  useEffect(() => {
    if (answerState === "wrong") {
      const t = setTimeout(() => endGame(), 1800);
      return () => clearTimeout(t);
    }
  }, [answerState, endGame]);

  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-[#020818] flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-lg">
          <div className="text-yellow-400 text-5xl font-black mb-2 tracking-wider drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">
            WHO WANTS TO BE A
          </div>
          <div className="text-yellow-300 text-6xl font-black mb-8 tracking-widest drop-shadow-[0_0_30px_rgba(251,191,36,0.7)]">
            MILLIONAIRE?
          </div>
          <p className="text-blue-200 mb-8 text-lg">
            Answer 15 questions to win <span className="text-yellow-300 font-bold">$1,000,000</span>.<br />
            Use your lifelines wisely. Safe havens at $1,000 &amp; $32,000.
          </p>
          <button
            onClick={startGame}
            className="px-12 py-4 bg-gradient-to-r from-yellow-500 to-yellow-300 text-[#020818] font-black text-2xl rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            PLAY!
          </button>
        </div>
      </div>
    );
  }

  if (phase === "gameover" || phase === "won") {
    const won = phase === "won";
    return (
      <div className="min-h-screen bg-[#020818] flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-md">
          <div className="text-7xl mb-4">{won ? "🏆" : "💸"}</div>
          <h1 className={`text-4xl font-black mb-2 ${won ? "text-yellow-300" : "text-red-400"}`}>
            {won ? "YOU WON!" : "GAME OVER"}
          </h1>
          <p className="text-blue-200 text-lg mb-2">
            {won ? "Congratulations! You are a Millionaire!" : "Better luck next time!"}
          </p>
          <p className="text-white text-2xl font-bold mb-8">
            You walk away with{" "}
            <span className="text-yellow-300">{state.winnings}</span>
          </p>
          <button
            onClick={startGame}
            className="px-10 py-3 bg-gradient-to-r from-yellow-500 to-yellow-300 text-[#020818] font-black text-xl rounded-full hover:scale-105 transition-transform"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentIndex];

  return (
    <div className="min-h-screen bg-[#020818] flex items-stretch">
      {/* Modals */}
      {lifeline?.type === "audience" && (
        <AudienceModal percentages={lifeline.data.percentages} onClose={dismissLifeline} />
      )}
      {lifeline?.type === "phone" && (
        <PhoneModal
          suggestion={lifeline.data.suggestion}
          confidence={lifeline.data.confidence}
          answerLabels={question.answers}
          onClose={dismissLifeline}
        />
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col items-center justify-between py-6 px-4 gap-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-yellow-400 text-xl font-black tracking-widest">WHO WANTS TO BE A MILLIONAIRE?</h1>
          <p className="text-yellow-200 text-sm mt-1">
            Question {currentIndex + 1} of 15 — Playing for{" "}
            <span className="font-bold text-yellow-300">{MONEY_LADDER[currentIndex]}</span>
          </p>
        </div>

        {/* Lifelines */}
        <Lifelines
          lifelinesUsed={lifelinesUsed}
          onUse={useLifeline}
          disabled={answerState !== "idle"}
        />

        {/* Question */}
        <div className="w-full max-w-xl">
          <div className="bg-gradient-to-b from-[#0d1a6e] to-[#0a0a2e] border-2 border-[#2a3db0] rounded-2xl p-5 text-center min-h-[100px] flex items-center justify-center">
            <p className="text-white text-lg font-semibold leading-snug">{question.question}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {question.answers.map((answer, i) => (
              <AnswerButton
                key={i}
                index={i}
                text={answer}
                isSelected={selectedAnswer === i}
                isCorrect={i === question.correct}
                isEliminated={eliminatedAnswers.includes(i)}
                answerState={answerState}
                onClick={() => selectAnswer(i)}
              />
            ))}
          </div>
        </div>

        {/* Bottom controls */}
        <div className="flex gap-4 flex-wrap justify-center">
          {answerState === "correct" && (
            <button
              onClick={advance}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-400 text-white font-bold text-lg rounded-full hover:scale-105 transition-transform"
            >
              Next Question →
            </button>
          )}
          {answerState === "idle" && currentIndex > 0 && (
            <button
              onClick={walkAway}
              className="px-6 py-2 border border-yellow-600 text-yellow-400 rounded-full text-sm hover:bg-yellow-600/20 transition-colors"
            >
              Walk Away ({MONEY_LADDER[currentIndex - 1]})
            </button>
          )}
        </div>
      </div>

      {/* Money ladder sidebar */}
      <div className="hidden lg:flex items-center p-4 pr-6">
        <MoneyLadder currentIndex={currentIndex} answerState={answerState} />
      </div>
    </div>
  );
}
