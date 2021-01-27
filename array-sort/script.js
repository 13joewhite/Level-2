//Problem 1
const numbers = [1, 3, 5, 55, 90, 20, 2]

numbers.sort(function(a, b){
    return a - b // The function is 
})

console.log(numbers)


//Problem 2
const numbers2 = [1, 3, 5, 55, 90, 20, 2]

numbers2.sort(function(a, b){
    return b - a
})

console.log(numbers2)


//Problem 3
const shortestLongestString = ["dog", "wolf", "by", "family", "eaten"]

shortestLongestString.sort(function(a, b){
    return b.length - a.length
})

console.log(shortestLongestString)



//Problem 4
const alphabetical = ["dog", "wolf", "by", "family", "eaten"]

alphabetical.sort()

console.log(alphabetical)


//Problem 5
const age = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]


age.sort(function(a, b) {
    return a.age - b.age
})

console.log(age)