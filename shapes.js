var cards = [];

cards[0] = [ [1,1] ];
cards[1] = [ [1,1] ];
cards[2] = [ [1,1] ];

cards[3] = [ [1,1], [1,2] ]; 
cards[4] = [ [1,1], [1,2] ];
cards[5] = [ [1,1], [1,2] ];

cards[6] = [ [1,1], [1,2], [1,3] ];
cards[7] = [ [1,1], [1,2], [1,3] ];

cards[8] = [ [1,1], [1,2], [2,1] ];
cards[9] = [ [1,1], [1,2], [2,1] ];

 //orange n=4
cards[10] = [ [1,1], [2,1], [3,1], [4,1]];
cards[11] = [ [1,1], [1,2], [2,2], [3,2] ];
cards[12] = [ [1,1], [1,2], [2,1], [2,2] ];  //square
cards[13] = [ [1,2], [2,1], [2,2], [3,1] ];  
cards[14] = [ [1,2], [2,1], [2,2], [3,2] ];  

//yellow n=5
cards[15] = [ [1,2], [2,2], [3,1], [3,2], [4,1]];  
cards[16] = [ [1,1], [1,2], [2,2], [3,1], [3,2]]
cards[17] = [ [1,1], [1,2], [2,1], [2,2], [3,2]]; 
cards[18] = [ [1,2], [2,1], [2,2], [3,2], [4,2]]; 

//yellow2 n=5
cards[19] = [ [1,2], [1,3], [2,2], [3,1], [3,2]]; //5 shape
cards[20] = [ [1,3], [2,2], [2,3], [3,1], [3,2]]; 
cards[21] = [ [1,1], [2,1], [2,2], [2,3], [3,1]]; //side T
cards[22] = [ [1,3], [2,3], [3,1], [3,2], [3,3]]
cards[23] = [ [1,2], [2,1], [2,2], [2,3], [3,2]] //plus

//blue n=6
cards[24] = [ [1,1], [1,2], [1,3], [1,4], [2,1], [2,4]]
cards[25] = [ [1,1], [2,1], [3,1], [3,2], [4,1], [5,1]];
cards[26] = [ [1,1], [1,2], [2,1], [2,2], [3,1], [3,2] ];  //chunk
cards[27] = [ [1,1], [2,1], [2,2], [3,1], [3,2], [4,1] ];  
cards[28] = [ [1,3], [2,2], [2,3], [3,1], [3,2], [3,3]];
cards[29] = [ [1,2], [1,3], [2,1], [2,2], [3,2], [3,3]];
cards[30] = [ [1,2], [2,2], [3,1], [3,2], [3,3], [4,2]]; //evil :)
cards[31] = [ [1,2], [2,1], [2,2], [2,3], [3,2], [3,3]]; //fish

//green n=7
cards[32] = [ [1,1], [1,2], [1,3], [2,3], [3,1], [3,2], [3,3]];
cards[33] = [ [1,2], [2,1], [2,2], [2,3], [3,1], [3,2], [3,3]];
cards[34] = [ [1,2], [2,2], [3,1], [3,2], [3,3], [4,1], [4,3]];
cards[35] = [ [1,1], [1,2], [2,1], [2,2], [2,3], [3,2], [3,3]]; 
cards[36] = [ [1,1], [1,2], [1,3], [2,2], [3,1], [3,2], [3,3]];
cards[37] = [ [1,1], [2,1], [2,2], [3,1], [4,1], [4,2], [5,1]];
cards[38] = [ [1,4], [2,3], [2,4], [3,2], [3,3], [4,1], [4,2]];
cards[39] = [ [1,3], [2,3], [3,1], [3,2], [3,3], [3,4], [4,3]];

var startingCards = [];

startingCards[0]  = [ [1,1], [1,2], [1,3], [1,4], [2,1], [2,4], [3,1], [4,1] ];
startingCards[1]  = [ [1,1], [1,2], [2,1], [2,2], [2,3], [2,4], [3,2], [4,2] ];
startingCards[2]  = [ [1,1], [1,2], [1,3], [2,2], [3,1], [3,2], [3,3], [4,2] ];
startingCards[3]  = [ [1,2], [2,1], [2,2], [2,3], [3,1], [3,2], [3,3], [4,2] ];
startingCards[4]  = [ [1,1], [2,1], [2,2], [3,2], [3,3], [4,3], [4,4], [5,4] ];
startingCards[5]  = [ [1,1], [1,4], [2,2], [2,3], [3,2], [3,3], [4,1], [4,4] ];
startingCards[6]  = [ [1,1], [1,2], [2,1], [3,1], [3,2], [4,1], [5,1], [5,2] ];
startingCards[7]  = [ [1,1], [1,2], [2,2], [2,3], [3,2], [3,3], [4,1], [4,2] ];
startingCards[8]  = [ [1,1], [1,2], [1,3], [2,2], [3,2], [4,1], [4,2], [4,3] ];
startingCards[9]  = [ [1,1], [1,3], [2,1], [2,3], [3,1], [3,2], [3,3], [4,2] ];
startingCards[10] = [ [1,1], [2,1], [2,2], [3,2], [3,3], [4,1], [4,2], [5,1] ];
startingCards[11] = [ [1,1], [1,2], [1,3], [2,1], [2,3], [3,1], [3,2], [3,3] ];
startingCards[12] = [ [1,1], [1,2], [2,2], [2,3], [3,1], [3,2], [4,2], [4,3] ];