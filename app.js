// Objetos

// const nombre = "tablet"
// const precio = 300
// const disponible = true



// const producto = {
//   nombre: "tablet",
//   precio: 300,
//   disponible: true
// }

// console.log(producto.nombre);
// console.log(producto.precio);
// console.log(producto.disponible);

// producto.nombre = "Monitor"
// console.log(producto.nombre);
// producto.precio = 3000

// console.log(producto.precio);


// console.log(producto.imagen);

// producto.imagen = "imagen.jpg"
// console.log(producto.imagen);

// console.log(producto);

// delete producto.disponible
// console.table(producto)

// Object.keys()


// const todasLasPropiedas = Object.keys(producto)
// console.log(todasLasPropiedas);

// // Object.values()

// const todosLosValores = Object.values(producto)
// console.log(todosLosValores);


// DESTRUCTURING

// let persona = {
//   nombre: 'Mariana',
//   pais: 'Perú',
//   trabajo: 'Desarrollador',
// }


// console.log(persona.nombre);

// let nombre1 = persona.nombre
// let pais1 = persona.pais
// let trabajo1 = persona.trabajo

// console.log(nombre1);
// console.log(pais1);
// console.log(trabajo1);

// FORMA CORTA

// let { nombre, pais } = persona
// console.log(nombre);
// console.log(pais);



// ASIGNANDO EL RESTO DE UN OBJETO
// 'OPERADOR REST' ...


// let persona2 = {
//   nombre: 'Frank',
//   pais: 'Perú',
//   trabajo: 'Desarrollador',
//   amigos: ['Esthuardo', 'Tobias', 'Rolando']

// }

// let {nombre: tuNombre, amigos, ...otrosCampos } = persona2


// console.log('Ejercicio3-----------------------');
// console.log(tuNombre);
// console.log(amigos);
// console.log(otrosCampos);

// ARRAYS


// console.log(tecnologias[0]);
// console.log(tecnologias[3]);

// Métodos de array
// Añadir elementos a un array

// push() => agrega elementos al final del arreglo
// unshift() => añadimos elementos al inicio del array

// tecnologias.push('HTML')
// console.log(tecnologias);

// tecnologias.unshift('CSS')
// console.log(tecnologias);

// spread operator ...

// const nuevoArreglo = ['Typescript',...tecnologias, 'Nodejs']
// console.log(nuevoArreglo);

// ELIMINAR ELEMENTOS DE UN ARRAY

// pop() => último elemento del array
// shift() => primer elemento del array
// splice() => una posición en específico


// tecnologias.pop()
// console.log(tecnologias);

// tecnologias.shift()
// console.log(tecnologias);


// Primer parámetro => a partir de que elemento vas a eliminar
// Segundo parámetro => cuantos son los elementos a eliminar

// tecnologias.splice(1)
// console.log(tecnologias);


// filter()

// const nuevoArreglo = tecnologias.filter(function(tech){
  //   return tech === 'React'
  // })
  
  // console.log(nuevoArreglo);
  
  
  // REEMPLAZAR ELEMENTOS DE UN ARRAY
  
  
  
  // console.log(tecnologias[0] = 'HTML');
  
  // console.log(tecnologias);
  
  
  // map()
  // const nuevoArray = tecnologias.map(function(tech){
    //   if(tech === 'Javascript') {
      //     return 'HTML'
      //   } else {
        //     return tech
        //   }
        
        // })
        
        // console.log(nuevoArray);
        // console.log(tecnologias);
        
//         const tecnologias = [20, 30, true, 'React', 'Javascript']
//         const numeros = [10, 20, 30]

//         // includes() comprueba si un elemento existe en un array (devuelve true or false)

//         const resultado = tecnologias.includes('HTML')
//         console.log(resultado);

//         // some() me indica si un elemento de un arreglo cumple con la condición

// const resultado1 = numeros.some(numero=>numero > 15)
// console.log(resultado1);

// DESTRUCTURING DE ARRAYS

let bienvenida = ['Hola', 'Mariana', 'Navarro', 'Desarrolladora']

// let saludo1 = bienvenida[0]
// let nombre1 = bienvenida[1]
// let apellido1 = bienvenida[2]

// console.log(saludo1);
// console.log(nombre1);
// console.log(apellido1);

let [saludo2,, apellido2] = bienvenida

// console.log(saludo2);
// console.log(nombre2);
// console.log(apellido2);

let [saludo3, nombre3, ...otrosCampos] = ['Hola', 'Mariana', 'Navarro', 'Desarrolladora']

console.log(saludo3);
console.log(nombre3);
console.log(otrosCampos);


