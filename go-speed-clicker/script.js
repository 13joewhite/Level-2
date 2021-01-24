
const numberOfClicks = document.getElementById(`button`)


let click = 0
console.log(typeof localStorage.getItem(`clicks`) )
if(localStorage.getItem(`clicks`) == 0) {
    click = 0
} else {
    click = Number(localStorage.getItem(`clicks`))
}

numberOfClicks.addEventListener(`click`, (event) => {
    
    click += 1
    
    localStorage.setItem(`clicks`, click)


        const h1 = document.createElement('h1')

        h1.textContent = click

        document.getElementsByTagName("body")[0].append(h1)


       console.log(localStorage.getItem(`clicks`))


})






