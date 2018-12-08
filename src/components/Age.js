import React from 'react';

function AgeComponent(props){
    let ageTemplate = '';
  
    if(props.age > 5){
      ageTemplate = <h1>you are older than 5</h1>;
    } else {
      ageTemplate = <p>you are not older than 5</p>;
    }
    
    return ageTemplate;
  }

  export default AgeComponent;
  