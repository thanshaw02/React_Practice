import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  // This is executed when something is submitted in the form below
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  // This is executed whenever text is changed in the <input /> field
  const handleNoteChanged = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  // If the value of 'showAll' is true then all notes will be displayed
  // Otherwise only the notes with the attribute 'important == true' will be filtered out of the array and displayed
  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all'} notes
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChanged}
        />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App

/*
// Testing out higher-order-functions in JS
const arr = [
  { name: 'Tylor', age: 25 },
  { name: 'Beryl', age: 24 },
  { name: 'Trevor', age: 18 },
  { name: 'Kevin', age: 48 },
  { name: 'Leo', age: 23 },
  { name: 'Sam', age: 23 },
]

const names = arr.map(person => person.name)
const ages = arr.map(person => person.age)
const agesMultiplied = arr.map(person => person.age * 5)
const printedPeople = arr.map(person => 
  'Hello ' + person.name + ', you are ' + person.age + ' years old!'
)

// This uses the reduce higher-order-function to sum up all of the ages
const allAgesReduce = arr.reduce((sum, person) => sum + person.age, 0)

console.log('Name\'s of the people:', names);
console.log('Age\'s of the people:', ages);
console.log('Age\'s of the people multiplied by 5:', agesMultiplied);
console.log('Printing each person out:', printedPeople);
console.log('Sum of all ages using \'.reduce()\':', allAgesReduce);
*/
