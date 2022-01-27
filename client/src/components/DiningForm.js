import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const DiningForm = () => {
    const [diningName, setDiningName] = useState("");
    const [diningType, setDiningType] = useState("");
    const [diningPrice, setDiningPrice] = useState("");
    const [diningSite, setDiningSite] = useState("");
    const [diningBriefDescrip, setDiningBriefDescrip] = useState("");
    const [diningFullReview, setDiningFullReview] = useState("");
    const [recsScore, setRecsScore] = useState("");
    const [errors,setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/recs/dining', {
            diningName, 
            diningType,
            diningPrice,
            diningSite,
            diningBriefDescrip,
            diningFullReview,
            recsScore
        })
            .then((res) => {
                console.log(res)
                navigate("/");
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div style={{margin: "50px", padding:"10px", border:"1px solid black"}}>
            <form onSubmit={onSubmitHandler}>
                <header><b><u>Create Dining Rec</u></b></header>
                <p>
                    <label style={{margin: "5px"}}><b>Restaurant Name:</b></label>
                    <input type="text" onChange={(e) => setDiningName(e.target.value)} />
                    {errors.diningName ?
                        <p style={{color: "red"}}><em>{errors.diningName.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Cuisine:</b></label>
                    {/* <input type="text" onChange={(e) => setDiningType(e.target.value)} /> */}
                    <select value={setDiningType.value} onChange={(e) => setDiningType(e.target.value)}>
                        <option value="none">--</option>
                        <option value="American">American</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                    </select>
                    {errors.diningType ?
                        <p style={{color: "red"}}><em>{errors.diningType.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Price Point:</b></label>
                    {/* <input type="text" onChange={(e) => setDiningPrice(e.target.value)} /> */}
                    <select value={setDiningPrice.value} onChange={(e) => setDiningPrice(e.target.value)}>
                        <option value="none">--</option>
                        <option value="$">💲</option>
                        <option value="$$">💲💲</option>
                        <option value="$$$">💲💲💲</option>
                    </select>
                    {errors.diningPrice ?
                        <p style={{color: "red"}}><em>{errors.diningPrice.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Website:</b></label>
                    <input type="text" onChange={(e) => setDiningSite(e.target.value)} />
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Rec Tag Line:</b></label>
                    <input type="text" onChange={(e) => setDiningBriefDescrip(e.target.value)} />
                    {errors.diningBriefDescrip ?
                        <p style={{color: "red"}}><em>{errors.diningBriefDescrip.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label style={{margin: "5px"}}><b>Full Review:</b></label>
                    <br/>
                    {/* <input type="text" onChange={(e) => setDiningFullReview(e.target.value)} /> */}
                    <textarea onChange={(e) => setDiningFullReview(e.target.value)} />
                    {errors.diningFullReview ?
                        <p style={{color: "red"}}><em>{errors.diningFullReview.message}</em></p>
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
            <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate("/")}}>Return Home</button>
        </div>

    )
}

export default DiningForm;