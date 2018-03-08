"use strict";
$(document).ready(function(){
 
// variables assigned to store the no of win and loss
    let add = 0;
    let loss = 0;

// object used to store the returned value of the win count
    let winCount = function(){
        
        add++;
        return add ;
            
    };

// object used to store the returned value of the loss count
    let lossCount = function(){
            
        loss ++;
        return loss;
            
    };

//declaring and setting values for variables that adds the hidden random number and store the incremented values when a button is clicked
    let x = 0;
    let y = 0;
    let z = 0;
    let a = 0;

//declaring variables for randomly created numbers
    let randomlyPickedNumber;
    let crystalRandomNumber;
    let crystalRandomNumber2;
    let crystalRandomNumber3;
    let crystalRandomNumber4;

// function for creating a new random number without reloading the page 
    function game(){
        randomlyPickedNumber = Math.floor((Math.random() * 102) + 19);
        $("#randomPickedNumber").text(randomlyPickedNumber);
        crystalRandomNumber = Math.floor((Math.random() * 11) + 1);
        crystalRandomNumber2 = Math.floor((Math.random() * 11) + 1);
        crystalRandomNumber3 = Math.floor((Math.random() * 11) + 1);
        crystalRandomNumber4 = Math.floor((Math.random() * 11) + 1);
    }
    game();
    

// function for each buttons
    $("#btn1").on("click", function(){
        x +=  crystalRandomNumber;
        let b = x + y + z + a;
        // const b = x + y + z + a;
        console.log(b);
        $('#playerScore').text(b);
     
        if (  b === randomlyPickedNumber){
            // console.log(x + y + z + a);
            // console.log(winCount())
            $('#wins').text(winCount());
            // console.log(winCount());
            $('#congrats').text("You won!!!!");
            $('#playerScore').text(0)
            x = 0;
            y = 0;
            z = 0;
            a = 0;
            game();
            
        }

        if ( b > randomlyPickedNumber){
            // console.log(lossCount())
            $('#losses').text(lossCount());
            $('#congrats').text("You Loss!!!!")
            $('#playerScore').text(0)
            x = 0;
            y = 0;
            z = 0;
            a = 0;
            game();
            
        }
        
    
    });

    $("#btn2").on("click", function(){
        y +=  crystalRandomNumber2;
        let b = x + y + z + a;
        // console.log(crystalRandomNumber3);
        $('#playerScore').text(x + y + z + a);
      
        if (  b === randomlyPickedNumber){
            // console.log(x + y + z + a);
            // console.log(winCount())
            $('#wins').text(winCount());
            // console.log(winCount());
            $('#congrats').text("You won!!!!");
            $('#playerScore').text(0)
            x = 0;
            y = 0;
            z = 0;
            a = 0;
            game();
            
        }

        if ( b > randomlyPickedNumber){
            // console.log(lossCount())
            $('#losses').text(lossCount());
            $('#congrats').text("You Loss!!!!")
            $('#playerScore').text(0)
            x = 0;
            y = 0;
            z = 0;
            a = 0;
            game();
            
        }

    });
    
    $("#btn3").on("click", function(){
        z +=  crystalRandomNumber3;
        let b = x + y + z + a;
        // console.log(crystalRandomNumber3);
        $('#playerScore').text(x + y + z + a);
       
        if (  b === randomlyPickedNumber){
            // console.log(x + y + z + a);
            // console.log(winCount())
            $('#wins').text(winCount());
            // console.log(winCount());
            $('#congrats').text("You won!!!!");
            $('#playerScore').text(0)
            x = 0;
            y = 0;
            z = 0;
            a = 0;
            game();
            
        }

        if ( b > randomlyPickedNumber){
            // console.log(lossCount())
            $('#losses').text(lossCount());
            $('#congrats').text("You Loss!!!!")
            $('#playerScore').text(0)
            x = 0;
            y = 0;
            z = 0;
            a = 0;
            game();
            
        }

    });
    
    $("#btn4").on("click", function(){
       
        a +=  crystalRandomNumber4;
        let b = x + y + z + a;
        // console.log(a);
        $('#playerScore').text(x + y + z + a);

        if (  b === randomlyPickedNumber){
            // console.log(x + y + z + a);
            // console.log(winCount())
            $('#wins').text(winCount());
            // console.log(winCount());
            $('#congrats').text("You won!!!!");
            $('#playerScore').text(0)
            x = 0;
            y = 0;
            z = 0;
            a = 0;
            game();
            
        }

        if ( b > randomlyPickedNumber){
            // console.log(lossCount())
            $('#losses').text(lossCount());
            $('#congrats').text("You Loss!!!!")
            $('#playerScore').text(0)
            x = 0;
            y = 0;
            z = 0;
            a = 0;
            game();
            
        }

    });
    
 });