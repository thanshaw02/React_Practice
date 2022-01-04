import React from 'react'

const Header = ({ title }) => <h2>{title}</h2>
  
const Part = ({ part }) => {
	const { name, exercises } = part
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}
  
const Content = ({ parts }) => (
  <div>
		{parts.map(part => (
			<Part key={part.id} part={part} />
		))}
  </div>
)

const Total = ({ parts }) => {
	// Remember, the first argument in this case is what the initial value will be (0 in this case)
	const totalExcercises = parts.reduce((sum, parts) => (parts.exercises + sum), 0)
  return (
    <div>
      <p>
				<b>Total of {totalExcercises} exercises</b>
			</p>
    </div>
  )
}

// Root component for all other components
const Courses = ({ courses }) => (
	<div>
		<h1>Web Development Curriculum</h1>
		{courses.map(course => (
			<div key={course.id}>
				<Header title={course.name} />
				<Content parts={course.parts} />
				<Total parts={course.parts} />
			</div>
		))}
	</div>
)

export default Courses