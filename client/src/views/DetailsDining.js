import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import '../App.css';

const DetailsDining = (props) => {
    const {id} = props;
    const [dining, setDining] = useState([]);
    const [diningName, setDiningName] = useState("");
    const [diningType, setDiningType] = useState("");
    const [diningPrice, setDiningPrice] = useState("");
    const [diningSite, setDiningSite] = useState("");
    const [diningBriefDescrip, setDiningBriefDescrip] = useState("");
    const [diningFullReview, setDiningFullReview] = useState("");
    const [recsScore, setRecsScore] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recs/dining/${id}`)
            .then(res => {
                setDiningName(res.data.diningName)
                setDiningType(res.data.diningType)
                setDiningPrice(res.data.diningPrice)
                setDiningSite(res.data.diningSite)
                setDiningBriefDescrip(res.data.diningBriefDescrip)
                setDiningFullReview(res.data.diningFullReview)
                setRecsScore(res.data.recsScore);
            })
            .catch((err) => console.log(err))
    }, [id])
    const deleteDining = (diningId) => {
        axios.delete(`http://localhost:8000/api/recs/dining/${id}`)
            .then((res) => {
                setDining(dining.filter((dining) => dining._id !== diningId));
                navigate("/");
            })
            .catch ((err) => console.log(err));
    }
    return (
        <div className="Rec-Details">
            <div className='Rec-Score-Content'>
                <div className="MyRec-Score">
                    <p><u>MyRecs Score</u>: <br /><b>{recsScore}</b></p>
                </div>
                <div className='Rec-Content'>
                    <p><u>Restaurant Name</u>: <b>{diningName}</b></p>
                    <p><u>Cuisine</u>: <b>{diningType}</b></p>
                    <p><u>Price Point</u>: <b>{diningPrice}</b></p>
                    <p><u>Website</u>: <b>{diningSite}</b></p>
                    <p><u>Tag Line</u>: <b>{diningBriefDescrip}</b></p>
                </div>
            </div>
            
            <div className="Full-Review">
                <p><u>Full Review</u>: <b>{diningFullReview}</b></p>
            </div>
            <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate("/")}}>Return Home</button>
            <button style={{backgroundColor: "red", color:"white"}} onClick={(e) => { deleteDining(dining._id) }}><b><u>Delete</u> {`${diningName}`} Rec</b> </button>
        </div>
    )
}

export default DetailsDining;