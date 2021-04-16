function getvalue(val) {
    document.getElementById("text").value += val;// to display in calculator
}
function clears() {
    document.getElementById("text").value = " ";//to clear data when C button is pressed
    document.getElementById("ans").value = " ";
}

function solve() {
    let x = document.getElementById("text").value;//we get the input from user and is assigned in x
    let y = eval(x);//the input is evaluated

        if (typeof y === "undefined") {
            alert("Please insert value !");
          } 
        // else if (isNaN(y)){
        //    alert("Please select number !");
        //  }



        else {
            document.getElementById("ans").value = "=" + y;//the soln is printed in screen
        }

    
   
}
