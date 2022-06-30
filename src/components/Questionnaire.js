import React from 'react'
import 'survey-core/modern.min.css';
import { StylesManager } from 'survey-core';

StylesManager.applyTheme("modern");



function compareAnswer(){
  let yesCounter = 0;

  
}

function Questionnaire() {
  const [counter, setCounter] = React.useState(0);
  const surveyJson = {
    elements: [
      {
        name: "First",
        title: "Do you like the Sunshine?",
        type: "radiogroup",
        choices: ["yes", "no"],
      },
      {
        name: "Second",
        title: "Do you prefer big plants or small plants?",
        type: "radiogroup",
        choices: ["BIG PLANTSSS!!", "cute and manageable uwu."],
      },
      {
        name: "third",
        title: "Would you want to live in a tropical Country or in the mountains?",
        type: "radiogroup",
        choices: ["Mountains Rocks!", "Beach and Pina Coladas? Count me in."],
      },
      {
        name: "fourth",
        title: "Would you survive for a long time without water?",
        type: "radiogroup",
        choices: ["Who needs water?", "Ehmm no?"],
      },
      {
        name: "fifth",
        title: "Last question if you could be a plant which one would you be?",
        type: "radiogroup",
        choices: ["", ""],
      }
    ],
  };
  return (
    <section>
      <h1 className="title is-1 has-text-centered has-text-success-dark">Which Plant are you?</h1>
      <p className="subtitle is-3 has-text-centered has-text-success-dark">this is a Qustionnaire in which we will be asking you several questions and through our algorithm we will determine which plant you are.</p>
      <body>{surveyJson}</body>
    </section>
    
  )
}

export default Questionnaire
