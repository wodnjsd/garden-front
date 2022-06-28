import React from 'react'
import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
StylesManager.applyTheme("defaultV2");


function compareAnswer(){
  let yesCounter = 0;

  
}

function Questionnaire() {
  const [counter, setCounter] = React.useState(0);
  return (
    <section>
      <h1 className="title is-1 has-text-centered has-text-success-dark">Which Plant are you?</h1>
      <p className="subtitle is-3 has-text-centered has-text-success-dark">this is a Qustionnaire in which we will be asking you several questions and through our algorithm we will determine which plant you are.</p>
    </section>
    
  )
}

export default Questionnaire