import { useEffect, useState } from "react";

export default function SudokuGrid({ board, setErrors, selectedNumber }) {
  const solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763",
  ];

  const [userBoard, setUserBoard] = useState(board);

  const updateTile = (row, col) => {
    if (selectedNumber !== null) {
      const tileValue = userBoard[row][col];
      if (tileValue !== "-") {
        return;
      }

      const currentSolutionValue = solution[row][col];
      if (selectedNumber.toString() === currentSolutionValue) {
        const updatedUserBoard = [...userBoard];
        updatedUserBoard[row] =
          updatedUserBoard[row].substring(0, col) +
          selectedNumber.toString() +
          updatedUserBoard[row].substring(col + 1);
        setUserBoard(updatedUserBoard);
      } else {
        setErrors((prevErrors) => prevErrors + 1);
      }
    }
  };

  const tiles = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const tileId = r.toString() + "-" + c.toString();
      const tileValue = userBoard[r][c] === "-" ? "" : userBoard[r][c];
      const isInitialNumber = board[r][c] !== "-";
      const isSecondOrFifthColumn = c === 2 || c === 5;
      const isSecondOrFifthRow = r === 2 || r === 5;
      const tileClassName = `tile${isInitialNumber ? " tile-start" : ""}${
        isSecondOrFifthColumn ? " vertical-line" : ""
      }${isSecondOrFifthRow ? " horizontal-line" : ""}`;

      tiles.push(
        <div
          key={tileId}
          id={tileId}
          className={tileClassName}
          onClick={() => updateTile(r, c)}>
          {tileValue}
        </div>
      );
    }
  }

  return <div className="board">{tiles}</div>;
}
