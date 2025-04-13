//your JS code here. If required.
let i=1;
document.getElementById("next").addEventListener("click", ()=>{
	   i++;
	   if(i==1){
			document.getElementById("prev").disabled=true;
		}
	else{
		  document.getElementById("prev").disabled=false; 
	   }
	    if(i==5){
			document.getElementById("next").disabled=true;
		}
	else{
		   document.getElementById("next").disabled=false;
	   }
        
	   
	    document.getElementById(`circle-${i}`).classList.add("active");
})
document.getElementById("prev").addEventListener("click", ()=>{
	   i--;
	   if(i==1){
			document.getElementById("prev").disabled=true;
		}
	else{
		  document.getElementById("prev").disabled=false; 
	   }
	    if(i==5){
			document.getElementById("next").disabled=true;
		}
	else{
		   document.getElementById("next").disabled=false;
	   }
	
	 document.getElementById(`circle-${i+1}`).classList.remove("active");
	 
})
