
const fecha1 = new Date('2021-08-12');
const fecha2 = new Date('2024-08-25');

const diferenciaMilisegundos = fecha2 - fecha1;

const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

console.log(`La diferencia entre ${fecha1.toLocaleDateString()} y ${fecha2.toLocaleDateString()} es de ${diferenciaDias} días.`);
