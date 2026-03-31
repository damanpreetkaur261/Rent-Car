import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="src\assets\zoomcar-logo-new-green.png" alt="zoom" height="50px" />

      <div className="nav-buttons">
        <button className="outline"> <img src="src\assets\app-download-icon.png" alt="app" width="20px" />Get the App</button>
        <button className="outline">Login/Signup</button>
      </div>
    </div>
  );
};

export default Navbar;