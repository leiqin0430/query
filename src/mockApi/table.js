import axios from 'axios'

let base = ''

export const login = params => { return axios.get(`${base}/table/list`, { params: params }) }
