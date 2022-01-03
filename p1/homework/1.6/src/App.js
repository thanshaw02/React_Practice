import React, { useState } from 'react'

// Displays each row in the statistics table
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

// Creates the table of data based off of votes made
// If no votes have been made then a messege will be given to the user
const Stats = ({ good, neutral, bad }) => {
  const totalScores = good + neutral + bad

  if(totalScores === 0) {
    return (
      <div>
        <p>No feedback given.</p>
      </div>
    )
  }

  const average = (totalScores === 0) ? 0 : parseFloat(((good - bad) / totalScores)).toFixed(2)
  const positiveScores = (totalScores === 0) ? 0 : parseFloat((good / totalScores) * 100).toFixed(2)

  return (
    <table>
      <tbody>
      <StatisticLine text="'Good' votes:" value={good} />
      <StatisticLine text="'Neutral' votes:" value={neutral} />
      <StatisticLine text="'Bad' votes:" value={bad} />
      <StatisticLine text="All votes:" value={totalScores} />
      <StatisticLine text="Voting average:" value={average} />
      <StatisticLine text="Percentage of 'Good' votes:" value={positiveScores + ' %'} />
      </tbody>
    </table>
  )
}

// Hanldes displaying the page title and the 'Statistics' title
const Display = props => (
  <div>
    <h1>{props.text}</h1>
  </div>
)

// Using the empty brackets here to keep all of the buttons on the same line
const Button = ({ handleClick, text }) => (
  <>
    <button onClick={handleClick}>{text}</button>
  </>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  const resetVotes = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
  }

  return (
    <div>
      <Display text='Give Us Your Feedback!' />
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <div>
        <Button handleClick={resetVotes} text='Reset Votes' />
      </div>
      <Display text='Statistics' />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App