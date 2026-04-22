"use client";

interface Props {
  suggestion: number;
  confidence: string;
  answerLabels: string[];
  onClose: () => void;
}

const ANSWER_LETTERS = ["A", "B", "C", "D"];

export default function PhoneModal({ suggestion, confidence, answerLabels, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-[#0a1540] border-2 border-yellow-500 rounded-2xl p-6 w-80 max-w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-yellow-300 font-bold text-lg text-center mb-1">📞 Phone a Friend</h3>
        <p className="text-gray-400 text-xs text-center mb-4">Calling your smartest friend...</p>
        <div className="bg-[#0d1a4a] rounded-xl p-4 text-white text-sm leading-relaxed">
          <span className="text-yellow-200 font-semibold">&ldquo;</span>
          Hmm, that&apos;s a tough one... {confidence}{" "}
          <span className="text-yellow-300 font-bold">
            {ANSWER_LETTERS[suggestion]}: {answerLabels[suggestion]}
          </span>
          . I&apos;m about 80% sure. Good luck!
          <span className="text-yellow-200 font-semibold">&rdquo;</span>
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
