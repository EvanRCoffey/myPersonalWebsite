var complementBank = ["Cool shoes","Love your outfit","Your hair looks great today","You smell wonderful","You are an inspiration","You look like a winner","You're just the best","You're so clever","Seriously, you're awesome", "You are an impressive person", "Keep up the good work", "You should be proud of yourself", "Tone it down some, you're making everyone else look bad"];

function randomComplement() {
	var randomNum = Math.floor(Math.random() * 13) + 1;
	return complementBank[randomNum];
}

$( document ).ready(function() {
	var complement = randomComplement();
	$( "#footerFloatRight" ).html(complement);
})