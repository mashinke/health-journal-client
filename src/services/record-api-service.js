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
          ? res.json().then(err => Promise.reject(
            {
              status: res.status,
              message: err
            }
          ))
          : res.json()
      )
  },
  postRecord(record) {
    return fetch(`${config.API_ENDPOINT}/record`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(record)
    }).then(res =>
      (!res.ok)
        ? res.json().then(err => Promise.reject(
          {
            status: res.status,
            message: err
          }
        ))
        : res.json()
    )
  }
}

export default RecordApiService;
