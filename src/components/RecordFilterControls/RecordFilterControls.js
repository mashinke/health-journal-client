import React from 'react';
import FormSelect from '../FormSelect/FormSelect'

function handleFormIdFilterChange(dispatch) {
  return function (forms) {
    console.log(forms)
    const formId = forms.map(form => form.id)
    dispatch(
      {
        type: 'FILTER_RECORDS',
        payload: {
          formId
        }
      }
    )
  }
}

export default function RecordFilterControls(props) {
  return (
    <section>
      <h3>Filter Selection</h3>
      {
        props.forms.length > 0 && <div>
          <FormSelect
            handleSelectedItemsChange={handleFormIdFilterChange(props.dispatch)}
            forms={
              props.forms.map(({ id, name }) => {
                return {
                  id,
                  name
                }
              })
            }
          />
        </div>
      }
    </section >
  )
}