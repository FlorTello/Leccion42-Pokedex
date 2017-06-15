// const levelup   = require('levelup');
// const leveldown = require('leveldown');
// const data      = require('./http://pokeapi.co/api/v2/pokemon-species/1/');
//
// // leveldown.destroy('./data', function (err) { console.log('BD Destruida') });
//
// const db  = levelup('./http://pokeapi.co/api/v2/pokemon-species/1/', {valueEncoding: 'json'});
//
// // data.movies.forEach((movie) => {
// //   const id = movie.nombre.toLowerCase().split(" ").join("-");
// //   db.put(id,movie,(err) => {
// //     console.log("pelicula: "+movie.nombre + " importada");
// //   });
// // });


'use strict';


const getJSON = (url, cb) => {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {

    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }
    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

const obtenerNombre = (url,id) =>{
    getJSON('http://pokeapi.co/api/v2/'+url+'/'+id, (err, json) => {
      
      if (err) { return alert(err.message);}
        state.pokemonActual = json;
      if(url === 'pokemon'){
        state.selectePokemon.id = json.id;
        state.selectePokemon.name = json.name;
        state.selectePokemon.height = json.height;
        state.selectePokemon.weight = json.weight;
        state.selectePokemon.abilities = json.abilities;
        state.selectePokemon.types = json.types;
        state.selectePokemon.src = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/0'+json.id+'.png'
        // state.pokemonActual.types[0].type.name
      }else{
        state.selectePokemon.description = json.flavor_text_entries[3].flavor_text;
        state.selectePokemon.category = json.genera[2].genus;
        
      }
      
    });
}
