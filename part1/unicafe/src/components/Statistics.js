import React from "react";
import StatisticLine from "./StatisticsLine";
const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }

  let total = good + bad + neutral;
  let average = Math.round((good - bad) / total) / 100;
  let positivePercentage = Math.round((good / total) * 100) / 10;
  positivePercentage = positivePercentage + "%";
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good}></StatisticLine>
          <StatisticLine text="Neutral" value={neutral}></StatisticLine>
          <StatisticLine text="Bad" value={bad}></StatisticLine>
          <StatisticLine text="Total" value={total}></StatisticLine>
          <StatisticLine text="Average" value={average}></StatisticLine>
          <StatisticLine
            text="Positive"
            value={positivePercentage}
          ></StatisticLine>
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
