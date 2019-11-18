<<<<<<< HEAD
// import React, { useState, useEffect } from "react"
// import { connect } from "react-redux";
// import {api} from "../utils/api";
// import {deleteEvent} from "../actions/actions";
// import {Link} from "react-router-dom";


// function Exercise(props) {
//     const [exercise, setExercise] = useState([])

//     useEffect(() => {
//         api().get("/restricted/exercises")
//             .then(result => {
//                 setExercise(result.data.exercises)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }, [])

//     const handleDelete = (event, id) => {
//         event.preventDefault()
//         const workout = [exercise.find(workout => workout.id === id)]

//        if ( window.confirm("Are you sure?!")) {
//         setExercise(exercise.filter(workout => workout.id !== id))

//         // props.deleteEvent(exercise)

//         api().delete(`/restricted/exercises/${id}`)
//             .then(result => {
//                 console.log("workout was TERMINATED")
                
//             })
//             .catch(error => {
//                 console.log(error)
//                 setExercise([ ...exercise, workout])
//             })
//        }
//     }

//     return (
//         <>
//             <h1>Workout</h1>

//             {exercise.map(workout => (
//                 <div key={workout.id}>
//                     <Link to={'/restricted/exercises/'}>Add</Link>
//                     {/* <Link  to={`/restricted/exercises/${workout.id}`}>Edit</Link> */}
//                     <button onClick={(e) => handleDelete(e, workout.id)}>Delete</button>
//                     <div>WORKOUT NAME: {workout.name}</div>
//                     <div>REPS: {workout.reps}</div>
//                     <div>SETS: {workout.sets}</div>
//                     <div>weight: {workout.weight}</div>
//                 </div>
//             ))}

//         </>
//     )
// }

// const mapStateToProps = state => {
//   return {
//     //   workout: state.workout
//   };
// };

// export default connect(
//   mapStateToProps,
//   { deleteEvent }
// )(Exercise);
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import styled from "styled-components";

const ExerciseForm = styled(Form)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 460px;
  margin: 100px auto 50px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: left;
`;

const Fields = styled(Field)`
  margin: 16px 0 16px 0;
  padding: 0.5rem;
  font-size: 16px;
  width: 100%;
  display: block;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  box-shadow: 0px 10px 14px -7px #322f20;
  background: linear-gradient(to bottom, #ce4f00 5%, #322f20 100%);
  background-color: #ce4f00;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #f5f5f5;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #fae9dc;
  transition: all 0.3s ease-in;
  &:hover {
    background: linear-gradient(to bottom, #322f20 5%, #ce4f00 100%);
    background-color: #322f20;
  }
`;

const NewExercise = ({ errors, touched, status }) => {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    if (status) {
      setExercise([...exercise, status]);
    }
  }, [status]);

  return (
    <ExerciseForm>
      {touched.exercise && errors.exercise && (
        <p className="error">{errors.exercise}</p>
      )}
      <label>
        <span>Exercise</span>
        <Fields
          type="text"
          name="exercise"
          placeholder="Bench Press, Squats, Etc."
        />
      </label>

      {touched.reps && errors.reps && <p className="error">{errors.reps}</p>}
      <label>
        <span>Reps</span>
        <Fields type="number" name="reps" placeholder="10 reps" />
      </label>

      {touched.sets && errors.sets && <p className="error">{errors.sets}</p>}
      <label>
        <span>Sets</span>
        <Fields type="number" name="sets" placeholder="3" />
      </label>

      {touched.weight && errors.weight && (
        <p className="error">{errors.weight}</p>
      )}
      <label>
        <span>Weight</span>
        <Fields type="number" name="weight" placeholder="100" />
      </label>

      <Button type="submit">Submit</Button>
    </ExerciseForm>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      exercise: values.species || "",
      reps: values.reps || "",
      sets: values.sets || "",
      weight: values.weight || ""
    };
  },
  validationSchema: yup.object().shape({
    exercise: yup.string().required("Exercise name needed."),
    reps: yup
      .number()
      .positive("Do at least 1!")
      .required("How many reps?"),
    sets: yup
      .number()
      .positive("Do at least 1!")
      .required("How many sets?"),
    weight: yup
      .number()
      .positive("You can't lift negative lbs :)")
      .required("How much weight?")
  }),
  handleSubmit: (values, { setValues }) => {
    console.log(values);
    axios
      .post("#", values)
      .then(response => {
        setValues(response.data);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }
})(NewExercise);
>>>>>>> master
