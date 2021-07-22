// import React from 'react';"
import { Search } from "../components/Search"
import { Card } from "../components/Card"

export const Home = () => {
  const cards = new Array(15).fill('').map((_, i) => i)
  // console.log(cards);

  return (
  <>
    <Search/>
    <div className="row">
      {cards.map((i) => 
        <div key={i} className="col-sm-4 mb-4">
        <Card/>
      </div>
      )}
    </div>
  </>
)}