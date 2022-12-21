import { useEffect, useState } from "react"
import Card from "../card/Card"
import "./featuredProduct.scss"
import axios from 'axios'
import useFetch from "../../hooks/UseFetch"

const FeaturedProduct = ({type}) => {
   const {data, err, loading} = useFetch(`/products?[filters][type][$eq]=${type}&populate=*`)
    console.log({data})
  return (
    <div className="featured">
        <div className="featTop">
            <h2>{type} products</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, 
                earum consequuntur aut excepturi error itaque culpa possimus 
                maxime eaque sequi.</p>
        </div>
        <div className="featBottom"> 
        {
            loading ? "loading" : data?.map((item) => (
                    <Card item={item}  key={item.id}/>
                ))
        }
            
        </div>
    </div>
  )
}

export default FeaturedProduct