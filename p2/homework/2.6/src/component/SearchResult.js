import React from 'react'

const Result = ({ name, number }) => <p>{name} {number}</p>

const SearchResult = ({ result, search }) => {
  if(result.length > 0) {
    return (
			<div>
				{result.map(person => {
					const { name, number } = person
					return <Result key={number} name={name} number={number} />
				})}
      </div>
    )
  }
  return (
    <p><i>No results from your search..</i></p>
  )
}

export default SearchResult
