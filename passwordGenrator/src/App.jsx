import { useEffect, useState, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setNUmAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "";
    str = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjkloiuytrewq";
    if (numAllowed) str = str + "1234567890";
    if (charAllowed) str = str + "!@#$%^&*()_+=-][{}|";
    // for genrating password
    for (let index = 1; index < length; index++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyToclipboard = useCallback(() => {
    //copy text to clipboard
     passwordRef.current?.select();  // for text selection
     passwordRef.current?.setSelectionRange(0,99) // set a range for selection
    window.navigator.clipboard.writeText(password);  
  }, [password]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numAllowed, charAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          ref={passwordRef}
          readOnly
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyToclipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setlength(e.target.value)}
          />
          <label>length: {length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultValue={numAllowed}
            onChange={() => setNUmAllowed((prev) => !prev)}
          />
          <lable> Numbers </lable>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultValue={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <lable> Charactor </lable>
        </div>
      </div>
    </div>
  );
}

export default App;
