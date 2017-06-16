'use strict';

const Search = (update) => {
  const search = $('<div class="row">');
  const col = $('<div class="input-field col s12">');
  const input = $('<input id="search" type="search" placeholder="Ingrese nombre de Pokemon" required>');
  const label = $('<label class="label-icon" for="search"><i class="icon_telephone"></i></label>');
  const result = $('<div class="result"></div>');

  col.append(input,label);
  search.append(col,result);

  input.on('keyup',(e) => {
  const filteredPokemon = filterByName(state.pokemon,input.val());
    console.log(filteredPokemon);
    const filter = input.val();
    reRender(result,filter,update);
  });
  reRender(result,'',update);

  return search;

}

const PokemonItem = (pokemon,update) => {
  const item = $('<div class="col s3"></div>');
  const name = $('<h5>'+pokemon.pokemon_species.name+'</h5>');
  const image = $(`<img class="movie-thumb" data-target="modal1" src="http://serebii.net/art/th/${pokemon.entry_number}.png" alt="${pokemon.pokemon_species.name}"/>`);
  // const district = $('<p>'+pokemon.district+'</p>');
  // const button = $('<button>Ir al mapa</button>');

  image.on('click',(e) => {
    e.preventDefault();
    obtenerNombre('pokemon',pokemon.entry_number);
    obtenerNombre('pokemon-species',pokemon.entry_number);
    console.log(state.selectePokemon);
    // state.selectedPokemon = pokemon;
    update();
  });

  item.append(name);
  item.append(image);
  // item.append(district);
  // item.append(button);

  return item;
}

const reRender = (container,filter,update) => {
  container.empty();
  const filteredPokemon = filterByName(state.pokemon,filter);
  console.log(filteredPokemon);
  if (filteredPokemon.length > 0) {
    $.each(filteredPokemon,(index,pokemon) => {
      container.append(PokemonItem(pokemon,update));
    });
  } else {
    container.append($('<p>Pokemon no encontrado</p>'));
  }
}
