var deckPointer;
var deck;
var cardDrawDirection;
var cardDrawDirection_prev;
var numCardsDisplayed;
reset();

function reset(){
    const myNode = document.getElementById("slider");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
    deckPointer = -1;
    cardDrawDirection = 0;
    cardDrawDirection_prev = 0;
    deck = [];

    document.getElementById('slider').remove();
    var slider = document.createElement('div');
    slider.setAttribute('id','slider');
    document.getElementById('cardsDisplay').append(slider);

    startGame();
}

function startGame(){
    for(var i=0; i< cards.length; i++){
        deck.push(i);
    }
    deck = shuffle(deck);
    updateScreen();
}




function generateCardElement(){
    var c = createTableElement();
    var div = document.createElement('div');
    div.append(c);
    div.classList.add('singleCardContainer');
    return div;
}


function getStartCard(){
    var myNode = document.getElementById('startCardsDisplay')
    
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    
    var n = Math.floor(Math.random()*13); //13 cards in the start deck

    var c = generateCardElement();
    c.setAttribute('id','startCard'+n);
    var p = document.createElement('p');
    p.innerText="Starting Card #"+n;
    c.prepend(p);
    c.classList.add('startingDeck','slide');
    
    document.getElementById('startCardsDisplay').append(c);

    fillShape('startCard'+n, startingCards[n]);
    
    
}

function addDeckCardElement(n, direction="append"){
    var c = generateCardElement();
    c.setAttribute('id','card'+n);
    var p = document.createElement('p');
    p.innerText="Card #"+n;
    c.prepend(p);
   
    c.classList.add('mainDeck');
    
    if(direction=='prepend') //backward draw
        document.getElementById('slider').prepend(c);
    else //forward draw
        document.getElementById('slider').append(c);
    
    
    fillShape('card'+n, cards[n]);
}

function createTableElement(){
    var table = document.createElement('table');
    for(row=0; row<5; row++){
        var tr = document.createElement('tr');
        for(col=0; col<4; col++){
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        table.append(tr);
    }
    return table;
}

function showPrimary(){
    document.getElementById('primary').classList.remove('hide');
    document.getElementById('secondary').classList.add('hide');
}

function showSecondary(){
    document.getElementById('primary').classList.add('hide');
    document.getElementById('secondary').classList.remove('hide');
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



    if(cardDrawDirection == 0){
        return;
    }
    
    document.getElementById('slider').remove();
    var slider = document.createElement('div');
    slider.setAttribute('id','slider');
    document.getElementById('cardsDisplay').append(slider);
    
    if(cardDrawDirection > 0){

        if(deckPointer == 0)
            addDeckCardElement(deck[deckPointer]);
        else if(deckPointer == 1){
            addDeckCardElement(deck[0]);
            addDeckCardElement(deck[1]);
            
           
        }
        else{
            addDeckCardElement(deck[deckPointer-2]);
            addDeckCardElement(deck[deckPointer-1]);
            addDeckCardElement(deck[deckPointer]);
        }
        if(deckPointer > 1){
            slider.classList.add("drawForward");
        }
        
    }
    else{
        if(deckPointer == 0){
            addDeckCardElement(deck[0]);
            if(cardDrawDirection_prev != -1 )
                addDeckCardElement(deck[1]);
        }
        if(deckPointer > 0){
            //slider.classList.add('backward');
            addDeckCardElement(deck[deckPointer-1]);
            addDeckCardElement(deck[deckPointer]);
            addDeckCardElement(deck[deckPointer+1]);
            slider.classList.add("drawBackward");
        }
    }

    /*
    // debugging: watch out for this reporter, if it's at the beginnig of the function it will be behind the actual counts
    document.getElementById("numCardsDisplayed").innerText = document.getElementById('slider').children.length;    //for debugging
    */
    
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
    cardDrawDirection_prev = cardDrawDirection;
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

