import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="h-screen w-full"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className=" fixed flex flex-wrap gap-10 rounded-xl bg-white px-2">
          <button
            className=" outline-none px-4 py-1 rounded-xl shadow-lg"
            style={{ backgroundColor: "white", color: "black" }}
            onClick={() => setColor("white")}
          >
            white
          </button>
          <button
            className=" outline-none px-4 py-1 rounded-xl shadow-lg"
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => setColor("red")}
          >
            RED
          </button>
          <button
            className=" outline-none px-4 py-1 rounded-xl shadow-lg"
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
