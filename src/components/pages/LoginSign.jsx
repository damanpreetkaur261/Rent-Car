import "./loginSign.css";
import carImage from "../../assets/LoginBg/CarLogin.svg";

const LoginSign = () => {

  return (
    <div className="login-container">
      <div>
        <img src={carImage} alt="GreenCar" />
      </div>

      <div>
        <h1>Login/Sign Up</h1>
        <div className="phone-input">
          <div className="prefix">
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="India"
              className="flag"
            />
            <span>+91</span>
          </div>

          <input
            type="number"
            placeholder="Enter phone number"
            className="input"
          />
          <button>GET OTP</button>
        </div>

      </div>
    </div>
  )

}
export default LoginSign;