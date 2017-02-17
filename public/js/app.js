//Data and Variable Declirations //looked through code and set functions accordingly
var Timer = {
minutesLeft: 0,
secondsLeft: 5,
isOnBreak: false,
numberOfBreaks: 0,
init: function(){
  this.cacheDom(); //use this to specify this object
  this.addListeners();
  this.render();
},
cacheDom: function(){
  this.minutes = document.querySelector('#minutes');
  this.seconds = document.querySelector('#seconds');
  this.startButton = document.querySelector('#start');
},
render: function(){
  this.minutes.textContent = this.pad(this.minutesLeft);
  this.seconds.textContent = this.pad(this.secondsLeft);
},
addListeners: function(){
  //the bind statement takes the meaning of 'this' from addlistener
  //and pushes the meaning into the start function
  this.startButton.addEventListener('click', this.start.bind(this));
},
start: function(){

  if(!this.timer){
    this.timer=setInterval(this.tick.bind(this), 1000);
  }
},
tick: function(){
  if(this.secondsLeft === 0 && this.minutesLeft === 0){
    clearInterval(this.timer); //tick was initiated in start so when we put this near timer it starts timer
    this.timer = !this.timer; //dereference //set timer to anything that means null so we know to stop the timer
    if(this.isOnBreak){
      this.numberOfBreaks += 1;
      this.resetWorkTime();
    } else {
      this.resetBreakTime(); //this goes infront of these internal functions
    }
    this.isOnBreak = !this.isOnBreak; //! means it flips the variable to opposite
    this.render();
    return;
  }
  this.decrementMinutes();
  this.decrementSeconds();
  this.render();
},
decrementMinutes: function(){
  if(this.secondsLeft === 0){
    this.minutesLeft-=1;
}
},
decrementSeconds: function(){
  if(this.secondsLeft === 0){
    this.secondsLeft= 59;
} else {
this.secondsLeft -= 1;
}
},
pad: function(num){
  if(num < 10){
    return `0${num}`;
  } else {
    return num;
  }
},
resetWorkTime: function(){
  this.minutesLeft = 00;
  this.secondsLeft = 05;
},
resetBreakTime: function(){
  if(this.numberOfBreaks < 3){
    this.minutesLeft = 5;
  } else {
    this.minutesLeft = 15;
    this.numberOfBreaks = 0;
  }
  this.secondsLeft =0;
},
};
Timer.init();

//commented this out and created code above
//data and Variable Declirations
// var timer;
// var minutesLeft = 0;
// //starting timer at 25 mins or 10 or whatever i want
// var secondsLeft = 5;
// var isOnBreak = false;
// //not currently on break
// var numberOfBreaks = 0;
//starting out having had 0 breaks so far
//Getting references to the DOM
// var minutes = document.querySelector('#minutes');
// var minutes = document.querySelector('#seconds');
// var startButton = document.querySelector('#start');

//Initialization code
//Event Listeners
// startButton.addEventListener('click', start);
//connects the start function to the start button by addingeventlistener
//render();

//Function definition
 //connected to start button
// function start(){
//   if(!timer){
//     timer=setInterval(tick,1000);
//     //create timer if there is not already a timer otherwise skip this
//   }
// }
// function tick(){
// //   if(secondsLeft === 0 && minutesLeft === 0){
// //     clearInterval(timer);
// //     timer = !timer; //dereference //set timer to anything that means null so we know to stop the timer
// //     if(isOnBreak){
// //       numberOfBreaks += 1;
// //       resetWorkTime();
// //     } else {
// //       resetBreakTime();
// //     }
// //     isOnBreak = !isOnBreak; //! means it flips the variable to opposite
// //     render();
// //     return;
// //   }
// //   decrementMinutes();
// //   decrementSeconds();
// //   render();
// // }
// //set tick to run
// // function decrementMinutes(){
// //   if(secondsLeft === 0){
// //     minutesLeft-=1;
// //   }
// // }
// // function decrementSeconds(){
// //   if(secondsLeft === 0){
// //     secondsLeft= 59;
// // } else {
// // secondsLeft -= 1;
// //  }
// // }
// //decreases mins and second after an interval
// // function render(){
// // minutes.textContent = pad(minutesLeft);
// // seconds.textContent = pad(secondsLeft);
// }
// //deturmines the amount of time that is left
//
// // function pad(num){   //if its less than ten it spits out //num is a placeholder set to the word num
// //   if(num < 10){
// //     return `0${num}`;
// //   } else {
// //     return num;
// //   }
// // }
//
//
// // function resetWorkTime(){  //connects to the if else function and runs it
// //   minutesLeft = 00;
// //   secondsLeft = 05;
// // }
// // function resetBreakTime(){
// //   if(numberOfBreaks < 3){
// //     minutesLeft = 5;
// //   } else {
// //     minutesLeft = 15;
// //     numberOfBreaks = 0;
// //   }
// //   secondsLeft =0;
// // }
//
// //we want to make a loop that refreshes everysecond //we looked on stackoverflow //the function calls itself once every second
// // googling 'set time out' and 'set interval'
