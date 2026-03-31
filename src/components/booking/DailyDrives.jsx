import "./booking.css";
function DailyDrives(){
    return(
        <>
         <p>Looking for Best Car Rentals?</p>
      <h3>Book Self-Drive Car Rentals Across India</h3>

      <select className="input">
        <option>Bangalore</option>
      </select>

      <input
        className="input"
        placeholder="Pickup Location"
        value="48, Kempegowda Service Rd..."
        readOnly
      />

      <div className="date-row">
        <input className="input" type="datetime-local" />
        <input className="input" type="datetime-local" />
      </div>

      <label>
        <input type="checkbox" /> Delivery & Pick-up, from anywhere
      </label>

      <button className="search-btn">SEARCH</button>
        </>
    )
}
export default DailyDrives;