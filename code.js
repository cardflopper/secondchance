function fillShape(slot, coords){
    for(var i=0; i < coords.length; i++){
        fillSquare(slot, coords[i][0],coords[i][1]);
    }
}

function fillSquare(slot, x,y){
    document.getElementById('shape-0'+slot).querySelector("tr:nth-child("+x+")").querySelector("td:nth-child("+y+")").classList.add("filled");
}

function startGame(){
    for(var i=0; i< cards.length; i++){
        deck.push(i);
    }
    deck = shuffle(deck);
    updateDeckCount();
}

function updateDeckCount(){
    document.getElementById("remain").innerText = deck.length;
}

function clearSquares(){
    
    var myTable1 = document.getElementById('shape-01').getElementsByTagName("*");
    for (elements of myTable1)
        elements.classList.remove('filled');
    
    var myTable2 = document.getElementById('shape-02').getElementsByTagName("*");
    for (elements of myTable2)
        elements.classList.remove('filled');
}

function flipCards(){
    
    if(deck.length){
        clearSquares();
        var c1 = deck.shift();
        var c2 = deck.shift();
        fillShape(1, cards[c1]);
        fillShape(2, cards[c2]);
        updateDeckCount();
    }
    else
        alert("deck is empty!");
    
}
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