// task1
const task1 = document.querySelector(".task1");
let sum = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
}

task1.innerHTML += `Задача 1: Сумма целых чисел от 1 до 1000 = ${sum}`;
console.log("Задача 1:", `Сумма целых чисел от 1 до 1000 = ${sum}`);

// task2
const task2 = document.querySelector(".task2");

const digit = Math.floor(Math.random() * (30 - 1)) + 2;

let factorial = 1;
for (let i = 1; i <= digit; i++) {
  factorial *= i;
}

task2.innerHTML += `Факториал от числа ${digit} = ${factorial}`;
console.log("Задача 2:", `Факториал от числа ${digit} = ${factorial}`);

// task3
const task3 = document.querySelector(".task3");
const age = 10,
  cost = 60000;
let summ = 0,
  summFather = 1200;
countAges = 1;

while (summ < cost) {
  summFather += 1200;
  summ += 1000 + summFather;
  countAges++;
}

task3.innerHTML += `Через ${countAges} лет у Вити появится велосипед`;
console.log("Задача 3:", `Через ${countAges} лет у Вити появится велосипед`);

// task4
const task4 = document.querySelector(".task4");
const words = ["Огород", "Шалаш"];

console.log("Задача 4:");
words.map((word) => {
  let palindrom = true;
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i].toLowerCase() !== word[word.length - 1 - i]) {
      palindrom = false;
    }
  }

  console.log(`Слово "${word}"${palindrom ? "" : " не"} является палиндромом`);
  task4.innerHTML += `Слово "${word}"${
    palindrom ? "" : " не"
  } является палиндромом `;
});

// task5
const task5 = document.querySelector(".task5");
const randomDigit = Math.floor(Math.random() * 101);
let choiceUser = undefined;
// while (choiceUser !== randomDigit) {
choiceUser = Number(prompt("введите число от 0 до 100"));
console.log(choiceUser);
if (choiceUser <= randomDigit - 5 || choiceUser <= randomDigit + 5) {
  console.log("Горячо");
} else if (choiceUser <= randomDigit - 10 || choiceUser <= randomDigit + 10) {
  console.log("Тепло");
} else console.log("Холодно");
// }

task5.innerHTML += ` ${randomDigit}, `;
console.log(randomDigit);

// var random = Math.floor(Math.random() * (max - min + 1)) + min;
// число угадано - программа останавливается и говорит, что пользователь выиграл
// число отличается на 5 пунктов (n-5 <= n <= n+5) - программа говорит "горячо"
// число отличается на 10 пунктов (n-10 <= n <= n+10) - программа говорит "тепло"
// в остальных случаях программа говорит "холодно".
