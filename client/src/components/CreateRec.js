import { useState } from "react";
import { Link, navigate } from '@reach/router';
import DiningForm from "./DiningForm";
import GameForm from "./GameForm";
import '../App.css';

const CreateRec = () => {
    const [createForm, setCreateForm] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(createForm)
        // const value = CreateForm
        if (createForm == '🍔Dining') {
            console.log("===")
            navigate("recs/createdining");

        } else if (createForm == '🎮Game'){
            navigate("recs/creategame")
        }     
    }
    return (
        <div>
            <header>Create a new Rec!</header>
            <form onSubmit={onSubmitHandler}>
                <label style={{padding: "5px"}}>Choose a Rec Type</label>
                <select className="Dropdown" onChange={(e) => setCreateForm(e.target.value)}>
                    <option>--</option>
                    <option>🍔Dining</option>
                    <option>🎮Game</option>
                </select>
                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default CreateRec;