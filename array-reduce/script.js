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
const flatten = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const oneArray = flatten.reduce(function(final, arr){
    return final.concat(arr)
}, [])

console.log(oneArray)

//ask michael about
// const result = flatten.reduce(function(final, arr) {
//     final = arr.concat(arr.length)
//     return final
// })



//Problem 6
let initialVotes = {
    youngVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0,
  }




const voters2 = [
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

const peersToVotePeers = {
    youth: "youngVotes",
    mids: "midVotes",
    olds: "oldVotes",
  }

const votingResults = voters2.reduce(function(final, votes){
    if(votes.age >= 18 && votes.age <= 25){
        final.youth += 1
        if(votes.voted) {
            final.youngVotes += 1
        } 
    } else if(votes.age >= 26 && votes.age <= 35){
        final.mids += 1
        if(votes.voted) {
            final.midVotes += 1
        } 
    } else if(votes.age >= 36 && votes.age <= 55) {
        final.olds +=1
        if(votes.voted) {
            final.oldVotes += 1
        } 
    }
    return final
}, initialVotes)

console.log(votingResults)