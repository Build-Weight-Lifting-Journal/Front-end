import React from 'react';


import AddExercise from "../components/AddExercise";
import User from "../components/ExerciseForm"
import PrivateRoute from "../components/PrivateRoute"

function Dashboard(){

    return (
        <div>
<h1>Hello</h1>

 {/* <AddExercise /> */}
{/* <PrivateRoute exact path="/dashboard" component={User} />
<PrivateRoute exact path="/restricted/exercises" component={AddExercise} /> */}
        </div>
    )
}

export default Dashboard