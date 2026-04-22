export type GamePhase = "intro" | "playing" | "gameover" | "won";

export type LifelineKey = "fifty-fifty" | "audience" | "phone";

export interface LifelineState {
  "fifty-fifty": boolean;
  audience: boolean;
  phone: boolean;
}

export interface AudienceData {
  percentages: number[];
}

export interface PhoneData {
  suggestion: number;
  confidence: string;
}

export type LifelineResult =
  | { type: "fifty-fifty"; eliminated: number[] }
  | { type: "audience"; data: AudienceData }
  | { type: "phone"; data: PhoneData };
