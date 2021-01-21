 const form = document.marioForm

 form.addEventListener(`submit`, function(event){
     event.preventDefault()

     const numberOfGoombas = form.goombasInput.value 
     const priceForGoombas = numberOfGoombas * 5
     const goomba = document.createElement(`h2`)
     goomba.textContent = priceForGoombas
     console.log(goomba)
     document.getElementsByTagName(`form`)[0].append(goomba)



     const numberOfBobombs = form.bobombsInput.value 
     const priceForBobombs = numberOfBobombs * 7
     const bobombs = document.createElement(`h2`)
     bobombs.textContent = priceForBobombs
     console.log(bobombs)
     document.getElementsByTagName(`form`)[0].append(bobombs)

     const numberOfCheeps = form.cheepsInput.value 
     const priceForCheeps = numberOfCheeps * 11
     const cheeps = document.createElement(`h2`)
     cheeps.textContent = priceForCheeps
     console.log(cheeps)
     document.getElementsByTagName(`form`)[0].append(cheeps)
 })