// import React from 'react';
import { Fragment } from "react"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { GithubContext } from "../context/github/githubContext"
import { Repos } from "../components/Repos"

export const Profile = ({match}) => {
  const urlName = match.params.name
  const {loading, getUser, getRepos, user, repos } = useContext(GithubContext)
  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Loading...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    public_repos, public_gists,
    following
  } = user

  return (  
    <section>
      <Link to={'/'} className="btn btn-link">Home</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img 
                src={avatar_url} 
                alt={name} 
                style={{width: 150}}
              />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              }
              <a
                href={html_url}
                target="_blank"
                className="btn btn-dark" 
                rel="noreferrer"
              >Open profile</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}
                {company && <li>
                  <strong>Company: </strong> {company}
                </li>}
                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>
              <div className="">Followers: {followers}</div>
              <div className="">Following: {following}</div>
              <div className="">Repos: {public_repos}</div>
              <div className="">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </section>
  )
}