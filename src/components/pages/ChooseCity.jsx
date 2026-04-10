import "./chooseCity.css";

const ChooseCity=()=>{
    return(
        <div>
            <center>
                <h1>Choose City</h1>
                 <input type="text" />
                <h3>Top Cities</h3>
            </center>
            <div className="space">
                <div>
                   <img src="src\assets\cities\Bangalore.svg" alt="bangalore" /> 
                   <p>Bangalore</p>
                </div>
                <div>
                     <img src="src\assets\cities\Chennai.svg" alt="chennai" />
                     <p>Chennai</p>
                </div>
                <div>
                    <img src="src\assets\cities\Delhi.svg" alt="delhi" />
                    <p>Delhi NCR</p>
                </div>
                <div>
                    <img src="src\assets\cities\Jaipur.svg" alt="jaipur" />
                    <p>Jaipur</p>
                </div>
                <div>
                    <img src="src\assets\cities\Hyderabad.svg" alt="hyderabad" />
                    <p>Hyderabad</p>
                </div>
                <div>
                     <img src="src\assets\cities\Mumbai.svg" alt="mumbai" />
                     <p>Mumbai</p>
                </div>
                <div>
                    <img src="src\assets\cities\Vizag.svg" alt="vizag" />
                    <p>Vizag</p>
                </div>
                <div>
                    <img src="src\assets\cities\Kolkata.svg" alt="kolkata" />
                    <p>Kolkata</p>
                </div>
                 <div>
                     <img src="src\assets\cities\Goa.svg" alt="goa" />
                     <p>Goa</p>
                </div> 
            </div>
            <center>
                <button>View More</button>
            </center>
        </div>
    )
}

export default ChooseCity;