import { useReducer } from "react";
import { GithubContext } from "./githubContext";
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types";
import { GithubReducer } from "./githubReducer";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const base = 'https://api.github.com';
const withCreds = url => `${base}${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

export const GithubState = ({children}) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }
  const [state, dispatch] = useReducer(GithubReducer, initialState)
  
  const clearUsers = () => dispatch({type: CLEAR_USERS})
  
  const getRepos = async name => {
    setLoading()
    const response = await axios.get(
      withCreds(`/users/${name}/repos?per_page=5&`)
    )
    dispatch({
      type: GET_REPOS,
      payload: response.data
    })
  }
  
  const getUser = async name => { 
    setLoading()
    const response = await axios.get(
      withCreds(`/users/${name}?`)
    )
    dispatch({
      type: GET_USER,
      payload: response.data
    })
  }
  
  const search = async value => {
    setLoading()
    const response = await axios.get(
      withCreds(`/search/users?q=${value}&`)
    )
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items
    })
  }

  const setLoading = () => dispatch({type: SET_LOADING})

  const { user, users, loading, repos } = state
  return (
    <GithubContext.Provider value={{
      clearUsers, getRepos, getUser, search, setLoading,
      user, users, loading, repos
    }}>
      {children }
    </GithubContext.Provider>
  )
}