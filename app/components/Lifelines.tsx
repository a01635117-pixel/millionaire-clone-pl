"use client";

import { LifelineKey, LifelineState } from "../types/game";

interface Props {
  lifelinesUsed: LifelineState;
  onUse: (key: LifelineKey) => void;
  disabled: boolean;
}

const LIFELINES: { key: LifelineKey; label: string; icon: string }[] = [
  { key: "fifty-fifty", label: "50:50", icon: "½" },
  { key: "audience", label: "Publiczność", icon: "📊" },
  { key: "phone", label: "Telefon", icon: "📞" },
];

export default function Lifelines({ lifelinesUsed, onUse, disabled }: Props) {
  return (
    <div className="flex gap-4 justify-center">
      {LIFELINES.map(({ key, label, icon }) => {
        const used = lifelinesUsed[key];
        const inactive = used || disabled;

        return (
          <button
            key={key}
            onClick={() => !inactive && onUse(key)}
            disabled={inactive}
            title={used ? "Koło ratunkowe wykorzystane" : label}
            className={`
              relative flex flex-col items-center justify-center
              w-16 h-16 rounded-full transition-all duration-300
              font-cinzel
              ${
                used
                  ? "opacity-30 cursor-not-allowed"
                  : disabled
                  ? "opacity-60 cursor-not-allowed"
                  : "cursor-pointer hover:scale-110 active:scale-95"
              }
            `}
            style={{
              background: used
                ? "radial-gradient(circle, #111 60%, #222 100%)"
                : "radial-gradient(circle at 35% 35%, #2a3fa0 0%, #0d1a6e 50%, #060f45 100%)",
              boxShadow: used
                ? "none"
                : "0 2px 0 #0a1240, inset 0 1px 0 rgba(255,255,255,0.15), 0 0 12px rgba(200,164,21,0.3)",
              border: used ? "2px solid #333" : "2px solid #c8a415",
            }}
          >
            <span className="text-xl leading-none">{icon}</span>
            <span
              className={`text-[9px] font-bold mt-0.5 tracking-wider ${
                used ? "text-gray-600" : "text-yellow-300"
              }`}
            >
              {label}
            </span>
            {used && (
              <div className="absolute inset-0 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-2xl font-bold leading-none">✕</span>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
