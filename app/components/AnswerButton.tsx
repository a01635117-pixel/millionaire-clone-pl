"use client";

const LABELS = ["A", "B", "C", "D"];

interface Props {
  index: number;
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  isEliminated: boolean;
  answerState: "idle" | "selected" | "correct" | "wrong";
  onClick: () => void;
}

export default function AnswerButton({
  index,
  text,
  isSelected,
  isCorrect,
  isEliminated,
  answerState,
  onClick,
}: Props) {
  if (isEliminated) {
    return (
      <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-[#1e2a6e] bg-[#0a0a2e] opacity-30">
        <span className="font-bold text-gray-500 w-5 shrink-0">{LABELS[index]}:</span>
        <span className="text-gray-500 line-through">{text}</span>
      </div>
    );
  }

  let bg = "bg-gradient-to-r from-[#0d1a6e] to-[#1a2d9e] border border-[#2a3db0] hover:from-[#1a2d9e] hover:to-[#2a3db0]";
  let textColor = "text-white";

  if (answerState === "correct" && isCorrect) {
    bg = "bg-gradient-to-r from-green-700 to-green-500 border border-green-400";
  } else if (answerState === "wrong") {
    if (isSelected) {
      bg = "bg-gradient-to-r from-red-800 to-red-600 border border-red-400";
    } else if (isCorrect) {
      bg = "bg-gradient-to-r from-green-700 to-green-500 border border-green-400";
    }
  } else if (answerState === "selected" && isSelected) {
    bg = "bg-gradient-to-r from-[#c8a415] to-[#f0c030] border border-yellow-300";
    textColor = "text-[#0a0a2e]";
  }

  const clickable = answerState === "idle";

  return (
    <button
      onClick={clickable ? onClick : undefined}
      disabled={!clickable}
      className={`flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-200 text-left w-full ${bg} ${textColor} ${
        clickable ? "cursor-pointer" : "cursor-default"
      } font-semibold`}
    >
      <span className="font-bold w-5 shrink-0">{LABELS[index]}:</span>
      <span>{text}</span>
    </button>
  );
}
