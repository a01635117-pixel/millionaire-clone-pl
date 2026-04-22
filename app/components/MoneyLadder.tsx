"use client";

import { MONEY_LADDER, SAFE_HAVENS } from "../data/questions";

interface Props {
  currentIndex: number;
  answerState: string;
}

export default function MoneyLadder({ currentIndex, answerState }: Props) {
  return (
    <div className="flex flex-col-reverse gap-[3px] w-52 shrink-0">
      {MONEY_LADDER.map((amount, i) => {
        const isActive = i === currentIndex;
        const isPast = i < currentIndex;
        const isSafe = SAFE_HAVENS.includes(i);
        const isCorrect = isActive && answerState === "correct";

        return (
          <div
            key={i}
            className={`
              flex items-center justify-between px-3 py-[5px] rounded-sm
              transition-all duration-500 font-rajdhani
              ${isActive ? "animate-ladder" : ""}
              ${isSafe && !isActive ? "border-l-[3px] border-l-yellow-400" : "border-l-[3px] border-l-transparent"}
            `}
            style={{
              background: isCorrect
                ? "linear-gradient(to right, #14532d, #166534)"
                : isActive
                ? "linear-gradient(to right, #8a6e00, #c8a415)"
                : isPast
                ? "linear-gradient(to right, #0a1640, #0d1a50)"
                : "linear-gradient(to right, #06091e, #080d28)",
              boxShadow: isActive
                ? isCorrect
                  ? "0 0 10px rgba(34,197,94,0.6)"
                  : "0 0 10px rgba(200,164,21,0.6)"
                : isSafe && !isPast
                ? "0 0 4px rgba(200,164,21,0.2)"
                : "none",
              border: isActive
                ? isCorrect
                  ? "1px solid rgba(134,239,172,0.6)"
                  : "1px solid rgba(240,192,48,0.6)"
                : isSafe
                ? "1px solid rgba(200,164,21,0.3)"
                : "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <span
              className={`text-[10px] font-bold w-5 tabular-nums ${
                isSafe ? "text-yellow-400" : isPast ? "text-blue-400" : "text-gray-600"
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`text-xs font-bold tabular-nums tracking-wide ${
                isActive
                  ? isCorrect
                    ? "text-green-200"
                    : "text-[#020818]"
                  : isSafe
                  ? "text-yellow-300"
                  : isPast
                  ? "text-blue-200"
                  : "text-gray-500"
              }`}
            >
              {amount}
            </span>
            {isSafe && !isActive && (
              <span className="text-[8px] text-yellow-500 font-bold ml-1 shrink-0">★</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
