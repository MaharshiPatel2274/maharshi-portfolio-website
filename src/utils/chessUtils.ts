// src/utils/chessUtils.ts

export interface ChessPuzzle {
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

const puzzles: ChessPuzzle[] = [
  {
    id: "00sHx",
    fen: "q3k1nr/1pp1nQpp/3p4/1P2p3/4P3/B1PP1b2/B5PP/5K2 b k - 0 17",
    moves: ["e8d7", "a2e6", "d7d8", "f7f8"],
    rating: 1760,
    ratingDeviation: 80,
    popularity: 83,
    nbPlays: 72,
    themes: ["mate", "mateIn2", "middlegame", "short"],
    gameUrl: "https://lichess.org/yyznGmXs/black#34",
    openingTags: ["Italian_Game", "Italian_Game_Classical_Variation"]
  },
  {
    id: "00sJ9",
    fen: "r3r1k1/p4ppp/2p2n2/1p6/3P1qb1/2NQR3/PPB2PP1/R1B3K1 w - - 5 18",
    moves: ["e3g3", "e8e1", "g1h2", "e1c1", "a1c1", "f4h6", "h2g1", "h6c1"],
    rating: 2671,
    ratingDeviation: 105,
    popularity: 87,
    nbPlays: 325,
    themes: ["advantage", "attraction", "fork", "middlegame", "sacrifice", "veryLong"],
    gameUrl: "https://lichess.org/gyFeQsOE#35",
    openingTags: ["French_Defense", "French_Defense_Exchange_Variation"]
  },
  {
    id: "00sJb",
    fen: "Q1b2r1k/p2np2p/5bp1/q7/5P2/4B3/PPP3PP/2KR1B1R w - - 1 17",
    moves: ["d1d7", "a5e1", "d7d1", "e1e3", "c1b1", "e3b6"],
    rating: 2235,
    ratingDeviation: 76,
    popularity: 97,
    nbPlays: 64,
    themes: ["advantage", "fork", "long"],
    gameUrl: "https://lichess.org/kiuvTFoE#33",
    openingTags: ["Sicilian_Defense", "Sicilian_Defense_Dragon_Variation"]
  },
  {
    id: "00008",
    fen: "r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24",
    moves: ["f2g3", "e6e7", "b2b1", "b3c1", "b1c1", "h6c1"],
    rating: 1848,
    ratingDeviation: 75,
    popularity: 95,
    nbPlays: 7748,
    themes: ["crushing", "hangingPiece", "long", "middlegame"],
    gameUrl: "https://lichess.org/787zsVup/black#48",
    openingTags: []
  },
  {
    id: "0000D",
    fen: "5rk1/1p3ppp/pq3b2/8/8/1P1Q1N2/P4PPP/3R2K1 w - - 2 27",
    moves: ["d3d6", "f8d8", "d6d8", "f6d8"],
    rating: 1498,
    ratingDeviation: 73,
    popularity: 96,
    nbPlays: 31477,
    themes: ["advantage", "endgame", "short"],
    gameUrl: "https://lichess.org/F8M8OS71#53",
    openingTags: []
  },
  {
    id: "0008Q",
    fen: "8/4R3/1p2P3/p4r2/P6p/1P3Pk1/4K3/8 w - - 1 64",
    moves: ["e7f7", "f5e5", "e2f1", "e5e6"],
    rating: 1339,
    ratingDeviation: 77,
    popularity: 91,
    nbPlays: 705,
    themes: ["advantage", "endgame", "rookEndgame", "short"],
    gameUrl: "https://lichess.org/MQSyb3KW#127",
    openingTags: []
  },
  {
    id: "0009B",
    fen: "r2qr1k1/b1p2ppp/pp4n1/P1P1p3/4P1n1/B2P2Pb/3NBP1P/RN1QR1K1 b - - 1 16",
    moves: ["b6c5", "e2g4", "h3g4", "d1g4"],
    rating: 1080,
    ratingDeviation: 74,
    popularity: 87,
    nbPlays: 589,
    themes: ["advantage", "middlegame", "short"],
    gameUrl: "https://lichess.org/4MWQCxQ6/black#32",
    openingTags: ["Kings_Pawn_Game", "Kings_Pawn_Game_Leonardis_Variation"]
  },
  {
    id: "000VW",
    fen: "r4r2/1p3pkp/p5p1/3R1N1Q/3P4/8/P1q2P2/3R2K1 b - - 3 25",
    moves: ["g6f5", "d5c5", "c2e4", "h5g5", "g7h8", "g5f6"],
    rating: 2844,
    ratingDeviation: 105,
    popularity: 86,
    nbPlays: 248,
    themes: ["crushing", "endgame", "long"],
    gameUrl: "https://lichess.org/e9AY2m5j/black#50",
    openingTags: []
  },
  {
    id: "000Vc",
    fen: "8/8/4k1p1/2KpP2p/5PP1/8/8/8 w - - 0 53",
    moves: ["g4h5", "g6h5", "f4f5", "e6e5", "f5f6", "e5f6"],
    rating: 1575,
    ratingDeviation: 80,
    popularity: 75,
    nbPlays: 103,
    themes: ["crushing", "endgame", "long", "pawnEndgame"],
    gameUrl: "https://lichess.org/l6AejDMO#105",
    openingTags: []
  },
  {
    id: "000Zo",
    fen: "4r3/1k6/pp3r2/1b2P2p/3R1p2/P1R2P2/1P4PP/6K1 w - - 0 35",
    moves: ["e5f6", "e8e1", "g1f2", "e1f1"],
    rating: 1353,
    ratingDeviation: 75,
    popularity: 86,
    nbPlays: 628,
    themes: ["endgame", "mate", "mateIn2", "short"],
    gameUrl: "https://lichess.org/n8Ff742v#69",
    openingTags: []
  }
];

export function parsePuzzleMoves(moves: string[]): { from: string; to: string }[] {
  return moves.map(m => ({
    from: m.substring(0, 2),
    to: m.substring(2, 4)
  }));
}

export function isWhiteTurn(fen: string): boolean {
  return fen.split(" ")[1] === "w";
}

export const chessPuzzles = puzzles;
