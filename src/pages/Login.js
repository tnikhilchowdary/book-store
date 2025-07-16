import react, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");

        if(email === savedEmail && password === savedPassword){
            alert("Login Successfully");
            navigate("/home")
        }
        else{
            alert("Invalid email or password");
        }
    }

    return(
        <div>
            <h1>Welcome to Login page</h1>
            <form onSubmit={handleLogin}>
                <div>
                <input type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <input type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                <button>Login</button>
                </div>
                <div>
                </div>
                <NavLink to="/Signup">If you dont have account, please create here</NavLink>
            </form>
        </div>
    )
}

export default Login;