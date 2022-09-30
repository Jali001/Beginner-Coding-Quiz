const btn = document.getElementById('start-button');
const startClick = document.getElementById("start-box");
const q1 = document.getElementById('one');
const q2 = document.getElementById('two');
const q3 = document.getElementById('three');
const q4 = document.getElementById('four');
const q5 = document.getElementById('five');
const q6 = document.getElementById('six');
const q7 = document.getElementById('seven');
const q8 = document.getElementById('eight');
const q9 = document.getElementById('nine');
const q10 = document.getElementById('ten');

const q1Container = document.getElementById("question-1");
const q2Container = document.getElementById("question-2");
const q3Container = document.getElementById("question-3");
const q4Container = document.getElementById("question-4");
const q5Container = document.getElementById("question-5");
const q6Container = document.getElementById("question-6");
const q7Container = document.getElementById("question-7");
const q8Container = document.getElementById("question-8");
const q9Container = document.getElementById("question-9");
const q10Container = document.getElementById("question-10");


var theTimer = document.querySelector(".time");
//console.log(timeElem);
//console.log(timeElem.textContent);


var score = 0;
var timer;
var tPenalty = -10;
timerCount = 10;

function time()
{
  var timerInverval = setInterval(function() {
    
  //  while(timerCount > 0) {
      // we want to update the value of timerCount
      timerCount = timerCount - 1;
      console.log(timerCount);
      // we need to update the timer DOM 
      theTimer.textContent = timerCount;
      // timerCount--;
   // }
    // this method clears or cancels our timer interval
    if(timerCount <= 0) {
      clearInterval(timerInverval)
      console.log("timer stopped");
      // maybe we want to run other code / function
    }

  }, 1000);

}


btn.addEventListener('click', () => {
  // 👇️ hide button
  btn.style.display = 'none';
  startClick.style.display ='none';
  q1.style.display ='block';
  time();
  startGame();

});
/*
console.log(question.length);
var score = 0;
console.log(score);
for (var i =0; i < question.length; i++)
{
  console.log(score);
  var qC = document.getElementById(container[i]);
  console.log(container[i]);
  var q = document.getElementById(question[i]);
  var qNext = document.getElementById(question[i +1]);
 
  console.log(q);
  console.log(qNext);
  
  qC.addEventListener("click", function(event)
  {
    var element =event.target;
    console.log(element);
    var state = element.getAttribute("id");
    console.log(state);

    if(state === "correct")
    {
      score = score + 1;
      console.log(score);
      
    }
  
  })

}

console.log(score);

*/


function startGame(){
q1Container.addEventListener("click",function(event)
{
  var element = event.target;

  console.log(element)

  var state = element.getAttribute("id");

  console.log(state);

  if(state === "correct")
  {
    
    score = score + 1;
     console.log("Score is +" +score);
  }
  q1.style.display = 'none';
  q2.style.display = 'block';
  
})

q2Container.addEventListener("click",function(event)
{
  var element = event.target;

  console.log(element)

  var state = element.getAttribute("id");

  console.log(state);

  if(state === "correct")
  {
   
    score = score + 1;
    console.log("Score is +" +score);
  }
  q2.style.display = 'none';
  q3.style.display = 'block';
  
})

q3Container.addEventListener("click",function(event)
{
  var element = event.target;

  console.log(element)

  var state = element.getAttribute("id");

  console.log(state);

  if(state === "correct")
  {
   
    score = score + 1;
    console.log("Score is +" +score);
  }
  q3.style.display = 'none';
  q4.style.display = 'block';
  
})

q4Container.addEventListener("click",function(event)
{
  var element = event.target;

  console.log(element)

  var state = element.getAttribute("id");

  console.log(state);

  if(state === "correct")
  {
   
    score = score + 1;
    console.log("Score is +" +score);
  }
  q4.style.display = 'none';
  q5.style.display = 'block';
  
})

q5Container.addEventListener("click",function(event)
{
  var element = event.target;

  console.log(element)

  var state = element.getAttribute("id");

  console.log(state);

  if(state === "correct")
  {
   
    score = score + 1;
    console.log("Score is +" +score);
  }
  q5.style.display = 'none';
  q6.style.display = 'block';
  
})

q6Container.addEventListener("click",function(event)
{
  var element = event.target;

  console.log(element)

  var state = element.getAttribute("id");

  console.log(state);

  if(state === "correct")
  {
   
    score = score + 1;
    console.log("Score is +" +score);
  }
  q6.style.display = 'none';
  q7.style.display = 'block';
  
})

q7Container.addEventListener("click",function(event)
{
  var element = event.target;

  console.log(element)

  var state = element.getAttribute("id");

  console.log(state);

  if(state === "correct")
  {
   
    score = score + 1;
    console.log("Score is +" +score);
  }
  q7.style.display = 'none';
  q8.style.display = 'block';
  
})

q8Container.addEventListener("click",function(event)
{
  var element = event.target;

  console.log(element)

  var state = element.getAttribute("id");

  console.log(state);

  if(state === "correct")
  {
   
    score = score + 1;
    console.log("Score is +" +score);
  }
  q8.style.display = 'none';
  q9.style.display = 'block';
  
})

q9Container.addEventListener("click",function(event)
{
  var element = event.target;

  console.log(element)

  var state = element.getAttribute("id");

  console.log(state);

  if(state === "correct")
  {
   
    score = score + 1;
    console.log("Score is +" +score);
  }
  q9.style.display = 'none';
  q10.style.display = 'block';
  
})

q10Container.addEventListener("click",function(event)
{
  var element = event.target;

  console.log(element)

  var state = element.getAttribute("id");

  console.log(state);

  if(state === "correct")
  {
   
    score = score + 1;
    console.log("Score is +" +score);
  }
  q10.style.display = 'none';

  
})
}

var tempScore = {
  score: 75
}

var temp = [{ score: 75} ,{ score: 93}, 12];

console.log(tempScore);
console.log(typeof tempScore);

var stringScore = JSON.stringify(tempScore);

console.log(stringScore);
console.log(typeof stringScore);

localStorage.setItem("key", stringScore);

// Grab data that is saved in the Browser
var broswerData = localStorage.getItem("test");
console.log(broswerData);
console.log(typeof broswerData);

console.log(JSON.parse(broswerData));
console.log(typeof JSON.parse(broswerData));