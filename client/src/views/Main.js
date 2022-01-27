import AllRecs from "../components/AllRecs";
import CreateRec from "../components/CreateRec";
import ProfileNav from "../components/ProfileNav";
import Banner from "../components/Banner";
import axios from "axios";
import React, {useState, useEffect} from "react";

const Main = () => {
    const [loggedInUser, setLoggedInUser] = useState ({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/recs/user/loggedin", {withCredentials: true})
            .then(res => {
                console.log(res)
                console.log(res.data)
                setLoggedInUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
        <div className="Main_Div">
            <div className="Div">
                <header>Welcome, <br /> {loggedInUser.username}!</header>
                <ProfileNav />
            </div>
            <div>
                <div>
                    <CreateRec />
                </div>
                <p>-----------------------------------</p>
                <div className="Div">
                    <AllRecs />
                </div>
            </div>
            
        </div>
        
        </>
    )
}

export default Main;