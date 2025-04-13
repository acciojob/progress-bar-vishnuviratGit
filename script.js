//your JS code here. If required.
let i=1;
document.getElementById("next").addEventListener("click", ()=>{
	   i++;
	    if(i==1){
			document.getElementById("prev").style.display="none";
		}
	   else{
		  document.getElementById("prev").style.display="block"; 
	   }
	    if(i==5){
			document.getElementById("next").style.display="none";
		}
	   else{
		   document.getElementById("next").style.display="block";
	   }
        
	   
	    document.getElementById(`circle-${i}`).classList.add("active");
})
document.getElementById("prev").addEventListener("click", ()=>{
	   i--;
	   if(i==1){
			document.getElementById("prev").style.display="none";
		}
	else{
		  document.getElementById("prev").style.display="block"; 
	   }
	    if(i==5){
			document.getElementById("next").style.display="none";
		}
	else{
		   document.getElementById("next").style.display="block";
	   }
	
	 document.getElementById(`circle-${i+1}`).classList.remove("active");
	 
})
