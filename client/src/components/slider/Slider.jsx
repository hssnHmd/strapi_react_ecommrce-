import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import "./slider.scss"
import { useState } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }
    const data = [
        "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  return (
    <div className='slider'>
        <div className="sImages" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="sIcons">
            <div className="sIcon" onClick={prevSlide}>
                <WestIcon/>
            </div>
            <div className="sIcon" onClick={nextSlide}>
                <EastIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider