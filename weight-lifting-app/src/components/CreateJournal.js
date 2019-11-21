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
        <div class="control">
  <div class="select">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
</div>
    )

}