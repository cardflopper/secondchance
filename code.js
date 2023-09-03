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
    updateScreen();
}

function reset(){
    clearSquares();
    topOfDeck = 0;
    deck = [];
    startGame();
}

function updateScreen(){
    document.getElementById("remain").innerText = 40 - topOfDeck;
    //document.getElementById("deckPosition").innerText = deckPosition;
    clearSquares();
    if(topOfDeck >= 2){
        fillShape(1,cards[deck[topOfDeck]]);
        fillShape(2,cards[deck[topOfDeck+1]]);
    }
}

function clearSquares(){
    for(var slot = 1; slot <= 2; slot++){
        var myTable = document.getElementById('shape-0'+slot).getElementsByTagName("*");
        for (elements of myTable)
            elements.classList.remove('filled-'+slot);
    }
}

function flipCards(direction){
    
    if (direction == 'forward'){
        if(topOfDeck == 40)
            alert("deck is empty!");
        else
            topOfDeck +=2;
    }        
    else if(direction == "previous"){
        if(topOfDeck == 0 )
            alert("already reset deck!");
        else
            topOfDeck -= 2;
    }
 
    updateScreen();   
}

reset();

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