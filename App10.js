let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese un mensaje: ', (mensaje) => {
    mensaje = mensaje.toLowerCase()
    const vowels = 'aeiou';
    let count = 0;

    for (let char of mensaje) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(`Número de vocales en el mensaje: ${count}`)
    process.exit()
})