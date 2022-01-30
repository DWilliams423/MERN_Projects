import { useState } from "react";
import '../App.css';
import { navigate } from "@reach/router";
import axios from "axios";

const ProfileNav = () => {
    // const [recList, setRecList] = useState("");

    // const onSubmitHandler = e => {
    //     e.preventDefault();
    //     if (createForm == 'Dining🍔') {
    //         console.log("===")
    //         navigate("recs/createdining");

    //     } else if (createForm == 'Game🎮'){
    //         navigate("recs/creategame")
    //     }     
    // }
    const logout = (e) => {
        axios.get('http://localhost:8000/api/recs/user/logout', {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="Div">
                {/* <img src="null" alt="Profile Picture">Profile Pic</img> */}
                <p>Profile Picture</p>
            </div>
            <div className='shadowBox'>
                <header>
                    <h5 className='rainbow rainbow_text_animated'>MyRec Lists</h5>
                </header>
                <table className="Recent-Recs">
                    <tbody>
                        <tr>
                            <th>🍔Dining</th>
                        </tr>
                        <tr>
                            <th>🎮Games</th>
                        </tr>
                        <tr>
                            <th>🎬Movies</th>
                        </tr>
                        <tr>
                            <th>🎼Music</th>
                        </tr>
                        <tr>
                            <th>📺TV</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button style={{backgroundColor: "blue", color: "white"}} onClick={logout}>Logout</button>
        </>
    )
}

export default ProfileNav;