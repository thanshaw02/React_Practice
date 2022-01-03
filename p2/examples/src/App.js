
function App() {
  return (
    <div>
      <p>Hello world!</p>
    </div>
  );
}

export default App;

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
