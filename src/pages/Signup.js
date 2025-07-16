import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert("Signup Successful! Please Login")
        navigate("/");
    }

    console.log(handleSignup);

    return(
        <div>
            
                <h1>Create Signup page</h1>
                <form onSubmit={handleSignup}>
                    <div>
                    <input type="text" 
                    name="name"
                    placeholder="Enter Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    </div>
                    <div>
                    <input type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div>
                    <input type="password" 
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div>
                    <button type="Submit">SignUp</button>
                    </div>
                </form>
                <NavLink to="/">If you had account, please Login here</NavLink>
        </div>
    )
}

export default Signup;