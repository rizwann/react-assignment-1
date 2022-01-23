import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../button/Button";
import "./cardDetails.css";

const CardDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const responseData = await response.json();
      setUser(responseData);
    };
    fetchData();
  }, [id]);

  return (
    <div className="card-details">
      <div className="items">
        <h1 style={{ textAlign: "center" }}>{user.name}</h1>
        <div className="user-img">{user.name ? user.name[0] : "!!"}</div>

        <div className="contents">
          <div className="lists">
            <span className="list">- Username: </span> @{user.username}
          </div>

          <div className="lists">
            <span className="list">- Email: </span> {user.email}
          </div>
          <div className="lists">
            <span className="list">- Phone: </span> {user.phone}
          </div>
          <div className="lists">
            <span className="list">- Company: </span> {user?.company?.name}
          </div>
          <div className="lists">
            <span className="list">- Website: </span> http://{user.website}
          </div>
          <div className="lists">
            <span className="list">- Address: </span>
            <ul>
              <li>Street: {user?.address?.street}</li>
              <li>Suite: {user?.address?.suite}</li>
              <li>City: {user?.address?.city}</li>
              <li>Zipcode: {user?.address?.zipcode}</li>
            </ul>
          </div>
        </div>
        <Link to="/" className="btn">
          <Button text="HOME" />
        </Link>
      </div>
    </div>
  );
};

export default CardDetails;
