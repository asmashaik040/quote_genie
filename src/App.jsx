import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const apiUrl = "https://api.adviceslip.com/advice";

function App() {
  const [advice, setAdvice] = useState("Click the button to get advice!");
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdvice = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(apiUrl);
      setAdvice(response.data.slip.advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
      setAdvice("Failed to fetch advice. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="app">
      <h1 className="heading">Random Quote Generator</h1>
      <div className="card">
        {isLoading ? <p>Loading...</p> : <blockquote>{advice}</blockquote>}
        <button onClick={fetchAdvice}>Get Advice</button>
      </div>
    </div>
  );
}

export default App;
