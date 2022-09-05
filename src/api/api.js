import axios from 'axios'
const BASE_URL = process.env.BASE_URL
const ACCESS_KEY = process.env.ACCESS_KEY


export default {
    getPictures(collection = "african"){
        console.log(collection);
        return axios.get(`${BASE_URL}/search/collections?client_id=${ACCESS_KEY}&query=${collection}&page=12&per_page=4`)
    }
}
