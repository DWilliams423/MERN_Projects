import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import '../App.css';

const DetailsGame = (props) => {
    const {id} = props;
    const [game, setGame] = useState([]);
    const [gameTitle, setGameTitle] = useState("");
    const [gameGenre, setGameGenre] = useState("");
    const [gamePlatform, setGamePlatform] = useState("");
    const [gameImg, setGameImg] = useState("");
    const [gameBriefDescrip, setGameBriefDescrip] = useState("");
    const [gameFullReview, setGameFullReview] = useState("");
    const [recsScore, setRecsScore] = useState("");

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
    const deleteGame = (gameId) => {
        axios.delete(`http://localhost:8000/api/recs/games/${id}`)
            .then((res) => {
                setGame(game.filter((game) => game._id !== gameId));
                navigate("/");
            })
            .catch ((err) => console.log(err));
    }
    return (
        <>
            <div className='Details'>
                <div className="Rec-Details">
                    <div className='Rec-Score-Content'>
                        <div className="MyRec-Score">
                            <p><u>MyRecs Score</u>: <br /><b>{recsScore}</b></p>
                        </div>
                        <div className='Rec-Content'>
                            <p><u>Game Title</u>: <b>{gameTitle}</b></p>
                            <p><u>Genre</u>: <b>{gameGenre}</b></p>
                            <p><u>Platform</u>: <b>{gamePlatform}</b></p>
                            <p><u>Tag Line</u>: <b>{gameBriefDescrip}</b></p>
                        </div>
                        <div>
                            <img src={gameImg}/>
                        </div>
                    </div>
                    
                    <div className="Full-Review">
                        <p><b>{gameFullReview}</b></p>
                    </div>
                    <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate("/")}}>Return Home</button>
                    <button style={{backgroundColor: "red", color:"white"}} onClick={(e) => { deleteGame(game._id) }}><b><u>Delete</u> {`${gameTitle}`} Rec</b> </button>
                </div>
            </div>
        </>
        
    )
}

export default DetailsGame;