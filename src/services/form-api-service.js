import config from '../config'
import TokenService from './token-service'

function prepareFormFields(fields) {
  return fields.map(({
    id,
    type,
    label
  }) => {
    return { id, type, label }
  });
};

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
          ? res.json().then(err => Promise.reject(
            {
              status: res.status,
              message: err
            }
          ))
          : res.json()
      )
  },
  postForm({
    name,
    description,
    fields
  }) {
    const newForm = {
      name,
      description,
      fields: prepareFormFields(fields)
    }
    return fetch(`${config.API_ENDPOINT}/form`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(newForm)
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
  },
  patchForm(formId, {
    name,
    description,
    fields
  }) {
    const update = {
      name,
      description,
      fields: prepareFormFields(fields)
    }
    return fetch(`${config.API_ENDPOINT}/form/${formId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(update)
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

export default FormApiService;
