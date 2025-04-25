import axios from "axios"
const API_KEY = 'AIzaSyDgLmpKCzveJf1_yuA0fUzzhy0WEcgvZA'

const getCoordinatesForAddress = async (address) => {
    return{
        lat: 40.784474,
        long: -73.9871516
    }
}


module.exports = getCoordinatesForAddress