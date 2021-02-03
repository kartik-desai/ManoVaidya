import React from 'react';
import Survey from 'material-survey/components/Survey';

export default function MySurvey(props){
  const handleComplete = (data) =>{
    const putMethod = {
      method: 'PUT', // Method itself
      headers: {
        'Content-type': 'application/json; charset=UTF-8', // Indicates the content
      },
      body: JSON.stringify(data) // We send data in JSON format
    };
    const url = "http://localhost:8000/survey/surveyanswer";
    // make the HTTP put request using fetch api
    fetch(url, putMethod)
      .then((response) => response.json())
      .catch(err => console.log(err));

  }
 
return(
    <Survey
    onFinish={answers => {
      {console.log(answers)}
      {handleComplete(answers)}
    }}
      form={{
        questions: [
          {
            choices: [
                { text: "15-25", value: "15-25" },
                { text: "26-35", value: "26-35" },
                { text: "36-45", value: "36-45" },
                { text: "46-55", value: "46-55" },
                { text: "55+", value: "55+" }
              ],
              name: "age group",
              title: "What is your age range?",
              type: "radiogroup"
          },
          {
              choices: [
                { text: "Male", value: "male" },
                { text: "Female", value: "female" },
                { text: "other", value: "other" }
              ],
              name: "gender",
              title: "Your Gender",
              type: "radiogroup"
          },
          {
            choices: [
              { text: "Service", value: "service" },
              { text: "Student", value: "Student" },
              { text: "Retired", value: "Retired" },
              { text: "Freelancer", value: "Freelancer" },
              { text: "Businessman", value: "Businessman" },
              { text: "Other", value: "Other" }
            ],
            name: "Occupational Status",
            title: "What is your occupational status?",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "interest or pleasure",
            title: "How often do you have little interest or pleasure in doing things?",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "feel down",
            title: "How often do you feel down, depressed, or hopeless?",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "feel tired",
            title: "How often do you feel tired or feel having very little energy?",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "feel bad",
            title: "How often do you feel bad about yourself - or that you are a failure and you have let yourself or your family down or have felt any sort of guilt?",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "feel trouble",
            title: "How often do you feel trouble concentrating on things, such as reading the newspaper or watching television? ",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "feel slowly",
            title: "How often do you feel that you are moving or speaking so slowly that other people could have noticed or the opposite -being so fidgety or restless that you have been moving around a lot more than usual?  ",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "feel sad",
            title: "How often do you feel sad or like crying? ",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "feel angry",
            title: "How often do you feel angry?",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "confusion",
            title: "How often do you experience having confusion or slowed thinking? ",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "thoughts",
            title: "How often do you experience having thoughts that you would be better off dead, or of hurting yourself? ",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "poor appetite",
            title: "How often do you overeat or have a poor appetite?  ",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "sleep cycle",
            title: "Is your sleep cycle disturbed or irregular?  ",
            type: "radiogroup"
        },
        {
            choices: [
              { text: "Nearly Everyday", value: "Nearly Everyday" },
              { text: "Several days", value: "Several days" },
              { text: "Some of the days", value: "Some of the days" },
              { text: "Not at all", value: "Not at all" },
            ],
            name: "diagnosed",
            title: "Have you ever been diagnosed with a mental disorder before?  ",
            type: "radiogroup"
        },
        ]
      }}
      
    />
  );
} 
    
