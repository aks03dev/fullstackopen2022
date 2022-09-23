import { useState } from "react";
import Button from "./components/Button";
let arr = new Array(7).fill(0);
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [maxInd, setMaxInd] = useState(-1);
  const nextAnecdoteHandler = () => {
    let index = selected;
    while (index === selected) {
      index = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(index);
  };
  const vote = () => {
    arr[selected] += 1;
    let ind = -1;
    let maxVal = 0;
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] > maxVal) {
        maxVal = arr[i];
        ind = i;
      }
    }
    setMaxInd(ind);
  };
  console.log(arr, maxInd);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button text="vote" handler={vote} />
      <Button text="next anecdote" handler={nextAnecdoteHandler} />
      <h1>Anecdote with the most votes</h1>
      <p>{maxInd !== -1 ? anecdotes[maxInd] : "No votes till now"}</p>
    </div>
  );
};

export default App;
