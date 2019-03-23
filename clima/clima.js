const axios = require('axios');

//** Api key wather d8ec51f24af221d6f377cabf7c99ceb4 */

let clima = async (lat, lng) => {

    let dire = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d8ec51f24af221d6f377cabf7c99ceb4&units=metric`;
    
    //let encodeURL = encodeURI();

    let resp = await axios.get(dire);

    return resp.data.main.temp;
}


module.exports = {

clima

}