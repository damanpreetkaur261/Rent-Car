import secured from "../../assets/iconsFeature/secured.png";
import thumbsUp from "../../assets/iconsFeature/thumbs-up-star.png";
import anywhere from "../../assets/iconsFeature/anywhere-anytime.png";
import clock from "../../assets/iconsFeature/clock.png";
import './features.css'
const Features =()=>{
   return(
    <div className="align">
        <div>
            <img src={secured} alt="secured" />
            <h3>100%</h3>
            <p>Hassle free Secured Trip</p>
        </div>

         <div>
            <img src={thumbsUp} alt="thumb-up" />
            <h3>25000+</h3>
            <p>Quality cars in the city</p>
        </div>

         <div>
            <img src={anywhere} alt="anywhere" />
            <h3>Delivery</h3>
            <p>Anywhere, Anytime</p>
        </div>

         <div>
            <img src={clock} alt="clock" />
            <h3>Endless</h3>
            <p>Pay by hour, drive limitless</p>
        </div>
    </div>
   )
}

export default Features;