var answers = [];
var youranswers = [];
var all = document.getElementsByTagName("input");

var correctAnswer = 0;
var wrongAnswer = 0;

var number = 30;
var counter;

// The run function sets an interval
// that runs the decrement function once a second.
// Notice how we name the interval "counter."
function run(){
	counter = setInterval(decrement, 1000);
}

function decrement(){
	number--;
    // Show the number in the #show-number tag.
    $('#show-number').html('<h2>' + number + '</h2>');

    // Once number hits zero...
    if (number === 0){
    // ...run the stop function.
    	stop();
    // Alert the user that time is up.
    	alert('Time Up!')
    }
}

function stop(){
	// Clears our "counter" interval.
	// We just pass the name of the interval
	// to the clearInterval function.
	clearInterval(counter);
}

run();

function fsubmit() {

	stop();
	
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

	if (answers.length == youranswers.length){

		for (i = 0; i < answers.length; i++) {
			if (answers[i] == youranswers[i]) {
				correctAnswer++;
			}
			else {
				wrongAnswer++;
			}
		}
	}
	else {
		alert("You did not answer all the questions!");
	}

	var output = document.getElementById("game");	
	var outputStr = "<h1>" + "Correct: " + correctAnswer + "</h1> " + "<h1>" + "Incorrect: " + wrongAnswer + "</h1>";
	output.innerHTML = outputStr;
}