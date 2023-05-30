var questionBank = [
    {
        question: "How many hours do you code per day?",
        option: ["2 hours", "3 hours", "1 hour", "5 hours"],
        answer: "3 hours"
    },
    {
        question: "How many line of codes?",
        option: ["500", "1000", "700", "100"],
        answer: "1000"
    },
    {
        question: "All EXCEPT one of this in not a Manchester United Player?",
        option: ["Ronaldo", "H. Marguire", "B. Fernandes", "Kante"],
        answer: "Kante"
    },
    {
        question: "Who is the Governor of Oyo State?",
        option: ["M. Buhari", "Peter Obi", "Seyi Makinde", "Yemi Osinbajo"],
        answer: "Seyi Makinde"
    },
    {
        question: "Which of these is not an African country?",
        option: ["Canada", "Ghana", "Zambia", "Tanzani"],
        answer: "Canada"
    }
    
]
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
    var span= document.querySelectorAll('span');
    var option0= document.getElementById('option0');
    var option1= document.getElementById('option1');
    var option2= document.getElementById('option2');
    var option3= document.getElementById('option3');
    var i=0;
    var next = document.querySelector('.next');
    var previous= document.querySelector('.previous');
    var stat= document.getElementById('stat');
    var points= document.getElementById('score');
    var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++) {
        span[a].style.background='none';
    }
    question.innerHTML= 'Q. '+(i+1)+' '+ questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    
    stat.innerHTML= "Question "+(i+1)+' '+'/'+' '+  questionBank.length;
    
    
}
            


    function calcScore(e){
        if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
        {
        score= score+1;
        document.getElementById (e.id).style.background='green';
        }
        else {
        document.getElementById (e.id).style.background='red';
        }
        setTimeout (nextQuestion, 300);
        }
        function nextQuestion() {
            if (i<questionBank.length-1) 
        {
            i=i+1;
            displayQuestion();
        }
        else{
            points.innerHTML= score+ '/'+ questionBank.length;
            quizContainer.style.display= 'none';
            scoreboard.style.display= 'block';
        }
    }
        function previousQuestion(){
            if (i<questionBank.length+1){
              i=i-1;
            displayQuestion();
            }}
            next.addEventListener('click', nextQuestion);
    previous.addEventListener('click', previousQuestion);
    displayQuestion();

    function backToQuiz(){
        location. reload();
    }
    function checkAnswer(){
        var answerBank= document.getElementById('answerBank');
        var answers= document.getElementById('answers');
        answerBank.style.display= 'block';
        scoreboard.style.display= 'none';
        for (var a=0;a<questionBank.length;a++) {

            var list= document.createElement('li');
            list.innerHTML= questionBank[a].answer;
            answers.appendChild(list);
        }
    }
    displayQuestion();
    // Display scoreboard
    // pagination