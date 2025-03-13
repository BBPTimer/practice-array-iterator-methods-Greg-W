//Task 1
let favoriteCities = ["Kansas City", "New Orleans", "Folly Beach", "Miami", "Tampa"];
favoriteCities.forEach(city => console.log(city.toUpperCase()));
/*
KANSAS CITY
NEW ORLEANS
FOLLY BEACH
MIAMI
TAMPA
*/

//Task 2
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(x => x * x);
console.log(squares); //[ 1, 4, 9, 16, 25 ]

//Task 3
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(x => x > 80);
console.log(highScores); //[ 85, 90, 100 ]

//Task 4
let favoriteFood = ["Parfait", "Pizza", "Ravioli", "Stir Fry", "Smoothie"];
console.log(favoriteFood.find(food => food.length > 4)); //Parfait
console.log(favoriteFood.findIndex(food => food.length > 4)); //0