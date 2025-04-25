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

//Excercise 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds =[];

for(const numb of nums){
    if(numb%2!=0){
        odds.push(numb);
    }
}
console.log('Exercise 11 result:', odds);

//Excercise 12
const fizz=[];
const buzz=[];
const fizzbuzz=[];

for(const number of nums){
    if(number%5 ===0 && number%3===0){
        fizzbuzz.push(number);
    }
    if(number%5 ===0){
        buzz.push(number);
    }
    if(number%3===0){
        fizz.push(number)
    }
}
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

//Excercise 13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
let numList = numArrays[numArrays.length-1];
console.log('Exercise 13 result:', numList);

//Excercise 14

let num = numArrays[2][1];
console.log('Exercise 14 result:', num);

//Excercise 15
let total=0;

for(j=0;j<numArrays.length;j++){
    for(k=0;k<numArrays[j].length;k++){
       total= total+numArrays[j][k];
    }
}
console.log('Exercise 15 result:\n', total);