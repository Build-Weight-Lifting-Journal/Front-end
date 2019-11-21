// import React, {useState}from 'react'
// import {api} from "../utils/api";

// function AddExercise(props) {
//   const [newExercise, setNewExcercise] = useState ({
//     name: "",
//     reps: "",
//     sets: "",
//     weight: ""
//   })

//   const handleChange = e => {
//     setNewExcercise({
//       ...newExercise,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = e => {
//     e.preventDefault();
//     api()
//       .post("/restricted/exercises")
//       .then(res => setNewExcercise({
//         ...newExercise,
//         name: "",
//         reps: "",
//         sets: "",
//         weight: ""
//       }))
//       .catch(err => console.log(err, "Could not Exercise"))
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={newExercise.name}
//             onChange={handleChange}
//         />
//         <input
//             type="text"
//             name="reps"
//             placeholder="Reps"
//             value={newExercise.reps}
//             onChange={handleChange}
//         />
//         <input
//             type="number"
//             name="sets"
//             placeholder="Sets"
//             value={newExercise.sets}
//             onChange={handleChange}
//         />
//           <input
//             type="number"
//             name="weight"
//             placeholder="Weight"
//             value={newExercise.weight}
//             onChange={handleChange}
//         />
//         <button type="submit">Add Exercise</button>
//       </form>
//     </div>
//   )
// }

// export default AddExercise

// import React, { useState } from "react";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";


import { addTask } from "../actions/actions";
// import { api } from "../utils/api";

// const AddTaskForm = props => {
//   // let id = parseInt(localStorage.getItem("id"));
//   // console.log(id)
//   const [newExercise, setNewExcercise] = useState({
//     name: "",
//     reps: "",
//     sets: "",
//     weight: ""
//   });

//   const handleSubmit = e => {
//     e.preventDefault();
//     props.addTask(newExercise);
//   };

//   const handleChanges = e => {
//     setNewExcercise({
//       ...newExercise,
//       [e.target.name]: e.target.value
//     });
//   };
//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="landingBoxAddEvent">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={newExercise.name}
//             onChange={handleChanges}
//           />
//           <input
//             type="text"
//             name="reps"
//             placeholder="Reps"
//             value={newExercise.reps}
//             onChange={handleChanges}
//           />
//           <input
//             type="number"
//             name="sets"
//             placeholder="Sets"
//             value={newExercise.sets}
//             onChange={handleChanges}
//           />
//           <input
//             type="number"
//             name="weight"
//             placeholder="Weight"
//             value={newExercise.weight}
//             onChange={handleChanges}
//           />
//           <button
//             type="submit"
//             onClick={() => props.addTask(newExercise, props.history)}
//           >
//             Add Exercise
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// const mapStateToProps = state => {
//   return {};
// };

// export default connect(
//   mapStateToProps,
//   { addTask }
// )(withRouter(AddTaskForm));
