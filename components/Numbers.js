import { useState } from "react";

export default function Numbers({ selectedNumber, setSelectedNumber }) {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [isNumberClicked, setIsNumberClicked] = useState(false);

  return (
    <div className="digits">
      {numbers.map((number, index) => (
        <div
          key={index}
          className={`number ${isNumberClicked === number ? "active" : ""}`}
          onClick={() => {
            setIsNumberClicked(number);
            setSelectedNumber(number);
          }}>
          {number}
        </div>
      ))}
    </div>
  );
}
