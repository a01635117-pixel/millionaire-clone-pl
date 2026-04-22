"use client";

import { MONEY_LADDER, SAFE_HAVENS } from "../data/questions";

interface Props {
  currentIndex: number;
  answerState: string;
}

export default function MoneyLadder({ currentIndex, answerState }: Props) {
  return (
    <div className="flex flex-col-reverse gap-0.5 w-48 shrink-0">
      {MONEY_LADDER.map((amount, i) => {
        const isActive = i === currentIndex;
        const isPast = i < currentIndex;
        const isSafe = SAFE_HAVENS.includes(i);

        let bg = "bg-[#0a0a2e] border border-[#1e2a6e]";
        if (isActive && answerState === "correct") bg = "bg-green-600 border border-green-400";
        else if (isActive) bg = "bg-[#c8a415] border border-yellow-300";
        else if (isPast) bg = "bg-[#0d1a4a] border border-[#1e2a6e]";
        if (isSafe && !isActive) bg += " border-l-4 border-l-yellow-400";

        return (
          <div
            key={i}
            className={`flex items-center justify-between px-3 py-1 rounded text-sm font-bold transition-all ${bg}`}
          >
            <span className={`${isSafe ? "text-yellow-300" : isPast ? "text-blue-300" : "text-gray-400"} text-xs`}>
              {i + 1}
            </span>
            <span
              className={`${
                isActive
                  ? "text-white text-base"
                  : isSafe
                  ? "text-yellow-300"
                  : isPast
                  ? "text-blue-200"
                  : "text-gray-400"
              }`}
            >
              {amount}
            </span>
          </div>
        );
      })}
    </div>
  );
}
