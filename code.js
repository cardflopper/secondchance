function fillShape(slot, coords){
    for(var i=0; i < coords.length; i++){
        fillSquare(slot, coords[i][0],coords[i][1]);
    }
}

function fillSquare(slot, x,y){
    document.getElementById('shape-0'+slot).querySelector("tr:nth-child("+x+")").querySelector("td:nth-child("+y+")").classList.add("filled-"+slot);
}

function startGame(){
    for(var i=0; i< cards.length; i++){
        deck.push(i);
    }
    deck = shuffle(deck);
    updateDeckCount();
}

function reset(){
    clearSquares();
    deckPosition = 0;
    deck = [];
    startGame();
}

function updateDeckCount(){
    document.getElementById("remain").innerText = deck.length;
}

function clearSquares(){
    for(var slot = 1; slot <= 2; slot++){
        var myTable = document.getElementById('shape-0'+slot).getElementsByTagName("*");
        for (elements of myTable)
            elements.classList.remove('filled-'+slot);
    }
}

function flipCards(direction){
    
    
    if(direction = "next" && deck.length)    
        deckPosition += 2;
    else{
        alert("deck is empty!");
        return;
    }
    if(direction = "back" && deckPosition >= 2)
        deckPosition -= 2;
    else{
        alert("already at beginning of deck!");
        return;
    }

    clearSquares();
    fillShape(1, cards[deckPosition]);
    fillShape(2, cards[deckPosition+1]);
    updateDeckCount();    
}
var deckPosition = 0;
var deck = [];
startGame();

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