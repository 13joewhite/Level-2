 `use strict`
 
 const addition = document.getElementById(`addition`)
 




 //submit event

 
addition.addEventListener(`submit`, function(event) {
    event.preventDefault()
 
    const num1 = document.getElementById(`addNum1`)
    const num2 = document.getElementById(`addNum2`)
    const addNum1 = num1.value
    const addNum2 = num2.value
    const addAnswer = Number(addNum1) + Number(addNum2)

    const addPrint = document.createElement(`h3`)
    addPrint.textContent = addAnswer
    document.getElementsByTagName(`body`)[0].append(addPrint)
})





const subtraction = document.getElementById(`subtraction`)
 
 //submit event

 
subtraction.addEventListener(`submit`, function(event) {
    event.preventDefault()
 
    const num1 = document.getElementById(`subNum1`)
    const num2 = document.getElementById(`subNum2`)
    const subNum1 = num1.value
    const subNum2 = num2.value
    const subAnswer = Number(subNum1) - Number(subNum2)

    const addPrint = document.createElement(`h3`)
    addPrint.textContent = subAnswer
    document.getElementsByTagName(`body`)[0].append(addPrint)
})



const multiplication = document.getElementById(`multiplication`)
 
 //submit event

 
multiplication.addEventListener(`submit`, function(event) {
    event.preventDefault()
 
    const num1 = document.getElementById(`mulNum1`)
    const num2 = document.getElementById(`mulNum2`)
    const mulNum1 = num1.value
    const mulNum2 = num2.value
    const mulAnswer = Number(mulNum1) * Number(mulNum2)

    const addPrint = document.createElement(`h3`)
    addPrint.textContent = mulAnswer
    document.getElementsByTagName(`body`)[0].append(addPrint)
})