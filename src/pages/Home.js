// import React from 'react';
import { useContext } from 'react';
import { Search } from "../components/Search"
import { Card } from "../components/Card"
import { GithubContext } from '../context/github/githubContext';

export const Home = () => {
  // const cards = new Array(15).fill('').map((_, i) => i)
  const {loading, users} = useContext(GithubContext)

  return (
  <>
    <Search/>
    <div className="row">
      {
        loading
        ? <p className="text-center">Loading...</p>
        : users.map(user => (
          <div key={user.id} className="col-sm-4 mb-4">
            <Card user={user}/>
          </div>
          ))
      }
    </div>
  </>
)}