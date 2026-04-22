"use client";

interface Props {
  percentages: number[];
  onClose: () => void;
}

const LABELS = ["A", "B", "C", "D"];
const COLORS = ["from-blue-600 to-blue-400", "from-orange-500 to-orange-300", "from-emerald-600 to-emerald-400", "from-purple-600 to-purple-400"];

export default function AudienceModal({ percentages, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="rounded-2xl p-7 w-80 max-w-full mx-4 animate-scale-in"
        style={{
          background: "linear-gradient(160deg, #0d1a6e 0%, #060d3a 100%)",
          border: "2px solid #c8a415",
          boxShadow: "0 0 40px rgba(200,164,21,0.3), 0 20px 60px rgba(0,0,0,0.7)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-yellow-300 font-bold text-lg text-center mb-5 font-cinzel tracking-wider">
          📊 Głos Publiczności
        </h3>
        <div className="space-y-3">
          {percentages.map((pct, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-yellow-400 font-bold font-cinzel w-6 shrink-0">{LABELS[i]}</span>
              <div className="flex-1 bg-[#06091e] rounded-full h-8 overflow-hidden relative">
                <div
                  className={`h-full bg-gradient-to-r ${COLORS[i]} flex items-center justify-end pr-3 rounded-full`}
                  style={{ width: `${pct}%`, transition: "width 0.8s ease-out" }}
                >
                  {pct > 12 && (
                    <span className="text-white text-xs font-bold font-rajdhani">{pct}%</span>
                  )}
                </div>
                {pct <= 12 && (
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-rajdhani">
                    {pct}%
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full py-2.5 font-bold rounded-xl font-rajdhani tracking-widest text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #c8a415, #f0c030)",
            color: "#020818",
          }}
        >
          DZIĘKUJĘ!
        </button>
      </div>
    </div>
  );
}
