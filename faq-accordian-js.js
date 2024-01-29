const questionBox = document.getElementsByClassName("question-box");
const answer = document.getElementsByClassName("answer");

for (i = 0; i < questionBox.length ; i++) {
    questionBox[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}