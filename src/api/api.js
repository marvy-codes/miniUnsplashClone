import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASE_URL
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY

console.log(BASE_URL + " " + ACCESS_KEY)
export default {
    getPictures(collection = "african"){
        return (
            axios.get(`${BASE_URL}/search/collections?client_id=${ACCESS_KEY}&query=${collection}&page=12&per_page=6`)
        )
    }
}
 