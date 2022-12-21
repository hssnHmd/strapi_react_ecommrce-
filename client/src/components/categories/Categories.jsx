import "./categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                
                <Link to="/products/1">
                    <button>
                        Womnen
                    </button>
                </Link> 
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <Link to="/products/2">
                <button>
                        Men
                </button>
                    </Link> 
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/13933923/pexels-photo-13933923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <Link to="/products/3">
                <button>
                        New season
                </button>
                    </Link> 
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/12470437/pexels-photo-12470437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            <Link to="/products/4">
                        <button>
                                Accessoirs
                        </button>
                            </Link> 
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/5622859/pexels-photo-5622859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            <Link to="/products/5">
                        <button>
                                Sale
                        </button>
                            </Link> 
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button>
                    <Link to="/products/6">
                        Others
                    </Link> 
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories