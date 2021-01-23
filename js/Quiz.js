		//timer
		var timer;
        var sec = 120;
        var min2; 
		var sec2;
            
        window.onload = function timecount(){
            timer = setInterval(function(){ 
            sec--;
            if (sec == 0){
                clearTimeout(timer);
                document.getElementById("box").innerHTML = "Your session is finished"
            }
            else if(sec == 00){
                min--;
                sec = 120;
            }
            document.getElementById("timer").innerHTML =   "Remaining Time : "+ sec + " Secs"  ;  
            },1000);
        }
				 				
	//Answer validation
	function check(){
	clearTimeout(timer);
		var ans1Arr = document.getElementsByName("q1");
		var ans1Arr = document.getElementsByName("q1");
        var ans2Arr = document.getElementsByName("q2");
        var ans3Arr = document.getElementsByName("q3");
        var ans4Arr = document.getElementsByName("q4");
        var ans5Arr = document.getElementsByName("q5");
        var ans6Arr = document.getElementsByName("q6");
        var ans7Arr = document.getElementsByName("q7");
        var ans8Arr = document.getElementsByName("q8");
        var ans9Arr = document.getElementsByName("q9");
        var ans10Arr = document.getElementsByName("q10");	
		var correct = 0;

		
		var ans1Select = " ";
		var ans2Select = " "; 
		var ans3Select = " ";
		var ans4Select = " ";
		var ans5Select = " ";
        var ans6Select = " ";
		var ans7Select = " ";
		var ans8Select = " ";
		var ans9Select = " ";
		var ans10Select = " ";
				
				
	        //Question1
                for (var i=0; i< ans1Arr.length;i++){
                    if (ans1Arr[i].checked){
                        ans1Select = ans1Arr[i].value;
                        break;
                    }
                }
                if (ans1Select == " ") {
                    document.getElementById("answer1").innerHTML = "You did not select an answer" ;
					document.getElementById("answer1").style.color = "black";
                }
                else if(ans1Select == "Russia") {
                    document.getElementById("answer1").innerHTML = "Your answer is correct!!!" ;
                    correct +=2;
					document.getElementById("answer1").style.color = "black";
                }
                else {
                    document.getElementById("answer1").innerHTML = "Incorrect Answer!!! Correct Answer is the Russia." ;
                    correct--;
					document.getElementById("answer1").style.color = "black";
                }
                
                //Question2
                for (var i=0; i< ans2Arr.length;i++){
                    if (ans2Arr[i].checked){
                        ans2Select = ans2Arr[i].value;
                        break;
                    }
                }
                
                if (ans2Select == " ") {
                    document.getElementById("answer2").innerHTML = "You did not select an answer" ;
					document.getElementById("answer2").style.color = "black";
                }
                else if(ans2Select == "11") {
                    document.getElementById("answer2").innerHTML = "Your answer is correct!!!" ;
                    correct +=2;
					document.getElementById("answer2").style.color = "black";
                }
                else {
                    document.getElementById("answer2").innerHTML = "Incorrect Answer!!! Correct Answer is 11." ;
                    correct--;
					document.getElementById("answer2").style.color = "black";
                }
                
                //Question3
                for (var i=0; i< ans3Arr.length;i++){
                    if (ans3Arr[i].checked){
                        ans3Select
						= ans3Arr[i].value;
                        break;
                    }
                }
                
                if (ans3Select == " ") {
                    document.getElementById("answer3").innerHTML = "You did not select an answer" ;
					document.getElementById("answer3").style.color = "black";
                }
                else if(ans3Select == "Arm") {
                    document.getElementById("answer3").innerHTML = "Your answer is correct!!!" ;
                    correct +=2;
					document.getElementById("answer3").style.color = "black";
                }
                else {
                    document.getElementById("answer3").innerHTML = "Incorrect Answer!!! Correct Answer is Arm." ;
                    correct--;
					document.getElementById("answer3").style.color = "black";
                }
                
                //Question4
                for (var i=0; i< ans4Arr.length;i++){
                    if (ans4Arr[i].checked){
                        ans4Select = ans4Arr[i].value;
                        break;
                    }
                }
                
                if (ans4Select == " ") {
                    document.getElementById("answer4").innerHTML = "You did not select an answer" ;
					document.getElementById("answer4").style.color = "black";
                }
                else if(ans4Select == "Red") {
                    document.getElementById("answer4").innerHTML = "Your answer is correct!!!" ;
                    correct +=2;
					document.getElementById("answer4").style.color = "black";
                }
                else {
                    document.getElementById("answer4").innerHTML = "Incorrect Answer!!! Correct Answer is Red." ;
                    correct--;
					document.getElementById("answer4").style.color = "black";
                }
                
                //Question5
                for (var i=0; i< ans5Arr.length;i++){
                    if (ans5Arr[i].checked){
                        ans5Select = ans5Arr[i].value;
                        break;
                    }
                }
                
                if (ans5Select == " ") {
                    document.getElementById("answer5").innerHTML = "You did not select an answer" ;
					document.getElementById("answer5").style.color = "black";
                }
                else if(ans5Select == "Corner kick") {
                    document.getElementById("answer5").innerHTML = "Your answer is correct!!!" ;
                    correct +=2;
					document.getElementById("answer5").style.color = "black";
                }
                else {
                    document.getElementById("answer5").innerHTML = "Incorrect Answer!!! Correct Answer is Corner kick." ;
                    correct--;
					document.getElementById("answer5").style.color = "black";
                }
                
                //Question6
                for (var i=0; i< ans6Arr.length;i++){
                    if (ans6Arr[i].checked){
                        ans6Select = ans6Arr[i].value;
                        break;
                    }
                }
                
                if (ans6Select == " ") {
                    document.getElementById("answer6").innerHTML = "You did not select an answer" ;
					document.getElementById("answer6").style.color = "black";
                }
                else if(ans6Select == "False") {
                    document.getElementById("answer6").innerHTML = "Your Answer is Correct!!!" ;
                    correct +=2;
					document.getElementById("answer6").style.color = "black";
                }
                else {
                    document.getElementById("answer6").innerHTML = "Incorrect Answer!!! Correct Answer is False. " ;
                    correct--;
					document.getElementById("answer6").style.color = "black";
                }
                
                //Question7
                for (var i=0; i< ans7Arr.length;i++){
                    if (ans7Arr[i].checked){
                        ans7Select = ans7Arr[i].value;
                        break;
                    }
                }
                
                if (ans7Select == " ") {
                    document.getElementById("answer7").innerHTML = "You did not select an answer" ;
					document.getElementById("answer7").style.color = "black";
                }
                else if(ans7Select == "option1") {
                    document.getElementById("answer7").innerHTML = "Your answer is correct!!!" ;
                    correct +=2;
					document.getElementById("answer7").style.color = "black";
                }
                else {
                    document.getElementById("answer7").innerHTML = "Incorrect Answer!!! Correct Answer is Both hands must be on the ball behind the head, both feet must be on the ground.." ;
                    correct--;
					document.getElementById("answer7").style.color = "black";
                }
                
                //Question8
                for (var i=0; i< ans8Arr.length;i++){
                    if (ans8Arr[i].checked){
                        ans8Select = ans8Arr[i].value;
                        break;
                    }
                }
                
                if (ans8Select == " ") {					
                    document.getElementById("answer8").innerHTML = "You did not select an answer" ;
					document.getElementById("answer8").style.color = "black";
                }
                else if(ans8Select == "Brazil") {					
                    document.getElementById("answer8").innerHTML = "Your answer is correct!!!" ;
                    correct +=2;
					document.getElementById("answer8").style.color = "black";
                }
                else {					
                    document.getElementById("answer8").innerHTML = "Incorrect Answer!!! Correct Answer is Brazil." ;
                    correct--;
					document.getElementById("answer8").style.color = "black";
                }
                
                //Question9
                for (var i=0; i< ans9Arr.length;i++){
                    if (ans9Arr[i].checked){
                        ans9Select = ans9Arr[i].value;
                        break;
                    }
                }
                
                if (ans9Select == " ") {					
                    document.getElementById("answer9").innerHTML = "You did not select an answer" ;
					document.getElementById("answer9").style.color = "black";
                }
                else if(ans9Select == "Real Madrid") {					
                    document.getElementById("answer9").innerHTML = "Your answer is correct!!!" ;
                    correct +=2;
					document.getElementById("answer9").style.color = "black";
                }
                else {					
                    document.getElementById("answer9").innerHTML = "Incorrect Answer!!! Correct Answer is Real Madrid." ;
                    correct--;
					document.getElementById("answer9").style.color = "black";
                }
                
                //Question10
                for (var i=0; i< ans10Arr.length;i++){
                    if (ans10Arr[i].checked){
                        ans10Select = ans10Arr[i].value;
                        break;
                    }
                }
                
                if (ans10Select == " ") {					
                    document.getElementById("answer10").innerHTML = "You did not select an answer" ;
					document.getElementById("answer10").style.color = "black";
                }
                else if(ans10Select == "Qatar") {					
                    document.getElementById("answer10").innerHTML = "Your answer is correct!!!" ;
                    correct +=2;
					document.getElementById("answer10").style.color = "black";
                }
                else {					
                    document.getElementById("answer10").innerHTML = "Incorrect Answer!!! Correct Answer is  Qatar." ;
                    correct--;
					document.getElementById("answer10").style.color = "black";
                }
				
	if (correct<0){
	correct=0;
	}							
	
	
	
	//Changing background color according to the marks user obtained
	var score;
	if (correct ==20) {
		score = 0;
		{
    document.getElementById("quiz").style.backgroundColor = "#216d7a";
		}
		
	}
	else if (correct >14) {
		score = 1;
		{
    document.getElementById("quiz").style.backgroundColor = "#6d10ad";
		}		
	}
	else if (correct > 8) {
		score = 2;
		{
    document.getElementById("quiz").style.backgroundColor = "#1d960b";
		}
	}
	else  {
		score = 3;
		 {
    document.getElementById("quiz").style.backgroundColor = "#e6521c";
		}
	} 
	
	sec2 = 120 - sec;
	       
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You scored " + correct + "/20."+  " You took  " + sec2 + " Seconds to complete."; 
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("picture").src =  image[score];
	}	