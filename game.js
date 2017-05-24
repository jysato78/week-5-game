
$(document).ready(function() {
  
  var time = 60;
  var correct = 0;
  var wrong = 0;
  var none = 0;
  var counter = 0;
  

  //When the user clicks the Start button, start the timer and hide elements
  $(".start").on("click", function() {
         $(".row").css("visibility","visible"); 
         $(".start").css("display","none");
         $("#buttonArea").css("display","none");
       
      
          counter = setInterval(count, 1000);
      
          function count() {

            time--;
            var converted = timeConverter(time);
            $("#clock").html(converted);
           
           //When the timer hits 0, alert user and stop timer
            if(time === 0) {
              $("#clock").html("OUT OF TIME!");
              clearInterval(counter);
              
              //Disable radio buttons 
              document.getElementById("A").disabled = true;
              document.getElementById("B").disabled = true;
              document.getElementById("C").disabled = true;
              document.getElementById("D").disabled = true;
              document.getElementById("E").disabled = true;
              document.getElementById("F").disabled = true;
              document.getElementById("G").disabled = true;
              document.getElementById("H").disabled = true;
              document.getElementById("I").disabled = true;
              document.getElementById("J").disabled = true;
              document.getElementById("K").disabled = true;
              document.getElementById("L").disabled = true;
              document.getElementById("M").disabled = true;
              document.getElementById("N").disabled = true;
              document.getElementById("O").disabled = true;
              document.getElementById("P").disabled = true;
              document.getElementById("Q").disabled = true;
              document.getElementById("R").disabled = true;
              document.getElementById("S").disabled = true;
              document.getElementById("T").disabled = true;
            }
          
          }
          
          //Format number to display correctly
          function timeConverter(t) {
            
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
            
            if (seconds < 10) {
              seconds = "0" + seconds;
            }

            return seconds;
          }
      
  });

  //When the user clicks the Done button, get the values of radio buttons and hide elements
  $(".Done").on("click", function() {
    $(".panel-body").css("display","none"); 
    $(".Done").css("display","none"); 
    $("#clock").css("display","none"); 
    $(".col-lg-4").css("display","none"); 
    
    //Getting values of radio buttons
    var radioInput = $('input[name="Trivia1"]:checked').val();
      if(radioInput === "True"){
        correct++;
      }
      else if(!$('input[name="Trivia1"]').is(':checked')) {
      
        none++;
      } 
      else {
        wrong++;
      }
      
    var radioInput2 = $('input[name="Trivia2"]:checked').val();
      if(radioInput2 === "False"){
        correct++;
      }
      
      else if(!$('input[name="Trivia2"]').is(':checked'))  {
        none++;
        console.log("im here")
      }
      else {
        wrong++;
      }
      
    var radioInput3 = $('input[name="Trivia3"]:checked').val();
      if(radioInput3 === "False"){
        correct++;
      }
      else if(!$('input[name="Trivia3"]').is(':checked'))  {
        none++;
        console.log("null: ",none);
      }
      else {
        wrong++;
      }
      
    var radioInput4 = $('input[name="Trivia4"]:checked').val();
      if(radioInput4 === "False"){
        correct++;
      }
      else if(!$('input[name="Trivia4"]').is(':checked'))  {
        none++;
        
      }
      else {
        wrong++;
      }
      
    var radioInput5 = $('input[name="Trivia5"]:checked').val();
      if(radioInput5 === "False"){
        correct++;
      }
      else if(!$('input[name="Trivia5"]').is(':checked')) {
        none++;
        
      }
      else {
        wrong++;
      }
      
    var radioInput6 = $('input[name="Trivia6"]:checked').val();
      if(radioInput6 === "True"){
        correct++;
      }
      else if(!$('input[name="Trivia6"]').is(':checked'))  {
        none++;
        
      }
      else {
        wrong++;
      }
      
    var radioInput7 = $('input[name="Trivia7"]:checked').val();
      if(radioInput7 === "False"){
        correct++;
      }
      else if(!$('input[name="Trivia7"]').is(':checked'))  {
        none++;
        console.log("null: ",none);
      }
      else {
        wrong++;
      }
      
    var radioInput8 = $('input[name="Trivia8"]:checked').val();
      if(radioInput8 === "True"){
        correct++;
      }
      else if(!$('input[name="Trivia8"]').is(':checked'))  {
        none++;
        
      }
      else {
        wrong++;
      }
      
    var radioInput9 = $('input[name="Trivia9"]:checked').val();
      if(radioInput9 === "True"){
        correct++;
      }
      else if(!$('input[name="Trivia9"]').is(':checked'))  {
        none++;
        
      }
      else {
        wrong++;
      }
     
    var radioInput10 = $('input[name="Trivia10"]:checked').val();
      if(radioInput10 === "False"){
        correct++;
      }
      else if(!$('input[name="Trivia10"]').is(':checked'))  {
        none++;
        
      }
      else {
        wrong++;
      }
      
      //Add up the correct, wrong and unanswered answers and display them.
      $("#correct").text("# of Correct Answers: " + correct);
      $("#wrong").text("# of Wrong Answers: " + wrong);
      $("#none").text("# of Unanswered Questions: " + none);
              
  });
  
});
