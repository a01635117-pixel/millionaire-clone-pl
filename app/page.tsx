"use client";

import { useEffect, useRef } from "react";
import { useGame } from "./hooks/useGame";
import MoneyLadder from "./components/MoneyLadder";
import AnswerButton from "./components/AnswerButton";
import Lifelines from "./components/Lifelines";
import AudienceModal from "./components/AudienceModal";
import PhoneModal from "./components/PhoneModal";
import { MONEY_LADDER } from "./data/questions";

/* ─── Shared gold button style ─── */
const goldBtn = {
  background: "linear-gradient(135deg, #c8a415 0%, #f0c030 50%, #c8a415 100%)",
  boxShadow: "0 4px 0 #6b5200, 0 0 30px rgba(200,164,21,0.4)",
  color: "#020818",
} as const;

export default function Home() {
  const { state, startGame, selectAnswer, advance, walkAway, endGame, useLifeline, dismissLifeline } = useGame();
  const { phase, questions, currentIndex, selectedAnswer, answerState, lifelinesUsed, eliminatedAnswers, lifeline } =
    state;
  // Audio playback
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
          if (typeof window === "undefined") return;
          if (!audioRef.current) {
                  audioRef.current = new Audio("/milionerzy_pytania.mp3");
                  audioRef.current.loop = true;
          }
          if (phase === "playing") {
                  audioRef.current.play().catch(() => {});
          } else {
                  audioRef.current.pause();
                  audioRef.current.currentTime = 0;
          }
    }, [phase]);
  
  useEffect(() => {
    if (answerState === "wrong") {
      const t = setTimeout(() => endGame(), 2000);
      return () => clearTimeout(t);
    }
  }, [answerState, endGame]);



  /* ══════════════ INTRO ══════════════ */
  if (phase === "intro") {
    return (
      <div className="stage-bg min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
        {/* decorative rings */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 40%, rgba(200,164,21,0.04) 70%, transparent 100%)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "520px",
            height: "520px",
            border: "1px solid rgba(200,164,21,0.1)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "720px",
            height: "720px",
            border: "1px solid rgba(200,164,21,0.06)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />

        <div className="relative z-10 max-w-xl animate-fade-in">
          {/* diamond separator */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-500/60" />
            <div className="w-2 h-2 rotate-45 bg-yellow-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-500/60" />
          </div>

          <h2 className="font-cinzel text-yellow-400 text-xl tracking-[0.3em] uppercase mb-2">
            Kto chce zostać
          </h2>
          <h1
            className="font-cinzel font-black text-5xl sm:text-6xl text-yellow-300 tracking-widest animate-title-glow uppercase mb-2"
          >
            Milionerem?
          </h1>

          <div className="flex items-center justify-center gap-3 mt-3 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-500/60" />
            <div className="w-2 h-2 rotate-45 bg-yellow-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-500/60" />
          </div>

          <div
            className="rounded-2xl p-5 mb-8 font-rajdhani text-sm text-blue-100 leading-relaxed"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(200,164,21,0.2)",
            }}
          >
            <p className="mb-2">
              Odpowiedz poprawnie na <span className="text-yellow-300 font-bold">15 pytań</span> i wygraj{" "}
              <span className="text-yellow-300 font-bold">5 000 000 zł</span>!
            </p>
            <p className="text-blue-300 text-xs">
              Kwoty gwarantowane: <span className="text-yellow-400 font-semibold">10 000 zł</span> i{" "}
              <span className="text-yellow-400 font-semibold">250 000 zł</span> &nbsp;|&nbsp; 3 koła ratunkowe
            </p>
          </div>

          <button
            onClick={startGame}
            className="font-cinzel font-black text-xl px-14 py-4 rounded-full tracking-widest uppercase transition-all hover:scale-105 active:scale-95 active:translate-y-1"
            style={{ ...goldBtn, boxShadow: "0 6px 0 #6b5200, 0 0 40px rgba(200,164,21,0.5)" }}
          >
            Graj!
          </button>
        </div>
      </div>
    );
  }

  /* ══════════════ GAME OVER / WON ══════════════ */
  if (phase === "gameover" || phase === "won") {
    const won = phase === "won";
    return (
      <div className="stage-bg min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-md animate-scale-in">
          <div className="text-8xl mb-5">{won ? "🏆" : "💸"}</div>

          <h1
            className={`font-cinzel font-black text-4xl mb-3 tracking-wider ${won ? "text-yellow-300 animate-title-glow" : "text-red-400"}`}
          >
            {won ? "GRATULACJE!" : "KONIEC GRY"}
          </h1>

          <p className="font-rajdhani text-blue-200 text-lg mb-2">
            {won
              ? "Jesteś Milionerem! Niesamowite!"
              : "Nie tym razem. Nie poddawaj się!"}
          </p>

          <div
            className="rounded-2xl p-5 my-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(200,164,21,0.3)",
            }}
          >
            <p className="font-rajdhani text-blue-300 text-sm mb-1">Twoja wygrana</p>
            <p className="font-cinzel font-bold text-3xl text-yellow-300">{state.winnings}</p>
          </div>

          <button
            onClick={startGame}
            className="font-cinzel font-bold text-lg px-12 py-3 rounded-full tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
            style={goldBtn}
          >
            Zagraj ponownie
          </button>
        </div>
      </div>
    );
  }

  /* ══════════════ PLAYING ══════════════ */
  const question = questions[currentIndex];

  return (
    <div className="stage-bg min-h-screen flex items-stretch">
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

      {/* ── Main column ── */}
      <div className="flex-1 flex flex-col items-center justify-between py-6 px-4 gap-5 min-h-screen">

        {/* Header */}
        <div className="text-center w-full">
          <h1 className="font-cinzel font-black text-yellow-400 text-base sm:text-lg tracking-[0.25em] uppercase">
            Kto chce zostać Milionerem?
          </h1>
          <div className="flex items-center justify-center gap-2 mt-1">
            <div className="h-px w-12 bg-yellow-700/40" />
            <p className="font-rajdhani text-yellow-200 text-xs tracking-widest">
              Pytanie {currentIndex + 1} z 15 &nbsp;·&nbsp; Za{" "}
              <span className="text-yellow-300 font-bold">{MONEY_LADDER[currentIndex]}</span>
            </p>
            <div className="h-px w-12 bg-yellow-700/40" />
          </div>
        </div>

        {/* Lifelines */}
        <Lifelines lifelinesUsed={lifelinesUsed} onUse={useLifeline} disabled={answerState !== "idle"} />

        {/* Question + Answers */}
        <div className="w-full max-w-2xl flex flex-col gap-4">
          {/* Question box */}
          <div
            className="rounded-2xl px-6 py-5 text-center flex items-center justify-center min-h-[140px] question-glow"
            style={{
              background: "linear-gradient(160deg, #0d1a6e 0%, #06091e 100%)",
              border: "2px solid rgba(200,164,21,0.35)",
            }}
          >
            <p className="font-rajdhani text-white text-2xl sm:text-3xl font-semibold leading-snug tracking-wide">
              {question.question}
            </p>
          </div>

          {/* Answer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.answers.map((answer, i) => (
              <AnswerButton
                key={`${currentIndex}-${i}`}
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

        {/* Controls */}
        <div className="flex gap-4 flex-wrap justify-center min-h-[52px] items-center">
          {answerState === "correct" && (
            <button
              onClick={advance}
              className="font-cinzel font-bold px-10 py-3 rounded-full tracking-widest uppercase text-sm transition-all hover:scale-105 active:scale-95 animate-pulse-green"
              style={{
                background: "linear-gradient(135deg, #14532d, #22c55e)",
                color: "#fff",
                border: "2px solid rgba(134,239,172,0.5)",
              }}
            >
              Następne pytanie →
            </button>
          )}
          {answerState === "idle" && currentIndex > 0 && (
            <button
              onClick={walkAway}
              className="font-rajdhani font-semibold px-6 py-2.5 rounded-full text-sm tracking-wider transition-all hover:bg-yellow-600/15 active:scale-95"
              style={{ border: "1px solid rgba(200,164,21,0.4)", color: "#c8a415" }}
            >
              Rezygnuję z {MONEY_LADDER[currentIndex - 1]}
            </button>
          )}
        </div>
      </div>

      {/* ── Money ladder sidebar ── */}
      <div className="hidden lg:flex items-center px-4 pr-6">
        <MoneyLadder currentIndex={currentIndex} answerState={answerState} />
      </div>
    </div>
  );
}
