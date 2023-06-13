import { useState } from "react";
import SudokuGrid from "../components/SudokuGrid";
import Numbers from "../components/Numbers";

export default function Home() {
  const [errors, setErrors] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [board, setBoard] = useState([
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---",
  ]);

  return (
    <div>
      <h1>Sudoku</h1>
      <hr />
      <h2 className="errors">{errors}</h2>
      <SudokuGrid
        board={board}
        setBoard={setBoard}
        selectedNumber={selectedNumber}
        setErrors={setErrors}
      />
      <Numbers
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
    </div>
  );
}
