import { useEffect, useState } from "react";

export default function SudokuGrid({ board }) {
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

  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const newTiles = [];
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const tileId = r.toString() + "-" + c.toString();
        const tileValue = board[r][c] === "-" ? "" : board[r][c];
        newTiles.push(
          <div key={tileId} id={tileId} className="tile">
            {tileValue}
          </div>
        );
      }
    }
    setTiles(newTiles);
  }, []);

  return <div className="board">{tiles}</div>;
}
