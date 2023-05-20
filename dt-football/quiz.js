function toggleMobileMenu(menu){
    menu.classList.toggle('open');
}

//quiz functions
var qNum = parseInt(document.querySelector("#questionNumber").innerHTML);
var selectedAnswer;
var prevSelected;
var answerSelected = false;
var answerArray = document.querySelectorAll(".questionBox");
var answerText = document.querySelectorAll(".answer");
var score = 0;
var img1Counter = 0;
var img2Counter = 0;
var submitted = false;
//question arrays
var q2 = ["Rice University", "UCLA", "San Jose State", "Stanford"];
var q3 = ["Arizona State", "University of Arizona", "Utah", "Oregon State"];
var q4 = ["29", "26", "32", "28"];
var q5 = ["2 games", "5 games", "7 games", "6 games"];
var q6 = ["2016", "1998", "2018", "2012"];
var q7 = ["Tuli Tuipulotu", "Mekhi Blackmon", "Calen Bullock", "Eric Gentry"];
var q8 = ["Solomon Byrd", "Brandon Pili", "Nick Figueroa", "Tuli Tuipulotu"];
var questions = ["USC beat which team to earn their first victory of the season?", "What was USC’s farthest regular season road game?",
  "How many transfer students did USC acquire this season?", "How many times did Caleb Williams throw for more than 2 touchdowns in a game?",
  "This season, USC beat both UCLA and Notre Dame for the first time since what year?", "Who led the Trojans in interceptions this season with 5?",
  "What defensive lineman had a team-high 12.5 sacks this season, earning first-team All-American honors?"];
var pictures_1 = ["img/quiz/1_2.jpg", "img/quiz/1_3.jpg", "img/quiz/1_4.jpg", "img/quiz/1_5.jpg", "img/quiz/1_6.jpg", "img/quiz/1_7.jpg", "img/quiz/1_8.jpg"];
var pictures_2 = ["img/quiz/2_1.jpg", "img/quiz/2_2.jpg", "img/quiz/2_3.jpg", "img/quiz/2_4.jpg", "img/quiz/2_5.jpg", "img/quiz/2_6.jpg", "img/quiz/2_7.jpg", "img/quiz/2_8.jpg"];

for(var i = 0; i < answerArray.length; i++){
  answerArray[i].onclick = function(){
		selectedAnswer = this.id;
    if(answerSelected){
      prevSelected.style.backgroundColor = "#F0F0F0";
      prevSelected.style.border = "1px solid black";
      this.style.backgroundColor = "#F6CB4E";
      this.style.border = "2px solid #9A2133";
      prevSelected = document.querySelector("#" + selectedAnswer);
    }
    else{
      this.style.backgroundColor = "#F6CB4E";
      this.style.border = "2px solid #9A2133";
      answerSelected = true;
      prevSelected = document.querySelector("#" + selectedAnswer);
    }
	}
}

//submit event listener
document.querySelector("#quizSubmit").onclick = function(){
  if(!submitted){
    if(answerSelected){
      document.querySelector("#quizSubmit").innerHTML = "NEXT";
      submitted = true;

      document.getElementById("changeimg").src = pictures_1[img1Counter];

      //question 1
      if(qNum == 1){
        //turn correct answer box green
        document.querySelector("#B").style.backgroundColor = "#43c45f";
        document.getElementById("changeimg").src = pictures_2[img2Counter];
        img2Counter++;
        if(selectedAnswer == "B"){
          score++;
        }
      }
      //question 2
      else if(qNum == 2){
        //turn correct answer box green
        document.querySelector("#A").style.backgroundColor = "#43c45f";
        document.getElementById("changeimg").src = pictures_2[img2Counter];
        img2Counter++;
        if(selectedAnswer == "A"){
          score++;
        }
      }
      //question 3
      else if(qNum == 3){
        //turn correct answer box green
        document.querySelector("#D").style.backgroundColor = "#43c45f";
        document.getElementById("changeimg").src = pictures_2[img2Counter];
        img2Counter++;
        if(selectedAnswer == "D"){
          score++;
        }
      }
      //question 4
      else if(qNum == 4){
        //turn correct answer box green
        document.querySelector("#B").style.backgroundColor = "#43c45f";
        document.getElementById("changeimg").src = pictures_2[img2Counter];
        img2Counter++;
        if(selectedAnswer == "B"){
          score++;
        }
      }
      //question 5
      else if(qNum == 5){
        //turn correct answer box green
        document.querySelector("#C").style.backgroundColor = "#43c45f";
        document.getElementById("changeimg").src = pictures_2[img2Counter];
        img2Counter++;
        if(selectedAnswer == "C"){
          score++;
        }
      }
      else if(qNum == 6){
        //turn correct answer box green
        document.querySelector("#A").style.backgroundColor = "#43c45f";
        document.getElementById("changeimg").src = pictures_2[img2Counter];
        img2Counter++;
        if(selectedAnswer == "A"){
          score++;
        }
      }
      else if(qNum == 7){
        //turn correct answer box green
        document.querySelector("#C").style.backgroundColor = "#43c45f";
        document.getElementById("changeimg").src = pictures_2[img2Counter];
        img2Counter++;
        if(selectedAnswer == "C"){
          score++;
        }
      }
      else if(qNum == 8){
        //turn correct answer box green
        document.querySelector("#D").style.backgroundColor = "#43c45f";
        document.getElementById("changeimg").src = pictures_2[7];
        if(selectedAnswer == "D"){
          score++;
        }
      }
    }
  }
  else if(submitted){
    document.querySelector("#quizSubmit").innerHTML = "SUBMIT";
    if (qNum == 8) {
      document.getElementById("changeimg").src = pictures_2[6];
    }
    else {
      document.getElementById("changeimg").src = pictures_1[img1Counter];
      img1Counter++;
    }
    nextQuestion();
  }
}

function nextQuestion(){
  selectedAnswer = null;
  answerSelected = false;
  submitted = false;
  //reset style for boxes
  for(var i = 0; i < answerArray.length; i++){
    answerArray[i].style.backgroundColor = "#F0F0F0";
    answerArray[i].style.border = "1px solid black";
  }
  //update question number
  qNum++;
  document.querySelector("#questionNumber").innerHTML = qNum;
  //change question heading
  document.querySelector("#questionHeading").innerHTML = questions[qNum-2];
  //update question options
  for(var i = 0; i < answerText.length; i++){
    if(qNum == 2){
      answerText[i].innerHTML = q2[i];
    }
    else if(qNum == 3){
      answerText[i].innerHTML = q3[i];
    }
    else if(qNum == 4){
      answerText[i].innerHTML = q4[i];
    }
    else if(qNum == 5){
      answerText[i].innerHTML = q5[i];
    }
    else if(qNum == 6){
      answerText[i].innerHTML = q6[i];
    }
    else if(qNum == 7){
      answerText[i].innerHTML = q7[i];
    }
    else if(qNum == 8){
      answerText[i].innerHTML = q8[i];
    }
  }
  if(qNum > 8){
    document.querySelector("#questionWrapper").style.display = "none";
    document.querySelector("#results").style.display = "block";
    document.querySelector("#resultNum").innerHTML = score;
  }
}
//retry button at the end
document.querySelector("#tryAgain").onclick = function(){
  location.reload();
}
