var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct =0;

var questions = [

	["What sport does Roger Federer play?","Cricket","Basketball","Tennis","Soccer","C"],

	["What sport does Kobe Bryant play?","Cricket","Basketball","Tennis","Soccer","B"],

	["What sport does Lionel Messi play?","Cricket","Basketball","Tennis","Soccer","D"],


];

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

function quiz(x){

	return document.getElementById(x);

}

function renderQuestion() {

	test = quiz("test");

	if(pos >= questions.length){

		$('#test').html("<h2>You got " + correct + " of " + questions.length + " questions correct.</h2>");

		$("#test_status").html("Test Completed");

		stop();

		pos = 0;

		correct = 0;

		return false;

	}

	$('#test_status').html("Question " + (pos+1) + " of " + questions.length);

	question = questions[pos][0];

	chA = questions[pos][1];

	chB = questions[pos][2];

	chC = questions[pos][3];

	chD = questions[pos][4];

	$('#test').html("<h3>" + question + "</h3>");

	$('#test').append("<input type= 'radio' name= 'choices' value= 'A'>" + chA + "<br>" + "<input type= 'radio' name= 'choices' value= 'B'>" + chB + "<br>" + "<input type= 'radio' name= 'choices' value= 'C'>" + chC + "<br>" + "<input type= 'radio' name= 'choices' value= 'D'>" + chD + "<br><br>");

	$('#test').append("<button onclick=' checkAnswer()'>Submit</button>");

}

function checkAnswer(){

	choices = document.getElementsByName("choices");

	for (var i = 0; i < choices.length; i++) {

		if (choices[i].checked) {

			choice = choices[i].value;

		}

	}

	if (choice == questions[pos][5]) {

		correct++;

	}

	pos++;

	renderQuestion();

}

$(document).ready(function() {
	renderQuestion();
	run();
});