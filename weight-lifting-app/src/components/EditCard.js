import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { connect } from "react-redux";
import {addTask} from "../actions/actions";

const ExerciseForm = styled(Form)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 460px;
  margin: 100px auto 50px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: left;
`;

const Fields = styled(Field)`
  margin: 16px 0 16px 0;
  padding: 0.5rem;
  font-size: 16px;
  width: 100%;
  display: block;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  box-shadow: 0px 10px 14px -7px #322f20;
  background: linear-gradient(to bottom, #ce4f00 5%, #322f20 100%);
  background-color: #ce4f00;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #f5f5f5;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #fae9dc;
  transition: all 0.3s ease-in;
  &:hover {
    background: linear-gradient(to bottom, #322f20 5%, #ce4f00 100%);
    background-color: #322f20;
  }
`;

const EditExercise = ({ errors, touched, status }) => {
    const [exercise, setExercise] = useState({
        id: "",
        name: '',
        reps: "",
        sets: '',
        weight: ''
    });
  
    function getExcerciseDetails(){
        const id = this.props.match.params.id
        api()
        .get(`/restricted/exercises/${id}`)
        .then(result => {
          setExercise({
              id: result.data.exercises.id,
              name: result.data.exercises.name,
              reps: result.data.exercises.reps,
              sets: result.data.exercises.sets,
              weight: result.data.exercises.weight
          })
        console.log(result)
        })
       .catch(err => {
           console.log(err)
       }) 
    }

    useEffect(() => {
      if (status) {
        setExercise([...exercise, status]);
      }
    }, [status]);
  
    return (

      <Form>
        {/* {touched.exercise && errors.exercise && (
          <p className="error">{errors.exercise}</p>
        )} */}
        <label>
          <span>Exercise</span>
          <Fields
            type="text"
            name="name"
            placeholder="Bench Press, Squats, Etc."
            value={exercise.name}
          />
        </label>
  
        {/* {touched.reps && errors.reps && <p className="error">{errors.reps}</p>} */}
        <label>
          <span>Reps</span>
          <Fields type="number" name="reps" placeholder="10 reps" value={exercise.reps}  />
        </label>
  
        {/* {touched.sets && errors.sets && <p className="error">{errors.sets}</p>} */}
        <label>
          <span>Sets</span>
          <Fields type="number" name="sets" placeholder="3" value={exercise.reps} />
        </label>
  
        {/* {touched.weight && errors.weight && (
          <p className="error">{errors.weight}</p> */}
        {/* )} */}
        <label>
          <span>Weight</span>
          <Fields type="number" name="weight" placeholder="100" value={exercise.weight} />
        </label>
  
        <Button type="submit">Submit</Button>
      </Form>
      
    );
  };

 export default EditExercise