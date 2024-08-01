let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra: ', (palabra) => {
    palabra = palabra.toLowerCase().replace(/\s+/g, '')
    let palabraInvertida = palabra.split('').reverse().join('')
    if (palabra === palabraInvertida) {
        console.log(`"${palabra}" es un palíndromo.`)
    } else {
        console.log(`"${palabra}" no es un palíndromo.`)
    }
    process.exit()
})