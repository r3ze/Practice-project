function calculateBMI(){
    
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);
   var meters = height/100
   var metersS = meters*meters
var bmi = weight/metersS
var status
if(bmi<18.5){
    status = "underweight"
}
else if(bmi<=24.9){
    status = "healthy"
}
else if(bmi<=29.9){
    status = "overweight"
}
else{
    status = "obese";
}
    document.getElementById("result").value = parseFloat(bmi).toFixed(2)+".";
    document.getElementById("status").value = status+"."
}