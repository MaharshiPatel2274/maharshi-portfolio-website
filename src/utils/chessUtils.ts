
interface ChessPuzzle {
  id: string;
  fen: string;
  moves: string[];
  rating: number;
  ratingDeviation?: number;
  popularity: number;
  nbPlays?: number;
  themes: string[];
  gameUrl?: string;
  openingTags?: string[];
}

// A sample of the puzzles for initial testing
const puzzles: ChessPuzzle[] = [
  {
    id: "00008",
    fen: "r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24",
    moves: ["f2g3", "e6e7", "b2b1", "b3c1", "b1c1", "h6c1"],
    rating: 1848,
    themes: ["crushing", "hangingPiece", "long", "middlegame"],
    popularity: 95
  },
  {
    id: "0000D",
    fen: "5rk1/1p3ppp/pq3b2/8/8/1P1Q1N2/P4PPP/3R2K1 w - - 2 27",
    moves: ["d3d6", "f8d8", "d6d8", "f6d8"],
    rating: 1498,
    themes: ["advantage", "endgame", "short"],
    popularity: 96
  },
  {
    id: "0008Q",
    fen: "8/4R3/1p2P3/p4r2/P6p/1P3Pk1/4K3/8 w - - 1 64",
    moves: ["e7f7", "f5e5", "e2f1", "e5e6"],
    rating: 1339,
    themes: ["advantage", "endgame", "rookEndgame", "short"],
    popularity: 91
  }
];

export function parsePuzzleMoves(moves: string[]): { from: string; to: string }[] {
  return moves.map(move => ({
    from: move.substring(0, 2),
    to: move.substring(2, 4)
  }));
}

export function isWhiteTurn(fen: string): boolean {
  const turnPart = fen.split(" ")[1];
  return turnPart === "w";
}

export const chessPuzzles = puzzles;
