import "./register.css"
import {Link} from "react-router-dom";

function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label> Username</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter you Username..."/>
                <label> Email</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter you email..."/>
                <label> Password</label>
                <input
                    type="password"
                    className="registerInput"
                    placeholder="Enter you password..."/>
                <button className="registerButton">Register</button>
            </form>
            <button className="loginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
        </div>
    );
}

export default Register;