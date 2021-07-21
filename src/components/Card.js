import { Link } from "react-router-dom"

export const Card = () => (
  <div className="card">
    <img src={"https://picsum.photos/100"} className="card-img-top" alt={"LoremIMG"}></img>  
    <div className="card-body">
      <h5 className="card-title">React JS</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to={`/profile/${'evtatdevelop'}`} className="btn btn-primary">Open</Link>
    </div>
  </div>  
)