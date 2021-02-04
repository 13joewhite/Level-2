const readline = require(`readline-sync`)

class Player {
    constructor(name, totalCoin, status, hasStar,){
        this.name = name
        this.totalCoin = totalCoin
        this.status = status
        this.hasStar = hasStar
    }

    setName(namePicked){
        readline.question(`Type "Mario" or "Luigi" to select character. `)
        if(namePicked === `Mario`) {
            return this.name = `Mario`
        } else if(namePicked === `Luigi`) {
            return this.name = `Luigi`
        }
    }

}

const mario = new Player()

mario.setName()