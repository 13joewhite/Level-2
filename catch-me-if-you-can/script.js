//Problem 1
const sum = function(x, y) {
        if(typeof x !== `number` || typeof y !== `number`){ throw `this needs to be a number`
        } else {
        return x + y
        }

}
 
try{ 
    let result = sum(1, 2)
    console.log(result)
} catch(err){
    console.log(`This is your error, ${err}`)
}



//Problem 2
const user = {username: "sam", password: "123abc"};
function login(username, password){
    if(username !== user.username){
        throw `Incorrect username or password`
    } else if(password !== user.password) {
        throw `Incorrect username or password`
    } else {
        return `Success! You are logged in!`
    }
}

try {
    console.log(login(`sam`, `123abc`))
} catch (err) {
    console.log(err)
}






