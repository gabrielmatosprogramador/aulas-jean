import axios from 'axios'
import { API_URL, AXIOS_HEADERS, AXIOS_TIMEOUT } from './config.js'
const api = axios.create({
  baseURL: API_URL,
  timeout: AXIOS_TIMEOUT,
  headers: AXIOS_HEADERS,
})

export function buscaProdutoPorId(id) {
  return new Promise((resolve, reject) => {
    api
      .get(`/produtos/${id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })
}
export function salvaProduto(produto) {
  return new Promise((resolve, reject) => {
    if (!produto.id) {
      api
        .post('/produtos', produto)
        .then(() => resolve())
        .catch((error) => reject(error))
    } else {
      api
        .put(`/produtos/${produto.id}`, produto)
        .then(() => resolve())
        .catch((error) => reject(error))
    }
  })
}

export function tiraItem(produto) {
  return new Promise((resolve, reject) => {
    api
      .delete(`/produtos/${produto.id}`)
      .then(() => resolve())
      .catch((error) => reject(error))
  })
}
