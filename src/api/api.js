import axios from 'axios'
const BASE_URL = process.env.BASE_URL


export default {
    getPictures(collection = "african"){
        return axios.get(`${BASE_URL}/search/collections?client_id=ZXaM2mCLBFXR3X1Cf-PjYSTijKgYGl2LHVlztgdVT70&query=${collection}&page=90`)
    }
}