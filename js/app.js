$(document).ready(function(){
	var guess = null;
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
    
    function questionHandler() {
    	if(questCount <= 5)
    	{
    		questCount++;
    		
    		$(".question" + questCount).show();
    		$(".answerButton").on('click', function() 
    		{
				guess = $('input[name="answer"]:checked').val();
				if (guess == myQuestions[questCount].correct) {
					isGuessCorrect = "Correct";
					numCorrect++;
				}
				else { 
					isGuessCorrect = "Incorrect";
				}
				$(".question" + questCount).hide();
				$(".correct" + questCount).show();
				$(".correct" + questCount + " .isCorrect").text(isGuessCorrect);
				$(".correct" + questCount + " .yourAnswer").text(guess);
				$(".nextQuestion").on('click', function(){
					$(".correct" + questCount).hide();
					questionHandler();
				});
			});
		}	
		else {
			alert("Five questions");
		} 
  	}
});