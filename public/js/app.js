//Data and Variable Declirations
var timer;
var minutesLeft =25;
var secondsLeft =0;
var isOnBreak = false; //not currently on break
var numberOfBreaks =0; //starting out having had 0 breaks so far
//Getting references to the DOM
var minutes = document.querySelector('#minutes');
var minutes = document.querySelector('#seconds');
var startbutton = document.querySelector('#start');

//Initialization code
//Event Listeners
startButton.addeventlistener('click', start); //connects the start function to the start button by addeventlistener //


//Function definition
function start(){} //connected to start button
function start(){
  if(!timer){
    timer=setInterval(tick,1000); //create timer if there is not already a timer
  }
}
//  setInterval(tick, 1000); //setting tick cycle every tick creates new frame //1000 milaseconds is equil to 1 second
//}
function tick(){} //does something in order over and over again
 console.log('tick'); //starting up the server to see if tick works

function render(){} //takes info and puts it in DOM



//we want to make a loop that refreshes everysecond //we looked on stackoverflow //the function calls itself once every second
// googling 'set time out' and 'set interval'
