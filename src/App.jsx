import carsImg from "./assets/background/cars.jpg"
import Navbar from "./components/navbar/Navbar";
import Booking from "./components/booking/Booking";
import Promo from "./components/promo/Promo";
import TopCars from "./components/topCars/TopCars";
import StepsSection from "./components/guest/StepsSection";
import Features from "./components/features/Features";
export default function App() {
  return (
   <div>
      <Navbar />

      <div
        className="div1"
        style={{ backgroundImage: `url(${carsImg})`, height:'auto', width:'100%' }}
      >
        <Booking />
        <Promo />
      </div>
      <TopCars />

       <StepsSection />
       <Features/>
    </div>
  );
}