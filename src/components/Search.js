import { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext"
import { GithubContext } from "../context/github/githubContext"

export const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') return

    github.clearUsers()
    alert.hide()
    
    if (value.trim()) {
      github.search(value.trim())
    } else {
      alert.show('User nickname is required!', 'warning')
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