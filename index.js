// task1
let name = "Владимир";
console.log("Задание 1:");
console.log(`Привет, ${name}!`);
let task1 = document.querySelector(".task1");
task1.innerHTML += `Привет, ${name}!`;

// task2
console.log("Задание 2:");
const h = 30;
const d = 50;
let S = (h * d) / 2;
let task2 = document.querySelector(".task2");
task2.innerHTML += `Площадь треугольника: ${S}`;
console.log("Площадь треугольника: ", S);

// task3
console.log("Задание 3:");
let n = Math.floor(Math.random() * (67 - 12 + 1) + 12);
let task3 = document.querySelector(".task3");
task3.innerHTML += `Случайное число от 12 до 67 : ${n}`;
console.log("Случайное число от 12 до 67 :", n);

// task4
console.log("Задание 4:");
let n1 = Math.floor(Math.random() * (255 - 1));
let n2 = Math.floor(Math.random() * (255 - 1));
let n3 = Math.floor(Math.random() * (255 - 1));
let n4 = Math.random().toFixed(2);
let task4 = document.querySelector(".task4");
task4.innerHTML += `rgba(${n1},${n2},${n3},${n4})`;
console.log(`rgba(${n1},${n2},${n3},${n4})`);

// task5
console.log("Задание 5:");
let time = Math.floor(Math.random() * (2592000000 - 86400000 + 1) + 86400000);
let days = Math.floor(time / (1000 * 60 * 60 * 24));
let hours = Math.floor((time - days * 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
let minutes = Math.floor(
  (time - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60) / (1000 * 60)
);
let seconds = Math.floor(
  (time -
    days * 1000 * 60 * 60 * 24 -
    hours * 1000 * 60 * 60 -
    minutes * 1000 * 60) /
    1000
);
let milliseconds = Math.floor(
  time -
    days * 1000 * 60 * 60 * 24 -
    hours * 1000 * 60 * 60 -
    minutes * 1000 * 60 -
    seconds * 1000
);
let task5 = document.querySelector(".task5");
task5.innerHTML += `${time}мс - ${days}д ${hours}ч ${minutes}мин ${seconds}сек ${milliseconds}мс`;
console.log(
  `${time}мс - ${days}д ${hours}ч ${minutes}мин ${seconds}сек ${milliseconds}мс`
);
