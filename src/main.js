// Write your code here

//1st 
let arrayOne = [" "];
console.log (arrayOne);
arrayOne.push("added word");
console.log (arrayOne);

//2nd
//using the shift method;

//3rd
//slice makes changes in array, but doesnt modify the original one;
//splice also makes changes in array, but modifies the original;

//4th
//we can find the length of an array using the .length property;

//5th
//with .includes property;

//6th
// .sort converts array elements to strings and them in a lexicographic order

//7th
let arr = [1, 2, 3];
let copy = [...arr];
console.log(copy);

//8th
// using the .reverse method

//9th
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);

//10th
//we can write elements number in a square brackets;

//ass1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log (arr[3]);
arr[5] = 15;
console.log(arr)
arr.push (99);
console.log(arr);
arr.shift();
console.log(arr);

//ass2
let arr = ["pineapple", "apple", "pear", "watermelon"];
arr.push("orange")
console.log(arr)

const x = arr.pop()
console.log (arr)
console.log (x);

arr.unshift("strawberry");
console.log (arr);

const y = arr[0];
console.log (y);

//ass3
let arr = ["green", "red", "brown", "blue", "purple"];
for (let i=0; i<arr.length; i++) {
    console.log (arr[i]);
}

//ass4
let arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 2); 
console.log (arr);

arr.splice(1, 0, 7, 8)
console.log (arr);

let lastThree = arr.slice(-3); 
console.log(arr); 
console.log(lastThree);

//ass5
let arr = ["Anri", "Jaba", "Saba", "Tornike", "Giorgi"];
arr.sort(); 
console.log (arr);

// arr.reverse();
// console.log (arr);

arr.sort((a, b) => b.localeCompare(a));
console.log(arr);

//ass6
let arr = [1, 4, 12, 17, 20];
console.log(arr.indexOf(12));

console.log(arr.includes(12));

console.log(arr.findIndex(num => num > 5))

let indexForLoop = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 12) {
    indexForLoop = i;
    break;  
  }
}

console.log (indexForLoop);

//ass10
let arr = [5, 2, 8, 1, 4];
arr.reverse();
console.log(arr); 

arr.sort((a, b) => b - a);
console.log(arr);

//ass8
let arr = ["Strawberry", "Juice", "Soda", "Bottle", "Taste"];

let [first, second] = arr;
console.log (first);
console.log(second);

[second, first] = [first, second];
console.log (first);
console.log(second);

//ass9
let arr = [9, 7, 22, 23];
let num = [12, 17, 0, 11];

let newArr = arr.concat(num);
console.log(newArr)

let arrNew = [...arr, ...num];
console.log (arrNew);

//ass7
let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let arr = grid[1][2]; 
console.log(arr);  

grid[0][1] = 10; 
console.log(grid);

