import secured from "../../assets/iconsFeature/secured.png";
import thumbsUp from "../../assets/iconsFeature/thumbs-up-star.png";
import anywhere from "../../assets/iconsFeature/anywhere-anytime.png";
import clock from "../../assets/iconsFeature/clock.png";
import './features.css'
const Features =()=>{
   return(
    <div className="align">
        <div className="text">
            <img src={secured} alt="secured" />
           <div>
             <h3>100%</h3>
            <p>Hassle free Secured Trip</p>
            </div>
        </div>

         <div className="text">
            <img src={thumbsUp} alt="thumb-up" />
            <div>
                <h3>25000+</h3>
             <p>Quality cars in the city</p>
            </div> 
        </div>

         <div className="text">
            <img src={anywhere} alt="anywhere" />
            <div>
            <h3>Delivery</h3>
            <p>Anywhere, Anytime</p>
            </div>  
        </div>

         <div className="text">
            <img src={clock} alt="clock" />
            <div>
             <h3>Endless</h3>
            <p>Pay by hour, drive limitless</p>
            </div>
        </div>
    </div>
   )
}

export default Features;