$(document).ready(function () {
	var orange = $('#orange');
	var cherry = $('#cherry');
	var banana = $('#banana');
	var berry = $('#berry');

	var gameWin;
	var total;

	var win = 0;
	var loss = 0;

	function resetGameNumbers () {
		gameWin = generateRandomNumber(19, 120);
		$("#gameNumber").html(gameWin);

		cherry.data('fruit-val', generateRandomNumber(1, 19)); 
		orange.data('fruit-val', generateRandomNumber(1, 19)); 
		banana.data('fruit-val', generateRandomNumber(1, 19)); 
		berry.data('fruit-val', generateRandomNumber(1, 19)); 

		total = 0;
		$("#playerScore").html(total);
	};

	function generateRandomNumber (min, max) {
		max -= min
		return Math.floor(Math.random() * max) + min;
	};

	function winReset () {
		win ++;
		alert("you win");
		$("#wins").html("Wins: " + win);
		resetGameNumbers();
	};

	function loseReset () {
		loss ++;
		alert("you lose");
		$("#loss").html("Losses: " + loss);
		resetGameNumbers();
	};

	function playGame () {

		$("#playerScore").html(total);
		$("#wins").html("Wins: " + win);
		$("#loss").html("Losses: " + win);

		$(".fruitimg").on("click", function(event){

			total += $(this).data('fruit-val')
			$("#playerScore").html(total);

			if (gameWin < total) {
				loseReset();
			} else if (gameWin === total) {
				winReset();
			};
			
		});

	};

	resetGameNumbers();
	playGame();

})
