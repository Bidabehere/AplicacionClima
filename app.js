const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima');

const argv = require('yargs')
.options({
direccion: {

    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true
}
}).argv;





lugar.getLugar(argv.direccion)
.then( resp => {
  //  console.log(resp);
    clima.clima(resp.lat, resp.lng)
.then( res => {
console.log(`La temperatura en la ciudad ${argv.direccion} es ${res}`);
})
.catch(err => {
console.log(err);
})

})
.catch( err => {
    console.log(err);
});

/*
clima.clima(resp.lat, resp.lng)
.then( res => {
console.log(res);
})
.catch(err => {
console.log(err);
})*
*/