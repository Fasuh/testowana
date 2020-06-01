function kamien(){
	document.getElementById("kamienne").style.display="inline";
	document.getElementById("boostowe").style.display="none";
	document.getElementById("result").innerHTML="";
}
function boost(){
	document.getElementById("boostowe").style.display="inline";
	document.getElementById("kamienne").style.display="none";
	document.getElementById("result").innerHTML="";
}
function calc(){
	document.getElementById("result").innerHTML="";
	var kamien=document.getElementById("kamien").checked;
	var boost=document.getElementById("boost").checked;
	var booste=parseInt(document.getElementById("ilosc2").value);
	var krok=document.getElementById("krok").value;
	var aboost=document.getElementById("aboost").value;
	var kamienie=document.getElementById("ilosc1").value;
	var akrok=Math.floor(aboost/krok)+1;
        var pboost=aboost;
	
	
	if(kamien==true){
		var krok=document.getElementById("krok").value;
		var aboost=parseInt(document.getElementById("aboost").value);
		var kawal=0;
		
		while(kawal==0){
			if(kamienie-akrok<0)kawal=1;
			else{
                           if(krok==30&&aboost<10){
                              aboost+=2;
                              kamienie-=1;
                           }
                           else{
			      aboost++;
			      kamienie-=akrok;
			      if(aboost%krok==0) akrok++;
                           }
			}
		}
		document.getElementById("result").innerHTML="Kamieni wystarczy ci zeby zrobic pokemona na +"+aboost;
	}
	else if(boost==true){
		document.getElementById("result").innerHTML="";
		if(booste>aboost){
		var help=booste-aboost;
		var result=0;
		var akrok=Math.floor(aboost/krok)+1;
		var cos=0;
		while(cos==0){
			aboost++;
			result+=akrok;
			if(aboost%krok==0) akrok++;
			if(aboost==booste) cos=1;
		}
		if(krok==30&&pboost<=10&&aboost>=10){
		   result-=(10-pboost)/2;
		}
                else if(krok==30&&pboost<=10&&aboost<10){
		   result=result/2;
                   if(result%1!=0){
                      result=Math.ceil(result);
                      booste++;
                   }
		}
		document.getElementById("result").innerHTML="Aby zrobic tego pokemona na +"+booste+" potrzebujesz: "+result+" kamieni";
		}
		else document.getElementById("result").innerHTML="Musisz podac poprawna ilosc boostow";
	}
	else document.getElementById("result").innerHTML="prosze wybrac sposob obliczen";
}