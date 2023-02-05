export const  getPokemonData = async (page = 0) =>{
     const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${page}`)
        .then( (response) => {
            const data= response.json();
            return data;
        })
        .catch((e)=>{return e});
        return data.results
}
export const  getEachCharacter = async (url) =>{
    const data = await fetch(url)
       .then( (response) => {
           const data= response.json();
           return data;
       })
       .catch((e)=>{return e});
       return data
}
