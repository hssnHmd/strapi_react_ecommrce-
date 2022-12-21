import React from 'react'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'
import FeaturedProduct from '../../components/featuredProduct/FeaturedProduct'
import Slider from '../../components/slider/Slider'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProduct type="featured" />
      <Categories/>
      <FeaturedProduct type="trending" />
      <Contact/>
    </div>
  )
}

export default Home