let questions=[
    {
        id:1,
        question:"Which instrument is used for measuring wind speed?",
        answer:"Anemometer",
        options:[
        "Thermometer",
        "Barometer",
        "Anemometer",
        "None of these"
        ]
    },
  
    {
        id:2,
        question:"Which planet is the smallest?",
        answer:"Mercury",
        options:[
        "Neptune",
        "Mars",
        "Mercury",
        "Earth"
        ]
    },
  
    {
        id:3,
        question:"Which of the following shape has four sides?",
        answer:"Square",
        options:[
        "Triangle",
        "Hexagon",
        "Octagon",
        "Square"
        ]
    },
  
    {
        id:4,
        question:"Which planet is known as the Red Planet?",
        answer:"Mars",
        options:[
        "Pluto",
        "Jupiter",
        "Mars",
        "Saturn"
        ]
    },
  
    {
        id:5,
        question:"What is the National Flower of India?",
        answer:"Lotus",
        options:[
        "Rose",
        "Jasmine",
        "Lotus",
        "Marigold"
        ]
    },
  
  
    {
        id:6,
        question:"What is the Capital of Tamil Nadu?",
        answer:"Chennai",
        options:[
        "Hyderabad",
        "Chennai",
        "Bengaluru",
        "Mumbai"
        ]
    },
  
  
    {
        id:7,
        question:"What is the full form of RAM?",
        answer:"Random Access Memory",
        options:[
        "Random Access Memory",
        "Radio Active Memory",
        "Run Accurate Memory",
        "None of these"
        ]
    },
  
  
    {
        id:8,
        question:"Which planet lies between Venus and Mars?",
        answer:"Earth",
        options:[
        "Mercury",
        "Earth",
        "Pluto",
        "Jupiter"
        ]
    },
  
  
  
    {
        id:9,
        question:"In which country did golf originate?",
        answer:"Scotland",
        options:[
        "The USA",
        "China",
        "Scotland",
        "India"
        ]
    },
  
  
    {
        id:10,
        question:"What is the full form of CPU?",
        answer:"Central Processing Unit",
        options:[
        "Central Processing Unit",
        "Central Program Unit",
        "Central Preload Unit",
        "None of these"
        ]
    }
  
  ];
  
  
  function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    sessionStorage.setItem("name", name);
  
    location.href = "quiz.html";
  }
  

  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  


  function next() {
    // Redirecting to final page 
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
      clearInterval(mytime);
      location.href = "end.html";
      
    }
    /*console.log(question_count);*/

  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // To check if the answer is right or wrong

    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    /*console.log(points);*/
  
    question_count++;
    show(question_count);
  }

  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  
  
 