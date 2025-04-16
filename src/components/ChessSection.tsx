import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Button } from "./ui/button";
import { RotateCw, Award, AlertTriangle } from "lucide-react";

const chessPuzzles = [
  {
    id: 1,
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/3P1N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: ["e4e5", "f6e4", "d3e4"],
    difficulty: "Easy",
    name: "Basic Knight Capture"
  },
  {
    id: 2,
    fen: "r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: ["c4f7", "e8f7", "f3e5", "f7e8", "e5d7"],
    difficulty: "Medium",
    name: "Bishop Sacrifice"
  },
  {
    id: 3,
    fen: "r2qkb1r/pp2nppp/3p4/2pNN3/2BnP3/3P4/PPP2PPP/R1BQK2R w KQkq - 1 9",
    moves: ["d5f6", "g7f6", "e5g6", "h7g6", "c4f7"],
    difficulty: "Hard",
    name: "Double Knight Sacrifice"
  }
];

export function ChessSection() {
  const [game, setGame] = useState(new Chess());
  const [currentPuzzle, setCurrentPuzzle] = useState(chessPuzzles[0]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [status, setStatus] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [playerTurn, setPlayerTurn] = useState(false);

  const initializePuzzle = (puzzleIndex: number = 0) => {
    const puzzle = chessPuzzles[puzzleIndex];
    const newGame = new Chess(puzzle.fen);
    
    setGame(newGame);
    setCurrentPuzzle(puzzle);
    setCurrentMoveIndex(0);
    setStatus("");
    setShowHint(false);
    setMoveHistory([]);
    
    setTimeout(() => {
      if (puzzle.moves && puzzle.moves.length > 0) {
        makeComputerMove(newGame, puzzle.moves[0]);
        setCurrentMoveIndex(1);
        setPlayerTurn(true);
      }
    }, 500);
  };

  const makeComputerMove = (gameInstance: Chess, moveNotation: string) => {
    const from = moveNotation.substring(0, 2);
    const to = moveNotation.substring(2, 4);
    
    try {
      gameInstance.move({
        from: from,
        to: to,
        promotion: "q"
      });
      
      setGame(new Chess(gameInstance.fen()));
      const newMoveHistory = [...moveHistory, `${from}-${to}`];
      setMoveHistory(newMoveHistory);
    } catch (error) {
      console.error("Invalid computer move:", error);
    }
  };

  const onDrop = (sourceSquare: string, targetSquare: string) => {
    if (!playerTurn) return false;
    
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q"
      });
      
      if (move === null) return false;
      
      const expectedMove = currentPuzzle.moves[currentMoveIndex];
      const playerMoveNotation = sourceSquare + targetSquare;
      
      if (playerMoveNotation === expectedMove) {
        setStatus("Correct move!");
        const newMoveHistory = [...moveHistory, `${sourceSquare}-${targetSquare}`];
        setMoveHistory(newMoveHistory);
        
        if (currentMoveIndex + 1 < currentPuzzle.moves.length) {
          setPlayerTurn(false);
          
          setTimeout(() => {
            makeComputerMove(game, currentPuzzle.moves[currentMoveIndex + 1]);
            setCurrentMoveIndex(currentMoveIndex + 2);
            setPlayerTurn(true);
          }, 500);
        } else {
          setStatus("Puzzle solved! Well done!");
        }
      } else {
        setStatus("Incorrect move. Try again!");
        game.undo();
        setGame(new Chess(game.fen()));
        return false;
      }
      
      return true;
    } catch (error) {
      console.error("Error during move:", error);
      return false;
    }
  };

  const handleShowHint = () => {
    setShowHint(true);
    setTimeout(() => setShowHint(false), 2000);
  };

  const handleReset = () => {
    initializePuzzle(chessPuzzles.indexOf(currentPuzzle));
  };

  const handleNextPuzzle = () => {
    const currentIndex = chessPuzzles.indexOf(currentPuzzle);
    const nextIndex = (currentIndex + 1) % chessPuzzles.length;
    initializePuzzle(nextIndex);
  };

  useEffect(() => {
    initializePuzzle();
  }, []);

  return (
    <section id="chess" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Interactive Challenge</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Checkmate Me</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Test your chess skills with these interactive puzzles. Find the best moves and 
            checkmate your opponent! This section showcases my passion for chess and interactive web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 rounded-lg"
            >
              <div 
                className="w-full max-w-[500px] mx-auto"
                style={{ aspectRatio: "1/1" }}
              >
                <Chessboard 
                  position={game.fen()} 
                  onPieceDrop={onDrop}
                  boardWidth={500}
                  areArrowsAllowed={true}
                  customBoardStyle={{
                    borderRadius: "8px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  }}
                  customDarkSquareStyle={{ 
                    backgroundColor: "hsl(var(--secondary))",
                    transition: "background-color 0.2s ease"
                  }}
                  customLightSquareStyle={{ 
                    backgroundColor: "hsl(var(--background))",
                    transition: "background-color 0.2s ease"
                  }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 rounded-lg"
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{currentPuzzle.name}</h3>
                <span className="px-3 py-1 bg-accent/10 rounded-full text-sm font-medium">
                  {currentPuzzle.difficulty}
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Status:</h4>
                <div className={`p-3 rounded-md ${
                  status.includes("Correct") || status.includes("solved") 
                    ? "bg-green-500/10 text-green-500" 
                    : status.includes("Incorrect") 
                      ? "bg-red-500/10 text-red-500" 
                      : "bg-blue-500/10 text-blue-500"
                }`}>
                  {status || "Make your move!"}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Current Task:</h4>
                <p className="text-foreground/70">
                  {playerTurn 
                    ? "Your turn - find the best move!" 
                    : "Computer is thinking..."}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button onClick={handleReset} variant="outline" className="flex items-center gap-1">
                  <RotateCw className="w-4 h-4" />
                  Reset
                </Button>
                <Button onClick={handleShowHint} variant="outline" className="flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" />
                  Hint
                </Button>
                <Button onClick={handleNextPuzzle} className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  Next Puzzle
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Move History:</h4>
              <div className="bg-background/50 p-3 rounded-md h-36 overflow-y-auto">
                {moveHistory.length > 0 ? (
                  <ol className="list-decimal pl-5 space-y-1">
                    {moveHistory.map((move, index) => (
                      <li key={index} className="text-sm">
                        {index % 2 === 0 ? "Computer" : "You"}: {move}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-foreground/50 text-sm">No moves yet</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
