import React, {useState} from "react";
import axios from "axios";

const CreateJournal = props => {

    const [newJournal, setNewJournal] = useState({
        date: "",
        region: ""
    });

    const handleSubmit= e =>{
        e.preventDefault(); 
    }

    axios.post("restricted/journals/", props)

    return (
        <h1>1</h1>
    )

}