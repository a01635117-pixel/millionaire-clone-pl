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
      <div
        className="flex items-center w-full rounded-full overflow-hidden opacity-25"
        style={{
          background:
            "linear-gradient(to bottom, #0a0a2e, #0d1040) padding-box, linear-gradient(135deg, #333 0%, #1e2a6e 100%) border-box",
          border: "2px solid transparent",
        }}
      >
        <div className="px-5 py-4 text-gray-600 font-bold text-2xl bg-[#080820] border-r border-gray-800/50 font-cinzel w-16 text-center shrink-0">
          {LABELS[index]}:
        </div>
        <div className="flex-1 px-5 py-4 text-gray-600 line-through font-rajdhani text-xl sm:text-2xl">{text}</div>
      </div>
    );
  }

  let borderClass = "answer-border-idle";
  let labelBg = "bg-gradient-to-b from-[#0a1560] to-[#081040]";
  let labelColor = "text-yellow-400";
  let textColor = "text-white";
  let cursor = "cursor-pointer";
  let scaleClass = "";

  if (answerState === "selected" && isSelected) {
    borderClass = "answer-border-selected";
    labelBg = "bg-gradient-to-b from-[#8a6e00] to-[#6b5200]";
    labelColor = "text-[#020818]";
    textColor = "text-[#020818] font-bold";
    cursor = "cursor-default";
  } else if (answerState === "correct" && isCorrect) {
    borderClass = "answer-border-correct";
    labelBg = "bg-gradient-to-b from-[#14532d] to-[#0f3d20]";
    labelColor = "text-green-200";
    textColor = "text-white";
    cursor = "cursor-default";
    scaleClass = "scale-[1.02]";
  } else if (answerState === "wrong") {
    if (isSelected) {
      borderClass = "answer-border-wrong-selected";
      labelBg = "bg-gradient-to-b from-[#5a0000] to-[#420000]";
      labelColor = "text-red-200";
      textColor = "text-white";
      cursor = "cursor-default";
    } else if (isCorrect) {
      borderClass = "answer-border-show-correct";
      labelBg = "bg-gradient-to-b from-[#14532d] to-[#0f3d20]";
      labelColor = "text-green-200";
      textColor = "text-white";
      cursor = "cursor-default";
    } else {
      cursor = "cursor-default";
    }
  } else if (answerState !== "idle") {
    cursor = "cursor-default";
  }

  const clickable = answerState === "idle";

  return (
    <button
      onClick={clickable ? onClick : undefined}
      disabled={!clickable}
      className={`flex items-center w-full rounded-full overflow-hidden transition-all duration-300 ${borderClass} ${cursor} ${scaleClass} group`}
    >
      <div
        className={`px-5 py-4 font-bold text-2xl ${labelBg} ${labelColor} border-r border-white/10 font-cinzel w-16 text-center shrink-0 transition-colors duration-300`}
      >
        {LABELS[index]}:
      </div>
      <div
        className={`flex-1 px-5 py-4 text-left font-rajdhani text-xl sm:text-2xl font-semibold ${textColor} tracking-wide transition-colors duration-300`}
      >
        {text}
      </div>
    </button>
  );
}
