import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://us-central1-fir-33655.cloudfunctions.net/api'
})
export default instance
// http://localhost:5001/fir-33655/us-central1/api