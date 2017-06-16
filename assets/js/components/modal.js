'use strict';

const PokemonModal = (pokemon,update) => {
  const modal = $('<div id="modal1" class="modal f-flexo">');
  const close = $('<h1 class="close right grey-text">&times</h1>');
  const modal_content = $('<div class="modal-content row">');
  const title_name = $('<h4 class="col s12 center-align ">Beeldrill</h4>');
  const col_img = $('<div class="col s5">');
  const img = $('<img src="http://serebii.net/art/th/10.png" alt="">');
  const col_info = $('<div class="col s7">');
  const col_description = $('<div class="col s12">');
  const p_description = $('<p class="center-align">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut aspernatur nihil, doloremque enim sit magnam vitae amet ipsam beatae. Eius doloremque quae quisquam vitae nemo fuga, fugit iste a odit!</p>');
  const col_caracteristicas = $(' <div class="col s10 teal lighten-1 item-carateristicas">');
  const p_altura = $('<p class="col s5 left-align white-text">Altuta <br> 10,0</p>');
  const p_categoria = $('<p class="col s5 left-align white-text">Categoria <br> 10,0</p>');
  const p_peso = $('<p class="col s5 left-align white-text">Peso <br> 10,0</p>');
  const p_habilidad = $('<p class="col s5 left-align white-text">Habilidad <br>10,0</p>');
  const p_sexo = $('<p class="col s12 left-align white-text">Altuta <br>10,0</p>');
  const col_tipo = $('<div class="col s12">');
  const h_tipo = $('<h6>Debilidad</h6>');
  const span_tipo = $('<span class="col s4 m-d fuego">Fuego</span>');
  const col_debilidad = $('<div class="col s12">');
  const h_debiliidad = $('<h6>Debilidad</h6>');
  const span_debilidad = $('<span class="col s4 m-d fuego">Fuego</span>');
  
  modal_content.append(title_name);
  col_img.append(img);
  modal_content.append(col_img);

  col_description.append(p_description);
  modal_content.append(col_description);

  col_caracteristicas.append(p_altura);
  col_caracteristicas.append(p_categoria);
  col_caracteristicas.append(p_peso);
  col_caracteristicas.append(p_habilidad);
  col_caracteristicas.append(p_sexo);
  modal_content.append(col_caracteristicas);
  
  modal.append(close);
  modal.append(modal_content);
  
//   const name = $('<h5>'+pokemon.pokemon_species.name+'</h5>');
//   const image = $(`<img class="movie-thumb" data-target="modal1" src="http://serebii.net/art/th/${pokemon.entry_number}.png" alt="${pokemon.pokemon_species.name}"/>`);
  // const district = $('<p>'+pokemon.district+'</p>');
  // const button = $('<button>Ir al mapa</button>');

  return modal;
}
