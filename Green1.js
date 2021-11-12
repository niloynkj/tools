function Result() {  
	  

    var d = new Date();
         var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
         var m = months[d.getMonth()];
         var e = d.getFullYear();
         var n = d.getDate();
         var h = d.getHours();
         var mi = d.getMinutes();
         var s = d.getSeconds();
  
  var Y5 = (m)+" "+(n)+" "+(e);
  var Y6 = (h)+"h "+(mi)+"m "+(s)+"s";
 var Item = document.getElementById('item').value; 
var Cost = document.getElementById('cost').value; 

   
   
 var tag = "Greensp/GEsti/"+(Y5)+(Y6);
 
 firebase.database().ref(tag).update({
      Item : Item,
      Date : Y5,
	  time : Y6,
	  Cost : Cost,
          Stutas: active,
  });
  
  alert("Add sucess");
  
  
  
  }
  
  function Update(){
  
  
    var table = document.getElementById("customers"), sumVal = 0;
            
            for(var row = 1; row < table.rows.length; row++)
            {
                sumVal = sumVal + parseInt(table.rows[row].cells[2].innerHTML);
            }
            
            document.getElementById("val").innerHTML = "Sum Value = " + sumVal;
            console.log(sumVal);
  
  }
  
  
