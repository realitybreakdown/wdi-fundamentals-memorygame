console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen"
var cardThree = "king";
var cardFour = "king";

console.log("User flipped" + " " + cardOne);

console.log("User flipped" + " " + cardTwo);

var cardsInPlay = [];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

var flipCard = function(cardId) {
console.log("User flipped " + cardOne);
checkForMatch();
};

flipCard(0);
flipCard(2);