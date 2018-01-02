import axios from 'axios'

let base = ''

export const dictList = params => { return axios.get(`${base}/dict/list`, { params: params }) }
