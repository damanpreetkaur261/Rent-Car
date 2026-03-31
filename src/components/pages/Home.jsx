import Navbar from "../navbar/Navbar";
import Booking from "../booking/Booking";
import Promo from "../promo/Promo";
import TopCars from "../topCars/TopCars";
import "./Home.css";
import carsImg from "../../assets/cars.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subscription from "../booking/Subscription";
import WeekdayPass from "../booking/WeekdayPass";
import DailyDrives from "../booking/DailyDrives";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div
        className="div1"
        style={{ backgroundImage: `url(${carsImg})` }}
      > <BrowserRouter>
       <Routes>
        <Route path="/" element={<DailyDrives/>}/>
        <Route path="/subscription" element={<Subscription/>}/>
        <Route path="/weekday" element={<WeekdayPass/>}/>
       </Routes>
      </BrowserRouter>
        <Booking />
        <Promo />
      </div>

      <TopCars />
    </div>
  );
};

export default Home;