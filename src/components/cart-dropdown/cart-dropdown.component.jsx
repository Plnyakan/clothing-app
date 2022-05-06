import './cart-dropdown.styles.scss';
import Button from '../common/button/button.component.tsx';
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {[].map(item => <CartItem cartItem={item}/>)}
            </div>
        <Button>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;