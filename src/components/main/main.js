import React, { useState } from "react";

const Main = () => {
  const [num, setNum] = useState("?");
  const [score, setScore] = useState("20");
  const [highscore, setHighscore] = useState("0");
  const [message, setMessage] = useState("Start guessing...");
  const [inputValue, setInputValue] = useState("");
  const [secretNumber, setSecretNumber] = useState(
    +Math.trunc(Math.random() * 20) + 1
  );
  const [status, setStatus] = useState(false);

  const inputHandler = (e) => {
    setInputValue(Number(e.target.value));
  };

  const checkHandler = () => {
    console.log(secretNumber);
    console.log(inputValue);

    if (inputValue !== secretNumber) {
      if (score > 0) {
        setMessage(inputValue > secretNumber ? "📈 Too high!" : "📉 Too low!");
        setScore((prev) => prev - 1);
      } else if (score === 0) {
        setMessage("💥 You lost the game!");
        setScore("20");
      }
    }

    if (Number(inputValue) <= 0 || Number(inputValue) > 20) {
      setMessage("⛔️ Incorrect!");
      setScore((prev) => prev + 1);
    } else if (inputValue === secretNumber) {
      setMessage("🎉 Correct Number!");
      setStatus(true);
      setHighscore(score);
      setNum(secretNumber);
    }
  };

  const againHandler = () => {
    setSecretNumber(Math.trunc(Math.random() * 20) + 1);
    setNum("?");
    setScore("20");
    setMessage("Start guessing...");
    setInputValue("");
    setStatus(false);

    if (score > highscore) {
      setHighscore(score);
    }
  };

  return (
    <main className={`${status ? "correct" : ""}`}>
      <button className="btn again" onClick={againHandler}>
        Again!
      </button>
      <div className={`number ${status ? "correctNum" : ""}`}>{num}</div>
      <section className="left">
        <input
          type="number"
          className="guess"
          onChange={inputHandler}
          value={inputValue}
          pattern="[0-9]"
        />
        <button className="btn check" onClick={checkHandler}>
          Check!
        </button>
      </section>

      <section className="right">
        <p className="message">{message}</p>
        <p className="label-score">
          💯 Score: <span className="score">{score}</span>
        </p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">{highscore}</span>
        </p>
      </section>
    </main>
  );
};

export default Main;
