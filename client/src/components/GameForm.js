import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const GameForm = () => {
    const [gameTitle, setGameTitle] = useState("");
    const [gameGenre, setGameGenre] = useState("");
    const [gamePlatform, setGamePlatform] = useState("");
    const [gameImg, setGameImg] = useState("");
    const [gameBriefDescrip, setGameBriefDescrip] = useState("");
    const [gameFullReview, setGameFullReview] = useState("");
    const [recsScore, setRecsScore] = useState("");
    const [errors,setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/recs/games', {
            gameTitle, 
            gameGenre,
            gamePlatform,
            gameImg,
            gameBriefDescrip,
            gameFullReview,
            recsScore
        })
            .then((res) => {
                console.log(res)
                navigate("/recs/dashboard");
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div style={{margin: "50px", padding:"10px", border:"1px solid black"}}>
            <form onSubmit={onSubmitHandler}>
                {/* <h1>Add a pet to our adoption registry!</h1>
                <Link to="/">
                <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate("/")}}>Return Home</button>
                </Link> */}
                <header><b><u>Create Game Rec</u></b></header>
                <p>
                    <label style={{margin: "5px"}}><b>Game Title:</b></label>
                    <input type="text" onChange={(e) => setGameTitle(e.target.value)} />
                    {errors.gameTitle ?
                        <p style={{color: "red"}}><em>{errors.gameTitle.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Genre:</b></label>
                    {/* <input type="text" onChange={(e) => setDiningType(e.target.value)} /> */}
                    <select value={setGameGenre.value} onChange={(e) => setGameGenre(e.target.value)}>
                        <option value="none">--</option>
                        <option value="Action/Adventure">Action/Adventure</option>
                        <option value="Platformer">Platformer</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="RPG">RPG</option>
                        <option value="Shooter">Shooter</option>
                    </select>
                    {errors.gameGenre ?
                        <p style={{color: "red"}}><em>{errors.gameGenre.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Platform:</b></label>
                    {/* <input type="text" onChange={(e) => setDiningPrice(e.target.value)} /> */}
                    <select value={setGamePlatform.value} onChange={(e) => setGamePlatform(e.target.value)}>
                        <option value="none">--</option>
                        <option value="Atari">Atari</option>
                        <option value="Dreamcast">Dreamcast</option>
                        <option value="PC">PC</option>
                        <option value="PS1">PS1</option>
                        <option value="PS2">PS2</option>
                        <option value="PS3">PS3</option>
                        <option value="PS4">PS4</option>
                        <option value="PS5">PS5</option>
                        <option value="XBox">XBox</option>
                    </select>                
                    {errors.gamePlatform ?
                        <p style={{color: "red"}}><em>{errors.gamePlatform.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    {/* Need to add file upload */}
                    <label style={{margin: "5px"}}><b>Game Image:</b></label>
                    <input type="text" onChange={(e) => setGameImg(e.target.value)} />
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Rec Tag Line:</b></label>
                    <input type="text" onChange={(e) => setGameBriefDescrip(e.target.value)} />
                    {errors.gameBriefDescrip ?
                        <p style={{color: "red"}}><em>{errors.gameBriefDescrip.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Full Review:</b></label>
                    <br/>
                    {/* <input type="text" onChange={(e) => setDiningFullReview(e.target.value)} /> */}
                    <textarea className='text-area' onChange={(e) => setGameFullReview(e.target.value)} />
                    {errors.gameFullReview ?
                        <p style={{color: "red"}}><em>{errors.gameFullReview.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>MyRec Score:</b></label>
                    {/* <input type="text" onChange={(e) => setRecsScore(e.target.value)} /> */}
                    <select value={setRecsScore.value} onChange={(e) => setRecsScore(e.target.value)}>
                        <option value="none">--</option>
                        <option value="⭐(Solid Experience)">⭐(Solid Experience)</option>
                        <option value="⭐⭐(Excellent Experience)">⭐⭐(Excellent Experience)</option>
                        <option value="⭐⭐⭐(Exceptional Experience)">⭐⭐⭐(Exceptional Experience)</option>
                    </select>
                    {errors.recsScore ?
                        <p style={{color: "red"}}><em>{errors.recsScore.message}</em></p>
                        : null
                    }
                </p>
                <input type="submit" style={{backgroundColor: "red", color: "white"}} />
            </form>
            <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate("/recs/dashboard")}}>Return Home</button>
        </div>

    )
}

export default GameForm;