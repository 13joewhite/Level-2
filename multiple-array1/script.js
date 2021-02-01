const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


const olderThan18 = peopleArray.filter(function(people) {
    if(people.age >= 18) {
        return peopleArray
    }
})

const alphabet = olderThan18.sort(function(a, b){
    if(a.lastName < b.lastName){
        return - 1
    }
    if(a.lastName > b.lastName) {
        return + 1
    }
})

console.log(olderThan18)

const li = alphabet.map(function(alphabet) {
    return `<li>${alphabet.firstName} ${alphabet.lastName} is ${alphabet.age}</li>`
})

console.log(li)
