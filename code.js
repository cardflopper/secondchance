var deckPointer;
var deck;
var cardDrawDirection;
var card0;
var card1;
reset();


function append(n){
    var c = createCard();
    c.setAttribute('id','card'+n);
    document.getElementById('primary').append(c);
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

function fadeIn(section){
    document.getElementById(section).style.animation = "fadeIn 4s";
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
    clearSquares(section);
    for(var i=0; i < coords.length; i++){
        fillSquare(section, coords[i][0],coords[i][1]);
    }
}

function fillSquare(section, row,col){
    document.getElementById(section).querySelector("tr:nth-child("+row+")").querySelector("td:nth-child("+col+")").classList.add('filled');
}

function startGame(){
    for(var i=0; i< cards.length; i++){
        deck.push(i);
    }
    deck = shuffle(deck);
    alert(deck);
}

function reset(){
    deckPointer = -1;
    cardDrawDirection = 1;
    deck = [];
    card0 = 'n/a';
    card1 = 'n/a';
    clearSquares("card0");
    clearSquares("card1");
    clearSquares("startingCard");
    document.getElementById('startingCardNum').innerText="n/a";
    startGame();
}


function updateScreen(){
    document.getElementById("remain").innerText = 38 - deckPointer;

    document.getElementById("deckPointer").innerText = deckPointer;    //for debugging
    append(deck[deckPointer]);

function updateScreen_bak(){
    document.getElementById("remain").innerText = 38 - deckPointer;
    
    //for debugging
    document.getElementById("deckPointer").innerText = deckPointer;
    
    if(deckPointer == -1){
        card0 = "n/a";
        card1 = "n/a";
    }
    else{       
        card0 = deck[deckPointer];
        card1 = deck[deckPointer+1];
    }

    if(card0 == 'n/a')
        clearSquares('card0');
    else
        fillShape('card0', cards[card0]);
    
    if(card1 == 'n/a')
        clearSquares('card1');
    else
        fillShape('card1', cards[card1]);

    /*if(cardDrawDirection > 0){
        fadeIn('card1');
    }*/

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
    else if(deckPointer == 38 && n > 0){  //we have  an empty deck
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