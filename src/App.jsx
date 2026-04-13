import carsImg1 from "./assets/background/cars-image1.jpg";
import carsImg2 from "./assets/background/cars-image2.jpg";
import carsImg3 from "./assets/background/cars-image3.jpg";
import Navbar from "./components/navbar/Navbar";
import Booking from "./components/booking/Booking";
import Promo from "./components/promo/Promo";
import TopCars from "./components/topCars/TopCars";
import StepsSection from "./components/guest/StepsSection";
import Features from "./components/features/Features";
import { useState,useEffect } from "react";
import TopCategories from "./components/topCategories/TopCategories";
import PerfectCar from "./components/perfectCar/PerfectCar";
import SelfDrive from "./components/selfDrive/SelfDrive";
import RecentBlog from "./components/recentBlog/RecentBlog";
import ZoomAround from "./components/zoomAround/ZoomAround";
import './App.css';

export default function App() {
  const images=[carsImg1,carsImg2,carsImg3];
  const [index,setIndex]=useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
     return () => clearInterval(interval);
  }, []);

  return (
   <div>
      <Navbar />

      <div
        className="div1"
        style={{ backgroundImage: `url(${images[index]})`,backgroundSize:"cover", height:'auto', width:'100%' }}
      >
        <Booking />
        <Promo />
      </div>
      <TopCars />
       <StepsSection />
       <Features/>
       <TopCategories/>
       <PerfectCar/>
      <SelfDrive/>
      <RecentBlog/>
      <ZoomAround/>
    </div>
  );
}