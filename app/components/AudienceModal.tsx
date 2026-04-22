"use client";

interface Props {
  percentages: number[];
  onClose: () => void;
}

const LABELS = ["A", "B", "C", "D"];
const COLORS = ["bg-blue-500", "bg-orange-400", "bg-green-500", "bg-purple-500"];

export default function AudienceModal({ percentages, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-[#0a1540] border-2 border-yellow-500 rounded-2xl p-6 w-80 max-w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-yellow-300 font-bold text-lg text-center mb-4">Audience Poll</h3>
        <div className="space-y-3">
          {percentages.map((pct, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-white font-bold w-5">{LABELS[i]}</span>
              <div className="flex-1 bg-[#0d1a6e] rounded-full h-7 overflow-hidden">
                <div
                  className={`h-full ${COLORS[i]} flex items-center justify-end pr-2 rounded-full transition-all`}
                  style={{ width: `${pct}%` }}
                >
                  <span className="text-white text-xs font-bold">{pct}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-5 w-full py-2 bg-yellow-500 text-[#0a0a2e] font-bold rounded-xl hover:bg-yellow-400"
        >
          Thanks!
        </button>
      </div>
    </div>
  );
}
