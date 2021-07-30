//compute function - Calculates result and displays it on the html
function compute()
{
    validatePrincipal();
    
    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";

}

//updateRate function - reads and displays the slider value
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//validatePrincipal function - validates if the number is less or equals to zero, and shows an alert
function validatePrincipal() 
{
    var principal = document.getElementById("principal");

    if(principal.value <=0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    } else{
        return true;
    }
        
}
        
