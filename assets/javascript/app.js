var answers = [];
var youranswers = [];
var all = document.getElementsByTagName("input");

var correctAnswer = 0;
var wrongAnswer = 0;

function fsubmit() {
	
	for (i = 0; i < all.length; i++) {
		inputs = all[i].getAttribute("id");
		if (inputs.indexOf("true")==0) {
			inputs2 = all[i].getAttribute("value");
			answers.push(inputs2);
		}
	}

	for (i = 0; i < all.length; i++) {
		if (all[i].checked) {
			inputs3 = all[i].getAttribute("value");
			youranswers.push(inputs3);
		}
	}

	for (i = 0; i < answers.length; i++) {
		if (answers[i] == youranswers[i]) {
			correctAnswer++;
			alert("Correct! Your score is " + correctAnswer + ".")
		}
		else {
			wrongAnswer++;
			if (wrongAnswer == 1) {
				alert("Incorrect. You have guessed " + wrongAnswer + " wrong answer.")
			}
			else {
				alert("Incorrect. You have guessed " + wrongAnswer + " wrong answers.")
			}
		}
	}
}