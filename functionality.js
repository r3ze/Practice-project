function calculateBMI(){
    var heightmetric = document.getElementById("height").value;
    var weightmetric = document.getElementById("weight").value
    var height = document.getElementById("txt-height").value;
    var weight = document.getElementById("txt-weight").value;
     //Height 
     if(weightmetric=="kilograms"){
        
   }
     var bmi_result;    
     if(heightmetric=="centimeters"){ 
      if(weightmetric=="kilograms"){
      height/=100;
      bmi_result = weight/(height*height);
      }
      else if(weightmetric=="pounds"){
         height/=100;
         weight/= 2.205;
         bmi_result = weight/(height*height);
      }
      }
     else if(heightmetric=="meters"){
      if(weightmetric=="kilograms"){
         bmi_result = weight/(height*height)
         }
         else if(weightmetric=="pounds"){
            weight/= 2.205;
            bmi_result = weight/(height*height);
         }
      
      }
      else if(heightmetric=="inches"){    
         if(weightmetric=="kilograms"){
            height/=39.37;
            bmi_result = weight/(height*height);
         }
         else if(weightmetric=="pounds"){
            height/=39.37;
            weight/= 2.205;
            bmi_result = weight/(height*height);
         }
       
      }
      else if(heightmetric=="feet"){
         if(weightmetric=="kilograms"){
            height/=3.281;
            bmi_result = weight/(height*height);
         }
         else if(weightmetric=="pounds"){
            height/=3.281;
            weight/= 2.205;
            bmi_result = weight/(height*height);
         }
      }

      var result = bmi_result.toFixed(4);
   document.getElementById("BMI").innerHTML = "Your BMI: "+result;
}
function reset(){
   document.getElementById("height").selectedIndex = "0";
   document.getElementById("weight").selectedIndex = "0";
   document.getElementById("BMI").innerHTML = "Your BMI:";
   document.getElementById("txt-height").value = "";
   document.getElementById("txt-weight").value = "";
}