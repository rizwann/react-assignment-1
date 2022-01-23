import "./card.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div className="card">
      <div className="card-img">{user.name[0]}</div>
      <div className="card-info">
        <span className="name">{user.name}</span>
        <span className="username">
          <i>@{user.username}</i>
        </span>
        <span className="website">http://{user.website}</span>
      </div>

      <Link to={`/users/${user.id}`}>
        <Button text="MORE DETAILS" />
      </Link>
    </div>
  );
};

export default Card;
