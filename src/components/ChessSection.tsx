import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Chessboard } from "react-chessboard";
import { Chess, Square } from "chess.js";
import { Button } from "./ui/button";
import { RotateCw, Award, AlertTriangle, RefreshCw, ChevronUp } from "lucide-react";
import { toast } from "./ui/use-toast";
import { Card, CardContent } from "./ui/card";
import { chessPuzzles, isWhiteTurn } from "@/utils/chessUtils";

export function ChessSection() {
  const [game, setGame] = useState(new Chess());
  const [currentPuzzle, setCurrentPuzzle] = useState<any | null>(null);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [status, setStatus] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [puzzleData, setPuzzleData] = useState<any[]>([]);
  const [highlightSquares, setHighlightSquares] = useState<{
    [square: string]: React.CSSProperties;
  }>({});
  const [incorrectMove, setIncorrectMove] = useState(false);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [boardWidth, setBoardWidth] = useState(500);
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const chessboardContainerRef = useRef<HTMLDivElement>(null);

  const makeComputerMove = (gameInstance: Chess, moveNotation: string) => {
    const from = moveNotation.substring(0, 2);
    const to = moveNotation.substring(2, 4);
    const promotion =
      moveNotation.length > 4 ? moveNotation.substring(4, 5) : undefined;

    try {
      gameInstance.move({
        from,
        to,
        promotion: (promotion as any) || "q",
      });

      setGame(new Chess(gameInstance.fen()));
      setMoveHistory((h) => [...h, `${from}-${to}`]);
    } catch (error) {
      console.error("Invalid computer move:", error);
    }
  };

  const onDrop = (sourceSquare: string, targetSquare: string) => {
    if (!playerTurn || !currentPuzzle || puzzleSolved) return false;

    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });
      if (move === null) return false;

      const expected = currentPuzzle.moves[currentMoveIndex];
      const playerNotation = sourceSquare + targetSquare;

      if (
        playerNotation === expected ||
        (expected.startsWith(playerNotation) && move.promotion)
      ) {
        // Correct move!
        setStatus("Correct move!");
        setIncorrectMove(false);
        setMoveHistory((h) => [...h, `${sourceSquare}-${targetSquare}`]);

        if (currentMoveIndex + 1 < currentPuzzle.moves.length) {
          setPlayerTurn(false);
          setTimeout(() => {
            makeComputerMove(game, currentPuzzle.moves[currentMoveIndex + 1]);
            setCurrentMoveIndex((idx) => idx + 2);
            setPlayerTurn(true);
          }, 500);
        } else {
          // Puzzle solved!
          setStatus("Puzzle solved! Well done!");
          setPuzzleSolved(true);
          toast({
            title: "Puzzle Solved!",
            description: "Congratulations! You've solved the puzzle.",
            variant: "default",
          });
          
          // Show celebration animation
          setTimeout(() => {
            setPuzzleSolved(false);
          }, 3000);
        }
      } else {
        // Incorrect move!
        setStatus("Incorrect move. Try again!");
        setIncorrectMove(true);
        
        toast({
          title: "Incorrect Move",
          description: "That's not the best move in this position.",
          variant: "destructive",
        });
        
        // Reset the incorrect move state after animation completes
        setTimeout(() => {
          setIncorrectMove(false);
        }, 500);
        
        game.undo();
        setGame(new Chess(game.fen()));
        return false;
      }

      return true;
    } catch {
      return false;
    }
  };

  const handleShowHint = () => {
    if (!currentPuzzle) return;
    setShowHint(true);
    const expected = currentPuzzle.moves[currentMoveIndex];
    const from = expected.substring(0, 2),
      to = expected.substring(2, 4);

    // Highlight hint squares
    setHighlightSquares({
      [from]: { backgroundColor: "rgba(255,215,0,0.5)" },
      [to]: { backgroundColor: "rgba(0,255,0,0.4)" }
    });

    toast({
      title: "Hint",
      description: `Try moving from ${from} to ${to}`,
      variant: "default",
    });
    
    setTimeout(() => {
      setShowHint(false);
      setHighlightSquares({});
    }, 2000);
  };

  const handleReset = () => {
    if (!currentPuzzle) return;
    setPuzzleSolved(false);
    initializePuzzle(puzzleData.indexOf(currentPuzzle));
  };

  const handleNextPuzzle = () => {
    if (!currentPuzzle) return;
    setPuzzleSolved(false);
    const idx = puzzleData.indexOf(currentPuzzle);
    initializePuzzle((idx + 1) % puzzleData.length);
  };

  useEffect(() => {
    setPuzzleData(chessPuzzles);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (puzzleData.length > 0 && !currentPuzzle) {
      initializePuzzle(0);
    }
  }, [puzzleData]);

  // Update board size based on container width
  useEffect(() => {
    const updateBoardWidth = () => {
      if (chessboardContainerRef.current) {
        const containerWidth = chessboardContainerRef.current.offsetWidth;
        // Make sure boardWidth isn't too large, especially on mobile
        setBoardWidth(Math.min(containerWidth, 500));
      }
    };

    // Initial board size update
    updateBoardWidth();

    // Add resize listener
    window.addEventListener('resize', updateBoardWidth);

    // Clean up
    return () => window.removeEventListener('resize', updateBoardWidth);
  }, []);

  const initializePuzzle = (puzzleIndex: number = 0) => {
    if (!puzzleData.length) return;
    
    // Reset state for new puzzle
    setHighlightSquares({});
    setPuzzleSolved(false);
    setIncorrectMove(false);
    setSelectedSquare(null);
    
    const puzzle = puzzleData[puzzleIndex];
    const newGame = new Chess(puzzle.fen);

    setGame(newGame);
    setCurrentPuzzle(puzzle);
    setCurrentMoveIndex(0);
    setStatus("");
    setShowHint(false);
    setMoveHistory([]);
    setPlayerTurn(isWhiteTurn(puzzle.fen));

    if (!isWhiteTurn(puzzle.fen) && puzzle.moves.length) {
      setTimeout(() => {
        makeComputerMove(newGame, puzzle.moves[0]);
        setCurrentMoveIndex(1);
        setPlayerTurn(true);
      }, 500);
    }
  };

  // Enhanced wooden board theme with darker browns and proper containment
  const customBoardStyles = {
    boardStyle: {
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
      overflow: "hidden",
      transition: "all 0.3s ease",
    },
    darkSquareStyle: { backgroundColor: "#9c7b5e" }, // Darker brown
    lightSquareStyle: { backgroundColor: "#eaded2" }, // Lighter beige
  };

  const handleSquareClick = (square: Square) => {
    if (!playerTurn || puzzleSolved) return;

    // If no piece is selected, try to select this square
    if (!selectedSquare) {
      const piece = game.get(square);
      if (!piece) {
        setHighlightSquares({});
        return;
      }

      // Check if this piece can move (belongs to current player)
      const isWhiteToMove = game.turn() === 'w';
      const isPieceWhite = piece.color === 'w';
      
      if (isWhiteToMove !== isPieceWhite) {
        setHighlightSquares({});
        return;
      }

      const moves = game.moves({ square, verbose: true });
      if (!moves.length) {
        setHighlightSquares({});
        return;
      }

      // Select this square and highlight possible moves
      setSelectedSquare(square);
      const styles: { [sq: string]: React.CSSProperties } = {
        [square]: { backgroundColor: "rgba(255,255,0,0.6)" }, // Selected piece
      };
      moves.forEach((m) => {
        styles[m.to] = { backgroundColor: "rgba(0,255,0,0.4)" }; // Possible moves
      });
      setHighlightSquares(styles);
    } else {
      // A piece is already selected, try to move to this square
      if (selectedSquare === square) {
        // Clicking the same square - deselect
        setSelectedSquare(null);
        setHighlightSquares({});
        return;
      }

      // Try to make the move
      const moveResult = onDrop(selectedSquare, square);
      
      // Clear selection and highlights regardless of move success
      setSelectedSquare(null);
      setHighlightSquares({});
    }
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Checkmate Me
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Test your chess skills with these interactive puzzles. Find the best
            moves and checkmate your opponent!
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
              {isLoading ? (
                <div
                  className="w-full max-w-[500px] mx-auto flex items-center justify-center"
                  style={{ aspectRatio: "1/1" }}
                >
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : (
                <>
                  {/* Current Turn Display - ABOVE the board */}
                  <div className="mb-4 text-center">
                    <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
                      <CardContent className="pt-4 pb-3 px-4">
                        <p className="text-lg font-medium flex items-center justify-center gap-2">
                          {playerTurn ? 
                            <span className="inline-block w-3 h-3 bg-white rounded-full animate-pulse"></span> : 
                            <span className="inline-block w-3 h-3 bg-black rounded-full animate-pulse"></span>
                          }
                          Current Turn: {playerTurn ? "White" : "Black"}
                          {playerTurn ? " (Your Turn)" : " (Computer's Turn)"}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Chessboard with proper piece containment */}
                  <motion.div 
                    ref={chessboardContainerRef}
                    className={`w-full max-w-[500px] mx-auto relative ${incorrectMove ? 'animate-shake' : ''}`}
                    animate={incorrectMove ? 
                      { x: [0, -10, 10, -5, 5, 0] } : 
                      {}
                    }
                    transition={{ duration: 0.4 }}
                    style={{ 
                      aspectRatio: "1/1",
                      // Critical: This ensures pieces are contained within the board during drag
                      position: "relative",
                      isolation: "isolate", // Creates new stacking context
                    }}
                  >
                    <div 
                      style={{
                        // This wrapper ensures pieces stay within bounds
                        position: "relative",
                        width: "100%", 
                        height: "100%",
                        overflow: "hidden", // Clips any pieces that try to go outside
                        borderRadius: "12px", // Match the board's border radius
                        // Create a containing block for absolutely positioned pieces
                        contain: "layout style paint",
                      }}
                    >
                      <Chessboard
                        position={game.fen()}
                        onPieceDrop={onDrop}
                        onSquareClick={handleSquareClick}
                        boardWidth={boardWidth}
                        customBoardStyle={customBoardStyles.boardStyle}
                        customDarkSquareStyle={customBoardStyles.darkSquareStyle}
                        customLightSquareStyle={customBoardStyles.lightSquareStyle}
                        customSquareStyles={highlightSquares}
                        animationDuration={300}
                        areArrowsAllowed={false}
                        boardOrientation="white"
                        isDraggablePiece={({ piece, sourceSquare }) => {
                          // Only allow dragging if it's the player's turn and puzzle isn't solved
                          const isWhiteToMove = game.turn() === 'w';
                          const isPieceWhite = piece.includes('w');
                          return playerTurn && !puzzleSolved && (isWhiteToMove === isPieceWhite);
                        }}
                        customDropSquareStyle={{
                          boxShadow: "inset 0 0 1px 6px rgba(255,255,255,0.75)"
                        }}
                        customPremoveDarkSquareStyle={{ backgroundColor: "#9c7b5e" }}
                        customPremoveLightSquareStyle={{ backgroundColor: "#eaded2" }}
                        arePremovesAllowed={false}
                        dropOffBoardAction="snapback"
                        snapToCursor={true}
                      />
                    </div>
                    
                    {/* Celebration overlay when puzzle is solved */}
                    <AnimatePresence>
                      {puzzleSolved && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center rounded-md overflow-hidden"
                        >
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="bg-green-500/90 text-white font-bold py-4 px-8 rounded-lg shadow-lg"
                          >
                            <div className="text-3xl mb-2">✓ Puzzle Solved!</div>
                            <Button 
                              onClick={handleNextPuzzle}
                              className="mt-3 bg-white text-green-700 hover:bg-white/90"
                            >
                              Next Puzzle <ChevronUp className="ml-1 w-4 h-4" />
                            </Button>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>

          {/* Chess controls panel (right side) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 rounded-lg bg-background/50 backdrop-blur-sm"
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  {currentPuzzle?.id
                    ? `Puzzle #${currentPuzzle.id}`
                    : "Loading puzzle..."}
                </h3>
                <span className="px-3 py-1 bg-accent/30 rounded-full text-sm font-medium">
                  {currentPuzzle?.rating
                    ? `Rating: ${currentPuzzle.rating}`
                    : "Rating: —"}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Status:</h4>
                <div
                  className={`p-3 rounded-md ${
                    status.includes("Correct") || status.includes("solved")
                      ? "bg-green-500/20 text-green-500 border border-green-500/30"
                      : status.includes("Incorrect")
                      ? "bg-red-500/20 text-red-500 border border-red-500/30"
                      : "bg-blue-500/20 text-blue-500 border border-blue-500/30"
                  }`}
                >
                  <motion.p
                    key={status} // This forces re-animation when status changes
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {status || "Make your move!"}
                  </motion.p>
                </div>
              </div>

              {currentPuzzle?.themes && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Themes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPuzzle.themes.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary/10 text-secondary rounded-md text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="font-medium mb-2">Current Task:</h4>
                <p className="text-foreground/70">
                  {playerTurn
                    ? "Your turn – find the best move!"
                    : "Computer is thinking..."}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="flex items-center gap-1 hover:bg-background/80"
                >
                  <RotateCw className="w-4 h-4" />
                  Reset
                </Button>
                <Button
                  onClick={handleShowHint}
                  variant="outline"
                  className="flex items-center gap-1 hover:bg-background/80"
                >
                  <AlertTriangle className="w-4 h-4" />
                  Hint
                </Button>
                <Button 
                  className="flex items-center gap-1 bg-primary/90 hover:bg-primary" 
                  onClick={handleNextPuzzle}
                >
                  <Award className="w-4 h-4" />
                  Next Puzzle
                </Button>
                <Button
                  onClick={handleNextPuzzle}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  <RefreshCw className="w-4 h-4" />
                  New Puzzle
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Move History:</h4>
              <div className="bg-background/80 backdrop-blur-sm border border-border/50 p-3 rounded-md h-36 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                {moveHistory.length ? (
                  <ol className="list-decimal pl-5 space-y-1">
                    {moveHistory.map((m, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        className="text-sm"
                      >
                        <span className={i % 2 === 0 ? "text-foreground/80" : "text-primary/90 font-medium"}>
                          {i % 2 === 0 ? "Computer" : "You"}: {m}
                        </span>
                      </motion.li>
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
