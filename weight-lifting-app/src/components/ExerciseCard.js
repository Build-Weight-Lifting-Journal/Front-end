import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { api } from "../utils/api";
import { deleteEvent } from "../actions/actions";
import { Link } from "react-router-dom";
import styled from "styled-components";


const CardContainer = styled.div`
background-color: #717E8E;
color: #fafcff;
display: flex;
width: 20%;
height: 200px;
justify-content: space-around;
flex-direction: column;
box-shadow:0 4px 8px 0 rgba(0, 0, 0, 1);
`

const Divider = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`


// const ExerciseCard = ({ exercise }) => {
//     return (
//         <div className="exerciseCard">
//             <h2>Name: {exercise.name}</h2>
//             <p>Sets: {exercise.sets}</p>
//             <p>Reps: {exercise.reps}</p>
//             <p>Weights: {exercise.weight}</p>
//         </div>
//     )
// }

// export default ExerciseCard;



function ExerciseCard(props) {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    api()
      .get("/restricted/exercises")
      .then(result => {
        setExercise(result.data.exercises);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    const workout = [exercise.find(workout => workout.id === id)];

    if (window.confirm("Are you sure?!")) {
      setExercise(exercise.filter(workout => workout.id !== id));

      props.deleteEvent(id)
    
      // api()
      //   .delete(`/restricted/exercises/${id}`)
      //   .then(result => {
      //     console.log("workout was TERMINATED");
      //   })
      //   .catch(error => {
      //     console.log(error);
      //     setExercise([...exercise, workout]);
      //   });
    }
  };

  return (
    <>
      <h1>Exercises</h1>

      {exercise.map(workout => (
        <div key={workout.id}>
           <Link to={"/add-exercise"}>Add</Link>
          {/* <Link  to={`/restricted/exercises/${workout.id}`}>Edit</Link> */}
          <button onClick={e => handleDelete(e, workout.id)}>Delete</button>
          <div>WORKOUT NAME: {workout.name}</div>
          <div>REPS: {workout.reps}</div>
          <div>SETS: {workout.sets}</div>
          <div>weight: {workout.weight}</div>
        </div>
      ))}
    </>
  );
}

const mapStateToProps = state => {
  return {
      workout: state.workout
  };
};

export default connect(
  mapStateToProps,
  { deleteEvent }
)(ExerciseCard);
