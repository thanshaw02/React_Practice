import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}

const Footer = () => {
  const auther = 'Tylor Hanshaw'
  return (
    <div>
      Greetings app created by <a href='https://github.com/thanshaw02'>{auther}</a>
    </div>
  )
}

const App = () => {
  const name = "Beryl"
  const age = 23

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Tylor" age="25" />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App