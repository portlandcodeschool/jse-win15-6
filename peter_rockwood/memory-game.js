var MemoryGame = (function() {
	function Ctor(cardset) {

		console.log(
				",-,-,-.\n"+                         
				"`,| | |   ,-. ,-,-. ,-. ,-. . .\n"+ 
  				"  | ; | . |-' | | | | | |   | |\n"+ 
  				"  '   `-' `-' ' ' ' `-' '   `-|\n"+ 
                "                             /|\n"+ 
                "            				 `-'" )
		
		var cards = cardset.values();
		var board;
		newBoard();


		function newBoard() {
			board = [];
			for(var i = 0; i < cards.length; i++){
				board.push(0);
			}
		};


		function won() {
			for(var i = 0; i < board.length; i++){
				if (board[i] != 'gone'){
					return false;
				}
			}
			return true;
		}

		this.reset = function() {
			shuffleFast(cards); //shuffle
			newBoard(); // set board array to zero


			function shuffleFast(){//adapted from Mike Bostock's Fisher-Yates implementation
				for(var i = cards.length-1; i > 0; i--){
					var randElement = Math.floor(Math.random() * i);
					var hold = cards[i];
					cards[i] = cards[randElement];
					cards[randElement] = hold;
				}
				
			}
			console.log(
				",-,-,-.\n"+                         
				"`,| | |   ,-. ,-,-. ,-. ,-. . .\n"+ 
  				"  | ; | . |-' | | | | | |   | |\n"+ 
  				"  '   `-' `-' ' ' ' `-' '   `-|\n"+ 
                "                             /|\n"+ 
                "            				 `-'" )

			return;
		}
		this.faceupWhere = function() {
			for(var i = 0; i < board.length; i++ ){
				if (board[i] == 1){
					return i;
				}
			}
			return false;

		}
		this.faceupValue = function() {
			return this.cards[this.faceupWhere()];

		}
		this.remaining = function() {
			var remains = [];
			for(var i = 0; i < board.length; i++){
				if(board[i] != 'gone'){
					remains.push[i];
				}
			}
			return remains
		}
		this.lift = function(where) {
			
			if(board[where] === 'gone'){ // check to see if position is already discarded
				console.log('no card here....dummy, choose another')
				console.log('board:', board);
				return
			}

			if(board[where] === 1){ // check to see if position is already face-up
				console.log('this card is already flipped....dummy, choose another')
				console.log('board:', board);
				return
			}

			
			if(String(this.faceupWhere()) === 'false'){ // if there is not already a card flipped
				board[where] = 1; // flip card
				console.log('you flipped: ' + cardset.display(cards[where]))
				console.log('flip another');
				console.log('board:', board);
				return cardset.display(cards[where]);

			}

			if(String(this.faceupWhere()) != 'false'){ // if there is already a card flipped
				if(cardset.match(cards[this.faceupWhere()], cards[where])){ // if match
					console.log('you flipped: ' + cardset.display(cards[where]))
				 	console.log('match!');
				 	board[where] = 'gone'; //remove matched cards from board
				 	board[this.faceupWhere()] = 'gone';

				 	
					if(won()){ 
						console.log('you win, good job, go outside');
						return
					} 

				} else { // if no match
					console.log('you flipped: ' + cardset.display(cards[where]))
					console.log('no match, try again....dummy');
					board[where] = 0; // turn down both cards
					board[this.faceupWhere()] = 0;
				}
			}
			console.log('board:', board);
			return cardset.display(cards[where]);
		}
	}

	//...

	return Ctor;
})();

// (function (){
	var cards = new MemoryCards();
	var game = new MemoryGame(cards);

	game.lift(0);
	game.lift(1);
	game.lift(2);
	game.lift(3);
	game.lift(4);
	game.lift(5);
	game.lift(6);
	game.lift(7);

	game.reset();

	game.lift(0);
	game.lift(1);
// 
