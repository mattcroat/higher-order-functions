const numbers = [1, 2, 3, 4, 5];
// Create a number that is the sum of all the numbers in the array
const sum = numbers.reduce((sum, number) => {
  sum += number;
  return sum;
}, 0);

console.log(sum);

const fruits = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig'
];
// Create an object with the fruit as a key and the number of occurences of that fruit as a value
const fruitStock = fruits.reduce((fruitStock, fruit) => {
  // check if the current fruit is a property in fruitStock
  if (fruitStock.hasOwnProperty(fruit)) {
    // increment the value at the given fruit property in fruitStock
    fruitStock[fruit]++;
  } else {
    // add the property to fruitStock and set the value to 1
    fruitStock[fruit] = 1;
  }
  return fruitStock;
}, {});

console.log(fruitStock);

/*
const fruitStock = {
  banana: 1,
  cherry: 1,
  orange: 1,
  apple: 1
}
*/

const prices = [29.76, 41.85, 46.5];
// Create a number that is the average price of all the prices in the array
// HINT: you will need to check the index to determine if you should return the sum or the average
const priceSum = prices.reduce((priceSum, price) => {
  return priceSum + price;
}, 0);

console.log(priceSum / prices.length);

// const averagePrice = prices.reduce((average, price, index, array) => {
//   return average + price / array.length;
// }, 0);

// console.log(averagePrice);

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
const shortDays = days.reduce((shortDays, day) => {
  const firstThree = day.substring(0, 3);
  shortDays.push(firstThree);
  return shortDays;
}, []);

console.log(shortDays);

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present'
];
// create a new array with only the words with a length longer than 6
const longWords = words.reduce((longWords, word) => {
  if (word.length > 6) {
    longWords.push(word);
  }
  return longWords;
}, []);

console.log(longWords);

const people = [
  {
    id: 1,
    first_name: 'CJ',
    last_name: 'R.'
  },
  {
    id: 2,
    first_name: 'Brendan',
    last_name: 'Eich'
  },
  {
    id: 3,
    first_name: 'Kyle',
    last_name: 'Simpson'
  },
  {
    id: 4,
    first_name: 'Douglas',
    last_name: 'Crockford'
  }
];
// Create an object where the keys are the id and the values are the people
const peopleById = people.reduce((peopleById, person) => {
  // add a property on peopleById, where the key is person.id and the value is person
  peopleById[person.id] = person;
  return peopleById;
}, {});

console.log(peopleById);

/*
const peopleById = {
  1: { ... },
  2: { ... }
}
*/

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
// Create an object where the keys are the size and the values are an array of all animals that size
const animalsBySize = animals.reduce((animalsBySize, animal) => {
  // does animalsBySize have a property that is the current animal size
  if (!animalsBySize.hasOwnProperty(animal.size)) {
    // if not set the size property on animalsBySize to be an empty array
    animalsBySize[animal.size] = [];
  }
  // push animal into array in animalsBySize at the given animal size
  animalsBySize[animal.size].push(animal);
  return animalsBySize;
}, {});

console.log(animalsBySize);

/*
const animalsBySize = {
  small: [{ ... }, { ... }],
  medium: [{ ... }],
  big: [{ ... }]
}
*/
