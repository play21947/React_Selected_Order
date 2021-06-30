const ListOrder=(props)=>{

    let order = props.order

    return(
        <div>
            <h4>{order.product.name} X {order.quantity} = {order.product.price * order.quantity}</h4>
        </div>
    )
}

export default ListOrder