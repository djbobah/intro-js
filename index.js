// task1
console.log(
  "Задача 1:",
  (5 >= 7 || "javascript" != "java") && !(11 * 3 == 99 && true)
); //true
// выполнение
// (5 >= 7 || "javascript" != "java") && !(11 * 3 == 99 && true);
// (false  ||             true      ) && !(     fasle   && true)
//        true                        && !false
//        true                        &&  true
//                                   true

// task2
const task2 = document.querySelector(".task2");

const age = Math.floor(Math.random() * 100) + 1;

let resultStr = "";

if (age > 59) {
  resultStr = "Вам пора на пенсию";
} else if (age >= 1 && age <= 17) {
  resultStr = "Вам еще рано работать";
} else if (age > 17 && age <= 59) {
  resultStr = "Вам еще работать и работать";
}
task2.innerHTML += `Возраст ${age} - ${resultStr}`;
console.log("Задача 2:", age, resultStr);

// task3
const task3 = document.querySelector(".task3");
const n = Math.floor(Math.random() * 1000 - 1) + 1;
let finalPhrase = "";

if (n > 10 && n < 20) {
  finalPhrase = `На ветке сидели ${n} ворон`;
} else {
  if (n % 10 === 0 || (n % 10 >= 5 && n % 10 <= 9))
    finalPhrase = `На ветке сидело ${n} ворон`;
  else if (n % 10 === 1) finalPhrase = `На ветке сидела ${n} ворона`;
  else if (n % 10 >= 2 || n % 10 <= 4)
    finalPhrase = `На ветке сидели ${n} вороны`;
}
task3.innerHTML += finalPhrase;
console.log("Задача 3:", finalPhrase);

// task4
const task4 = document.querySelector(".task4");
const a = Math.floor(Math.random() * 200 + 1) - 100;
const b = Math.floor(Math.random() * 200 + 1) - 100;
const c = Math.floor(Math.random() * 200 + 1) - 100;
let max,
  min = "";

if (a > b) {
  if (a > c) {
    max = `Наибольшее число ${a}`;
  } else max = `Наибольшее число ${c}`;
  if (b > c) min = `Наименьшее число ${c}`;
  else min = `Наименьшее число ${b}`;
} else {
  if (b > c) max = `Наибольшее число ${b}`;
  else max = `Наибольшее число ${c}`;
  if (a > c) min = `Наименьшее число ${c}`;
  else min = `Наименьшее число ${a}`;
}

task4.innerHTML += `a:${a} b:${b} c:${c} ${max} ${min}`;
console.log("Задача 4:", "a:", a, "b:", b, "c:", c, max, min);

// task5
const task5 = document.querySelector(".task5");
const apple = Math.floor(Math.random() * 11 - 1) + 1;
const orange = Math.floor(Math.random() * 11 - 1) + 1;
const weightApple = 100;
const weightOrange = 150;
let text = "";
if (apple * weightApple > orange * weightOrange) text = "Бери яблоки";
else text = "Бери апельсины";
if (apple * weightApple == 0 && orange * weightOrange == 0)
  text = "Бери уже что нибудь";

task5.innerHTML += `Яблок: ${apple}, Апельсинов:${orange} ${text}`;
console.log("Задача 5:", "Яблок:", apple, "Апельсинов:", orange, text);
