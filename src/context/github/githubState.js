import { useReducer } from "react";
import { GithubContext } from "./githubContext";
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types";
import { GithubReducer } from "./githubReducer";

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

    dispatch({
      type: GET_REPOS,
      payload: []
    })
  }
  
  const getUser = async name => { 
    setLoading()
    
    dispatch({
      type: GET_USER,
      payload: {}
    })
  }
  
  const search = async value => {
    setLoading()

    dispatch({
      type: SEARCH_USERS,
      payload: []
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