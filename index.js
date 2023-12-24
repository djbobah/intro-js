function getRandom(max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}

// task1
const task1 = document.querySelector(".task1");

let nums = [5, 2, 4, 6, 7];
let squares = [];
nums[99] = 3;

nums.map((num) => {
  if (num !== undefined) {
    squares.push((num *= num));
  }
});

// console.log(nums);
// console.log(squares);

task1.innerHTML += ` массив nums = [5, 2, 4, 6, 7]. Ответ [${squares}]`;
console.log(`Задача 1:  массив nums = [5, 2, 4, 6, 7]. Ответ [${squares}]`);

// task2
const task2 = document.querySelector(".task2");
const list = [
  { product: "Apple", price: 25 },
  { product: "Cherry", price: 32 },
  { product: "Strawberry", price: 45 },
  { product: "Pineapple", price: 45 },
];

let maxPrice = 0,
  maxIdx = 0;
for (let i = 0; i < list.length; i++) {
  if (list[i].price > maxPrice) {
    maxPrice = list[i].price;
    maxIdx = i;
  }
}
console.log(list[maxIdx]);

task2.innerHTML += ` "${list[maxIdx].product}"`;
console.log(
  `Задача 2: ${JSON.stringify(list)}.  Ответ: "${list[maxIdx].product}"`
);

// task3

// const task3_1 = document.querySelector(".task3_1");
const products = [
  "Апельсины",
  "Мандарины",
  "Яблоки",
  "Груши",
  "Картошка",
  "Помидоры",
  "Огурцы",
  "Лук",
  "Сметана",
  "Майонез",
];

let basket = [];

for (let i = 0; i <= getRandom(30, 10); i++) {
  const currentProduct = getRandom(products.length);
  let present = false;

  for (let j = 0; j < basket.length; j++) {
    if (basket[j].product === products[currentProduct]) {
      basket[j].cnt += 1;
      present = true;
    }
  }
  if (!present) {
    basket.push({
      product: products[currentProduct],
      price: getRandom(200, 50),
      cnt: 1,
    });
  }
}

const sum = basket.reduce((acc, item) => {
  acc += item.price * item.cnt;
  return acc;
}, 0);

console.log("Задача 3:", "Корзина", basket, "Сумма покупок:", sum);

const task3 = document.querySelector(".task3");
task3.style.borderRadius = "10px";
task3.style.padding = "10px";
task3.style.fontSize = "14px";
task3.style.lineHeight = "24px";
task3.style.backgroundColor = "black";
task3.style.color = "white";
task3.style.fontFamily = "Sans";

task3.innerHTML += `${JSON.stringify(
  basket
)} <br><br> Сумма покупок: ${sum} р.`;
