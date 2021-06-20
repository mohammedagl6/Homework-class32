'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  // TODO complete this function
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchAndPopulatePokemons(url, pokemonList) {
  // TODO complete this function
  try {
    const data = await fetchData(url);
    /* this is just to make look better before the user select any Pokemon */
    const firstItem = document.createElement('option');
    firstItem.textContent = "Select Pokemon";
    firstItem.disabled = true;
    firstItem.selected = true;
    pokemonList.appendChild(firstItem);
  
    data.results.forEach(({name}) => {
      const pokemonListItem = document.createElement('option');
      pokemonListItem.textContent = name;
      pokemonList.appendChild(pokemonListItem)
    });
  } catch (err) {
    console.log(err.message)
  }

  
}

async function fetchImage(url, pokemonImage) {
  // TODO complete this function
  try{
    const data = await fetchData(url);
    pokemonImage.src = data.sprites.front_default;
  }catch(err){
    console.log(err.message)
  }
}

function main() {
  // TODO complete this function
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const getPokemonButton = document.createElement('button');
  const pokemonList = document.createElement('select');
  pokemonList.style.display = "block";
  const pokemonImage = document.createElement('img');
  getPokemonButton.textContent = "Get Pokemon";
  document.body.appendChild(getPokemonButton);
  document.body.appendChild(pokemonList);
  document.body.appendChild(pokemonImage);
  
  getPokemonButton.addEventListener('click', () => {
    fetchAndPopulatePokemons(url, pokemonList);
    getPokemonButton.remove();
    pokemonList.addEventListener('change', () => {
      fetchImage(url+pokemonList.value, pokemonImage);
    });
  });
}

window.onload = main;