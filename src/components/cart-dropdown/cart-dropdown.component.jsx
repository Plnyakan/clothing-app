import {useContext} from 'react';

import{ CartContext } from '../../contexts/cart.context';

import './cart-dropdown.styles.scss';
import Button from '../common/button/button.component.tsx';
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {cartItems.map(item => (
                     <CartItem key={item.id} cartItem={item}/>
                     ))}
            </div>
        <Button>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;