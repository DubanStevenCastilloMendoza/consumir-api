const pokemonIds = [1, 25, 133]; // IDs de los Pokemones que queremos obtener

pokemonIds.forEach(pokemonId => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Aquí puedes procesar los datos del Pokemon en la variable "data"
for(i = 1; i<=pokemonId; i++){
    const name = document.querySelector('#f');
    name.innerHTML = data.name
}
   
      console.log(`Nombre: ${data.name}`);
      console.log(`Tipo(s): ${data.types.map(type => type.type.name).join(", ")}`);
      console.log(`Imagen: ${data.sprites.front_default}`);
    })
    .catch(error => console.error(error));
});