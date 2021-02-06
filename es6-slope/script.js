//Problem 1
function collectAnimals(...animals) {  
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", `horse`))

// Rest and Spread ... 

var original = [1,2,3,4];
var test = original.filter(ele => ele)
var copy = [...original]
console.log(copy)


//Problem 2 
function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log(combineFruit(['apple', 'pear'], ['cake', 'pie'], ['carrot'])) //These needed to be entered as fillers for the parameters





//Problem 3 1234567890
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence(){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  





// //Problem 4 1234567890
// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }





// //Problem 5 1234567890
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     /*your code here*/
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav
// }

// returnFavorites(favoriteActivities)






// //Problem 6 123456789
// function combineAnimals() {  
 
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// // ["dog", "cat", "mouse", "jackolope", "platypus"]



// //Problem 7 1234567890
// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }




//   //problem 8 1234567890
//   function unshift(array, a, b, c, d, e) {  
//   return [a, b, c, d, e].concat(array);
// }


// //Problem 9 123456789
// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName,
//             lastName
//         }
//     })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
// //[
// //  {firstName: "Frank", lastName: "Peterson"},
// //  {firstName: "Suzy", lastName: "Degual"},
// //  {firstName: "Liza", lastName: "Jones"},
// //]

