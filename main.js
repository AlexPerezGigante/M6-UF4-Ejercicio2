

function pintaPokemon(array){

}
const url = 'https://pokeapi.co/api/v2/pokemon'
document.querySelector('.ejercicio1').addEventListener('click', pokemonAsync)

async function pokemonAsync(){
    try{
        const res1 = await fetch(url)
        const respJ = await res1.json()
        console.log(respJ)
        array = respJ.map((id) => id<13)
        console.log(array)
        const img = `<img src="${respJ.sprites.front_default}"></img>`
        document.querySelector('body').innerHTML = img
    }catch(error){
        console.log('Error pokemon 1', error)
    }
}