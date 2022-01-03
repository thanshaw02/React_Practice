import React, { useState } from 'react'

const Titles = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
)
const Display = ({ text, votes, displayType }) => {
  // This is true if the display is for the top half of the page
  if(displayType === '0') {
    return (
      <div>
        <p>{text}</p>
        <p>Has {votes} votes</p>
      </div>
    )
  }
  // This part will only execute if the display is for the highest voted anecdote
  if(votes === 0) {
    return (
      <div>
        <p><i>No votes have been cast...</i></p>
      </div>
    )
  }
  return (
    <div>
      <p>{text}</p>
      <p>Has {votes} votes</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

// Using 3 seperate states here, one for the selected anecdote, one for each anecdote's vote, and 
//   another for the anecdote with the most votes
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  // Here I'm creating a new state that starts with an array of size 7 and is filled with 0's
  const [votes, setVote] = useState(new Uint8Array(7))
  // Here I'm keeping the anecdote with the most votes as a new state
  const [anecdote, setAnecdote] = useState({votes: 0, anecdoteToDisplay: anecdotes[0]})

  // Added by me, Tylor Hanshaw
  const newAnecdote = () => {
    const randomNumber = Math.round(Math.random() * (anecdotes.length - 1))
    setSelected(randomNumber)
    console.log('Random number:', randomNumber)
  }
  const voteForAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
    anecdoteWithMostVotes(copy)
  }
  // This function is a bit messy, not a huge fan of it
  const anecdoteWithMostVotes = (votes) => {
    let largestIndex = { index: 0, value: votes[0] }
    for(let i = 0; i < votes.length; i++) {
      if(votes[i] > largestIndex.value) {
        largestIndex = { index: i, value: votes[i] }
      }
    }
    setAnecdote({votes: largestIndex.value, anecdoteToDisplay: anecdotes[largestIndex.index]})
  }

  return (
    <div>
      <Titles text='Anecdote of the day' />
      <Display text={anecdotes[selected]} votes={votes[selected]} displayType='0' />
      <Button handleClick={newAnecdote} text='Click me!' />
      <Button handleClick={voteForAnecdote} text='Vote' />
      <Titles text='Anecdote with the most votes' />
      <Display text={anecdote.anecdoteToDisplay} votes={anecdote.votes} displayType='1' />
    </div>
  )
}

export default App