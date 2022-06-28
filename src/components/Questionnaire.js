import React from 'react'

function compareAnswer(){
  let yesCounter = 0;
  
  
}

function Questionnaire() {
  const [counter, setCounter] = React.useState(0);
  return (
    <section>
      <h1 className="title is-1 has-text-centered has-text-success-dark">Which Plant are you?</h1>
      <p className="description">this is a Qustionnaire in which we will be asking you several questions and through our algorithm we will determine which plant you are.</p>
    </section>
    
  )
}

export default Questionnaire