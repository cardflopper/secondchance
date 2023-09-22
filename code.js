var deckPointer;
var deck;
var cardDrawDirection;
var card0 = -1;
var card1 = -1;
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
    clearSquares(section);
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
    deckPointer = -1;
    cardDrawDirection = 1;
    deck = [];
    card0 = -1;
    card1 = -1;
    clearSquares("card0");
    clearSquares("card1");
    clearSquares("startingCard");
    document.getElementById('startingCardNum').innerText="n/a";
    startGame();
}

function updateScreen(){
    //document.getElementById("remain").innerText = 40 - deckPointer;
    document.getElementById("deckPointer").innerText = deckPointer;
    
    if(deckPointer == -1){
        card0 = -1;
        card1 = -1;
    }
    else if(deckPointer == 0){
        card0 = deck[deckPointer];
        card1 = -1;
    }
    else if(deckPointer == 1 && cardDrawDirection > 0)
        card1 = deck[deckPointer]
    else if(deckPointer == 39 && cardDrawDirection > 0)
        card1 = deck[deckPointer];
    else if(deckPointer%2 == 0){
        if(cardDrawDirection > 0 ) //we just drew a card to the top slot
            card0 = deck[deckPointer];
        else
            card1 = deck[deckPointer-1];
    }
    else if(deckPointer%2 == 1){
        if(cardDrawDirection > 0 ) //we just drew a card to the top slot
            card1 = deck[deckPointer];
        else
            card0 = deck[deckPointer-1];
    }

    if(card0 == -1)
        clearSquares('card0');
    else
        fillShape('card0', cards[card0]);
    
    if(card1 == -1)
        clearSquares('card1');
    else
        fillShape('card1', cards[card1]);

    document.getElementById('card0Num').innerText = card0;
    document.getElementById('card1Num').innerText = card1;
}

function clearSquares(section){
    var myTable = document.getElementById(section).getElementsByTagName("*");
    for (elements of myTable)
        elements.classList = '';
}

function flipCards(n){ 
    
    if(deckPointer == -1 && n < 0){  //we have  a full deck (no cards drawn)
        alert('deck is at beginning!');
            return;
    }
    else if(deckPointer == 39 && n > 0){  //we have  an empty deck
        alert('deck is empty!');
            return;
    }


    cardDrawDirection = n;
    deckPointer += n;
        
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