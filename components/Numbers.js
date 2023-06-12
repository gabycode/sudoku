import { useState } from "react";

export default function Numbers() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [isNumberClicked, setIsNumberClicked] = useState(false);
  const [numberSelected, setNumberSelected] = useState(null);

  console.log(numberSelected);
  return (
    <div className="digits">
      {numbers.map((number, index) => (
        <div
          key={index}
          className={`number ${isNumberClicked === number ? "active" : ""}`}
          onClick={() => {
            setIsNumberClicked(number);
            setNumberSelected(number);
          }}>
          {number}
        </div>
      ))}
    </div>
  );
}
