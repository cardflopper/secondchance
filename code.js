var deckPointer;
var deck;
var cardDrawDirection;
var cardDrawDirection_prev;
var numCardsDisplayed;
reset();

function reset(){
    removeAllChildNodes(document.getElementById("slider"));
    deckPointer = -1;
    cardDrawDirection = 0;
    cardDrawDirection_prev = 0;
    deck = [];

    document.getElementById('slider').remove();
    var slider = document.createElement('div');
    slider.setAttribute('id','slider');
    document.getElementById('mainCardsDisplay').append(slider);

    startGame();
}

function startGame(){
    for(var i=0; i< cards.length; i++){
        deck.push(i);
    }
    shuffle(deck);
    updateScreen();
}




function generateCardElement(id){
    var c = createTableElement();
    var div = document.createElement('div');
    div.append(c);
    div.classList.add('singleCardContainer');
    div.setAttribute('id',id);
    return div;
}


function showStartCard(amount=1){

    var parentNode = document.getElementById('startCardsDisplay')
    removeAllChildNodes(parentNode);
    
    var startCardsArray = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    shuffle(startCardsArray);
    
    
    for(var i = 0; i < amount ; i++){
        var c = generateCardElement();
        var cardId = 'startCard'+startCardsArray[i]
        var coords = startingCards[startCardsArray[i]]

        c.setAttribute('id', cardId);
        c.classList.add('slide');

        parentNode.append(c);
        fillShape(cardId, coords);
    }
    
}

function addDeckCardElement(n, parentId, direction="append"){
    var c = generateCardElement();
    var cardId = parentId + n;
    c.setAttribute('id',cardId);
   
    if(direction=='prepend') //backward draw
        document.getElementById(parentId).prepend(c);
    else //forward draw
        document.getElementById(parentId).append(c);
    
    var coords = cards[n];
    
    fillShape(cardId, coords);
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
    document.getElementById('second').classList.add('hide');
    document.getElementById('third').classList.add('hide');
    //prevents reanimation when switching back to Primary
    var slider = document.getElementById('slider'); 
    slider.classList = "";
    
    //correctly sets the cards in view when switching back to Primary
    if(cardDrawDirection > 0 && deckPointer > 1 && slider.children.length > 2)
        slider.classList.add( "lockView");
}

function showSecond(){
    document.getElementById('primary').classList.add('hide');
    document.getElementById('second').classList.remove('hide');
    document.getElementById('third').classList.add('hide');
}


function showThird(){
    document.getElementById('primary').classList.add('hide');
    document.getElementById('second').classList.add('hide');
    document.getElementById('third').classList.remove('hide');

    removeAllChildNodes(document.getElementById("remainingCardsDisplay"));

    var remain = deck.slice(deckPointer+1)
    document.getElementById("remainThird").innerText = remain.length;
    remain.sort((a,b) => a-b);
    for(var i=0; i < remain.length; i++)
        addDeckCardElement(remain[i],'remainingCardsDisplay');
    
}

function removeAllChildNodes(pNode) {
    while (pNode.firstChild) {
        pNode.removeChild(pNode.lastChild);
    }
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
    document.getElementById("remainPrimary").innerText = deckPointer == -1 ? 40 : 40  - (deckPointer+1);
    
    //debugging
    //document.getElementById("deckPointer").innerText = deckPointer;



    if(cardDrawDirection == 0){
        return;
    }
    
    document.getElementById('slider').remove();
    var slider = document.createElement('div');
    slider.setAttribute('id','slider');
    document.getElementById('mainCardsDisplay').append(slider);
    
    if(cardDrawDirection > 0){

        if(deckPointer == 0)
            addDeckCardElement(deck[deckPointer],'slider');
        else if(deckPointer == 1){
            addDeckCardElement(deck[0],'slider');
            addDeckCardElement(deck[1],'slider');
        }
        else{
            addDeckCardElement(deck[deckPointer-2],'slider');
            addDeckCardElement(deck[deckPointer-1],'slider');
            addDeckCardElement(deck[deckPointer],'slider');
        }
        
        if(deckPointer > 1){
            slider.classList.add("drawForward");
        }
        
    }
    else{
        if(deckPointer == 0){
            addDeckCardElement(deck[0],'slider');
            if(cardDrawDirection_prev != -1 )
                addDeckCardElement(deck[1],'slider');
        }
        if(deckPointer > 0){
            //slider.classList.add('backward');
            addDeckCardElement(deck[deckPointer-1],'slider');
            addDeckCardElement(deck[deckPointer],'slider');
            addDeckCardElement(deck[deckPointer+1],'slider');
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

