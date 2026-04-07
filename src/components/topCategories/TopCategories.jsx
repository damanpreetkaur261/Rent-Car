import deliver from "../../assets/TopCategories-image/deliver.webp";
import rated from "../../assets/TopCategories-image/rated.webp";
import budget from "../../assets/TopCategories-image/budget.avif";
import suv from "../../assets/TopCategories-image/suv.avif";
import "./topCategories.css"
const TopCategories=()=>{
  return(
    <div className="back">
        <div>
            <h1 className="head">TOP CATEGORIES</h1>
        </div>
        
        <div>
            <div className="div1">
                <img src={deliver} alt="deliver" width="310px" height="200px"className="image1"/>
            <button className="btn">Delivery <span>↗</span></button>
            </div>
            
            <div className="div1">
                <img src={rated} alt="rate" width="310px" height="200px" />
                <button className="btn">Top Rated <span>↗</span></button>
            </div>
            
        </div>
        <div className="div1">
            <img src={budget} alt="budget" width="350px" height="400px"/>
            <button className="btn">Budget <span>↗</span></button>
        </div>
        <div className="div1">
            <img src={suv} alt="suv" width="350px" height="400px"/>
            <button className="btn">SUV <span>↗</span></button>
        </div>
    </div>
  )
}

export default TopCategories;