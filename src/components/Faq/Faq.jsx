import React, { useState } from 'react'
import Antwort from './Antwort'



const Faq = (props) =>  {
    let lastArray = props.question
    console.log(lastArray);

    const [showAnswer, setShowAnswer] = useState(false);
    
    const handleShowAnswer = (event) => {
        event.preventDefault();

        setShowAnswer((prevShowAnswer) => !prevShowAnswer);
    }
    

    
    return (
        <>
    <p>
        Why is REACT great
    <button onClick={handleShowAnswer}>{showAnswer ? "-" : "+"}</button>
    </p>
    {showAnswer && (
        <Antwort/>
        )}
  </>
)
}
export default Faq
