//Paradigma funcional
//numeros menores que 100

function filtrarMenoresQue100(numeros) {
	const menoresQue100 = [];

	for(let i=0; i<numeros.length; i++) {
		if(numero<100){
			menoresQue100.push(numero);
		}
	}
	return menoresQue100;
}

//ejemplo
function filtrarMenoresQue100(numeros) {
	const menoresQue100 = [];
    //console.log(numeros);
	for(let i=0; i<numeros.length; i++) {
        // console.log(numeros[i]);
		if(numeros[i]<100){
			menoresQue100.push(numeros[i]);
		}
	}
	// return menoresQue100;
    console.log(menoresQue100);
}
filtrarMenoresQue100([99,120,50,130]);//[99, 50]

//la idea del paradigma es que ya no recorramos el array para obtener lo que deseamos, sino, llamar al array y a través de un método obtener lo solicitado
//ex
const numeros = [10,15,20];
const dobles = numeros.funciones;

//Paradigma imperativo: Cómo debe dfuncionar el programa
/*paradigma funcional: Qué resultado esperamos
El paradigma funcional promueve el uso de funciones puras, que al ser invocadas con los mismos argumentos siempre se obtienen los mismos valores
* otra caracteristica de las funciones puras, es que no producen efectos secundarios
es decir, que después de haber sido ejecutados, no producen ningún otro cambio en el sistema, no tocan ninguna variable externa
* Es código más predecible
* Las funciones son ciudadanos de primer orden, funciones de orden superior: aquellas que de parámetros reciben otras funciones

*/

/*  MAP, FILTER, REDUCE: para operar arrays */
/* Map: funcion transformadora: es la función que se aplicará a cada elemento del array*/
/*Una buena práctica es no modificar el array original con ningún método: map, filer, reduce*/
const numeros = [3, 10, 20, 50];
const dobles = numeros.map(function(numero, posicion, numeros){

});
const dobles = numeros.map(function(_, posicion){//cuando solo interesa la posición
});

const numeros = [3, 10, 20, 50];
const dobles = numeros.map(function(numero){
    return numero*2;
});
console.log(numeros);
console.log(dobles);

const numeros = [3, 10, 20, 50];
const dobles = numeros.map((numero)=>{
    return numero*2;
});
console.log(numeros);
console.log(dobles);

const numeros = [3, 10, 20, 50];
const dobles = numeros.map(numero=>{
    return numero*2;
});
console.log(numeros);
console.log(dobles);

const numeros = [3, 10, 20, 50];
const dobles = numeros.map(numero => numero*2);
console.log(numeros);
console.log(dobles);

const numeros = [3, 10, 20, 50];
const dobles = numeros.map(foo => foo*2);
console.log(numeros);
console.log(dobles);

//Ejemplo
const productos = [
    {id: 1, nombre: "camisa", precio:49},
    {id: 2, nombre: "pantalon", precio:60},
    {id: 3, nombre: "Blaser", precio:150}
];
//los productos que cuestan más de 50 soles tienen 10% de descuento
const productosConDescuento = productos.map(function(producto){
    if(producto.precio<50) return producto;

    //producto.precio = producto.precio*0.9;//esto es un error no se hace porque actualiza datos del valos original
    return {
        ...producto,
        precio: producto.precio * 0.9
    };
});
//obtener los id's de los productos
const idProductos =  productos.map(function(producto){
    return producto.id
});

//otra forma de obtener los id de los productos
//con aaarow functions
const idProductos2 = productos.map((producto)=>{
    return producto.id
});

const idProductos3 = productos.map(producto=>{//como es un solo parámetro, podemos quitar el paréntensis
    return producto.id
});
//se puede simplificar todo en una sola línea
const idProductos4 = productos.map(producto=>producto.id);

// como se repite la palabra producto, podría llamarse de cualquier manera
const idProductos5 = productos.map(foo => foo.id);

//también podemos obviar el valor repetido
const idProductos6 = productos.map(({id})=>id);


//PREDICADO: Si un elemento cumple con cierta condición
const productos = [
    {id: 1, nombre: "camisa", precio:49},
    {id: 2, nombre: "pantalon", precio:60},
    {id: 3, nombre: "Blaser", precio:150}
];
const productosBaratos = productos.filter(producto=> producto.precio<80);
console.log(productosBaratos);

//funciones de orden superior, escribiendo más claro:
const productos = [
    {id: 1, nombre: "camisa", precio:49},
    {id: 2, nombre: "pantalon", precio:60},
    {id: 3, nombre: "Blaser", precio:150}
];
const esBarato = producto => producto.precio<80;
const productosBaratos = productos.filter(esBarato);
console.log(productosBaratos);

const esCaro = producto => !esBarato(producto);
const productosCaros = productos.filter(esCaro);

//REDUCE: ACUMULAR
const numeros = [10,20,30,40];
let total = 0;
//calcular la suma: Antes
for(let i=0; i<numeros.length; i++) {
    //console.log(numeros[i]);
    total += numeros[i];
}
console.log(total);

//otra forma de hacer for
const numeros = [10,20,30,40];
let total = 0;
for (let numero of numeros){
    console.log(numero);
    total += numero;
}
console.log(total);

//la forma actual de hacer esto, en 2022, es:
const numeros = [3, 10, 20, 50];
//la funcion reduce recibe 2 parámetros:
// let total = numeros.reduce(()=>{},0);
//1 la función reductora (la que va ir actualizando el acumulador)
// la funcion reductora, recibe un parámetro, el acumulador, el valor actual justo antes de tirar la palanca
//2 el valor inicial del acumulador
// let total = numeros.reduce((acumulador, numero, posicion, numeros)=>{
// como segundo parámetro recibe el número, de forma opcional la posición y el array
// },0);
//en este caso no se va a necesitar
let total = numeros.reduce((acumulador, numero)=>{
    return acumulador + numero//retorna el valor actualizado
},0);
console.log(total);

// de forma simplificada
let total2 = numeros.reduce((acumulador, numero)=>acumulador+numero);
console.log(total2);

const acumular = (acumulador, numero) => acumulador + numero;
let total3 = numeros.reduce(acumular,0);
console.log(total3);

//también se puede omitir el cero, tomaría como elemento inicial al primer elemento del array
//pero dará error si no hay elementos en el array

const numeros = [10,20,30,40];
const acumular = (acumulador, numero) => acumulador + numero;
let total4 = numeros.reduce(acumular);
console.log(total4);

//con array vacío da error
const numeros = [];
const acumular = (acumulador, numero) => acumulador + numero;
let total4 = numeros.reduce(acumular);
console.log(total4);

//obtener los dobles de los números usando reduce
//con map ya me acuerdo
const numeros = [71,41,19,88,3,65];
const dobles = numeros.map(foo=>foo*2);
console.log(dobles);

//con reduce, lo intenté pero no es asi
const numeros = [71,41,19,88,3,65];
const dobles = (acumulador, numero) => numero*2;
const numerosDobles = numeros.reduce(dobles);
console.log(numerosDobles);

//trabajando con arrays
const numeros = [71, 41, 19, 88, 3, 65];
const acumularDobles = (acumulador, numero) => [...acumulador, numero*2];
const numerosDobles = numeros.reduce(acumularDobles,[]);
console.log(numerosDobles);