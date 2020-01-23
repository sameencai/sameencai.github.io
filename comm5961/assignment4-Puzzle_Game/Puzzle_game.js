function greeting() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
      greeting = "Good Morning";
    } else if (time < 19) {
      greeting = "Good Day";
    } else {
      greeting = "Good Evening";
    }
    document.getElementById("demo").innerHTML = greeting;
  }

function releaseDragon(){
    document.getElementById("meetTheDragon").style.display="block";
}
function bloodCountDown(){
    var currentVal = document.getElementById("blood").innerHTML;
    var newVal = 0;
    if (currentVal > 0){
        newVal = currentVal - 1;
    }
    document.getElementById("blood").innerHTML = newVal;
}

