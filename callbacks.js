const usuarios = [
  {id: 1, nombre: 'Ricardo', profesion_id: 1},
  {id: 2, nombre: 'Alejandro', profesion_id: 1},
  {id: 3, nombre: 'Diego', profesion_id: 2},
];

const profesion = {
  1: 'Programador',
  2: 'diseñador'
}

function getUsuarios(callback){//metodo asincrono
  setTimeout(()=>{
    callback(null, usuarios);
  },200);
}


function getUsuario(id, callback){
  setTimeout(()=>{
    callback(null, usuarios.filter((usuario)=>usuario.id===id)[0]);
  },200);
  
}

function getProfesion(id, callback){
  setTimeout(()=>{
    callback(null, profesion[id]);
  },200);
}

//getUsuarios((err, usuarios)=>console.log(usuarios));
//callbacks: pirámide del infireno, que el Serño reprenda al diablo
getUsuarios((err,usuarios)=>{
    if(err) return mostrarError(err);//en caso exista el error se envía el error a un método que lo muestre.
  const alejandroId = usuarios[1].id;
  
  getUsuario(alejandroId, (err, usuario)=>{
    const profesionId = usuario.profesion_id;
    
    getProfesion(profesionId, (err, profesion)=>{
    console.log('La profesión de Alejandro es: ',profesion);
    });
  });
});

//4. De callbacks a Promesas
//Inversión de control
//refactorizando el código anterior
const usuarios = [
  {id: 1, nombre: 'Ricardo', profesion_id: 1},
  {id: 2, nombre: 'Alejandro', profesion_id: 1},
  {id: 3, nombre: 'Diego', profesion_id: 2},
];

const profesion = {
  1: 'Programador',
  2: 'diseñador'
}

function getUsuarios(){//metodo asincrono
  return new Promise((resolved, reject)=>{
    setTimeout(()=>{
      resolved(usuarios)
     },200)
    });
}

function getUsuario(id){
  return new Promise((resolved, reject)=>{
    setTimeout(()=>{
      resolved(usuarios.filter((usuario)=>usuario.id===id)[0]);
    },200);    
    })
}

function getProfesion(id){
  return new Promise((resolved, reject)=>{
    setTimeout(()=>{
      resolved(profesion[id]);
    },200);    
    })
}

getUsuarios()
  .then((usuarios)=> getUsuario(usuarios[1].id))
  .then((usuario) => getProfesion(usuario.profesion_id))
  .then((profesion)=>console.log(`La profesión de Alejandro es: ${profesion}`))

//iinversión del control: ya no le pasamos lógica al método (el callback en este caso) a los métodos

//5 Promise.all
const usuarios = [
  {id: 1, nombre: 'Ricardo', profesion_id: 1},
  {id: 2, nombre: 'Alejandro', profesion_id: 1},
  {id: 3, nombre: 'Diego', profesion_id: 2},
];

const profesion = {
  1: 'Programador',
  2: 'diseñador'
}

function getUsuarios(){//metodo asincrono
  return new Promise((resolved, reject)=>{
    setTimeout(()=>{
      resolved(usuarios)
     },200)
    });

}

function getUsuario(id){
  return new Promise((resolved, reject)=>{
    setTimeout(()=>{
      resolved(usuarios.filter((usuario)=>usuario.id===id)[0]);
    },200);    
    })
}

function getProfesion(id){
  return new Promise((resolved, reject)=>{
    setTimeout(()=>{
      resolved(profesion[id]);
    },200);    
    })

}
//en este caso, cada cual se demora el tiempo indicado
getProfesion(1)
  .then((profesion)=>console.log(profesion))
  .then(() => getProfesion(2))
  .then((profesion)=>console.log(profesion))
//  el problema es que en este caso, uno no es dependiente del otro, por ello podemos llamar a todos 


Promise.all([getProfesion(1),getProfesion(2)])
  .then((respuesta) => console.log(respuesta))
//["Programador", "diseñador"]