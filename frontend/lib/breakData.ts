export interface Break {
  consistency: number;
  improvedConsistency: number;
  distance: number;
  improvedDistance: number;
  ballFlight: number;
  improvedBallFlight: number;
}

export const breakData: { key: string; value?: Break }[] = [
  {
    key: "par",
    value: {
      consistency: 93,
      improvedConsistency: 98,
      distance: 90,
      improvedDistance: 95,
      ballFlight: 85,
      improvedBallFlight: 93,
    },
  },
  {
    key: "75",
    value: {
      consistency: 70,
      improvedConsistency: 84,
      distance: 65,
      improvedDistance: 80,
      ballFlight: 60,
      improvedBallFlight: 75,
    },
  },
  {
    key: "80",
    value: {
      consistency: 50,
      improvedConsistency: 60,
      distance: 45,
      improvedDistance: 55,
      ballFlight: 40,
      improvedBallFlight: 50,
    },
  },
  {
    key: "90",
    value: {
      consistency: 30,
      improvedConsistency: 36,
      distance: 28,
      improvedDistance: 34,
      ballFlight: 25,
      improvedBallFlight: 32,
    },
  },
  {
    key: "100",
    value: {
      consistency: 10,
      improvedConsistency: 13,
      distance: 9,
      improvedDistance: 18,
      ballFlight: 8,
      improvedBallFlight: 15,
    },
  },
];

export type BreakKey = keyof typeof breakData;
