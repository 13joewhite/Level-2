//  //Problem 1
 const numbers = [2, 4, 6, 8, 32, 100, 5]

 const greaterThanFive = numbers.filter(function(number){
	return number >= 5;
})

 console.log(greaterThanFive)


//Problem 2
const nums = [1, 2, 3, 4, 5, 6]

const evensOnly = nums.filter(function(num){
    if(num % 2 === 0) {
        return num
    }
})

console.log(evensOnly)


//Problem 4
const things = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveOrFewer = things.filter(function(thing){
    if(thing.length <= 5) {
        return thing
    }
})

console.log(fiveOrFewer)


// Problem 5
const clubMembers = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const allowedIn = clubMembers.filter(function(clubMember){
    if(clubMember.member === true) {
    return clubMember
    }
})

console.log(allowedIn)


//Problem 5
const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 18 },
    { name: "Bob Ziroll", age: 100 }
]


const canSeeMovie = people.filter(function(people) {
    if(people.age >= 18) {
        return people
    }
})

console.log(canSeeMovie)