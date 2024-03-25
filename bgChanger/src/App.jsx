import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("olive");
  const colorButton = [
    {
      name: "Red",
      color: "red",
    },
    {
      name: "Olive",
      color: "olive",
    },
    {
      name: "Green",
      color: "green",
    },
    {
      name: "Black",
      color: "black",
    },
    {
      name: "Blue",
      color: "blue",
    },
    {
      name: "Pink",
      color: "pink",
    },
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="flex flex-wrap justify-center bottom-12  insert-x-0 px-3 py-3
   "
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl ">
          {colorButton.map((item) => (
            <button
              className="outline-none px-4 rounded-lg text-white"
              style={{ backgroundColor: item.color }}
              onClick={() => setBgColor(item.color)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
