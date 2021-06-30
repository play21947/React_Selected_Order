import { useState } from 'react';
import './App.css';
import Header from './Header'
import DisplayProduct from './DisplayProduct';
import Calculator from './Calculator';

function App() {

  let [money, setMoney] = useState(0)
  let [order, setOrder] = useState([])
  let [cart, setCart] = useState(0)

  let products=[
    {
      id:1,
      name: "กระเพรา",
      price: 40,
      quantity: 0
    },
    {
      id:2,
      name: 'ไข่ต้ม',
      price: 20,
      quantity: 0
    },
    {
      id:3,
      name: 'หมูกรอบ',
      price: 50,
      quantity: 0
    },
    {
      id:4,
      name: "ยำหมูยอ",
      price: 40,
      quantity: 0
    },
    {
      id:5,
      name: 'ตำส้ม',
      price: 20,
      quantity: 0
    },
    {
      id:6,
      name: 'บิงซู',
      price: 50,
      quantity: 0
    }
  ]


  let onBuy=(product ,price)=>{
    let findOrder = order.find(order => order.product.id == product.id)
    if(findOrder){
      findOrder.quantity++;
    }
    else{
      order.push({product: product, quantity: 1})
    }
    setMoney(money + parseInt(price))
    console.log(order)
    setCart(cart = cart + 1)
  }

  return (
    <div className="App">
      <Header cart={cart}/>
      <Calculator money={money} order={order}/>
      <DisplayProduct products={products} onBuy={onBuy}/>
    </div>
  );
}

export default App;