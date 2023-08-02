import React, { useState } from 'react'
import Antwort from './Antwort'



const Faq = () =>  {

    const [showAnswer, setShowAnswer] = useState(false);
    
    const handleShowAnswer = (event) => {
        event.preventDefault();

        setShowAnswer((prevShowAnswer) => !prevShowAnswer);
    }
    

    
    return (
        <>
    <button onClick={handleShowAnswer}>{showAnswer ? "Hide" : "Show"} Why is REACT great</button>
    {showAnswer && (
        <Antwort/>
        )}
  </>
)
}
export default Faq
