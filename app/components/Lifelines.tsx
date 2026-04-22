"use client";

import { LifelineKey, LifelineState } from "../types/game";

interface Props {
  lifelinesUsed: LifelineState;
  onUse: (key: LifelineKey) => void;
  disabled: boolean;
}

const LIFELINES: { key: LifelineKey; label: string; icon: string }[] = [
  { key: "fifty-fifty", label: "50:50", icon: "½" },
  { key: "audience", label: "Ask Audience", icon: "📊" },
  { key: "phone", label: "Phone Friend", icon: "📞" },
];

export default function Lifelines({ lifelinesUsed, onUse, disabled }: Props) {
  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {LIFELINES.map(({ key, label, icon }) => {
        const used = lifelinesUsed[key];
        return (
          <button
            key={key}
            onClick={() => !used && !disabled && onUse(key)}
            disabled={used || disabled}
            className={`flex flex-col items-center px-4 py-2 rounded-xl border-2 transition-all min-w-[80px] ${
              used
                ? "border-gray-700 bg-gray-900 opacity-40 cursor-not-allowed"
                : "border-yellow-500 bg-[#0d1a4a] hover:bg-[#1a2d6e] cursor-pointer"
            }`}
          >
            <span className="text-xl">{icon}</span>
            <span className={`text-xs font-bold mt-0.5 ${used ? "text-gray-500" : "text-yellow-300"}`}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
