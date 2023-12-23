// task1
const task1 = document.querySelector(".task1");

const pet = {
  name: "Бобик",
  type: "пес",
  sound: "гав",
  say: function (phrase) {
    return `${this.type} ${this.name} говорит ${
      phrase === "" ? this.sound : phrase
    }`;
  },
};

// console.log(pet.name);
// console.log(pet.say("мяу"));
task1.innerHTML += `Задача 1: pet.say("мяу") = ${pet.say("мяу")}`;
console.log(`Задача 1: pet.say("мяу") = ${pet.say("мяу")}`);

// task2
const task2 = document.querySelector(".task2");
const fruits = {
  potato: "овощи",
  carrot: "овощи",
  banana: "фрукты",
  orange: "фрукты",
  apple: "фрукты",
  strawberry: "ягоды",
  tomato: "овощи",
  melon: "фрукты",
  lemon: "фрукты",
};
let sumVegetables = {};
for (let fruit in fruits) {
  if (sumVegetables[fruits[fruit]]) {
    sumVegetables[fruits[fruit]]++;
  } else sumVegetables[fruits[fruit]] = 1;
}
task2.innerHTML += `Задача 2: ${JSON.stringify(sumVegetables)}`;
console.log("Задача 2: ", sumVegetables);

// task3

const task3 = document.querySelector(".task3");
const task3_1 = document.querySelector(".task3_1");
const cars = {
  lada: {
    color: "red",
    country: "Russia",
    year: 2000,
  },
  opel: {
    color: "black",
    country: "Germany",
    year: 2010,
  },
  toyota: {
    color: "silver",
    country: "Japan",
    year: 2011,
  },
  honda: {
    color: "white",
    country: "Japan",
    year: 2020,
  },
  nissan: {
    color: "grey",
    country: "Japan",
    year: 2019,
  },
  volkswagen: {
    color: "blue",
    country: "German",
    year: 2005,
  },
  BMV: {
    color: "red",
    country: "German",
    year: 2006,
  },
  audi: {
    color: "blue",
    country: "German",
    year: 2007,
  },
  citroen: {
    color: "lightblue",
    country: "France",
    year: 2009,
  },
  renault: {
    color: "yellow",
    country: "France",
    year: 2013,
  },
};
let sortedCars = [];

for (let car in cars) {
  sortedCars.push([car, cars[car]]);
}
sortedCars.sort(function (a, b) {
  return a[1].year - b[1].year;
});

console.log("Задача 3:");
console.log("Самые старые автомобили:");
for (let i = 0; i < 3; i++) {
  console.log(sortedCars[i][0], sortedCars[i][1].year, "года выпуска");
  task3.innerHTML += `${sortedCars[i][0]} ${sortedCars[i][1].year} года выпуска;
  `;
}

console.log("Самые молодые автомобили:");
for (let i = sortedCars.length - 3; i < sortedCars.length; i++) {
  console.log(sortedCars[i][0], sortedCars[i][1].year, "года выпуска");
  task3_1.innerHTML += `${sortedCars[i][0]} ${sortedCars[i][1].year} года выпуска;
  `;
}
// console.log(sortedCars);
