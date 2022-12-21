import "./products.scss"
import List from '../../components/list/List'
import { useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/UseFetch"

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sorted, setSorted] = useState(undefined)
  const [selectedSubCat, setSelectedSubCat] = useState([])

  const {data, loading, err} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked
    setSelectedSubCat(isChecked ? [...selectedSubCat, value] : selectedSubCat.filter((item) => item!== value))
  }
  console.log(selectedSubCat)

  return (
    <div className='products'>
      <div className="p-left">
        <div className="p-left_filterItem">
          <h2>Product categories</h2>
          {
            data?.map((item) => (
              <div className="filter-input" key={item.id}>
                <input type="checkbox"  id={item.id} value={item.id} onChange={handleChange} />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))
          }
        </div>
        <div className="p-left_filterItem">
          <h2>Filter by price</h2>
          <div className="filter-input">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="p-left_filterItem">
          <h2>Sorted by</h2>
          <div className="filter-input"> 
            <input type="radio" id='asc' value="asc" name='price' onChange={(e) => setSorted("asc")} />
            <label htmlFor="asc">price (Lowest first )</label>
          </div>
          <div className="filter-input"> 
            <input type="radio" id='desc' value="desc" name='price' onChange={(e) => setSorted("desc")} />
            <label htmlFor="desc">price (highest first )</label>
          </div>
        </div>
      </div>
      <div className="p-right">
        <img className='categoryImg' src="https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <List catId={catId} maxPrice={maxPrice} sorted={sorted} subCat={selectedSubCat}/>
      </div>
    </div>
  )
}

export default Products