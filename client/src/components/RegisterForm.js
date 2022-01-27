import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors,setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/recs/user/register', {
            username, 
            email,
            password,
            confirmPassword
        }, {withCredentials: true})
            .then((res) => {
                console.log(res)
                if(res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    navigate("/recs/login");
                }
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div style={{margin: "50px", padding:"10px", border:"1px solid black"}}>
            <form onSubmit={onSubmitHandler}>
                <header><b><u>Register MyRecs Account</u></b></header>
                <p>
                    <label style={{margin: "5px"}}><b>Username:</b></label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                    {errors.username ?
                        <p style={{color: "red"}}><em>{errors.username.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Email:</b></label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    {errors.email ?
                        <p style={{color: "red"}}><em>{errors.email.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Password:</b></label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    {errors.password ?
                        <p style={{color: "red"}}><em>{errors.password.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Confirm Password:</b></label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    {errors.confirmPassword ?
                        <p style={{color: "red"}}><em>{errors.confirmPassword.message}</em></p>
                        : null
                    }
                </p>
                <input type="submit" style={{backgroundColor: "red", color: "white"}} />
            </form>
            <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate("/recs/login")}}>Return to Login</button>
        </div>
    )
}

export default RegisterForm;