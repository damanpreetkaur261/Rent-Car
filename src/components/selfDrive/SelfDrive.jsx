import "./selfDrive.css"

const SelfDrive = () => {
    return (
        <div className="bg">
            <center>
                <h1> ZoomCar's self-drive services start <span className="span1">49/hr</span></h1>
                <h3>Get convenience, comfort and privacy in your self-drive car in India.</h3>
            </center>
            <div className="flex">
                <div id="padding">
                    <img src="src\assets\selfDriveImg\Usecase-1.avif" alt="place" height="300px" width="400px" className="image"/>
                    <h3>Discover Local Attractions</h3>
                    <p>Drive to popular attractions, heritage sites, and vibrant city hotspots across India with Zoomcar self-drive. Enjoy the freedom to explore at your own pace.</p>
                </div>
                <div>
                    <img src="src\assets\selfDriveImg\Usecase-2.avif" alt="drive" height="300px" width="400px" className="image"/>
                    <h3>Get Cars for Business Travel and Work Meetings</h3>
                    <p>Navigate seamlessly between meetings or conferences with a self-drive car that works around your needs.</p>
                </div>
                <div id="padding">
                    <img src="src\assets\selfDriveImg\Usecase-3.avif" alt="airport View" height="300px" width="400px" className="image" />
                    <h3>Seamlessly Access Airport Transfers</h3>
                    <p>Skip the cab queues and get a comfortable car to or from Kempegowda International Airport with Zoomcar.</p>
                </div>
            </div>
        </div>
    )

}
export default SelfDrive;