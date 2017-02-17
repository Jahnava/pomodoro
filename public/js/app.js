//Data and Variable Declirations
var timer;
var minutesLeft =0;
//starting timer at 25 mins or 10 or whatever i want
var secondsLeft =5;
var isOnBreak = false;
//not currently on break
var numberOfBreaks =0;
//starting out having had 0 breaks so far
//Getting references to the DOM
var minutes = document.querySelector('#minutes');
var minutes = document.querySelector('#seconds');
var startButton = document.querySelector('#start');

//Initialization code
//Event Listeners
startButton.addEventListener('click', start);
//connects the start function to the start button by addingeventlistener
render();

//Function definition
 //connected to start button
function start(){
  if(!timer){
    timer=setInterval(tick,1000);
    //create timer if there is not already a timer otherwise skip this
  }
}
function tick(){
  if(secondsLeft === 0 && minutesLeft === 0){
    clearInterval(timer);
    timer = !timer; //dereference //set timer to anything that means null so we know to stop the timer
    if(isOnBreak){
      numberOfBreaks +=1;
      resetWorkTime();
    } else {
      resetBreakTime();
    }
    isOnBreak = !isOnBreak; //! means it flips the variable to opposite
    render();
    return;
  }
  decrementMinutes();
  decrementSeconds();
  render();
}
//set tick to run
function decrementMinutes(){
  if(secondsLeft=== 0){
    minutesLeft-=1;
  }
}
function decrementSeconds(){
  if(secondsLeft === 0){
    secondsLeft=59;
} else {
secondsLeft -=1;
 }
}
//decreases mins and second after an interval
function render(){
minutes.textContent = pad(minutesLeft);
//console.log(secondsLeft);
//console.log(pad(secondsLeft));
seconds.textContent = pad(secondsLeft);
}
//deturmines the amount of time that is left

function pad(num){
  if(num < 10){
    return `0${num}`;
  } else {
    return num;
  }
  //if its less than ten it spits out //num is a placeholder set to the word num
}


function resetWorkTime(){  //connects to the if else function and runs it
  minutesLeft =00;
  secondsLeft =05;
}
function resetBreakTime(){
  if(numberOfBreaks < 3){
    minutesLeft =5;
  } else {
    minutesLeft =15;
    numberOfBreaks =0;
  }
  secondsLeft =0;
}

//we want to make a loop that refreshes everysecond //we looked on stackoverflow //the function calls itself once every second
// googling 'set time out' and 'set interval'
