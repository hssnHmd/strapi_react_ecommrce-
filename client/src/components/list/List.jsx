import "./list.scss"
import Card from '../card/Card'
import useFetch from "../../hooks/UseFetch"

const List = ({catId, maxPrice, sorted,subCat}) => {
   const {data, err, loading} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=
        ${catId}
        ${subCat.map(item =>
                  `&[filters][sub_categories][id][$eq]=${item}`)}
                  &[filters][price][$lte]=${maxPrice}&sort=price:${sorted}`
    )

  return (
    <div className='list'>
        {
            data?.map((item) => (
                <Card item={item} key={item.id} />
            ))
        }
    </div>
  )
}

export default List