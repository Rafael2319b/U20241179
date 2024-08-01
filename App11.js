let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase: ', (frase) => {
    const fraseCapitalizada = frase
        .split(' ') 
        .map(palabra => 
            palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
        )
        .join(' ')

    console.log(`Frase capitalizada: ${fraseCapitalizada}`)

    process.exit()
})