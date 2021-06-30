import App from "./App.css";
import ListOrder from "./ListOrder";

const Calculator=(props)=>{

    let money = props.money
    let order = props.order

    let ShowListOrder=()=>{
        if(!order || order.length <= 0){
            return <h4>ไม่มีสินค้าค่ะ</h4>
        }
        else{
            console.log("working")
            console.log(order)
            return order.map((od)=>{
                return <ListOrder key={od.id} order={od}/>
            })
        }
    }

    return(
        <div className="calculator">
            <h2>Cashier</h2>
            <hr/>
            <h2>ยอดรวมทั้งหมด : {money}</h2>
            <hr/>
            <h2>{ShowListOrder()}</h2>
        </div>
    )
}

export default Calculator;