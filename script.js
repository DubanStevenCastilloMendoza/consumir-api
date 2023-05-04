const containerCart = document.querySelector('#container-cart');


function getPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(res => res.json())
  .then(data => crearCart(data))
}

function traerVarios(number) {
  for(i=1; i <= number; i++){
    getPokemon(i);
  }
}


  function crearCart(pokemon) {
    let contenedor = ""
   
      contenedor += `<div class="cart">
      <img src="${pokemon.sprites.front_default}" alt="">
      <div class="texto">
          <h3 id="prueba">${pokemon.name}:</h3>
          <p>${pokemon.abilities[1].ability.name}</p>
          <p>${pokemon.moves[1].move.name}</p>
      </div>
  </div>`;
  

    containerCart.innerHTML += contenedor;
  }



traerVarios(6);





const containerCart2 = document.querySelector('#container-cart-2');


function getCharacterWar(id) {
  fetch(`https://swapi.dev/api/people/${id}`)
  .then(res => res.json())
  .then(data => crearPerson(data))
}



 function traerWar(people) {
   for(i=1; i <= people; i++){
     getCharacterWar(i);
   }
 }


   function crearPerson(person) {
     let contenedor = ""
   
       contenedor += `<div class="cart">
       <div class="texto">
           <h3 id="prueba">${person.name}:</h3>
           <p>Peso: ${person.height}</p>
           <p>Masa: ${person.mass}</p>
           <p>Color-Cabello: ${person.hair_color}</p>
           <p>Color-Piel: ${person.skin_color}</p>
           <p>Color-Ojos: ${person.eye_color}</p>
           <p>Nacimiento: ${person.birth_year}</p>
           <p>Género: ${person.gender}</p>
       </div>
   </div>`;
  

     containerCart2.innerHTML += contenedor;
   }


   traerWar(6)






   const containerCart3 = document.querySelector('#container-cart-3');


function getFrase(id) {
  fetch(` https://api.breakingbadquotes.xyz/v1/quotes/${id}`)
  .then(res => res.json())
  .then(data => crearFrase(data))
}



  function traerFrase(fras) {
    for(i=1; i <= fras; i++){
      getFrase(i);
    }
  }


    function crearFrase(frase) {
      let contenedor = ""
   
        contenedor += `<div class="cart" style="height: 400px; width: 500px; pading:10px ; text-align: center;">
        <div class="texto-p">
            <h3 id="prueba" >${frase[0].author}</h3>
            <p >${frase[0].quote}</p>
        </div>
    </div>`;
  

      containerCart3.innerHTML += contenedor;
    }


    traerFrase(6)