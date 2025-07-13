import { Layer } from '../Layer';
import './index.css';


const urlImage = "http://localhost:4000"
export const Drink = ({ name, image, layers, ordered, id}) => {

    return (
        <div className="drink">
                <div className="drink__product">
                  <div className="drink__cup">
                    <img src={`http://localhost:4000${image}`} />
                  </div>
                  <div className="drink__info">
                    <h3>{name}</h3>
                    {layers.map((layer) => (
                    <Layer color={layer.color} label={layer.label} key={layer.label}/>))}
                  </div>
                </div>
                <form className="drink__controls" data-id={id} data-ordered={ordered}>
                  <input type="hidden" className="order-id" value="1" />
                  <button  className={ordered ? "order-btn order-btn--ordered" : "order-btn"}>
                    {!ordered ? "Objednat" : "Zrušit"}
                  </button>
                </form>
              </div>
    )
}
