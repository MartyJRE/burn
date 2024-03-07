import React, { useEffect, useState } from 'react';
import './App.css';

const averageMonthlySalary = 95_376;
const monthInSeconds = 2_592_000;
const averageSecondSalary = averageMonthlySalary / monthInSeconds;

function formatTime(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function BurnClock() {
  const [developers, setDevelopers] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [moneyBurned, setMoneyBurned] = useState(0);

  setTimeout(() => {
    setSeconds(seconds + 1);
    setMoneyBurned(seconds * developers * averageSecondSalary);
  }, 1000);

  return (
    <div>
      <h1>Money Burned: CZK {moneyBurned.toFixed(2)}</h1>
      <h1>Gitlab Outage time: {formatTime(seconds)}</h1>
      <div><p>Number of developers:</p>
      <input
        type="number"
        defaultValue="1"
        onChange={(e) => setDevelopers(parseInt(e.target.value ?? 1))}
        min="1"
        required
      />
      </div>
    </div>
  );
}

function App() {  const [emojis, setEmojis] = useState<Array<{ top: number, left: number }>>([]);

  useEffect(() => {
    const initialEmojis = Array.from({ length: Math.floor(Math.random() * 50) + 50 }, () => ({
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
    }));
    setEmojis(initialEmojis);

  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>🔥</h1>
        <BurnClock/>
        {emojis.map((emoji, index) => (
          <span
            key={index}
            className="money-emoji"
            role="img"
            aria-label="money"
            style={{ position: 'absolute', top: emoji.top, left: emoji.left }}
          >
            💸
          </span>
        ))}
      </header>
    </div>
  );
}

export default App;
