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
    console.log(xhr);
    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};
