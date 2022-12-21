import { FavoriteBorderOutlined, KeyboardArrowDown, PersonOutlineOutlined, SearchOutlined, ShoppingCartOutlined} from '@mui/icons-material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCart from '../shopingCart/ShoppingCart';
import "./navbar.scss"

const Navbar = () => {
    const [openCart, setOpenCart] = useState(false)
    const products = useSelector(state => state.cart.products)
  return (
    <div className='navbar'>
        <div className="navbarWrapper">
            <div className="left">
                <div className="item">
                    <img src="/img/en.png" alt="" />
                    <KeyboardArrowDown/>
                </div>
                <div className="item">
                    <span>USA</span>
                    <KeyboardArrowDown/>
                </div>
                <div className="item">
                    <Link to="/products/1">USWomenA</Link > 
                </div>
                <div className="item">
                    <Link to="/products/2">Men</Link > 
                </div>
                <div className="item">
                    <Link to="/products/3">Children</Link > 
                </div>
            </div>
            <div className="center">
                <Link to="/">HSSNsTORE</Link > 
            </div>
            <div className="right">
                <div className="item">
                    <Link to="/">About</Link > 
                </div>
                <div className="item">
                    <Link to="/">Contact</Link >              
                </div>
                <div className="item">
                    <Link to="/">HssnStoreStore</Link >                
                </div>
                <div className='icons'>
                    <SearchOutlined/>
                    <PersonOutlineOutlined/>
                    <FavoriteBorderOutlined/>
                    <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
                        <ShoppingCartOutlined/>
                        <span>{products.length}</span>
                    </div>
                </div>
            </div>
        </div>
                {
                    openCart && (<ShoppingCart/>)
                }
    </div>
  )
}

export default Navbar