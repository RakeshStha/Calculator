function getvalue(val) {
    document.getElementById("text").value += val;// to display in calculator
}

function clears() {
    document.getElementById("text").value = " ";//to clear data when C button is pressed
    document.getElementById("ans").value = " ";
}

function solve() {
    
    try{
        let x = document.getElementById("text").value;//we get the input from user and is assigned in x
        let y = eval(x);//the input is evaluated
        //document.getElementById("ans").style.color = "#ff0000";
        
        if (typeof y === "undefined") {
            //alert("Please insert value !");
            document.getElementById("ans").style.color = "#ff0000";
            document.getElementById("ans").value = " Please insert value !";   
          } 
        else if (isNaN(y)){
           //alert("Mathematical Error");
           document.getElementById("ans").style.color = "#ff0000";
           document.getElementById("ans").value = " Mathematical Error !"
         }
        else {
            document.getElementById("ans").style.color = "green";
           document.getElementById("ans").value = "=" + y;//the soln is printed in screen
        }
    }
    catch (err){
        //alert('Invalid !');
        document.getElementById("ans").style.color = "#ff0000";
        document.getElementById("ans").value = " Invaild ! ";
    }
    

}


