const btn = document.getElementById('start-button');
const startClick = document.getElementById("start-box");
const q1 = document.getElementById('one');
const q2 = document.getElementById('two');
const selectionBtn = document.getElementsByClassName("choice");

var questions = [q1,q2]

q2.style.display ="none";

btn.addEventListener('click', () => {
  // 👇️ hide button
  btn.style.display = 'none';
  startClick.style.display ='none';
  q1.style.display ='block';

});

for(var i = 0; i < questions.length; i++)
{
  var question = questions[i];
  if(i=0)
  {

  }
  else{

    
    selectionBtn.addEventListener('click', () => {
      // 👇️ hide button
      btn.style.display = 'none';
      startClick.style.display ='none';
      q1.style.display ='block';
    
    });
  }

}

