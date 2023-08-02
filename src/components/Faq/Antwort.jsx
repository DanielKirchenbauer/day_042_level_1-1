import React from 'react';
import {useState} from 'react';

const Antwort = () => {


    const [showAnswer, setShowAnswer] = useState(false);
    
    const handleShowAnswer = (event) => {
        event.preventDefault();

        setShowAnswer((prevShowAnswer) => !prevShowAnswer);
    }
    

    
    return (
        <>
        <p>fast lern curve
        <button onClick={handleShowAnswer}>{showAnswer ? "-" : "+"}</button>
        </p>
    {showAnswer && (
        <div>
          React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
          As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.
        </div>
        )}
  </>
)
}

//   return (
//     <div>
//       <p>fast lern curve</p>
//     </div>
//   )
// }

export default Antwort
