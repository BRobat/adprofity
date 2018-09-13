let questions = [
    {
        "question": "Jaki jest najniższy dźwięk standardowego stroju gitary 7-strunowej?",
        "answers": [
            "E",
            "B"
        ],
        "correct": "1"
    },
    {
        "question": "Co po śląsku znaczy 'gumiklyjza'?",
        "answers": [
            "Kluska",
            "Guma do żucia"
        ],
        "correct": "0"
    },
    {
        "question": "Z której strony logo Apple jest ugryzione?",
        "answers": [
            "Z lewej",
            "Z prawej"
        ],
        "correct": "1"
    }
]

let winner = false;
let points = 0;
let selectedQuestion = 0;

let body = document.getElementsByTagName("body")[0];
let questionLbl = document.getElementById("question-lbl");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");

let cv = document.getElementById("cv");

answer1.onclick = function() { answer(0) };
answer2.onclick = function() { answer(1) };


// initializator
initializeQuiz()

function initializeQuiz() {
    // creates buttons and stuff.
    winner = false
    points = 0
    selectedQuestion = 0

    // create buttons and stuff
    questionLbl.style.display = "block";
    answer1.style.display = "block";
    answer2.style.display = "block";

    // load first question
    loadQuestion();
}

function loadQuestion() {
    // loads question
    if (selectedQuestion < 3) {
        questionLbl.innerHTML = questions[selectedQuestion].question;
        answer1.innerHTML = questions[selectedQuestion].answers[0];
        answer2.innerHTML = questions[selectedQuestion].answers[1];
    } else {
        deinitializeQuiz();
    }
    
}

function answer(i) {
    // checks if the answer is correct
    if (i == questions[selectedQuestion].correct) {
        points += 1;
    } else {
    }
    selectedQuestion += 1;
        loadQuestion();
}

function deinitializeQuiz() {
    // deletes everything related to quiz.
    if (points == 3) {
        questionLbl.style.display = "none";
        answer1.style.display = "none";
        answer2.style.display = "none";
        cv.style.display = "blcok";

    } else {
        alert("need another try?");
        initializeQuiz();
    }
}