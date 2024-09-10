import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
      });
    }
  };

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto shadow-lg rounded-lg px-8 py-6 bg-white bg-opacity-90">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 text-xl text-gray-800 bg-gray-200"
            placeholder="Generated Password"
            readOnly
          />
          <button
            className="outline-none bg-blue-600 text-white px-4 py-2 font-medium transition-all hover:bg-blue-700"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-4">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer w-full"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className="text-gray-800">Length: {length}</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="numberInput" className="ml-2 text-gray-800">
              Numbers
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="characterInput" className="ml-2 text-gray-800">
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
