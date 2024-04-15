import axios from 'axios'

const api = axios.create({
  baseURL: 'https://animatedhbd-nlpjsapi.onrender.com/api'
})

export default api
