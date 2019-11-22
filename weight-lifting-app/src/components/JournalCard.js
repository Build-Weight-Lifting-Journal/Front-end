
// THIS IS A WORKING JOURNAL CARD COMPONENT. IT GETS THE DATA OF THE SELECTED USER OF JOUNRAL ENTRIES
// AND CAN DELETE A JOURNAL ENTRY
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { api } from "../utils/api";
import { Link } from "react-router-dom";
import { deleteJounarl } from "../actions/actions";


function JournalCard(props) {
  const [journal, setJournals] = useState([]);

  useEffect(() => {
    api()
      .get("/restricted/journals")
      .then(result => {
        setJournals(result.data.journals);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    const workout = [journal.find(workout => workout.id === id)];

    if (window.confirm("Are you sure?!")) {
      setJournals(journal.filter(workout => workout.id !== id));
      //this is the api via redux
      props.deleteJounarl(id)

      //   api()
      //     .delete(`/restricted/journals/${id}`)
      //     .then(result => {
      //       console.log("workout was TERMINATED");
      //     })
      //     .catch(error => {
      //       console.log(error);
      //       setJournals([...journal, workout]);
      //     });
    }
  };

  return (
    <>
      <h1>Journal</h1>

      {journal.map(workout => (
        <div key={workout.id}>
          {/* <Link to={"/restricted/journals/"}>Add</Link> */}
          {/* <Link  to={`/restricted/journals/${workout.id}`}>Edit</Link> */}
          <button onClick={e => handleDelete(e, workout.id)}>Delete</button>
          <div>Date: {workout.date}</div>
          <div>Region: {workout.region}</div>
          {/* These link to the privateroutes in the app.js */}
          <Link to={"/exercises"}>Exercises</Link>
          <Link to={"/add-journal"}>Add</Link>
          
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
  { deleteJounarl }
)(JournalCard);