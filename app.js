(function() {
    function buildQuiz() {
     
      const output = [];
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
      
        const answers = [];
  
        for (letter in currentQuestion.answers) {
         
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
    
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
          );
        });
    
        quizContainer.innerHTML = output.join("");
      }
  
    function showResults() {
   
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      let numCorrect = 0;

      myQuestions.forEach((currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
          answerContainers[questionNumber].style.color = "lightgreen";

        } else {
          answerContainers[questionNumber].style.color = "red";
        }
        });

      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    var sec = 60;   
    var time = setInterval(myTimer, 1000);

    function myTimer() {
        document.getElementById('display').innerHTML = sec;
        sec--;
            if (sec == -1) {
             clearInterval(time);
        }
    }
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const start = document.getElementById("start");
    const myQuestions = [
      {
        question: " Who signed the Declaration of Independance in 1776?",
        answers: {
          a: "William Ellery",
          b: "Elbridge Jerry",
          c: "Oliver Ducott",
          d: "James Adams"
        },
        correctAnswer: "a"
      },
      {
        question: "Who discovered the vaccination for smallpox?",
        answers: {
          a: "Edward Jones",
          b: "Jon Jones",
          c: "Edward Jenner",
          d: "John Edwards"
        },
        correctAnswer: "c"
      },
      {
        question: "The country of Rhodesia changed to which nation in 1980?",
        answers: {
          a: "Senegal",
          b: "Angola",
          c: "Chad",
          d: "Zimbabwe"
        },
        correctAnswer: "d"
      },
      {
        question: "Who invented the thermometer?",
        answers: {
          a: "Galileo",
          b: "Leonardo Da Vinci",
          c: "Issac Newton",
          d: "Blaise Pascal"
        },
        correctAnswer: "a"
      },
      {
        question: "What did Pierre-Francois Bouchard discover in 1799?",
        answers: {
          a: "Code of Hammurabi",
          b: "Narmer Palette",
          c: "Lewis Chessmen",
          d: "Roseatta Stone"
        },
        correctAnswer: "d"
      },
      {
        question: "Who was the first European to cross the Pacific Ocean?",
        answers: {
          a: "Bartholomeu Dias",
          b: "Ferdinand Magellan",
          c: "Andres De Urdaneta",
          d: "Vasco de Gama"
        },
        correctAnswer: "b"
      },
      {
        question: "War of Jenkins's Ear was fought between Britain and?",
        answers: {
          a: "France",
          b: "Portugal",
          c: "Austria",
          d: "Spain"
        },
        correctAnswer: "d"
      },
      {
        question: "Witt Wallace started which magazine?",
        answers: {
          a: "Consumer Reports",
          b: "Readers Digest",
          c: "The Economist",
          d: "Southern Living"
        },
        correctAnswer: "b"
      },
    ];

    buildQuiz();

    submitButton.addEventListener("click", showResults);
})();
