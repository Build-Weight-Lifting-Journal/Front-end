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