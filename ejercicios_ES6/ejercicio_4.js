/* 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18 */
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const mayorQue18 = ages.filter((edad) => edad >18)
console.log(mayorQue18)

/*4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par. */
const agess = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const pares = agess.filter ((par) => par % 2 === 0)
console.log(pares);

/* 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */
const streamerss= [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const Lol = streamerss.filter ((streamer) => streamer.gameMorePlayed === "League of Legends").map((masJugado) => masJugado.name)
console.log(Lol);

/* 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación. */

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const uIncluida = streamers.filter ((streameador) => streameador.name.includes("u")).map((conU) => conU.name)
console.log(uIncluida);

/* 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35. */

const legends = streamers.filter((legend) => legend.gameMorePlayed.includes("Legends")).map((edad) => {
	if (edad.age > 35){
	    edad.gameMorePlayed = edad.gameMorePlayed.toUpperCase()
		return edad
	}else return edad
})
console.log(legends)