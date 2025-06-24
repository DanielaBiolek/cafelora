import './index.css';

export const Layer = ({colour, label}) => {
    return (
         <div className="layer">
                      <div className="layer__color" style={{ backgroundColor: {colour} }} />
                      <div className="layer__label">{label}</div>
                    </div>

    )

}