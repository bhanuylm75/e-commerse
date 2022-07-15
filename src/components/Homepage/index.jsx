import { Link } from "react-router-dom"
import "./index.css"
const items=[
  {
    "id": 2,
    "title": "Jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 1,
    "title": "Hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  
  {
    "id": 3,
    "title": "Sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 5,
    "title": "Mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  },
  {
    "id": 4,
    "title": "Womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  }
  
]

const Home=()=>{
  return(
    <div className="container">
      {items.map((eachitem,index)=>(
          <div key={eachitem.id} className={`categories  ${eachitem.title}`} style={{ backgroundImage: `url(${eachitem.imageUrl})` }}>
            <Link className="inner-con" to={`shop/${eachitem.title}${index}`}>
              <div className="body">
                <h2>{eachitem.title}</h2>
                <p>Shop Now</p>
              </div>
            </Link>
          </div>
      ))}
    </div>

  )
}
export default Home
