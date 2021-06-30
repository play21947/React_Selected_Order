import App from "./App.css"
import Product from "./Product"

const DisplayProduct =(props)=>{

    let products = props.products
    let onBuy = props.onBuy

    return(
        <div>
            <h2 className="header-item">Items</h2>
            <div className="grid">
                {products.map((item)=>{
                    return <Product key={item.id} products={item} onBuy={onBuy}/>
                })}
            </div>
        </div>
    )
}

export default DisplayProduct