// <<<<<<< HEAD
import React, {useEffect, useState } from "react"

import styled from "styled-components";
import axios from "axios";

const CardContainer = styled.div`
background-color: #717E8E;
color: #fafcff;
display: flex;
width: 20%;
height: 200px;
justify-content: space-around;
flex-direction: column;
box-shadow:0 4px 8px 0 rgba(0, 0, 0, 1);
`

const Divider = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

const ExcerciseCard = props => {
    const [api, setApi] = useState()
    useEffect(() => {

        axios.get('https://get-hercules.herokuapp.com/api/restricted/journals')
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log("error:",err)
          })
      }, []);





    return(
        <CardContainer>
            <span>11/16/2019</span>
            <h1>Legs</h1>
            <Divider>
            <i class="material-icons">edit</i>
                <i class="material-icons">delete</i>
            </Divider>
        </CardContainer>
    )
} 

export default ExcerciseCard
// =======


// const ExerciseCard = ({ exercise }) => {
//     return (
//         <div className="exerciseCard">
//             <h2>Name: {exercise.name}</h2>
//             <p>Sets: {exercise.sets}</p>
//             <p>Reps: {exercise.reps}</p>
//             <p>Weights: {exercise.weight}</p>
//         </div>
//     )
// }

// export default ExerciseCard;
// >>>>>>> 1f6adbd680f1b246dc5a0143eea6309d0a42e719
