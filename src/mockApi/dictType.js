import axios from 'axios'

let base = ''

export const dictList = params => { return axios.get(`${base}/dictType/list`, { params: params }) }
