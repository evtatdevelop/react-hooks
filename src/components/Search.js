import { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const Search = () => {
  const [value, setValue] = useState('')
  const {show} = useContext(AlertContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') return

    if (value.trim()) {
      console.log(`request with ${value}...`);
    } else {
      show('User nickname is required!', 'warning')
    }
  }

  return (
    <div className='form-group mb-1'>
      <input
        type='text'
        className='form-control'
        placeholder='Nickname'
        onKeyPress={onSubmit}
        value={value}
        onChange={event => setValue(event.target.value)} 
      />
    </div>
  )
}