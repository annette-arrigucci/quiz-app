$(document).ready(function(){
	var isGuessCorrect = null;
	var numCorrect = 0;
	var questCount = 0;

	var questionOne = {
		correct: "1920"
	};
	
	var questionTwo = {
		correct: "Margaret Sanger"
	};

	var questionThree = {
		correct: "1963"
	};

	var questionFour = {
		correct: "Ms. magazine"
	};

	var questionFive = {
		correct: "Title IX of the Education Amendments"
	};

	var myQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
	
	$(".takeQuiz").click( function () {
		$(".introduction").hide();
		questionHandler();
	});

	function startNewGame() {
		isGuessCorrect = null;
		numCorrect = 0;
		questCount = 0;
		$(".introduction").show();
		$(".answerButton1").off();
		$(".answerButton2").off();
		$(".answerButton3").off();
		$(".answerButton4").off();
		$(".answerButton5").off();
	}
    
    function questionHandler() {
    	if(questCount < 5)
    	{
    		questCount++;
    		
    		$(".question" + questCount).show();
    		$(".answerButton" + questCount).on('click', function() 
    		{
				var myGuess = $('input[name="answer' + questCount + '"]:checked').val();
				if (myGuess == myQuestions[questCount-1].correct) {
					isGuessCorrect = "Correct";
					numCorrect++;
				}
				else { 
					isGuessCorrect = "Incorrect";
				}
				$(".question" + questCount).hide();
				$(".correct" + questCount).show();
				$(".correct" + questCount + " .isCorrect").text(isGuessCorrect);
				$(".correct" + questCount + " .yourAnswer").text(myGuess);
			});
		}	
		else {
			$(".score").show();
			$(".finalScore").text(numCorrect);
		} 
  	}

  	$(".nextQuestion").on('click', function(){
		$(".correct" + questCount).hide();
		questionHandler();
	});


	$(".tryAgain").on('click', function(){
		$(".score").hide();
		startNewGame();
	});
});