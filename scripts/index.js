// Main Javascript file for FAQ Card

// event listner for fetching the question

var wrapQuestion = document.querySelectorAll(".wrap-question");

for (var i=0;i< wrapQuestion.length; i++) {
    wrapQuestion[i].addEventListener("click",clickQuestion);
}


//function clickquestion: called when wrap question is clicked

function clickQuestion() {
    var elementClick = this;
    answerMultiple(elementClick);
}

// function for multiple question

function answerMultiple (elementClick) {

    var allQuestions = document.querySelectorAll(".wrap-question");

    for (var i = 0; i < allQuestions.length; i++) {
        if (
            allQuestions[i]
            .querySelector(".faq-question")
            .classList.toString()
            .includes("active-question") &&
            allQuestions[i].querySelector(".faq-question").classList !==
            elementClick.querySelector(".faq-question").classList
        ) {
            toggleQuestion(allQuestions[i]);
            arrowRotate(allQuestions[i]);
        }
    }
    toggleQuestion(elementClick);
    arrowRotate(elementClick);

}

function displayAnswer(elementClick) {
    toggleQuestion(elementClick);
    arrowRotate(elementClick);
}

function toggleQuestion(elementClick) {
    elementClick.querySelector(".faq-question").classList.toggle("active-question");

    var answer = elementClick.querySelector(".faq-answer");


    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
    }

    // Change from white to grey
    if (answer.style.color !== "var(--dark-gray-blue)") {
        answer.style.color = "var(--dark-gray-blue)";
    } else {
        answer.style.color = "white";
    }
}

function arrowRotate(elementClick) {
    var arrow = elementClick.querySelector(".down-arrow");
    arrow.classList.toggle("rotate-180");
}
