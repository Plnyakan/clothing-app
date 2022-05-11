import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import{ CartContext } from '../../contexts/cart.context';

import './cart-dropdown.styles.scss';
import Button from '../common/button/button.component.tsx';
import CartItem from '../cart-item/cart-item.component.tsx'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {cartItems.map(item => (
                     <CartItem key={item.id} cartItem={item}/>
                     ))}
            </div>
        <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;