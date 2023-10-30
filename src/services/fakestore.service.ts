import axios from 'axios'

const fakeApi = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

export const getData = () => {
  return fakeApi.get('/products')
}
