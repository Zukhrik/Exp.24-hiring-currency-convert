import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://cdn.cur.su/api'
})

export const httpGet = params =>
  httpClient({
    method: 'get',
    ...params
  })

export const httpPost = params =>
  httpClient({
    method: 'post',
    ...params
  })

export const httpPut = params =>
  httpClient({
    method: 'put',
    ...params
  })

export const httpPatch = params =>
  httpClient({
    method: 'patch',
    ...params
  })

export const httpDelete = params =>
  httpClient({
    method: 'delete',
    ...params
  })

export default httpClient