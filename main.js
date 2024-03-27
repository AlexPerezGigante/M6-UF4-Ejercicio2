

function pintaPokemon(array){
    let html = ''

    array.forEach((element) => {
        
        html+= `
    <div class="col-md-2">
              <div class="card shadow">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${element.id}.png" class="card-img-top" alt="${element.name}">
                  <div class="card-body">
                      <h5 class="card-title">${element.name}</h5>
                      <div class="card-text">ID: ${element.id}</div>
                      `
                      
                      if(element.types.length == 1){
                        html+=`<div class="card-text">Tipo: ${element.types[0].type.name}</div>`
                      }else{
                        html+=`<div class="card-text">Tipo: ${element.types[0].type.name}, ${element.types[1].type.name}</div>`
                      }

                      html+=`
                      
                      <div class="card-text">Peso: ${element.weight}</div>
                      <div class="card-text">Altura: ${element.height}</div>
                  </div>
              </div>
    </div>
    `
    });

    document.querySelector(".tarjetas").innerHTML = html
    


}
const url = 'https://pokeapi.co/api/v2/pokemon'
document.querySelector('.ejercicio1').addEventListener('click', pokemonAsync)

async function pokemonAsync(){
    const inicio =  new Date().getTime()
    try{
        const array = []
        for (let index = 0; index < 12; index++) {
            const res1 = await fetch(url+"/"+(index+1))
            const respJ = await res1.json()
            array[index] = respJ
            
        }
        console.log(array)

        const final =  new Date().getTime()

        const TiempoT = final-inicio

        const tiempo = 'TIEMPO: ' + TiempoT + ' milisegundos'

        document.querySelector('#tiempo1').innerHTML = tiempo
        pintaPokemon(array)

    }catch(error){
        console.log('Error pokemon Ejercicio 1', error)
    }
}

document.querySelector('.ejercicio2').addEventListener('click', pokemonThen)

function pokemonThen(){
    const inicio = new Date().getTime()
    const array = []
    fetch(url + "/" + 1)
    .then(resp => resp.json())
    .then(respJson => {// Cuando se resuelve la petición de manera correcta

        array[0] = respJson

        fetch(url + "/" + 2)
        .then(resp => resp.json())
        .then(respJson => {// Cuando se resuelve la petición de manera correcta

            array[1] = respJson

            fetch(url + "/" + 3)
            .then(resp => resp.json())
            .then(respJson => {// Cuando se resuelve la petición de manera correcta

                array[2] = respJson

                fetch(url + "/" + 4)
                .then(resp => resp.json())
                .then(respJson => {// Cuando se resuelve la petición de manera correcta

                    array[3] = respJson

                    fetch(url + "/" + 5)
                    .then(resp => resp.json())
                    .then(respJson => {// Cuando se resuelve la petición de manera correcta

                        array[4] = respJson

                        fetch(url + "/" + 6)
                        .then(resp => resp.json())
                        .then(respJson => {// Cuando se resuelve la petición de manera correcta

                            array[5] = respJson

                            fetch(url + "/" + 7)
                            .then(resp => resp.json())
                            .then(respJson => {// Cuando se resuelve la petición de manera correcta

                                array[6] = respJson

                                fetch(url + "/" + 8)
                                .then(resp => resp.json())
                                .then(respJson => {// Cuando se resuelve la petición de manera correcta

                                    array[7] = respJson

                                    fetch(url + "/" + 9)
                                    .then(resp => resp.json())
                                    .then(respJson => {// Cuando se resuelve la petición de manera correcta

                                        array[8] = respJson

                                        fetch(url + "/" + 10)
                                        .then(resp => resp.json())
                                        .then(respJson => {// Cuando se resuelve la petición de manera correcta

                                            array[9] = respJson

                                            fetch(url + "/" + 11)
                                            .then(resp => resp.json())
                                            .then(respJson => {// Cuando se resuelve la petición de manera correcta

                                                array[10] = respJson

                                                fetch(url + "/" + 12)
                                                .then(resp => resp.json())
                                                .then(respJson => {// Cuando se resuelve la petición de manera correcta
                                            
                                                    array[11] = respJson
                                                    
                                                    console.log(array)

                                                        const final = new Date().getTime()

                                                        const TiempoT = final-inicio

                                                        const tiempo = 'TIEMPO: ' + TiempoT + ' milisegundos'

                                                        document.querySelector('#tiempo2').innerHTML = tiempo
                                                        pintaPokemon(array)
                                            
                                            
                                                  
                                                })
                                                .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
                                                  console.log('Pokemon 12');
                                                })
                                                .catch(() => {// Cuando se produce un error en la petición
                                                    console.log('Error pokemon 12', error)
                                                })

                                            
                                            })
                                            .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
                                            console.log('Pokemon 11');
                                            })
                                            .catch(() => {// Cuando se produce un error en la petición
                                                console.log('Error pokemon 11', error)
                                            })

                                        
                                        })
                                        .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
                                        console.log('Pokemon 10');
                                        })
                                        .catch(() => {// Cuando se produce un error en la petición
                                            console.log('Error pokemon 10', error)
                                        })

                                    
                                    })
                                    .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
                                    console.log('Pokemon 9');
                                    })
                                    .catch(() => {// Cuando se produce un error en la petición
                                        console.log('Error pokemon 9', error)
                                    })

                                
                                })
                                .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
                                console.log('Pokemon 8');
                                })
                                .catch(() => {// Cuando se produce un error en la petición
                                    console.log('Error pokemon 8', error)
                                })

                            
                            })
                            .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
                            console.log('Pokemon 7');
                            })
                            .catch(() => {// Cuando se produce un error en la petición
                                console.log('Error pokemon 7', error)
                            })

                        
                        })
                        .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
                        console.log('Pokemon 6');
                        })
                        .catch(() => {// Cuando se produce un error en la petición
                            console.log('Error pokemon 6', error)
                        })

                    
                    })
                    .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
                    console.log('Pokemon 5');
                    })
                    .catch(() => {// Cuando se produce un error en la petición
                        console.log('Error pokemon 5', error)
                    })

                
                })
                .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
                console.log('Pokemon 4');
                })
                .catch(() => {// Cuando se produce un error en la petición
                    console.log('Error pokemon 4', error)
                })


            
            })
            .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
            console.log('Pokemon 3');
            })
            .catch(() => {// Cuando se produce un error en la petición
                console.log('Error pokemon 3', error)
            })

        
        })
        .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
        console.log('Pokemon 2');
        })
        .catch(() => {// Cuando se produce un error en la petición
            console.log('Error pokemon 2', error)
        })

        
      
    })
    .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
      console.log('Pokemon 1');
    })
    .catch(() => {// Cuando se produce un error en la petición
        console.log('Error pokemon 1', error)
    })
        
}

document.querySelector('.ejercicio3').addEventListener('click', pokemonPromise)

async function pokemonPromise(){
    const inicio = new Date().getTime()
    
    const array=[]
    for(let i=0;i<12;i++){
      array[i] = fetch(url + "/" + (i+1)).then(resp=>resp.json())
    }
    console.log(array);
    
    const res  =  await Promise.all(array)
    
    const final = new Date().getTime()

    const TiempoT = final-inicio

    const tiempo = 'TIEMPO: ' + TiempoT + ' milisegundos'

    document.querySelector('#tiempo3').innerHTML = tiempo
    pintaPokemon(res)
  }