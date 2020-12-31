import config from '../config'
import TokenService from './token-service'

const FormApiService = {
  getForms() {
    return fetch(`${config.API_ENDPOINT}/form`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default FormApiService;
