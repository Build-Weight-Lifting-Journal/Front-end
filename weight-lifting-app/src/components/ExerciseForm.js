import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import { withFormik } from "formik";
import * as yup from "yup";

const NewExercise = ({ erros, touched, status }) => {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    if (status) {
      setExercise([...exercise, status]);
    }
  }, [exercise, status]);

  return (
    <>
      <div class="field">
        <label class="label">Exercise</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Bench Press, Squats, Etc."
          ></input>
        </div>
      </div>

      <div class="field">
        <label class="label">Reps</label>
        <div class="control">
          <input class="input" type="number" placeholder="10"></input>
        </div>
      </div>

      <div class="field">
        <label class="label">Sets</label>
        <div class="control">
          <input class="input" type="number" placeholder="3 sets"></input>
        </div>
      </div>

      <div class="field">
        <label class="label">Weight</label>
        <div class="control">
          <input class="input" type="number" placeholder="125 lbs"></input>
        </div>
      </div>

      <button class="button is-link" type="submit">
        Submit
      </button>
    </>
  );
};

export default NewExercise;
