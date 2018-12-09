// scripts.js

//possible timer for game
// $("#start").on("click", function() {
// 	setTimeout(gameEnd, 45000);
// 	start(); 
// });

const cards = document.querySelectorAll('.memory-card');


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
	if (lockBoard) return;
	if(this === firstCard) return;

	//this.classList.toggle('flip');
	//this.classList.toggle('flip');
  this.classList.add('flip');

 if (!hasFlippedCard) {
  hasFlippedCard = true;
 firstCard = this;
  return;
	}
	//unflipCards();	

	secondCard = this;
	lockBoard =  true;

	checkForMatch();
}

function checkForMatch() {
	let isMatch = firstCard.dataset.name === secondCard.dataset.name;
	isMatch ? disableCards() : unflipCards();
}

function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	 secondCard.removeEventListener('click', flipCard);
	 
	 resetBoard();
  }

	function unflipCards() {

	//lockBoard = true;


	setTimeout(() => {
	    firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');
			//lockBoard = false;
			resetBoard();
	  }, 1500);
	}

	function resetBoard() {
		hasFlippedCard = false;
		lockBoard = false;
		[firstCard, secondCard] = [null, null];
		 }

	function shuffle() {
			cards.forEach(card => {
				let ramdomPos = Math.floor(Math.random() * 12);
				card.style.order = ramdomPos;
			});
		}



cards.forEach(card => card.addEventListener('click', flipCard));