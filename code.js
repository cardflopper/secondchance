var topOfDeck;
var deck;
reset();


function showPrimary(){
    document.getElementById('primary').classList.remove('hide');
    document.getElementById('secondary').classList.add('hide');
}

function showSecondary(){
    document.getElementById('primary').classList.add('hide');
    document.getElementById('secondary').classList.remove('hide');
}



function getStartCard(){
    clearSquares('startingCard');
    var n = Math.floor(Math.random()*13); //13 cards in the start deck
    fillShape('startingCard',startingCards[n]);
    document.getElementById('startingCardNum').innerText=n;
}

function fillShape(section, coords){
    for(var i=0; i < coords.length; i++){
        fillSquare(section, coords[i][0],coords[i][1]);
    }
}

function fillSquare(section, row,col){
    document.getElementById(section).querySelector("tr:nth-child("+row+")").querySelector("td:nth-child("+col+")").classList.add(section);
}

function startGame(){
    for(var i=0; i< cards.length; i++){
        deck.push(i);
    }
    deck = shuffle(deck);
    updateScreen();
}

function reset(){
    clearSquares('card-1');
    clearSquares('card-2');
    topOfDeck = 0;
    deck = [];
    startGame();
}

function updateScreen(){
    document.getElementById("remain").innerText = 40 - topOfDeck;
    document.getElementById("topOfDeck").innerText = topOfDeck;
    
    clearSquares('card-1');
    clearSquares('card-2');
    if(topOfDeck >= 2){
        fillShape("card-1", cards[deck[topOfDeck-2]]);
        fillShape("card-2", cards[deck[topOfDeck-1]]);
    }

}

function clearSquares(section){
    var myTable = document.getElementById(section).getElementsByTagName("*");
    for (elements of myTable)
        elements.classList = '';
}

function flipCards(direction){ 
    if (direction == 'forward'){
        if(topOfDeck == 40)
            alert('deck is empty!');
        else
            topOfDeck +=2;
    }        
    else if(direction == 'previous'){
        if(topOfDeck == 0)
            alert('already reset deck!');
        else
            topOfDeck -= 2;
    }
    updateScreen();   
}



//from web, not written by myself
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }