const pikachu1 = new Pikachu("Pika pika", "Electrico", 32, 10)
const charmander1 = new Charmander("Fueguito","Fuego", 30, 8)
const eevee1 = new Eevee("Fatiga", "Normal", 22, 6)

do {
    pikachu1.impactrueno(charmander1)
    if(charmander1.vidas <= 0) {
        break
    }
    charmander1.llamarada(pikachu1)
} while(pikachu1.vidas > 0 && charmander1.vidas > 0)

do {
    eevee1.melee(pikachu1)
    if(pikachu1.vidas <= 0) {
        break
    }
    pikachu1.impactrueno(eevee1)
    console.log(eevee1.vidas)
} while(eevee1.vidas > 0 && pikachu1.vidas > 0)