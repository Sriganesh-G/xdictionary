import { useState } from "react";

import "./App.css";

function App() {
  // this state holds use input
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
    // converting the searchWord and storing in searchTerm
    const searchTerm = searchWord.toLowerCase();
    // Find the word in the dictionary
    const foundWord = dictionaryData.find(
      (data) => data.word.toLowerCase() == searchTerm
    );

    // here we'll set the result otherise "Word not found"

    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchWord}
          required
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
      <h4>
        Definition: <span>{result}</span>
      </h4>
    </div>
  );
}

export default App;
