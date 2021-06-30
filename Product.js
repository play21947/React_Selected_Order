const Product=(props)=>{

    let products = props.products
    let onBuy = props.onBuy

    return(
        <div className='item'>
            <h2>{products.name}</h2>
            <hr/>
            <h2>{products.price} ฿</h2>
            <hr/>
            <button value={products.price} onClick={(e)=>{
                onBuy(products ,e.target.value)
            }} className="btn-buy">สั่งซื้อ</button>
        </div>
    )
}

export default Product;