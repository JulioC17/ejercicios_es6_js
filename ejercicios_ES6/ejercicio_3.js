/* 3.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */
const usuarios = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const arrayDeNombres = usuarios.map( nombre => nombre.name )
console.log(arrayDeNombres)



/* 3.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const arraydeNombres2 = users.map((nombre) => {
	if (nombre.name[0] === "A"){
	  return nombre.name = "Anacleto"
	} else return nombre.name
})
console.log(arraydeNombres2);



/* 3.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const mapeado = cities.map((city) =>{
	if(city.isVisited === true){
		return city.name + " (Visitado)"
	} else return city.name
})
console.log(mapeado);