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
const age = Math.floor(Math.random() * 100) + 1;

let resultStr = "";

if (age > 59) {
  resultStr = "Вам пора на пенсию";
} else if (age >= 1 && age <= 17) {
  resultStr = "Вам еще рано работать";
} else if (age > 17 && age <= 59) {
  resultStr = "Вам еще рано работать";
}
console.log("Задача 2:", age, resultStr);
// let n1 = Math.floor(Math.random() * (255 - 1));
// let n2 = Math.floor(Math.random() * (255 - 1));
// let n3 = Math.floor(Math.random() * (255 - 1));
// let n4 = Math.random().toFixed(2);
// let task4 = document.querySelector(".task4");
// task4.innerHTML += `rgba(${n1},${n2},${n3},${n4})`;
// console.log(`rgba(${n1},${n2},${n3},${n4})`);
