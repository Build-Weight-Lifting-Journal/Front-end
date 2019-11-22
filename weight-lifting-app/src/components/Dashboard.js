import React from 'react';
import PrivateRoute from "../components/PrivateRoute"
import JournalCard from "./JournalCard"

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>

            <PrivateRoute exact path="/dashboard" component={JournalCard} />

        </div>
    )
}

export default Dashboard