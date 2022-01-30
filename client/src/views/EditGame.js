import React, {useEffect,useState} from 'react';
import {navigate} from "@reach/router"
import axios from 'axios';

const EditGame = (props) => {
    const {id} = props;
    const [gameTitle, setGameTitle] = useState("");
    const [gameGenre, setGameGenre] = useState("");
    const [gamePlatform, setGamePlatform] = useState("");
    const [gameImg, setGameImg] = useState("");
    const [gameBriefDescrip, setGameBriefDescrip] = useState("");
    const [gameFullReview, setGameFullReview] = useState("");
    const [recsScore, setRecsScore] = useState("");
    const [errors,setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recs/games/${id}`)
            .then(res => {
                setGameTitle(res.data.gameTitle)
                setGameGenre(res.data.gameGenre)
                setGamePlatform(res.data.gamePlatform)
                setGameImg(res.data.gameImg)
                setGameBriefDescrip(res.data.gameBriefDescrip)
                setGameFullReview(res.data.gameFullReview)
                setRecsScore(res.data.recsScore);
            })
            .catch((err) => console.log(err))
    }, [id])
    const editGame = (e) => {
        e.preventDefault();
        const putEditData = {
            gameTitle, 
            gameGenre,
            gamePlatform,
            gameImg,
            gameBriefDescrip,
            gameFullReview,
            recsScore
        }
        axios.put(`http://localhost:8000/api/recs/games/${id}`, putEditData)
            .then((res) => {
                console.log(res.data)
                navigate("/recs/dashboard");
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div style={{margin: "50px", padding:"10px", border:"1px solid black"}}>
            <header><u>Edit</u>: {`${gameTitle}`} Rec</header>
            <form onSubmit={editGame}>
                <p>
                    <label className='label'><b>Game Title:</b></label>
                    <input type="text"
                    name="gameTitle"
                    value={gameTitle}
                    onChange={(e) => {setGameTitle(e.target.value)}} />
                    {errors.gameTitle ?
                        <p style={{color: "red"}}><em>{errors.gameTitle.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label className='label'><b>Genre:</b></label>
                    <select 
                    name="gameGenre"
                    value={gameGenre}
                    onChange={(e) => {setGameGenre(e.target.value)}}>
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
                    <label className='label'><b>Platform:</b></label>
                    <select 
                    name="gamePlatform"
                    value={gamePlatform}
                    onChange={(e) => {setGamePlatform(e.target.value)}}>
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
                    <label className='label'><b>Game Image:</b></label>
                    <input type="text"
                    name="gameImg"
                    value={gameImg}
                    onChange={(e) => {setGameImg(e.target.value)}} />
                </p>
                <p>
                    <label className='label'><b>Rec Tag Line:</b></label>
                    <input type="text"
                    name="gameBriefDescrip"
                    value={gameBriefDescrip}
                    onChange={(e) => {setGameBriefDescrip(e.target.value)}} />
                </p>
                <p>
                    <label className='label'><b>Full Review:</b></label><br />
                    <textarea className='text-area'
                    name="gameFullReview"
                    value={gameFullReview}
                    onChange={(e) => {setGameFullReview(e.target.value)}} />
                </p>
                <p>
                    <label className='label'><b>MyRec Score:</b></label>
                    <select 
                    name="recsScore"
                    value={recsScore}
                    onChange={(e) => {setRecsScore(e.target.value)}}>
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
                <button style={{backgroundColor: "blue", color: "white", margin: "5px"}}>Submit Changes</button>
                <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate("/recs/dashboard")}}>Return Home</button>
            </form>
        </div>
    )
}

export default EditGame;