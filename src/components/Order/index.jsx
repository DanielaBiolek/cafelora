import { OrderItem } from '../OrderItem';
import './index.css';

export const Order = ({items}) => {

    return (
         <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>
          {items.data.length === 0? (
          <p className="empty-order">Zatím nemáte nic objednáno</p>) : (
          
            <div className="order__items">
            {items.data.map((item) => (
            <OrderItem name={item.name} image={`http://localhost:4000${item.image}`} key={item.name}/>
            ) )}
            </div>)}
        </div>
      </main>
    )

}