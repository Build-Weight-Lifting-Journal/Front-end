import React, { useState } from "react";
import axios from "axios";

const CreateJournal = props => {
  const [newJournal, setNewJournal] = useState({
    date: "",
    region: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
  };

  axios.post("restricted/journals/", props);

  return (
    <div className="field">
      <div className="control">
        <div className=""></div>
      </div>
    </div>



    <div className="field">
      <div class="control">
        <span class="select">
          <select>
            <option>Upper</option>
            <option>Lower</option>
            <option>Cardio/Core</option>
          </select>
        </span>
      </div>
    </div>
  );
};
