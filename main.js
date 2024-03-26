

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
    const inicio = Date.now()
    try{
        const array = []
        for (let index = 0; index < 12; index++) {
            const res1 = await fetch(url+"/"+(index+1))
            const respJ = await res1.json()
            array[index] = respJ
            
        }
        console.log(array)

        const final = Date.now()

        const TiempoT = final-inicio

        const tiempo = 'TIEMPO: ' + TiempoT + ' milisegundos'

        document.querySelector('#tiempo1').innerHTML = tiempo
        pintaPokemon(array)

    }catch(error){
        console.log('Error pokemon Ejercicio 1', error)
    }
}