import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import { withFormik } from "formik";
import * as yup from "yup";

const NewExercise = ({ errors, touched, status }) => {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    if (status) {
      setExercise([...exercise, status]);
    }
  }, [exercise, status]);

  return (
    <Form>
      {touched.exercise && errors.exercise && (
        <p className="error">{errors.exerise}</p>
      )}
      <label>
        <span>Exercise</span>
        <Field
          type="text"
          name="exercise"
          placeholder="Bench Press, Squats, Etc."
        />
      </label>

      {touched.reps && errors.reps && <p className="error">{errors.reps}</p>}
      <label>
        <span>Reps</span>
        <Field type="number" name="reps" placeholder="10 reps" />
      </label>

      {touched.sets && errors.sets && <p className="error">{errors.sets}</p>}
      <label>
        <span>Sets</span>
        <Field type="number" name="sets" />
      </label>

      {touched.weight && errors.weight && (
        <p className="error">{errors.weight}</p>
      )}
      <label>
        <span>Weight</span>
        <Field type="number" name="weight" placeholder="100" />
        <span>Lbs</span>
      </label>

      <button type="submit">Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {};
  }
})(NewExercise);
