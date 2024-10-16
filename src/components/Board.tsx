import React, { useState } from "react";
import Button from "./Button";

const WAYS_TO_WIN = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const INITIAL_SQUARE = Array(9).fill(null);

const BoardComponent: React.FC = () => {
  const [square, setSquare] = React.useState<string[]>(INITIAL_SQUARE);
  const [isXnext, setIsXNext] = useState<boolean>(true);

  const onClickToPlay = (index: number) => {
    const nSquare = square;
    if (calculateTheWinner() || nSquare[index]) {
      return;
    }
    // Prevent the user to update in case the area is already populated
    if (!nSquare[index]) {
      nSquare[index] = isXnext ? "X" : "O";
      setSquare(nSquare);
      setIsXNext((prev) => !prev);
    }
  };

  const calculateTheWinner = () => {
    let winnerUser = "";
    WAYS_TO_WIN.forEach((wayToWin, index) => {
      const [pos1, pos2, pos3] = wayToWin;
      if (
        square[pos1] &&
        square[pos1] === square[pos2] &&
        square[pos1] === square[pos3]
      ) {
        winnerUser = square[pos1];
      }
    });
    return winnerUser;
  };

  const winner = calculateTheWinner();

  const resetGame = () => {
    setSquare(INITIAL_SQUARE);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Tic Tac Toe Game</h1>
      {!winner ? (
        <p className="text-2xl pb-4 text-center">
          Next Player: {isXnext ? "X" : "O"}
        </p>
      ) : (
        <p className="text-2xl pb-4 text-center">Winner is {winner}</p>
      )}

      <div id="game-board" className="flex align-center justify-center">
        <div className="grid grid-cols-3">
          {square.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gray-200 hover:bg-gray-400 w-24 h-24 border-solid border-zinc-500 border-2"
              onClick={() => onClickToPlay(index)}
            >
              <span className="text-center text-5xl text-blue-800">
                {item ?? ""}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Button onClick={resetGame}>Reset Game</Button>
      </div>
    </>
  );
};

export default BoardComponent;
