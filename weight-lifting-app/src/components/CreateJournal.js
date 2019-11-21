import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateJournal = props => {
  const [newJournal, setNewJournal] = useState({
    date: new Date(),
    region: ""
  });

  const handleChange = e => {
    setNewJournal({ ...newJournal, [e.target.date]: [e.target.value] });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  axios.post("restricted/journals/", props);

  return (
    <>
      <div className="field">
        <div className="control">
          <DatePicker
            todayButton="Today"
            selected={newJournal.date}
            onChange={e => handleChange(e)}
          ></DatePicker>
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
      <div className="buttons">
        <a className="button is-primary" onSubmit={handleSubmit}>
          Submit
        </a>
      </div>
    </>
  );
};

export default CreateJournal;
