import React, {useState}from 'react'
import {api} from "../utils/api";

function AddExercise(props) {
  const [newExercise, setNewExcercise] = useState ({
    name: "",
    reps: "",
    sets: "",
    weight: ""
  })

  const handleChange = e => {
    setNewExcercise({
      ...newExercise,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    api()
      .post("/restricted/exercises")
      .then(res => setNewExcercise({
        ...newExercise,
        name: "",
        reps: "",
        sets: "",
        weight: ""
      }))
      .catch(err => console.log(err, "Could not Exercise"))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Name"
            value={newExercise.name}
            onChange={handleChange}
        />
        <input
            type="text"
            name="reps"
            placeholder="Reps"
            value={newExercise.reps}
            onChange={handleChange}
        />
        <input
            type="number"
            name="sets"
            placeholder="Sets"
            value={newExercise.sets}
            onChange={handleChange}
        />
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            value={newExercise.weight}
            onChange={handleChange}
        />
        <button type="submit">Add Exercise</button>
      </form>
    </div>
  )
}

export default AddExercise