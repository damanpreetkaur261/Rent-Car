import "./booking.css";
import { Link } from "react-router-dom";
const BookingCard = () => {
  return (
    <div className="card">
      <div className="tabs">
        {/* <span className="active">Daily Drives</span>
        <span>Subscription</span>
        <span>Weekday Pass</span> */}
        <nav>
          <Link to="/">Daily Drives</Link>
          <Link to="/subscription">Subscription</Link>
          <Link to="/weekday">Weekday Pass</Link>
        </nav>
      </div>
    </div>
  );
};

export default BookingCard;