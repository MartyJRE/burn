import React, { useState } from 'react';
import './App.css';

const averageMonthlySalary = 95_376;
const monthInSeconds = 2_592_000;
const averageSecondSalary = averageMonthlySalary / monthInSeconds;

// create a timer, that ticks up every second
// create a selector of number of developers that starts at 1
// display the amount of money burned by the developers
// create a button that resets the timer back to 0
function BurnClock() {
  const [developers, setDevelopers] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [moneyBurned, setMoneyBurned] = useState(0);

  // every second, add the amount of money burned by the developers to the total
  // amount of money burned
  setTimeout(() => {
    setSeconds(seconds + 1);
    setMoneyBurned(seconds * developers * averageSecondSalary);
  }, 1000);

  return (
    <div>
      <h1>Money Burned: CZK {moneyBurned.toFixed(2)}</h1>
      <h1>Seconds of gitlab outage: {seconds}</h1>
      <div><p>Number of developers:</p>
      <input
        type="number"
        defaultValue="1"
        onChange={(e) => setDevelopers(parseInt(e.target.value))}
      />
      </div>
    </div>
  );

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🔥</h1>
        <BurnClock />
      </header>
    </div>
  );
}

export default App;
