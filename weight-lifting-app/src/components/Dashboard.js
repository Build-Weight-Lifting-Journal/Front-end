import React from 'react';
import AddExercise from "../components/AddExercise";
import User from "../components/ExerciseForm"
import PrivateRoute from "../components/PrivateRoute"
import ExerciseCard from "./ExerciseCard"
import JournalCard from "./JournalCard"

function Dashboard(){

    return (
        <div>
<h1>Dashboard</h1>

<PrivateRoute exact path="/dashboard" component={JournalCard} />
{/* <PrivateRoute exact path="/dashboard" component={User} /> */}

        </div>
    )
}

export default Dashboard