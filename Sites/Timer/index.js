let timerCountDown = document.getElementById("timerCountDown"); 
let timeRemainingP = document.getElementById("timeRemaining");
let timeStart = document.getElementById("timeStart"); 
let sound = document.getElementById("beep"); 


var myCountDown; 

function val() {

    document.body.style.backgroundColor = "#90BE6D"; 

    let timer = document.getElementById("time"); 
    let dt = Date.now();
    let dtFuture = dt + (timer.value * 1000 * 60) + 500; 
    
    
    let timeRemaining = dtFuture - Date.now(); 
    let  minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    timerCountDown.innerHTML ="Time Remaining: " + minutes + ":" + seconds ;

    myCountDown = setInterval(function(){
        let timeRemaining = dtFuture - Date.now(); 

        if (timeRemaining < 1000) {
            clearInterval(myCountDown);
            timerCountDown.innerHTML ="Time Remaining: 0:0";
            document.body.style.backgroundColor = "#f3722c";         
            sound.play(); 
        }
        let  minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        timerCountDown.innerHTML ="Time Remaining: " + minutes + ":" + seconds ;

        
    }, 1000)
            
}


function stopCountDown() {
    clearInterval(myCountDown);
    document.body.style.backgroundColor = "#f3722c"; 
    sound.play()
}


// setInterval(function() {
//     timerCountDown.innerHTML = Date.now();
// }, 1000)


