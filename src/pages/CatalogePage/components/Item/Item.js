import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, img, label, description, price }) => {
  return (
    <div className="item">
      <div>
        <img className="item-img" src={img} alt={label} />
      </div>
      <h3>{label}</h3>
      <p>{description}</p>
      <b>{price}</b>
      <div>
        <Link to={id.toString()} className="details">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Item;
