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

function winReset(){

	gameWin = Math.floor(Math.random() * 120) + 19;

	// display gameWin in #gameNumber div
	$("#gameNumber").html(gameWin);

	// create random numbers for fruit

	var cherry = Math.floor(Math.random() * 19) + 1;
	var orange = Math.floor(Math.random() * 19) + 1;
	var banana = Math.floor(Math.random() * 19) + 1;
	var berry = Math.floor(Math.random() * 19) + 1;

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

	var cherry = Math.floor(Math.random() * 19) + 1;
	var orange = Math.floor(Math.random() * 19) + 1;
	var banana = Math.floor(Math.random() * 19) + 1;
	var berry = Math.floor(Math.random() * 19) + 1;

	
	alert("you lose");
	loss++;
	total = 0;
	$("#playerScore").html(total);
	$("#loss").html("Losses: " + loss);
	console.log(cherry, orange, banana, berry);

}

function playGame(){



	$("#playerScore").html(total);
	$("#wins").html("Wins: " + win);
	$("#loss").html("Losses: " + win);

	// when cherry is clicked
	$(".fruitimg").on("click", function(event){

		if(event.currentTarget.attributes.id.nodeValue === "cherry"){
	// adds totoal with value of fruit
		total = total + cherry;
		$("#playerScore").html(total);
		// show what our totoal is
		console.log(total);
		console.log();
		}

		if(event.currentTarget.attributes.id.nodeValue === "orange"){
			total = total + orange;
			$("#playerScore").html(total);
		}
		if(event.currentTarget.attributes.id.nodeValue === "banana"){
			total = total + banana;
			$("#playerScore").html(total);
		}
		if(event.currentTarget.attributes.id.nodeValue === "berry"){
			total = total + berry;
			$("#playerScore").html(total);
		}

		if(gameWin < total) {
			loseReset();

		}if(gameWin === total){
			winReset();

		};
		
	});

};

playGame();





// give random num values to fruit

