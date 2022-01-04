import React, { useState } from 'react'
import Person from './component/Person'
import Title from './component/Title'
import SearchResult from './component/SearchResult'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '000-867-5309' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // Template string for attempting to add a duplicate name to the phonebook
  const template = `${newName} is already added to the phonebook.`

  // Function that determines if the new name is already in the phonebook
  // Passing in the new name and creating a new array using '.filter()', if the new name === person.name
  //  then the name is already in the phonebook
  const checkIfDuplicate = (name, number) => persons.filter(
    person => name === person.name || number === person.number
  )

  const addNewPerson = (event) => {
    event.preventDefault()
    if(checkIfDuplicate(newName, newNumber).length > 0) {
      alert(template)
      setNewName('')
      setNewNumber('')
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  // This sort of works right now, but only if the name matches FULLY
  // And only once the user submits their search by pressing the 'enter' key
  const filterByName = (event) => {
    event.preventDefault()
    const filteredSearch = persons.filter(person => person.name === search)
    setSearchResults(filteredSearch)
  }

  // Handles changes made to the name and number input fields
  // Also handles changes made to the search input field
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleSearch = (event) => setSearch(event.target.value)

  return (
    <div>
      <Title text={'Search Phonebook'} />
      <form onSubmit={filterByName}>
        Filter by name:
        <input 
          value={search}
          onChange={handleSearch}
        />
      </form>
      <SearchResult result={searchResults} search={search} />
      <Title text={'Add Entry'} />
      <form onSubmit={addNewPerson}>
        <div>
          Name: 
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          Phone #:
          <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <Title text={'Numbers'} />
      {persons.map(person => (
        <Person key={person.name} entry={person} />
      ))}
    </div>
  )
}

export default App