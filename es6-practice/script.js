//Problem 1
const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "Fluffy"
        } else {
            name = "Spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


//Problem 2 

//task 1 
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}

//task 2
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person) => person.friendly)
}

//task 3
 const doMathSum = (a, b) => a + b
console.log(doMathSum(4, 5))

const produceProduct = (a, b) =>  a * b
console.log(produceProduct(2, 6))



//task 4 

const printString = (firstName, lastName, age) => {
    if(firstName === ``) {
        firstName = `Jane`
    }

    if(lastName === ``) {
        lastName = `Doe`
    }
    if(age === undefined) {
        age = 100
    }
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
}
console.log(printString(`Joseph`, `White`, 20))


//task 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter( animal => animal.type === "pig" )
 }

 console.log(filterForDogs(animals))




 //final

  function message(location, name) {
    return `Hi ${name}
    
Welcome to ${location}
    
I hope you enjoy your stay! Please ask the President of ${location} if you need anything.`
 }

 console.log(message(`Hawaii`, `Joseph`))