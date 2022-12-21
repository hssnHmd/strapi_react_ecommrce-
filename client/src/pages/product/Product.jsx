import React, { useState } from 'react';
import "./product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/UseFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState("img")
  const [qty, setQty] = useState(1)

  const {data, err, loading} = useFetch(`/products/${id}?populate=*`)

  const dispatch = useDispatch()

  

  // const images = [
    // "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  // ]
  return (
    <div className='product'>
      <div className="p-left">
        <div className="pImages">
          <img src={process.env.REACT_APP_UPLOAD_URL  +data?.attributes?.img?.data?.attributes?.url} alt="" onClick={() => setSelectedImg("img")}/>
          <img src={process.env.REACT_APP_UPLOAD_URL  +data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={() => setSelectedImg("img2")} />
        </div>
        <div className="pMaimImg">
          <img src={process.env.REACT_APP_UPLOAD_URL  +data.attributes?.[selectedImg].data.attributes.url} alt="" />
        </div>
      </div>
      <div className="p-right">
        <h2>{data?.attributes?.title}</h2>
        <span  className='p-right_price'>$ {data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className='p-right_quantity'>
          <button onClick={()=> setQty(prev => (prev + 1 === 1 ?  1 : prev -1))}>-</button>
          <span>{qty}</span>
          <button onClick={()=> setQty(prev => prev + 1)}>+</button>
        </div>
        <button className='p-right_addBtn' onClick={() => dispatch(addToCart({
            id:data?.id,
            title:data?.attributes?.title,
            desc:data?.attributes?.desc,
            img:process.env.REACT_APP_UPLOAD_URL  +data?.attributes?.img?.data?.attributes?.url,
            price:data?.attributes?.price,
            qty

        }))}>
           <AddShoppingCartIcon/> Add to cart
        </button>
        <div className="p-others_links">
          <div className="p-others_links_item"> 
            <FavoriteBorderIcon />
            <span>Add to wish List</span>
          </div>
          <div className="p-others_links_item"> 
            <BalanceIcon />
            <span>Add to comapqre</span>
          </div>
        </div>
        <div className="p-info">
          <span> vendor : Polo</span>
          <span> Product Type : {data?.attributes?.type}</span>
          <span> Tag : T-shirt , Men , Top</span>
        </div>
        <hr />
        <div className="p-info">
          <span> DESCRIPTION</span> 
        </div>
        <hr />
        <div className="p-info">
          <span> ADDITIONNAL INFORMATION</span> 
        </div>
        <hr />
        <div className="p-info">
          <span> FAQ</span> 
        </div>
      </div>
    </div>
  )
}

export default Product