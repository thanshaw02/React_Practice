import React, { useState } from 'react';

const Display = props => <div>{props.value}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [value, setValues] = useState(10)

  // A function that returns a function
  const setValue = (newValue) => () => setValues(newValue)

  // const hello = (who) => () => console.log('Hello', who)

  return (
    <div>
      <Display value={value} />
      <Button handleClick={setValue(10000)} text='set to 10000' />
      <Button handleClick={setValue(0)} text='set to 0' />
      <Button handleClick={setValue(value + 1)} text='increment' />
    </div>
  )
}

export default App;

/* Used for working with Hooks! */
/*
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// This React component uses what's called 'conditional rendering'
// This means the History compnent renders different things depending on the state of the application!
const History = ({ allClicks }) => {
  if(allClicks.length === 0) {
    return (
      <div>
        <p>The app is used by pressing the bttons, try it out!</p>
      </div>
    )
  }
  return (
    <div>
      <p>Your button pressed history: </p>
      <p>{allClicks.join(', ')}</p>
    </div>
  )
}

const App =() => {

  // Here I'm using the 'destructuring' syntax to assign something to both 'clicks' and 'setClicks'
  // const [clicks, setClicks] = useState({
  //   left: 0, right: 0
  // })

  // I am using the 'object spread' syntax here to shorten my code
  // The '...clicks' bit makes a copy of the originial array but in both cases I increment either the left or right
  // const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})
  // const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
 
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  // Added by Tylor Hanshaw
  const resetAllClicks = () => {
    setAll([])
    setRight(0)
    // debugger // This will pause the app when this line of code is hit in the browser
    setLeft(0)
  }

  return (
    <div>
      <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      </div>
      <div>
        <Button handleClick={resetAllClicks} text='reset' />
      </div>
      <History allClicks={allClicks} />
    </div>
  )
}
*/

/* Used for re-rendering the page and lifting up 'states' */
/*
const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text='plus' />
      <Button onClick={decreaseByOne} text='minus' />
      <Button onClick={setToZero} text='zero' />
    </div>
  )
}
*/

/* Used for re-rendering the page and having a counter */
/*
const App = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}
*/

/* First part of section 1c DESTRUCTURING */
/*
// Here I am 'Destructuring' even further by doing it in the property spot
const Hello = ({ name, age }) => {

  // Here I am 'Destructuring' the props object into two variables (name and age)
  // const { name, age } = props

  // This function uses the property passed to this React component to guess the year born
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old!
      </p>
      <p>Were you born in {bornYear()}?</p>
    </div>
  )
}

const App = () => {
  const name = 'Beryl'
  const age = 24

  return (
    <div>
    <h1>Greetings!</h1>
      <Hello name={name} age={age} />
      <Hello name='Tylor' age='26' />
    </div>
  )
}
*/