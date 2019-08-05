import store from '../store'
import axios from 'axios'

export function mainContent () {
  axios.get("/products").then(rsp => {
    store.dispatch({
      type: 'MAINCONTENT',
      payload: rsp.data
    })
  })
}