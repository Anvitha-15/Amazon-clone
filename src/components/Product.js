import React from 'react'
import "../css/Product.css";
import { useStateValue } from './StateProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({id, title, image, price, rating}) => {
    
    const [{basket}, dispatch] = useStateValue();

    console.log("Basket >>> ", basket);
    const addToBasket = () =>{
        // dispatch the item into the the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
            
        });

        toast.success('Successfully added to the cart!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="producy__price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>

            <img src={image} alt=""/>
            
            <button onClick={addToBasket}>Add to Basket</button>
            <ToastContainer theme='colored'/>
        </div>
    )
}

export default Product