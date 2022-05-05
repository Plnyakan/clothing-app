import {useContext} from 'react'

import {ReactComponent as ShoppingIcon} from '../../assest/shopping-bag.svg'
import './cart-icon.styles.scss'

import { CartContext }  from '../../contexts/cart.context'

const CartIcon = () => {
    const {isCartOpen ,setIsCartOpen } = useContext(CartContext);

    const toggleisCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div  className="cart-icon-container" onClick={toggleisCartOpen}>
            <ShoppingIcon  className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
};

export default CartIcon;