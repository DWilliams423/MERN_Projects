import React, {useEffect,useState} from 'react';
import {navigate} from "@reach/router"
import axios from 'axios';

const EditDining = (props) => {
    const {id} = props;
    const [diningName, setDiningName] = useState("");
    const [diningType, setDiningType] = useState("");
    const [diningPrice, setDiningPrice] = useState("");
    const [diningSite, setDiningSite] = useState("");
    const [diningBriefDescrip, setDiningBriefDescrip] = useState("");
    const [diningFullReview, setDiningFullReview] = useState("");
    const [recsScore, setRecsScore] = useState("");
    const [errors,setErrors] = useState([]);

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
    const editDining = (e) => {
        e.preventDefault();
        const putEditData = {
            diningName, 
            diningType,
            diningPrice,
            diningSite,
            diningBriefDescrip,
            diningFullReview,
            recsScore
        }
        axios.put(`http://localhost:8000/api/recs/dining/${id}`, putEditData)
            .then((res) => {
                console.log(res.data)
                navigate("/");
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div style={{margin: "50px", padding:"10px", border:"1px solid black"}}>
            <header><u>Edit</u>: {`${diningName}`}</header>
            <form onSubmit={editDining}>
                <p>
                    <label className='label'><b>Restaurant Name:</b></label>
                    <input type="text"
                    name="diningName"
                    value={diningName}
                    onChange={(e) => {setDiningName(e.target.value)}} />
                    {errors.diningName ?
                        <p style={{color: "red"}}><em>{errors.diningName.message}</em></p>
                        : null
                    }
                </p>
                <p>
                    <label className='label'><b>Cuisine:</b></label>
                    {/* <input type="text"
                    name="petType"
                    value={petType}
                    onChange={(e) => {setPetType(e.target.value)}} /> */}
                    <select 
                    name="diningType"
                    value={diningType}
                    onChange={(e) => {setDiningType(e.target.value)}}>
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
                    <label className='label'><b>Price Point:</b></label>
                    {/* <input type="text"
                    name="petDetails"
                    value={petDetails}
                    onChange={(e) => {setPetDetails(e.target.value)}} /> */}
                    <select 
                    name="diningPrice"
                    value={diningPrice}
                    onChange={(e) => {setDiningPrice(e.target.value)}}>
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
                    <label className='label'><b>Website:</b></label>
                    <input type="text"
                    name="diningSite"
                    value={diningSite}
                    onChange={(e) => {setDiningSite(e.target.value)}} />
                </p>
                <p>
                    <label className='label'><b>Rec Tag Line:</b></label>
                    <input type="text"
                    name="diningBriefDescrip"
                    value={diningBriefDescrip}
                    onChange={(e) => {setDiningBriefDescrip(e.target.value)}} />
                </p>
                <p>
                    <label className='label'><b>Full Review:</b></label><br />
                    <textarea className='text-area'
                    name="diningFullReview"
                    value={diningFullReview}
                    onChange={(e) => {setDiningFullReview(e.target.value)}} />
                </p>
                <p>
                    <label className='label'><b>MyRec Score:</b></label>
                    {/* <input type="text"
                    name="petDetails"
                    value={petDetails}
                    onChange={(e) => {setPetDetails(e.target.value)}} /> */}
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
                <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {navigate("/")}}>Return Home</button>
            </form>
        </div>
    )
}

export default EditDining;