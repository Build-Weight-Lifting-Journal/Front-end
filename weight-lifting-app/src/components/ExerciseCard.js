import React from "react";

const ExerciseCard = ({ exercise }) => {
    return (
        <div className="exerciseCard">
            <h2>Name: {exercise.name}</h2>
            <p>Sets: {exercise.sets}</p>
            <p>Reps: {exercise.reps}</p>
            <p>Weights: {exercise.weight}</p>
        </div>
    )
}

export default ExerciseCard;