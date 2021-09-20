const quizData = [
    {
        question: 'How old is Richard?',
        a: '10',
        b: '18',
        c: '23',
        d: '78',
        correct: 'c',
    }, 
    {
        question: 'Which company is the most valuable company in the world?',
        a: 'Tesla',
        b: 'Apple',
        c: 'Saudi Aramco',
        d: 'Mc Donals',
        correct: 'b',
    }, 
    {
        question: 'Who is the president of the US?',
        a: 'Joe Biden',
        b: 'Vladimir Putin',
        c: 'Richard Tuharsky',
        d: 'Emanuel Macron',
        correct: 'a',
    }, 
    {
        question: 'How many people live on Earth?',
        a: '1 bilion',
        b: '7.9 billion',
        c: '300.000',
        d: 'Just a few',
        correct: 'b',
    },
     {
        question: "What year was JavaScript launched?",
        a: '1997',
        b: '2005',
        c: '2016',
        d: 'Non of them above',
        correct: 'd',
    },

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});


