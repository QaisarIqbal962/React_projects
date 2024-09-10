import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#566573");

  const buttonStyles =
    "outline-none px-4 py-2 rounded-full shadow-lg transition duration-300 ease-in-out transform";

  return (
    <div
      className="w-full h-screen duration-200 flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center items-center">
        <div
          className="border border-gray-300 flex justify-center items-center shadow-lg rounded-lg w-10/12 h-28 transition-all duration-300"
          style={{ backgroundColor: color }}
        >
          <div className="text-4xl font-bold text-white text-center drop-shadow-lg">
            Background Changer
          </div>
        </div>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-6 py-4 rounded-3xl border border-black">
          <button
            onClick={() => setColor("red")}
            className={`${buttonStyles} bg-red-500 text-white hover:bg-red-600 hover:scale-105`}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className={`${buttonStyles} bg-green-500 text-white hover:bg-green-600 hover:scale-105`}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className={`${buttonStyles} bg-blue-500 text-white hover:bg-blue-600 hover:scale-105`}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("gray")}
            className={`${buttonStyles} bg-gray-500 text-white hover:bg-gray-600 hover:scale-105`}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("#FFD700")}
            className={`${buttonStyles} bg-yellow-500 text-black hover:bg-yellow-600 hover:scale-105`}
          >
            Gold
          </button>

          <button
            onClick={() => setColor("purple")}
            className={`${buttonStyles} bg-purple-500 text-white hover:bg-purple-600 hover:scale-105`}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("pink")}
            className={`${buttonStyles} bg-pink-500 text-black hover:bg-pink-600 hover:scale-105`}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("orange")}
            className={`${buttonStyles} bg-orange-500 text-white hover:bg-orange-600 hover:scale-105`}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("cyan")}
            className={`${buttonStyles} bg-cyan-500 text-black hover:bg-cyan-600 hover:scale-105`}
          >
            Cyan
          </button>

          <button
            onClick={() => setColor("teal")}
            className={`${buttonStyles} bg-teal-500 text-white hover:bg-teal-600 hover:scale-105`}
          >
            Teal
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
