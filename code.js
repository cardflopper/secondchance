var deckPointer;
var deck;
var cardDrawDirection;
var numCardsDisplayed;
reset();

function reset(){
    const myNode = document.getElementById("cardsDisplay");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
    deckPointer = -1;
    cardDrawDirection = 0;
    deck = [];
    startGame();
}

function startGame(){
    for(var i=0; i< cards.length; i++){
        deck.push(i);
    }
    deck = shuffle(deck);
    updateScreen();
}





function addCardElement(n, direction="append"){
    var c = createCard();
    c.setAttribute('id','card'+n);
    c.classList.add('card');
    
    var div = document.createElement('div');
    
    div.append(c);
    if(direction=='prepend'){ //backward draw
        div.classList.add('slideDown', 'singleCardContainer');            
        document.getElementById('cardsDisplay').prepend(div);
    }
    else{ //forward draw
        div.classList.add('slideUp', 'singleCardContainer');            
        document.getElementById('cardsDisplay').append(div);
    }
    fillShape('card'+n, cards[n]);
}

function createCard(){
    var cardElement = document.createElement('table');
    for(row=0; row<5; row++){
        var tr = document.createElement('tr');
        for(col=0; col<4; col++){
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        cardElement.append(tr);
    }
    return cardElement;
}

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
    document.getElementById(section).querySelector("tr:nth-child("+row+")").querySelector("td:nth-child("+col+")").classList.add('filled');
}



function updateScreen(){

    //make sure these two lines  are at the start of this function
    document.getElementById("remain").innerText = deckPointer == -1 ? 40 : 40  - (deckPointer+1) ;
    
    //debugging
    //document.getElementById("deckPointer").innerText = deckPointer;



    if(cardDrawDirection ==0){
        return;
    }
    else if(cardDrawDirection > 0 ){
        if(deckPointer > 1){
            var displayedCards = document.getElementById("cardsDisplay");
            if (displayedCards.hasChildNodes())
                displayedCards.removeChild(displayedCards.children[0]);
        }
        addCardElement(deck[deckPointer]);
    }
    else{
        var displayedCards = document.getElementById("cardsDisplay");
        if (displayedCards.hasChildNodes()){
            var last = displayedCards.children.length-1;
            displayedCards.removeChild(displayedCards.children[last]);
        }
                
        if(deckPointer > 0)
        addCardElement(deck[deckPointer-1],'prepend');

    }

    /*
    // debugging: watch out for this reporter, if it's at the beginnig of the function it will be behind the actual counts
    document.getElementById("numCardsDisplayed").innerText = document.getElementById('cardsDisplay').children.length;    //for debugging
    */
    
}function flipCards(n){ 
    
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

