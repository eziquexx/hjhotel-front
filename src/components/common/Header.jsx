import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/room">
        <button>Room View</button>
      </Link>
      <Link to="/special">
        <button>Special</button>
      </Link>
      <Link to="/reservation">
        <button>Reservation</button>
      </Link>
      <Link to="/community">
        <button>Community</button>
      </Link>
      <Link to="/payment">
        <button>Payment</button>
      </Link>
    </div>
  );
}