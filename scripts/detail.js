var toDate;
var fromDate;

function GetDays(){
    var adultNumber =document.getElementById("adults").value;
    var toDate= new Date(document.getElementById("toDate").value);
    var fromDate = new Date(document.getElementById("fromDate").value);
    return parseInt((toDate - fromDate) / (24 * 3600 * 1000))*adultNumber*1000;

 }
 function call(){
     console.log("Calling call()");
    var adultNumber =document.getElementById("adults").value;
    var toDate= new Date(document.getElementById("toDate").value);
    var fromDate = new Date(document.getElementById("fromDate").value);
    if(toDate>fromDate && adultNumber >0  ){
        console.log(GetDays());
        document.getElementById("total").value="Rs."+ GetDays();
        document.getElementById("bookNow").removeAttribute("disabled")
        
    }  else{
        console.log(GetDays());
        document.getElementById("total").value="Rs.0";
        document.getElementById("bookNow").setAttribute("disabled",true);
    }
}