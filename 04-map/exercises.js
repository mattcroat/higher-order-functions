const numbers = [13, 42, 1337];
// Create a new array with the numbers doubled
const doubledNumbers = numbers.map(number => {
  return number * 2;
});

console.log(doubledNumbers);

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
// create a new array with the first 3 letters of each day
const shortDays = days.map(day => {
  return day.substring(0, 3);
});

console.log(shortDays);

const people = [
  {
    first_name: 'CJ',
    last_name: 'R.'
  },
  {
    first_name: 'Brendan',
    last_name: 'Eich'
  },
  {
    first_name: 'Kyle',
    last_name: 'Simpson'
  },
  {
    first_name: 'Douglas',
    last_name: 'Crockford'
  }
];
// Create a new array with the string full name of each person
const fullNames = people.map(person => {
  return `${person.first_name} ${person.last_name}`;
});

console.log(fullNames);

const animals = [
  {
    name: 'cat',
    size: 'small'
  },
  {
    name: 'dog',
    size: 'small'
  },
  {
    name: 'lion',
    size: 'medium'
  },
  {
    name: 'elephant',
    size: 'big'
  }
];
// Create a new array with just the names of the animals
// const animalNames = animals.map(animal => {
//   return animal.name;
// });

const animalNames = animals.map(animal => animal.name);

console.log(animalNames);

const theNumbers = [4, 8, 15, 16, 23, 42];
// create a new array of objects with the properties value and index
// const numbersProperty = theNumbers.map((value, index) => {
//   return {
//     value,
//     index
//   };
// });

const numbersProperty = theNumbers.map((value, index) => ({ value, index }));

console.log(numbersProperty);

const starter = [2, 5, 10];
// Create a new array with each value multiplied by the next value
// The last value should be multiplied by the first value
// e.g. [2*5, 5*10, 10*2] == [10, 50, 20]
const starterMultiplied = starter.map((number, index, array) => {
  return number * array[index + 1];
});

console.log(starterMultiplied);
