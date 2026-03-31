import "./booking.css";
import { Link, Routes, Route } from "react-router-dom";
import DailyDrives from "./DailyDrives";
import Subscription from "./Subscription";
import WeekdayPass from "./WeekdayPass";

const BookingCard = () => {
  return (
    <div className="card">
      <div className="tabs">
        <nav>
          <Link to="/">Daily Drives</Link>
          <Link to="/subscription">Subscription</Link>
          <Link to="/weekday">Weekday Pass</Link>
        </nav>
      </div>

    
      <div className="tab-content">
        <Routes>
          <Route path="/" element={<DailyDrives />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/weekday" element={<WeekdayPass />} />
        </Routes>
      </div>
    </div>
  );
};

export default BookingCard;