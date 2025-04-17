
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Button } from "./ui/button";
import { RotateCw, Award, AlertTriangle, RefreshCw } from "lucide-react";
import { toast } from "./ui/use-toast";

// Interface for Lichess puzzle data
interface LichessPuzzle {
  id: string;
  fen: string;
  moves: string[];
  rating: number;
  themes: string[];
  popularity: number;
}

export function ChessSection() {
  const [game, setGame] = useState(new Chess());
  const [currentPuzzle, setCurrentPuzzle] = useState<LichessPuzzle | null>(null);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [status, setStatus] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [puzzleData, setPuzzleData] = useState<LichessPuzzle[]>([]);

  // Fallback puzzles in case API fails
  const fallbackPuzzles = [
    {
      id: "abc123",
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/3P1N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
      moves: ["e4e5", "f6e4", "d3e4"],
      rating: 1200,
      themes: ["opening", "capture"],
      popularity: 80
    },
    {
      id: "def456",
      fen: "r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
      moves: ["c4f7", "e8f7", "f3e5", "f7e8", "e5d7"],
      rating: 1500,
      themes: ["sacrifice", "mate"],
      popularity: 90
    },
    {
      id: "ghi789",
      fen: "r2qkb1r/pp2nppp/3p4/2pNN3/2BnP3/3P4/PPP2PPP/R1BQK2R w KQkq - 1 9",
      moves: ["d5f6", "g7f6", "e5g6", "h7g6", "c4f7"],
      rating: 1800,
      themes: ["sacrifice", "tactical"],
      popularity: 85
    }
  ];

  // Fetch puzzles from Lichess API
  const fetchPuzzles = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://lichess.org/api/puzzle/daily');
      
      if (response.ok) {
        const data = await response.json();
        
        // Transform the Lichess puzzle format to our format
        const newPuzzle: LichessPuzzle = {
          id: data.puzzle.id,
          fen: data.game.fen,
          moves: data.puzzle.solution,
          rating: data.puzzle.rating,
          themes: data.puzzle.themes,
          popularity: data.puzzle.popularity || 70
        };
        
        setPuzzleData([newPuzzle, ...fallbackPuzzles]);
        setIsLoading(false);
      } else {
        throw new Error('Failed to fetch puzzle');
      }
    } catch (error) {
      console.error('Error fetching puzzles:', error);
      setPuzzleData(fallbackPuzzles);
      toast({
        title: "Couldn't fetch new puzzles",
        description: "Using local puzzles instead",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  const initializePuzzle = (puzzleIndex: number = 0) => {
    if (puzzleData.length === 0) return;
    
    const puzzle = puzzleData[puzzleIndex];
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
    const promotion = moveNotation.length > 4 ? moveNotation.substring(4, 5) : undefined;
    
    try {
      gameInstance.move({
        from: from,
        to: to,
        promotion: promotion as any || "q"
      });
      
      setGame(new Chess(gameInstance.fen()));
      const newMoveHistory = [...moveHistory, `${from}-${to}`];
      setMoveHistory(newMoveHistory);
    } catch (error) {
      console.error("Invalid computer move:", error);
    }
  };

  const onDrop = (sourceSquare: string, targetSquare: string) => {
    if (!playerTurn || !currentPuzzle) return false;
    
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q"
      });
      
      if (move === null) return false;
      
      const expectedMove = currentPuzzle.moves[currentMoveIndex];
      const playerMoveNotation = sourceSquare + targetSquare;
      
      // Check if the move matches (including potential promotion)
      if (playerMoveNotation === expectedMove || 
          (expectedMove.startsWith(playerMoveNotation) && move.promotion)) {
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
          toast({
            title: "Puzzle Solved!",
            description: "Congratulations! You've solved the puzzle.",
            variant: "default"
          });
        }
      } else {
        setStatus("Incorrect move. Try again!");
        toast({
          title: "Incorrect Move",
          description: "That's not the best move in this position.",
          variant: "destructive"
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
    if (!currentPuzzle) return;
    
    setShowHint(true);
    const expectedMove = currentPuzzle.moves[currentMoveIndex];
    const from = expectedMove.substring(0, 2);
    const to = expectedMove.substring(2, 4);
    
    toast({
      title: "Hint",
      description: `Try moving from ${from} to ${to}`,
      variant: "default"
    });
    
    setTimeout(() => setShowHint(false), 2000);
  };

  const handleReset = () => {
    if (!currentPuzzle) return;
    initializePuzzle(puzzleData.indexOf(currentPuzzle));
  };

  const handleNextPuzzle = () => {
    if (!currentPuzzle) return;
    const currentIndex = puzzleData.indexOf(currentPuzzle);
    const nextIndex = (currentIndex + 1) % puzzleData.length;
    initializePuzzle(nextIndex);
  };

  const handleFetchNewPuzzle = () => {
    fetchPuzzles();
  };

  useEffect(() => {
    fetchPuzzles();
  }, []);

  useEffect(() => {
    if (puzzleData.length > 0 && !currentPuzzle) {
      initializePuzzle(0);
    }
  }, [puzzleData]);

  // Custom wooden board theme
  const customBoardStyles = {
    boardStyle: {
      borderRadius: "8px",
      boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    },
    darkSquareStyle: { 
      backgroundColor: "#b58863", // Darker brown for dark squares
    },
    lightSquareStyle: { 
      backgroundColor: "#f0d9b5", // Lighter beige for light squares
    },
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
              {isLoading ? (
                <div className="w-full max-w-[500px] mx-auto flex items-center justify-center" style={{ aspectRatio: "1/1" }}>
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div 
                  className="w-full max-w-[500px] mx-auto"
                  style={{ aspectRatio: "1/1" }}
                >
                  <Chessboard 
                    position={game.fen()} 
                    onPieceDrop={onDrop}
                    boardWidth={500}
                    areArrowsAllowed={true}
                    customBoardStyle={customBoardStyles.boardStyle}
                    customDarkSquareStyle={customBoardStyles.darkSquareStyle}
                    customLightSquareStyle={customBoardStyles.lightSquareStyle}
                  />
                </div>
              )}
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
                <h3 className="text-xl font-semibold">{currentPuzzle?.id ? `Puzzle #${currentPuzzle.id.substring(0, 6)}` : "Loading puzzle..."}</h3>
                <span className="px-3 py-1 bg-accent/10 rounded-full text-sm font-medium">
                  {currentPuzzle?.rating ? `Rating: ${currentPuzzle.rating}` : "Level: Medium"}
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
              
              {currentPuzzle?.themes && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Themes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPuzzle.themes.slice(0, 3).map((theme, index) => (
                      <span key={index} className="px-2 py-1 bg-secondary/10 text-secondary rounded-md text-xs">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Current Task:</h4>
                <p className="text-foreground/70">
                  {playerTurn 
                    ? "Your turn - find the best move!" 
                    : "Computer is thinking..."}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-4">
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
                <Button onClick={handleFetchNewPuzzle} variant="secondary" className="flex items-center gap-1">
                  <RefreshCw className="w-4 h-4" />
                  New Puzzle
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
