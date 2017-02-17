// random number to try and add too

var gameWin = Math.floor(Math.random() * 120) + 19;

// display gameWin in #gameNumber div
$("#gameNumber").html(gameWin);

// create random numbers for fruit

var cherry = Math.floor(Math.random() * 19) + 1;
var orange = Math.floor(Math.random() * 19) + 1;
var banana = Math.floor(Math.random() * 19) + 1;
var berry = Math.floor(Math.random() * 19) + 1;

// console log for clarity
console.log(cherry, orange, banana, berry);



// var total is will be the value of var totalGuess added together
var total = 0;

win = 0;
loss = 0;


function playGame(){



	$("#playerScore").html(total);
	$("#wins").html("Wins: " + win);
	$("#loss").html("Losses: " + win);

	// when cherry is clicked
	$("#cherry").on("click", function(){

	// adds totoal with value of fruit
		total = total + cherry;
		$("#playerScore").html(total);
		// show what our totoal is
		console.log(total);

		if(gameWin < total) {
			loseReset();

		}if(gameWin === total){
			winReset();

		};
		
	});

	$("#orange").on("click", function(){

	// adds totoal with value of fruit
		total = total + orange;
		$("#playerScore").html(total);
		// show what our totoal is
		console.log(total);

		if(gameWin < total) {
			loseReset();

		}if(gameWin === total){
			winReset();

		};

	});

	$("#banana").on("click", function(){

		// adds totoal with value of fruit
		total = total + banana;
		$("#playerScore").html(total);
		// show what our totoal is
		console.log(total);

		if(gameWin < total) {
			loseReset();

		}if(gameWin === total){
			winReset();

		};

	});

	$("#berry").on("click", function(){
		// adds totoal with value of fruit
		total = total + berry;
	$("#playerScore").html(total);
		// show what our totoal is
		console.log(total);

		if(gameWin < total) {
			loseReset();

		}if(gameWin === total){
			winReset();

		};

	});





};




playGame();



function winReset(){

	gameWin = Math.floor(Math.random() * 120) + 19;

	// display gameWin in #gameNumber div
	$("#gameNumber").html(gameWin);

	// create random numbers for fruit

	cherry = Math.floor(Math.random() * 19) + 1;
	orange = Math.floor(Math.random() * 19) + 1;
	banana = Math.floor(Math.random() * 19) + 1;
	berry = Math.floor(Math.random() * 19) + 1;

	win++;
	alert("you win");
	total = 0;
	$("#playerScore").html(total);
	$("#wins").html("Wins: " + win);
	console.log(cherry, orange, banana, berry);


};

function loseReset(){
	gameWin = Math.floor(Math.random() * 120) + 19;

	// display gameWin in #gameNumber div
	$("#gameNumber").html(gameWin);

	// create random numbers for fruit

	cherry = Math.floor(Math.random() * 19) + 1;
	orange = Math.floor(Math.random() * 19) + 1;
	banana = Math.floor(Math.random() * 19) + 1;
	berry = Math.floor(Math.random() * 19) + 1;

	
	alert("you lose");
	loss++;
	total = 0;
	$("#playerScore").html(total);
	$("#loss").html("Losses: " + loss);
	console.log(cherry, orange, banana, berry);

}


// give random num values to fruit

