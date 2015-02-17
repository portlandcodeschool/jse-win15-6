var MemoryCards = (function() {
	function Ctor() {
		//...
		var cards = [
			{name: "Cameron Poe", movie: "Con Air"}, {quote: "Put the bunny back in the box.", movie: "Con Air"},
			{name: "Castor Troy/Sean Archer", movie: "Face/Off"}, {quote: "If you dress like Halloween, ghouls will try to get in your pants", movie: "Face/Off"},
			{name: "H.I. McDunnough", movie: "Raising Arizona"}, {quote: "I’ll be taking these Huggies and whatever cash ya got.", movie: "Raising Arizona"},
			{name: "Peter Loew", movie: "Vampire's Kiss"}, {quote: "You just put it in the right file, according to alphabetical order! Y’know A, B , C, D, E, F, G!", movie: "Vampire's Kiss"},
			{name: "Stanley Goodspeed", movie: "The Rock"}, {quote: "How, in the name of Zeus’s butthole, did you get out of your cell?", movie: "The Rock"},
			{name: "Memphis Raines", movie: "Gone in Sixty Seconds"}, {quote: "That’s funny, my name’s Roger. Two Rogers don’t make a right!", movie: "Gone in Sixty Seconds"},
			{name: "Edward Malus", movie: "The Wicker Man"}, {quote: "OH, NO! NOT THE BEES! NOT THE BEES! AAAAAHHHHH! OH, THEY’RE IN MY EYES! MY EYES! AAAAHHHHH! AAAAAGGHHH!", movie: "The Wicker Man"},
			{name: "David Spritz", movie: "The Weather Man" }, {quote: "I mean, I’ll bet no one ever threw a pie at, like Harriet Tubman, the founder of the Underground railroad. I’ll bet you a million fucking dollars.", movie: "The Weather Man"},
			{name: "Milton", movie: "Drive Angry"}, {quote: "I never disrobe before gunplay", movie: "Drive Angry"},
			{name: "Terence McDonagh", movie: "Bad Lieutenant: Port of Call New Orleans "}, {quote: "You don’t have a lucky crack pipe?", movie: "Bad Lieutenant: Port of Call New Orleans "},
			{name: "Balthazar", movie: "The Sorcerer's Apprentice"}, {quote: "I have been searching all over the world for you. You're going to be a force for good and a very important sorcerer. But for now, you're my apprentice", movie: "The Sorcerer's Apprentice"},
			{name: "Benjamin Franklin Gates", movie: "National Treasure"}, {quote: "I'm gonna steal the Declaration of Independence", movie: "National Treasure"},
			{name: "Benjamin Franklin Gates", movie: "National Treasure: Book of Secrets" }, {quote: "I'm gonna kidnap the President of the United States", movie: "National Treasure: Book of Secrets" },
			{name: "Seth", movie: "City of Angels"}, {quote: "What’s that like? What’s it taste like? Describe it like Hemingway.", movie: "City of Angels"},
			{name: "Johnny Blaze / Ghost Rider", movie: "Ghost Rider: Spirit of Vengeance" }, {quote: "You will tell me or I will eat your stinking soul!", movie: "Ghost Rider: Spirit of Vengeance"},
			{name: "Sailor Ripley", movie: "Wild at Heart"}, {quote: "This is a snakeskin jacket... and for me it's a symbol of my individuality and my belief in personal freedom.", movie: "Wild at Heart"},
		];

		this.values = function() {
			return cards.slice();
		};

		this.match = function(a,b) {
			return (this.values()[a].movie===this.values()[b].movie);
		};

		this.display = function(val) {
			var toDisplay = this.values()[val];
			return toDisplay[Object.keys(toDisplay)[0]];
		};
	}
	//...

	return Ctor;
})();





// "What do you think I’m gonna do? I’m gonna save the fuckin’ day!- con air"