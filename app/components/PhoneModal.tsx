"use client";

interface Props {
  suggestion: number;
  confidence: string;
  answerLabels: string[];
  onClose: () => void;
}

const LETTERS = ["A", "B", "C", "D"];

export default function PhoneModal({ suggestion, confidence, answerLabels, onClose }: Props) {
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
        <h3 className="text-yellow-300 font-bold text-lg text-center font-cinzel tracking-wider mb-1">
          📞 Telefon do przyjaciela
        </h3>
        <p className="text-gray-400 text-xs text-center mb-5 font-rajdhani">Dzwonimy do najmądrzejszego znajomego…</p>

        <div
          className="rounded-xl p-4 font-rajdhani text-sm leading-relaxed italic text-blue-100"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <span className="text-yellow-300 not-italic font-bold text-lg">&ldquo;</span>
          {" "}Hmm, trudne pytanie… {confidence}{" "}
          <span className="text-yellow-300 font-bold not-italic">
            {LETTERS[suggestion]}: {answerLabels[suggestion]}
          </span>
          . Jestem mniej więcej pewien na 80%. Powodzenia!{" "}
          <span className="text-yellow-300 not-italic font-bold text-lg">&rdquo;</span>
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
