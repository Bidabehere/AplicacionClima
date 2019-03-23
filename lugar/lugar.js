
const axios = require('axios');


const getLugar = async(direccion) => {
let encodeURL = encodeURI(direccion);

let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=AIzaSyD5VC7EGruUymH3vkTgDQpG2QHzRQEMEjI`);

if (resp.data.status === "ZERO_RESULTS"){
throw new Error(`No hay un resultado para la ciudad ${direccion}`)
}

    let location = resp.data.results[0];
    let latitud = location.geometry.location.lat;
    let longitud = location.geometry.location.lng;
    

    return {
        direccion: location.formatted_address,
        lat: latitud,
        lng: longitud
    }
}






module.exports = {
    getLugar

}
