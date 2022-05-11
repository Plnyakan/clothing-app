import './cart-item.styles.scss';

import React ,{FC} from 'react'

type CartProps = {
    cartItem: {
      name: string;
      imageUrl: string;
      price: number;
      quantity: number;
    }
}

const CartItem: FC<CartProps> = ({ cartItem }) => {
    const { name, imageUrl, price , quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} X ${price}
        </span>
      </div>
      
    </div>
  )
}

export default CartItem;
