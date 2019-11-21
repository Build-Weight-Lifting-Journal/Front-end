import React, { useState, useEffect } from "react";
import { api } from "../utils/api";


function UpdateExercise(props, id) {
    // const id = props.match.params.id;
    const [workout, setWorkout] = useState({
        // jounralId: "",
        // userId: "",
        name: "",
        reps: "",
        sets: "",
        weight: ""
    });

    useEffect(() => {
        api()
            .get(`/restricted/exercises/${id}`)
            .then(result => {
                result.data.map(work => {
                    setWorkout({
                        ...workout,
                        name: work.name,
                        reps: work.reps,
                        sets: work.sets,
                        weight: work.weight
                    })
                });
            })
            .catch(error => {
                console.log(error);
            });

    }, [props.match.params.id]);

    const handleChange = event => {
        setWorkout({
            ...workout,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event, id) => {
        event.preventDefault();

        api()
            .put(`/restricted/exercises/${props.match.params.id}`, workout)
            .then(result => {
                props.history.push("/exercises");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
            <h1>Update User</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={workout.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="reps"
                    placeholder="Reps"
                    value={workout.reps}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="sets"
                    placeholder="Sets"
                    value={workout.sets}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="weight"
                    placeholder="Weight"
                    value={workout.weight}
                    onChange={handleChange}
                />

                <button type="submit">Save</button>
            </form>
        </>
    );
}

export default UpdateExercise;