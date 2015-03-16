var cardset = ["a", "b", "a", "b","c", "c"];
//var cardset2 = cardset.slice();
var faceup = [100];    //this will hold the index numbers of the card turned up
var remainingcards=cardset.slice();  //this will hold the index numbers of the cards still in play


 var  Sett = function () {

  this.values = function() {
    return cardset.slice();
  }
  
  this.match = function (valA,valB) {
     // if (!(valA in cards||valB in cards))
       // return "not member";
      /*else*/ if (valA===valB) 
        return true;
     else
       return false;
      }
  this.display = function (val) {
    return val;
  }
}
 
 //Game starts here - to play in console, call var x = new MemoryGame(), and then x.lift() 2 cards in succession

function MemoryGame(cardset){
  
  this.cardset=cardset; 
 for (var i in cardset){
  remainingcards[i]=Number(i);
  }
}

MemoryGame.prototype = new Sett();
MemoryGame.prototype.constructor = MemoryGame;



var randomArr;
var randomKey;
var newcards;

MemoryGame.prototype.reset = function() {   
faceup=[100];
  
randomArr=[];
randomKey={};
remainingcards=[];
  
  for (var i=0;i<cardset.length;i++) {
  var g = Math.random();
    randomKey[g]=cardset[i];   //pairs random keys w/ cards  
    randomArr.push(g);         //sets an array of the unsorted random keys (sort method must be in a function or this will get sorted)
  }

  randomArr.sort();                      //orders the random keys - i.e. shuffles them
  
  for (var i=0;i<randomArr.length;i++) {
    var h=randomArr[i];                 //takes the shuffled order of the keys & returns the corresponding value 
    remainingcards.push(randomKey[h]);  //enters those 'disordered' values into a new shuffle/array
  }  
}

  
MemoryGame.prototype.faceupValue = function(selection) {
  return cardset[faceup];
}

MemoryGame.prototype.faceupWhere = function() {
  if (!(faceup[0] ==100)) {
  return faceup;
  }
  else 
   return false;
}

MemoryGame.prototype.remaining = function() {
  return remainingcards;
}

MemoryGame.prototype.lift = function(where) {
  //make sure card is still in play
  if (remainingcards[where] ===""){
    faceup[0]=100;
    return console.log("Already Matched - Choose Another!");
    
  };
  if (!(faceup[0]==100)) {        //i.e. if it's your 2nd turn
    
     if (!(where===faceup[0])) {  //and if new choice is not already face up
 // MemoryGame.prototype.display (remainingcards[where]);  //display the card value - nix this & just run match?
            if (MemoryGame.prototype.match(remainingcards[faceup[0]], remainingcards[where]) === true) {     //if it's a match
            console.log("Match!");
            //console.log(faceup[0], faceup[0]+1);

            remainingcards[faceup[0]]= "";         //remove choice 1 from remainingcards []
            remainingcards[where]= "";             //remove choice 2 from remainingcards []
            
              
              var remainsTest="";
              for (var i in remainingcards) {
                remainsTest+= remainingcards[i];
              } 
              if (remainsTest =="") {
                console.log("You Win!!!");
                return this.reset();
               }
                    
            faceup=[100];                          //re-set faceup array
                    
            return remainingcards;
            }                               //close match test
    
      faceup=[100];                           //match or not, turn is over; faceup card switches down 
       console.log("New Turn");
     }                                     //close turn

     else                                        //choice is already face-up!!
        return false;                            //else display false if the card is already faceup
      }
  else                          // else it's your first turn
    faceup[0]=where;              //put the position into the faceup array                             
 
  
  return MemoryGame.prototype.display (remainingcards[where]);    //display the value of the card
  }
     


  