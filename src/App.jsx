import { useState } from "react";
import "./App.css";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [result, setResult] = useState("");
  const dictionaryData = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchWord.toLowerCase();
    const foundWord = dictionaryData.find(
      (entry) => entry.word.toLowerCase() === searchTerm
    );
    setResult(
      foundWord ? foundWord.meaning : "Word not found in the dictionary."
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    const searchTerm = searchWord.toLowerCase();
    const foundWord = dictionaryData.find(
      (entry) => entry.word.toLowerCase() === searchTerm
    );
    setResult(
      foundWord ? foundWord.meaning : "Word not found in the dictionary."
    );
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchWord}
          required
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </form>
      <h4>Definition:</h4>
      <p>{result}</p>
    </div>
  );
}

export default App;
