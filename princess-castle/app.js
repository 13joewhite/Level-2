class Player {
    constructor(name, totalCoin, status, hasStar,){
        this.name = name
        this.totalCoin = totalCoin
        this.status = `Powered Up`
        this.hasStar = hasStar
    }

    setName(namePicked){
        if(namePicked === `Mario` || namePicked === `Luigi`) {
            return this.name = namePicked
        }
    }
    gotHit(){
        const standard = [`Powered Up`, `Big`, `Small`, `Dead`]
        let prevIndex = standard.findIndex((status) => status === this.status)
        if(prevIndex < 3) {
            this.status = standard[prevIndex + 1]
            if(prevIndex === 0){
                this.hasStar = false
            }
        } else {
            this.status = standard[prevIndex]
        }
    }
    gotPowerup() {
        const standard = [`Powered Up`, `Big`, `Small`, `Dead`]
        let prevIndex = standard.findIndex((status) => status === this.status)
        if(prevIndex > 0) {
            this.status = standard[prevIndex - 1]
        } else {
            this.status = standard[prevIndex]
            this.hasStar = true
        }
    }
    addCoin(){
        this.totalCoin += 1
    }
    print(){
        console.log(`Name: `, this.name)
        console.log(`Status: `, this.status)
        console.log(`Total Coins: `, this.totalCoin)
        if(this.hasStar){
            console.log(`You have a star!`)
        }
    }
}

const randomRange = function(player){
    let randomNum = Math.floor(Math.random() * 3)
    switch (randomNum) {
        case 0:
            player.gotHit()
            break;
        case 1:
            player.gotPowerup()
            break;
        case 2:
            player.addCoin()
            break;
        default:
            break;
    }
}



let gameActive = true



const mario = new Player(`Mario`, 0, `Powered Up`, true)




const game = setInterval(() => {
    if(gameActive) {
    randomRange(mario)
    mario.print()
    if(mario.status === `Dead`) {
        gameActive = false
    }
    } else {
        clearInterval(game)
    }

}, 1500) 

