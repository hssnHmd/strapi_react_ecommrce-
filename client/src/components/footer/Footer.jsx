import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="fWrapper">
        <div className="fTop">
          <div className="fItems">
            <h3>Categories</h3>
            <span className="fItem">Women</span>
            <span className="fItem">Men</span>
            <span className="fItem">Shoes</span>
            <span className="fItem">Accessoirs</span>
            <span className="fItem">New arrivals</span>
          </div>
          <div className="fItems">
            <h3>Links</h3>
            <span className="fItem">Women</span>
            <span className="fItem">Men</span>
            <span className="fItem">Shoes</span>
            <span className="fItem">Accessoirs</span>
            <span className="fItem">New arrivals</span>
          </div>
          <div className="fItems">
            <h3>About</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Voluptatem quos, quas exercitationem recusandae 
               voluptate ipsam error deleniti quia alias iure?</p>
          </div>
          <div className="fItems">
            <h3>Contact</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum anim
              i beatae reiciendis suscipit odit aut perspiciatis possimus, laboriosam
               unde et expedita facere numquam minus voluptatibus tenetur neque 
               quae voluptatum? Minima?</p>
          </div>
        </div>
        <div className="fBottom">
          <div className="fBottomLeft">
            <h2 className="fBottomLeftTitle">HSSNsTORE</h2>
            <span>@ Copiright 2023, All right reserved</span>
          </div>
          <div className="fBottomRight">
            <img src="/img/payment.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer