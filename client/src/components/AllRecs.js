import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import '../App.css';

const AllRecs = (props) => {
    const [diningList,setDiningList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/recs/dining')
            .then(response => {
                setDiningList(response.data);
            })
            .catch((err) => console.log(err.response))
    }, [])
    const [gameList, setGameList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/recs/games')
            .then(response => {
                setGameList(response.data);
            })
            .catch((err) => console.log(err.response))
    }, [])

    return (
        <>
        <header>
                <div className='shadowBox'>
                    <h2 className='rainbow rainbow_text_animated'>Recent Recs</h2>
                </div>
        </header>
        <div>
            <table className="Recent-Recs">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th className='rainbow rainbow_text_animated'>MyRec Score</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody style={{border: "1px solid black", backgroundColor: "white", color: "black"}}>
                    {
                        diningList?
                        diningList.map((dining,index) => (
                            <tr key={index}>
                                <td><b>{dining.diningName}</b></td>
                                <td><b>{dining.diningBriefDescrip}</b></td>
                                <td><b>{dining.recsScore}</b></td>
                                <td className='Actions'>
                                    <button className='Button' onClick ={() => {navigate(`/recs/editdining/${dining._id}`)}}>Edit</button>
                                    <button className='Button' onClick ={() => {navigate(`/recs/detailsdining/${dining._id}`)}}>Details</button>
                                </td>
                            </tr>
                        ))
                        :null
                    }
                    {
                        gameList?
                        gameList.map((game,index) => (
                            <tr key={index}>
                                <td><b>{game.gameTitle}</b></td>
                                <td><b>{game.gameBriefDescrip}</b></td>
                                <td><b>{game.recsScore}</b></td>
                                <td className='Actions'>
                                    <button className='Button' onClick ={() => {navigate(`/recs/editgame/${game._id}`)}}>Edit</button>
                                    
                                    <button className='Button' onClick ={() => {navigate(`/recs/detailsgame/${game._id}`)}}>Details</button>
                                </td>
                            </tr>
                        ))
                        :null
                    }
                </tbody>
            </table>
        </div>
        </>
        
    )
}

export default AllRecs;