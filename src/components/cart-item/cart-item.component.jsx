import './cart-item.styles.scss';

const CartItem = ({cartItem : {name}}) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
}

export default CartItem;