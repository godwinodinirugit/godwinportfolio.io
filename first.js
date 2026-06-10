const question = {
  text: "What is 2 + 2?",
  answer: 4
};

function checkAnswer(userAnswer) {
  if (userAnswer === question.answer) {
    console.log("Correct");
  } else {
    console.log("Wrong");
  }
}

checkAnswer(4);
