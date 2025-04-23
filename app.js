//Excercise 1
const foods=[];
console.log('Exercise 1 result:', foods);

//Excercise 2
foods.push('pizza');
foods.push("cheeseburger");
console.log('Exercise 2 result:', foods);

//Excercise 3
foods.unshift('taco');
console.log('Exercise 3 result:', foods);

//Excercise 4
let favFood = foods[1];
console.log('Exercise 4 result:', favFood);

//Excercise 5
foods.splice(2,0,'tofu');
console.log('Exercise 5 result:', foods);

//Excercise 6
foods.splice(1,1,'sushi','cupcake')
console.log('Exercise 6 result:', foods);

//Excercise 7
let yummy = foods.slice(1,3);
console.log('Exercise 7 result:', yummy);

//Excercise 8

let soyIdx = foods.indexOf("tofu");
console.log('Exercise 8 result:', soyIdx);

//Excercise 9
let allFoods = foods.join("->");
console.log('Exercise 9 result:', allFoods);

//Excercise 10
let hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);