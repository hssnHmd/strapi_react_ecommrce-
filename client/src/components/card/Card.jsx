import "./card.scss";
import {Link} from "react-router-dom"

const Card = ({item}) => {
  
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className='card'>
          <div className="cardImg">
              {item.attributes?.isNew && (<span>New Season</span>)}
              <img src={process.env.REACT_APP_UPLOAD_URL  +item.attributes.img.data.attributes.url} alt={item.attributes.title} className="cardImg1" />
              <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img2.data.attributes.url ? process.env.REACT_APP_UPLOAD_URL +item.attributes.img2.data.attributes.url : null} alt="" className="cardImg2" />
          </div>
          <h2>{item.attributes.title}</h2>
          <div className="cardPrice">
              <h3>${item.attributes.oldPrice ? item.attributes.oldPrice : item.attributes.price + 20}</h3>
              <h3>${item.attributes.price}</h3>
          </div>
      </div>
    </Link>
  )
}

export default Card