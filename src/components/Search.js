import { useContext } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const Search = () => {

  const {show} = useContext(AlertContext)

  const onSubmit = event => {
    if (event.key === 'Enter') {
      show('This is alert', 'warning')
    }
  }

  return (
    <div className='form-group mb-1'>
      <input
        type='text'
        className='form-control'
        placeholder='Nickname'
        onKeyPress={onSubmit}
      />
    </div>
  )
}