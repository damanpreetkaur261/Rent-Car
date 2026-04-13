import "./recentBlog.css"

const RecentBlog=()=>{
    return(
    <div className="bgcolor">
        <div>
            <center>
            <h1>Recent Blog Posts</h1>
            </center>
        </div> 
    <div className="align">
        <div>
            <img src="src\assets\recentBlogImg\image-1.png" alt="car image" height="300px" width="400px"/>
            <h4>Zoomcar vs Revv: Which Self-Drive Car Rental Is Better for Road Trips in India?</h4>
            <p>Road trips in India have changed a lot over the past few years. Earlier, planning one usually meant borrowing a friend's car or booking a taxi with a driver who patiently listened to your playlist for hours. Today, things are ..."</p>
        </div>
        <div>
            <img src="src\assets\recentBlogImg\image-2.png" alt="car image" height="300px" width="400px"/>
            <h4>Best Road Trips to Take This Easter Long Weekend</h4>
            <p></p>
        </div>
        <div>
            <img src="src\assets\recentBlogImg\image-2.png" alt="car image" height="300px" width="400px"/>
        </div>
    </div>
    <center>
        <button className="button1">DISCOVER MORE</button>
    </center>
    </div>
    )
}
 export default RecentBlog;