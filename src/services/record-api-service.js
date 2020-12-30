import config from '../config'
import TokenService from './token-service'

const RecordApiService = {
  getRecords() {
    return fetch(`${config.API_ENDPOINT}/record`, {
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

export default RecordApiService;
