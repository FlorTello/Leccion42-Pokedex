'use strict';
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('.close').on('click',_=>{
     $('#modal1').modal('close');
    });
  });
         
const render = (root,data) => {
  root.empty();
  const wrapper = $('<div class="center-align wrapper"></div>');
  const update = function() {
    render(root);
  }
  wrapper.append(Header(update));
  if (state.selectedStation == null) {
    wrapper.append(Search(update));
  }
  root.append(wrapper);
  root.append(PokemonModal(update));
}

const state = {
  pokemon: null,
  pokemonActual: null,
  selectePokemon: {
                    id:null,
                    name:null,
                    description:null,
                    height:null,
                    weight:null,
                    category:null,
                    ability:null,
                    types:null,
                    debility:null,
                    src:null
                  }

};

$( _ => {
    $('.modal').modal();
        $('.close').on('click',_=>{
        $('#modal1').modal('close');
     });
  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}

    state.pokemon = json.pokemon_entries;
    const root = $('.root');
    render(root);
  });

});



// const express     = require('express');
// const bodyParser  = require('body-parser');
// const levelup     = require('levelup');
//
// const app = express();
// const db  = levelup('./data', {valueEncoding: 'json'});
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static('public'));
//
// const router = express.Router();
//
// router.get('/', (req, res) => {
//   res.json({ message: 'Hola soy la POKEAPI'});
// });
//
// router.get('/pokes',(req,res) => {
//   let movies = [];
//   db.createValueStream().on('data', (data) => {
//       movies.push(data);
//   }).on('end', _ => {
//       res.json(movies);
//   });
// });
//
// router.get('/pokes/:id',(req,res) => {
//   if (req.params.id) {
//     db.get(req.params.id,(err,movie) => {
//       if (err) return res.json({message: "Hubo un error al obtener el registro"});
//       res.json(movie);
//     });
//   }
// });
//
// app.use('/api',router);
//
// const port = process.env.PORT || 3000;
//
// app.listen(port, () => {
//   console.log('El server esta corriendo en el '+port+'!');
// });
