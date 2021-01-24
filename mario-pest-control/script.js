 const form = document.marioForm

 form.addEventListener(`submit`, function(event){
     event.preventDefault()

     const numberOfGoombas = form.goombasInput.value 
     const priceForGoombas = numberOfGoombas * 5
     const goomba = document.createElement(`h2`)
     goomba.textContent = `Mario caught ${numberOfGoombas} Goombas. That will be ${priceForGoombas} coins`
     console.log(goomba)
     document.getElementsByTagName(`form`)[0].append(goomba)



     const numberOfBobombs = form.bobombsInput.value 
     const priceForBobombs = numberOfBobombs * 7
     const bobombs = document.createElement(`h2`)
     bobombs.textContent = `Mario caught ${numberOfBobombs} Bob-ombs. That will be ${priceForBobombs} coins`
     console.log(bobombs)
     document.getElementsByTagName(`form`)[0].append(bobombs)

     const numberOfCheeps = form.cheepsInput.value 
     const priceForCheeps = numberOfCheeps * 11
     const cheeps = document.createElement(`h2`)
     cheeps.textContent = `Mario caught ${numberOfCheeps} Cheep-Cheeps. That will be ${priceForCheeps} coins`
     console.log(cheeps)
     document.getElementsByTagName(`form`)[0].append(cheeps)
 })