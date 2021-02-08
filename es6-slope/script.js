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





//Problem 3 
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence(obj){
    let {location, duration} = obj
    return `We're going to have a good time in ${location} for ${duration}`
  }
  console.log(parseSentence(vacation))
  




let testItems = [{name: 'hello'}, 'cabbage', 'greman']
let [obj1, str1, str2] = testItems


//Problem 4 1234567890
function returnFirst([a,b,c]){
    console.log(a,b,c)
    return a
}

console.log(returnFirst(['potato', 'cabbage', 'german']))
// const food = {
//     name: 'Artichoke',
//     price: 4,
//     color: 'Green'
// }

// let {name, price, color} = food




//Problem 5 1234567890
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let [firstFav, secondFav, thirdFav, fourthFav] = arr
    return `My top three favorite activites are, ${firstFav}, ${secondFav}, and ${thirdFav} and ${fourthFav}!`
}

console.log(returnFavorites(favoriteActivities))






//Problem 6 123456789
// function combineAnimals(arr1, arr2, arr3) {  
//     let newArr = [...arr1, ...arr2, ...arr3]
//     console.log(newArr)
//     return newArr
// }
function combineAnimals(...arr) {  
    let newArr = []
    for(let i=0; i<arr.length; i++){
        newArr.push(...arr[i])
    }
    console.log(newArr)
    return newArr
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
const chickens = ['chicken', 'chicken', 'chicken']

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, chickens); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]



//Problem 7 1234567890
function product(arr) {  
    console.log(arr.reduce((acc, number) => acc * number, 1))
    return arr.reduce((acc, number) => acc * number, 1)
  }

  product([1, 2, 3, 8])




  //problem 8 1234567890
  function unshift(array, ...obj) {  
        // 2 arrays 1 with the array, and 1 with the objects
        console.log([...array, ...obj])
}

const numbrs = [1,2,3,4]
const joe = {
    name: 'joe'
}
const mike = {
    name: 'mike'
}
const steve = {
    name: 'steve'
}

unshift(numbrs, mike, steve, joe)

// //Problem 9 123456789
function populatePeople(names){
    return names.map((name) => {
        name = name.split(" ");
        let [firstName, lastName] = name
        return {
            firstName,
            lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

let employee = {
    name: 'Michael Han',
    job: 'Developer',
    pay: 50000,
    kids: [
        {
            name: 'Sekai'
        },
        {
            name: 'Bob'
        }
    ]
}

