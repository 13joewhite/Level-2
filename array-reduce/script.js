// Problem 1
const numbers = [1, 8, 6, 22, 59, 152]

const sum = numbers.reduce(function(final, nums) {
    //final = final + nums //this is the same as final += nums
    final += nums //This is the same as final = final + nums

    return final
})

console.log(sum)




//Problem 2
const array = [1, 2, 3]

const string = array.reduce(function(final, num){
    return final + num
}, ``)

console.log(string)


//Problem 3
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const totalVotes = voters.reduce(function(final, votes){
    if(votes.voted){
        final++
    }
    return final
}, 0)

console.log(totalVotes)



//Problem 4 
const wishList = [
    { title: "Wedding Ring", price: 2000 },
    { title: "Ford Bronco", price: 44000 },
    { title: "Sandals Resort", price: 14000 },
    { title: "Debt Payoff", price: 30000 },
]


const shoppingSpree = wishList.reduce(function(final, cost){
    final += cost.price
    return final
}, 0)


console.log(shoppingSpree)



//Problem 5
