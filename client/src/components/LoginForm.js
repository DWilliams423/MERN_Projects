import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors,setErrors] = useState([]);

    const onSubmitHandler = e => {
        console.log(email, `>${password}<`);
        e.preventDefault();
        axios.post('http://localhost:8000/api/recs/login', {
                email: email,
                password: password
        }, {withCredentials: true})
        .then((res) => {
            console.log(res)
            console.log(res.data)
            // if(res.data.msg == "Success!") {
            //     navigate("/")
            // } else {
            //     setErrors(res.data.errors)
            // }
            if(res.data.errors) {
                console.log(res.data.err)
                setErrors(res.data.errors)
            } else if(res.data.msg === "Success!"){
                navigate("/");
            }
        })
            .catch(err => {
                console.log("Something went wrong", err)
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div style={{margin: "50px", padding:"10px", border:"1px solid black"}}>
            <form onSubmit={onSubmitHandler}>
                <header><b><u>Login</u></b></header>
                <p>
                    <label style={{margin: "5px"}}><b>Email:</b></label>
                    <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
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
                <input type="submit" style={{backgroundColor: "red", color: "white"}} />
            </form>
            <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate("/recs/user/register")}}>Register</button>
        </div>
    )
}

export default LoginForm;