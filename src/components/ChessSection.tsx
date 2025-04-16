
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Chessboard } from "react-chessboard";
import { Chess, Square } from "chess.js";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useToast } from "@/hooks/use-toast";
import { RotateCw, Award, AlertTriangle, ChevronRight, CheckCircle, XCircle } from "lucide-react";

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
  const [highlightSquares, setHighlightSquares] = useState<Record<string, string>>({});
  const [boardWidth, setBoardWidth] = useState(500);
  const [boardShake, setBoardShake] = useState(false);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const { toast } = useToast();

  // Resize board for responsive design
  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(
        500,
        Math.min(window.innerWidth - 40, document.querySelector(".chessboard-container")?.clientWidth || 500)
      );
      setBoardWidth(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initializePuzzle = useCallback((puzzleIndex: number = 0) => {
    const puzzle = chessPuzzles[puzzleIndex];
    const newGame = new Chess(puzzle.fen);
    
    setGame(newGame);
    setCurrentPuzzle(puzzle);
    setCurrentMoveIndex(0);
    setStatus("");
    setShowHint(false);
    setMoveHistory([]);
    setHighlightSquares({});
    setPuzzleSolved(false);
    
    setTimeout(() => {
      if (puzzle.moves && puzzle.moves.length > 0) {
        makeComputerMove(newGame, puzzle.moves[0]);
        setCurrentMoveIndex(1);
        setPlayerTurn(true);
      }
    }, 500);
  }, []);

  const makeComputerMove = (gameInstance: Chess, moveNotation: string) => {
    const from = moveNotation.substring(0, 2) as Square;
    const to = moveNotation.substring(2, 4) as Square;
    
    try {
      const move = gameInstance.move({
        from: from,
        to: to,
        promotion: "q"
      });
      
      // Highlight the source and destination squares
      setHighlightSquares({
        [from]: "rgba(255, 255, 0, 0.4)",
        [to]: "rgba(255, 255, 0, 0.4)",
      });
      
      setTimeout(() => setHighlightSquares({}), 1500);
      
      setGame(new Chess(gameInstance.fen()));
      const newMoveHistory = [...moveHistory, `${from}-${to}`];
      setMoveHistory(newMoveHistory);
      
      // Show a toast notification for the computer's move
      toast({
        title: "Computer moved",
        description: `${move.piece.toUpperCase()} from ${from} to ${to}`,
        duration: 3000,
      });
    } catch (error) {
      console.error("Invalid computer move:", error);
    }
  };

  const onDrop = (sourceSquare: string, targetSquare: string) => {
    if (!playerTurn) return false;
    
    try {
      const move = game.move({
        from: sourceSquare as Square,
        to: targetSquare as Square,
        promotion: "q"
      });
      
      if (move === null) return false;
      
      const expectedMove = currentPuzzle.moves[currentMoveIndex];
      const playerMoveNotation = sourceSquare + targetSquare;
      
      if (playerMoveNotation === expectedMove) {
        // Highlight correct move
        setHighlightSquares({
          [sourceSquare]: "rgba(75, 181, 67, 0.4)",
          [targetSquare]: "rgba(75, 181, 67, 0.4)",
        });
        
        setTimeout(() => setHighlightSquares({}), 1500);
        
        setStatus("Correct move!");
        const newMoveHistory = [...moveHistory, `${sourceSquare}-${targetSquare}`];
        setMoveHistory(newMoveHistory);
        
        // Show success toast
        toast({
          title: "Correct move!",
          description: "Well done! That's the right move.",
          duration: 3000,
        });
        
        if (currentMoveIndex + 1 < currentPuzzle.moves.length) {
          setPlayerTurn(false);
          
          setTimeout(() => {
            makeComputerMove(game, currentPuzzle.moves[currentMoveIndex + 1]);
            setCurrentMoveIndex(currentMoveIndex + 2);
            setPlayerTurn(true);
          }, 800);
        } else {
          setStatus("Puzzle solved! Well done!");
          setPuzzleSolved(true);
          
          // Show completion toast
          toast({
            title: "Puzzle solved!",
            description: "Congratulations! You've solved the puzzle!",
            variant: "default",
            duration: 5000,
          });
        }
      } else {
        // Highlight incorrect move
        setHighlightSquares({
          [sourceSquare]: "rgba(220, 53, 69, 0.4)",
          [targetSquare]: "rgba(220, 53, 69, 0.4)",
        });
        
        setTimeout(() => setHighlightSquares({}), 1500);
        
        setStatus("Incorrect move. Try again!");
        setBoardShake(true);
        setTimeout(() => setBoardShake(false), 500);
        
        // Show error toast
        toast({
          title: "Incorrect move",
          description: "That's not the right move. Try again!",
          variant: "destructive",
          duration: 3000,
        });
        
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
    if (currentMoveIndex < currentPuzzle.moves.length) {
      const hintMove = currentPuzzle.moves[currentMoveIndex];
      const from = hintMove.substring(0, 2);
      const to = hintMove.substring(2, 4);
      
      // Highlight hint squares
      setHighlightSquares({
        [from]: "rgba(0, 123, 255, 0.4)",
        [to]: "rgba(0, 123, 255, 0.4)",
      });
      
      // Display hint toast
      toast({
        title: "Hint",
        description: `Try moving from ${from} to ${to}`,
        duration: 3000,
      });
      
      setTimeout(() => setShowHint(false), 2000);
      setTimeout(() => setHighlightSquares({}), 3000);
    }
  };

  const handleReset = () => {
    initializePuzzle(chessPuzzles.indexOf(currentPuzzle));
  };

  const handleNextPuzzle = () => {
    const currentIndex = chessPuzzles.indexOf(currentPuzzle);
    const nextIndex = (currentIndex + 1) % chessPuzzles.length;
    initializePuzzle(nextIndex);
  };

  // Get square highlights for legal moves
  const getLegalMoves = (square: string) => {
    if (!playerTurn) return {};

    const highlights: Record<string, string> = {};
    try {
      const piece = game.get(square as Square);
      if (piece && piece.color === game.turn()) {
        const moves = game.moves({ square: square as Square, verbose: true });
        moves.forEach((move) => {
          highlights[move.to] = "rgba(0, 255, 0, 0.2)";
        });
      }
    } catch (error) {
      console.error("Error getting legal moves:", error);
    }
    return highlights;
  };
  
  const onSquareClick = (square: string) => {
    if (!playerTurn) return;
    
    setHighlightSquares(getLegalMoves(square));
  };

  useEffect(() => {
    initializePuzzle();
  }, [initializePuzzle]);

  // Get current player turn
  const currentTurn = game ? (game.turn() === 'w' ? "White" : "Black") : "White";

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
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Checkmate Me</h2>
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
              className={`glass-card p-6 rounded-lg ${boardShake ? 'animate-shake' : ''}`}
              // Fix: Use a CSS class for animation instead of directly animating x with array
              style={{ 
                boxShadow: puzzleSolved ? "0 0 20px rgba(var(--primary), 0.5)" : ""
              }}
            >
              <div className="flex flex-col items-center mb-4">
                <Badge variant="outline" className="mb-2 text-sm px-3 py-1 bg-muted/50">
                  <span className="mr-1">Turn:</span>
                  <span className={`${currentTurn === 'White' ? 'text-white' : 'text-black'} font-semibold`}>
                    {currentTurn} to move
                  </span>
                </Badge>
                <div className="flex justify-center gap-2 mb-4">
                  <Button onClick={handleReset} variant="outline" size="sm" className="flex items-center gap-1">
                    <RotateCw className="w-4 h-4" />
                    Reset
                  </Button>
                  <Button onClick={handleShowHint} variant="outline" size="sm" className="flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" />
                    Hint
                  </Button>
                  <Button onClick={handleNextPuzzle} size="sm" className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    Next Puzzle
                  </Button>
                </div>
              </div>
              
              <div 
                className="w-full max-w-[500px] mx-auto chessboard-container relative"
                style={{ aspectRatio: "1/1" }}
              >
                <AnimatePresence>
                  {puzzleSolved && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center z-10 bg-black/50 rounded-lg backdrop-blur-sm"
                    >
                      <motion.div 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="bg-background/90 p-6 rounded-lg text-center"
                      >
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Puzzle Solved!</h3>
                        <p className="mb-4">Well done, you've completed this challenge!</p>
                        <Button onClick={handleNextPuzzle} className="flex items-center gap-2 mx-auto">
                          Next Puzzle <ChevronRight className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <Chessboard 
                  position={game.fen()} 
                  onPieceDrop={onDrop}
                  onSquareClick={onSquareClick}
                  boardWidth={boardWidth}
                  areArrowsAllowed={true}
                  customSquareStyles={{
                    ...highlightSquares
                  }}
                  customBoardStyle={{
                    borderRadius: "8px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
                  }}
                  customDarkSquareStyle={{ 
                    backgroundColor: "hsl(var(--secondary))"
                  }}
                  customLightSquareStyle={{ 
                    backgroundColor: "hsl(var(--background))"
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
