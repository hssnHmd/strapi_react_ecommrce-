import { DeleteOutline } from '@mui/icons-material'
import "./shoppingCart.scss"
import {useDispatch, useSelector} from "react-redux"
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

const ShoppingCart = () => {
    const products = useSelector(state => state.cart.products)
    const total = () => {
        let tot = 0
        products.forEach(element => {
            tot += element.qty * element.price
        });
        return tot.toFixed(2)
    }

    const dispatch = useDispatch()
    const stripePromise = loadStripe('pk_test_51JTRl4FYlTl0xhksEHfThTVRYBAuyrvBZAzqaVoP9cietpOvvpoWsWMWdhnBbBe8g5c53iBZ8l9R0TJ9KZJMJBKF00pDMsrcxy');
    // const data = [
    //     {
    //         id:1,
    //         img: "https://images.pexels.com/photos/9203983/pexels-photo-9203983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         img1: "https://images.pexels.com/photos/14344657/pexels-photo-14344657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         title: "lorem ipsum",
    //         desc:"lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam tempore fugiat ipsam atque Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam tempore fugiat ipsam atque",
    //         isNew: true,
    //         oldPrice: 150,
    //         price : 120,
    //     },
    //     {
    //         id:2,
    //         img: "https://images.pexels.com/photos/14344798/pexels-photo-14344798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         title: "lorem ipsum",
    //         desc:"lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam tempore fugiat ipsam atque Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam tempore fugiat ipsam atque",
    //         isNew: false,
    //         oldPrice: 50,
    //         price : 20,
    //     },
    // ]
    const handleCheckout =  async () => {
        try {
            const stripe = await stripePromise;
            
            const res = await makeRequest.post("/orders", {products})
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='shoppingCart'>
        <h1>Products in your cart</h1>
        {
            products?.map((item) => (
                <div className='sCart-item' key={item.id}>
                    <img src={item?.img} alt={item.title} />
                    <div className="sCart-item_details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}</p>
                        <span> {item.qty} x ${item.price}</span>
                    </div>
                    <DeleteOutline className='s-delete_btn' onClick={() => dispatch(removeItem(item.id))}/>
                </div>
            ))
        }
        <div className="sCart-totl">
            <span>Subtotal</span>
            <span>${total()}</span>
        </div>
        <button onClick={handleCheckout}>Proceed to checkout </button>
        <span className='s-reset' onClick={() => dispatch(resetCart())}>reset</span>
    </div>
  )
}

export default ShoppingCart