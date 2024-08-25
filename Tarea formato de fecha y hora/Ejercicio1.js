const fecha = new Date('2012-03-20 03:02:18')
const opciones = { weekday: 'long', year:'numeric',month:'short', day:'numeric', hour:'numeric'}

console.log(fecha.toLocaleDateString('en-us',opciones))