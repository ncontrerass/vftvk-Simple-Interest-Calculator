//compute function - Calculates result and displays it on the html
function compute()
{
    //Principal Amount input box validation 
    var r = validatePrincipal();
    
    //If principal amount vaidation is true, execute the following code
    if(r === true){
        var principal = document.getElementById("principal").value;

        var rate = document.getElementById("rate").value;

        var years = document.getElementById("years").value;

        var interest = principal * years * rate /100;

        var year = new Date().getFullYear()+parseInt(years);

        document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>. \<br\>You will receive an amount of \<mark\>"+interest+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>";
    }
}

//updateRate function - reads and displays the slider value
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

//validatePrincipal function - validates if the number is less or equals to zero, and shows an alert
function validatePrincipal() 
{
    var principal = document.getElementById("principal");

    if(principal.value <=0){
        document.getElementById("result").innerHTML="";
        alert("Enter a positive number");
        principal.focus();
        return false;
    } else{
        return true;
    }
        
}
        
