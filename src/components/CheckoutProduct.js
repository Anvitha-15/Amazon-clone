import React from 'react';
import "../css/CheckoutProduct.css";
import { useStateValue } from './StateProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutProduct = ({id, title, image, price, rating }) => {
  
    const [{ basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });

        toast.info('One item is removed from the cart!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
  
    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} />


        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
            <ToastContainer theme='colored'/>
        </div>

    </div>
  )
}

export default CheckoutProduct