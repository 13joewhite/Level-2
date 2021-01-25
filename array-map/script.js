//Problem 1
const array1 = [11, 54, 100]

const numbersDoubled = array1.map( (num) => num * 2)

console.log(numbersDoubled)


//Problem 2
const array2 = [12, 78, 523, 22]

const numberToString = array2.map((num) => num.toString())

console.log(numberToString)



//Problem 3 
const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const gramaticallyCorrect = names.map(names => names.charAt(0).toUpperCase() + names.substr(1).toLowerCase())

console.log(gramaticallyCorrect)


//Problem 4
const nameAge = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const justNames = nameAge.map((nameAge) => nameAge.name)

console.log(justNames)


//Problem 5
const ofAge = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const canSeeMatrix = ofAge.map((ofAge) => {
    if(ofAge.age >= 18) {
        return `${ofAge.name} is old enough to see The Matrix!`
    } else {
        return `${ofAge.name} is not old enough to see the Matrix! Try again in ${18 - ofAge.age}`
    }
})

console.log(canSeeMatrix)


//Problem 6
const arr6 = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]


const nameH1AgeH2 = arr6.map(function(arr6) {
    return `<h1>${arr6.name}</h1><h2>${arr6.age}</h2>`
})

console.log(nameH1AgeH2)

