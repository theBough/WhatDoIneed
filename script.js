var currentGrade = document.getElementById("currentGrade")
var examWorth = document.getElementById("examWorth")
var goal = document.getElementById("goal")

var examScore;

function math(){
  
  currentGrade = currentGrade.value
  examWorth = examWorth.value
  goal = goal.value
  console.log(currentGrade)
  console.log(examWorth)
  console.log(goal)
  examWorth /= 100;
  currentGrade /= 100;
  goal /= 100;
  examScore = goal - (currentGrade * (1-examWorth)); 
  examScore /= examWorth;
  examScore *= 100;
  console.log(examScore);
}//end function
