//angular, spring
var x = new Array();
var y = new Array();
var z = new Array();
var nav=0;
var nav2=0;
var win=0;
function spr(nr, type, m, b, wid, hei){
        var nr;
        var type;
        var m;
        var b;
        var wid;
        var or = nr+"."+type;
        var ob = nr+"."+type+"c";
        var il = 0;
        var ten;
        var flag=document.getElementById("flaga").checked;
        var els = new Array();
        var sps = new Array();
        var onm = new Array();
		var zmn=0;
		var nom=0;

        if(flag==true && z[nr]=="flaged"){
           z[nr] = "blank";
           document.getElementById(or).style.display = "none";
           document.getElementById(ob).style.color="#999";
        }
        else if(flag==true && z[nr]=="blank"){
           z[nr] = "flaged";
           document.getElementById(or).style.display = "inline";
           document.getElementById(ob).style.color="red";
        }

        else if(type==2 && z[nr]=="blank"){
        document.getElementById("out2").innerHTML += "<div value='lol' style='z-index:5; position:absolute; height:"+hei*25+hei*2+5+"px; width:"+wid*25+wid*2+5+"px;background-color:black; opacity:0.5;'>Twój wynik: "+nav2+"<div>";
        document.getElementById(ob).style.backgroundColor="black";
        
        document.getElementById(ob).innerHTML = "x";
        z[nr]="clear";
        
	for(j=1;j<=m;j++){
           for(i=0;i<=x.length;i++){
              if(j==x[i] && j!=nr){
                 ten = j+"."+type+"c";
                 document.getElementById(ten).style.backgroundColor = "red";
                 document.getElementById(ten).innerHTML = "x";
              }
	   }
	}
        }
        
        else if(z[nr]=="blank"){
        if(y[nr-1]=="b" && (nr-1)%wid>0) il++;
        if(y[nr+1]=="b" && nr%wid>0) il++;
        if(y[nr-wid+1]=="b" && nr%wid>0) il++;
        if(y[nr-wid]=="b" && nr-wid>=1) il++;
        if(y[nr-wid-1]=="b" && (nr-1)%wid>0) il++;
        if(y[nr+wid-1]=="b" && (nr-1)%wid>0) il++;
        if(y[nr+wid]=="b" && nr+wid<=100) il++;
        if(y[nr+wid+1]=="b" && nr%wid>0) il++;
        document.getElementById(ob).style.backgroundColor = "white";
        if(il>0){
           document.getElementById(ob).innerHTML = il;
           switch(il){
              case 1:document.getElementById(ob).style.color = "#4BA6DE"; break;
              case 2:document.getElementById(ob).style.color = "green"; break;
              case 3:document.getElementById(ob).style.color = "red"; break;
              case 4:document.getElementById(ob).style.color = "blue"; break;
              case 5:document.getElementById(ob).style.color = "#690921"; break;
              case 6:document.getElementById(ob).style.color = "#369404"; break;
              case 7:document.getElementById(ob).style.color = "#AB0A15"; break;
              case 8:document.getElementById(ob).style.color = "#850810"; break;
           }
        }
        else{
           els[0]=nr;
           for(i=0;i<els.length;i++){
                      zmn=els[i]+".pc";
                      sps[2]= els[i]-wid;
                      sps[3]= els[i]+wid;
                      if(els[i]%wid!=0){
                         sps[5]= els[i]-wid+1;
                         sps[7]= els[i]+wid+1;
                         sps[1]= els[i]+1;
                      }
                      if((els[i]-1)%wid!=0){
                         sps[4]= els[i]-wid-1;
                         sps[6]= els[i]+wid-1;
                         sps[0]= els[i]-1;
                      }
                       
                      for(j=0;j<8;j++){
			nom=0;
			if(sps[j]>0 && sps[j]<=m && z[sps[j]]!="clear"){
                         il=0;
                         onm[j]=sps[j]+"."+type+"c";
                         if(y[sps[j]-1]=="b" && (sps[j]-1)%wid>0) il++;
                         if(y[sps[j]+1]=="b" && sps[j]%wid>0) il++;
                         if(y[sps[j]-wid+1]=="b" && sps[j]%wid>0) il++;
                         if(y[sps[j]-wid]=="b" && sps[j]-wid>=1) il++;
                         if(y[sps[j]-wid-1]=="b" && (sps[j]-1)%wid>0) il++;
                         if(y[sps[j]+wid-1]=="b" && (sps[j]-1)%wid>0) il++;
                         if(y[sps[j]+wid]=="b" && sps[j]+wid<=100) il++;
                         if(y[sps[j]+wid+1]=="b" && sps[j]%wid>0) il++;
                         document.getElementById(onm[j]).style.backgroundColor = "white";
                         if(il>0){
                            document.getElementById(onm[j]).innerHTML = il;
							z[sps[j]]="clear";
                                                nav++;
                                                win++;
                            switch(il){
                               case 1:document.getElementById(onm[j]).style.color = "#4BA6DE"; break;
                               case 2:document.getElementById(onm[j]).style.color = "green"; break;
                               case 3:document.getElementById(onm[j]).style.color = "red"; break;
                               case 4:document.getElementById(onm[j]).style.color = "blue"; break;
                               case 5:document.getElementById(onm[j]).style.color = "#690921"; break;
                               case 6:document.getElementById(onm[j]).style.color = "#369404"; break;
                               case 7:document.getElementById(onm[j]).style.color = "#AB0A15"; break;
                               case 8:document.getElementById(onm[j]).style.color = "#850810"; break;
                          }
						}
						else{
							for(l=0;l<els.length;l++){ 
							if(els[l]!=sps[j]) nom++;
							}
							if(nom<=els.length){
								els.push(sps[j]);
								}
						z[sps[j]]="clear";
                                                nav++;
                                                win++;
						}
						 }
					
        }
        nav++;
        nav2=nav*b;
        z[nr]="clear";
        win++;
        if(win==((m-b)-1)){
                   document.getElementById("out2").innerHTML += "<div value='lol' style='z-index:5; position:absolute; height:300px; width:265px;background-color:black; opacity:0.5;'>Twój wynik: "+nav2+"<div>";
        }
			}
		}
	}
}
function xyz(){ 
        win=0;
        nav=0;
        nav2=0;
        var hei = document.getElementById("height").value;
        var wid = document.getElementById("width").value;
        if(hei<=0) hei=9;
        if(wid<=0) wid=9;
        if(hei>30) hei=30;
        if(wid>30) wid=30;
        var itmb = hei*wid+1;
        var itmb2 = document.getElementById("bomb").value;
        if(itmb2<=0) itmb2=10;
        var a = kabal(itmb, itmb2);
	var j=0;
	var n=0;
	var m=0;
	var h=0;
        var saper=0;
        var ps;
        var mb=0;
        var supp;
	
	for(i=0;i<itmb;i++){
		for(j=0;j<=itmb2;j++){
			if(x[j]==i){
			j=itmb2+1;
			y[i] = "b";
			}
                        else mb++;
                        if(mb==itmb2 && x[j]!="b") y[i] = "p";
		}
                mb=0;
	}
	
	for(i=1;i<itmb;i++){
           if(y[i]=="p") ps = 1;
           else ps = 2;
           if(saper==0) saper = "<div class='saper' id='"+i+"."+ps+"c"+"' onClick='spr("+i+", "+ps+", "+itmb+", "+itmb2+", "+wid+")'><div class='hidden' id='"+i+"."+ps+"'>F</div></div>";
           else saper += "<div class='saper' id='"+i+"."+ps+"c"+"' onClick='spr("+i+", "+ps+", "+itmb+", "+itmb2+", "+wid+", "+hei+")'><div class='hidden' id='"+i+"."+ps+"'>F</div></div>";
        }
        document.getElementById("out2").innerHTML = saper;
        document.getElementById("out2").style.height = hei*25+hei*2+"px";
        document.getElementById("out2").style.width =wid*25+wid*2+"px";
        document.getElementById("submit").value= "Reset";
        for(i=0;i<=itmb;i++){
           z[i]="blank";
        }
}
function loss(){
	var x = parseInt(document.getElementById("ile").value);
	var y = parseInt(document.getElementById("ile2").value);
	
	var wynik = kabal(x, y);
	
	document.getElementById("out").innerHTML = wynik;
	
}
function kabal(ile, ile2){
	var j=0;
	var n=0;
	var m=0;
	var h=0;
	var ile;
	var ile2; 
	var type;

        for(l=0;l<=x.length*300;l++){
        x.pop(x.length);
        y.pop(y.length);
        }
	
	if(ile<=1000 && ile2<=1000 && ile>ile2){
	for(i=0;i<ile2;i++){
		h = Math.floor((Math.random()*ile)+1);
		while(j<=ile2){
			j++;
			if (j==ile2){
				x.push(h);
				j=ile+100;
			}
			else if(h!=x[n]) {
				m++;
				n++;
			}
			else{
				h = Math.floor((Math.random()*ile)+1);
				n = 0;
				m = 0;
				j = 0;
			}
		}
		j=0;
		m=0;
		n=0;
	}
		var o = x.join(", ");
		if(ile>=101) document.getElementById("out").style.fontSize = "10px";
		else document.getElementById("out").style.fontSize = "15px";
		return o;
	}
	else{
		document.getElementById("out").style.fontSize = "15px";
		return "Prosze o podanie mniejszej wartosci";
	}
}
function calce1(){
   document.getElementById('calce1').style.display = "inline"
}
function calce2(){
   document.getElementById('calce1').style.display = "none"
}
function cos(){
   var cls = new Array();
   var dat = new Date();
   var day = dat.getDay();
   var date = dat.getDate();
   var year = dat.getFullYear();
   var month = dat.getMonth();
   
   switch(month){
      case 0: cls[0]="Styczen"; break;
      case 1: cls[0]="Luty"; break;
      case 2: cls[0]="Marzec"; break;
      case 3: cls[0]="Kwiecien"; break;
      case 4: cls[0]="Maj"; break;
      case 5: cls[0]="Czerwiec"; break; 
      case 6: cls[0]="Lipiec"; break;
      case 7: cls[0]="Sierpien"; break; 
      case 8: cls[0]="Wrzesien"; break;
      case 9: cls[0]="Pazdziernik"; break;
      case 10: cls[0]="Listopad"; break;
      case 11: cls[0]="Grudzien"; break;
   }
   switch(day){
      case 1: cls[1]="poniedzialek"; break;
      case 2: cls[1]="wtorek"; break;
      case 3: cls[1]="sroda"; break;
      case 4: cls[1]="czwartek"; break;
      case 5: cls[1]="piatek"; break;
      case 6: cls[1]="sobota"; break;
      case 0: cls[1]="niedziela"; break;
   }

   
   document.getElementById("kalendarz").innerHTML = "<div><center>"+
   year+"<div>"+cls[0]+" "+date+"<br><div>"+cls[1]


   +"</center></div></div></div>";

}
function kod(){
   var kod = document.getElementById("kod").value;
   var tab = kod.split("");
   var max = kod.length;
   var klasa = new Array()
   var G=0;
   var W=0;
   var Y=0;
   var M=0;
   var poziom;
   var pion;
   var error=0;
   var omega;
   var x;
   var y;
   var mapa="";
   var xpion;
   var xpoziom;
   
   for(i=1;i<max;i++){
      if(tab[i]=="G") G++;
      else if(tab[i]=="W") W++;
      else if(tab[i]=="Y") Y++;
      else if(tab[i]=="M") M++;
      else error++;
   }

   xpoziom=poziom=W-G;
   xpion=pion=Y-M;
   
   if(poziom<0){x="lewo"; poziom*=-1;}
   else x="prawo";
   if(pion<0){y="górê"; pion*=-1;}
   else y="dó³";

   if(pion>poziom) klasa[1]=pion;
   else klasa[1]=poziom;

   switch(tab[0]){
   case "F": omega="lewego górnego rogu(F)"; klasa[2]=1; klasa[3]=1; break;
   case "K": omega="prawego górnego rogu(K)"; klasa[2]=4; klasa[3]=1; break;
   case "Z": omega="lewego dolnego rogu(Z)"; klasa[2]=1; klasa[3]=4; break;
   case "A": omega="prawego dolnego rogu(A)"; klasa[2]=4; klasa[3]=4; break;
   default: error++; break;
   }

   for(u=0;u<=klasa[1];u++){
   if(pion-4>=0) pion-=4;
   if(poziom-4>=0) poziom-=4;
   if(xpion-4>=0)xpion-=4;
   else if(xpion+4<=0)xpion+=4;
   if(xpoziom-4>=0)xpoziom-=4;
   else if(xpoziom+4<=0)xpoziom+=4;
   }

   if(klasa[2]==4 && xpoziom>0){ klasa[2]=1; xpoziom-=1;}
   if(klasa[2]==1 && xpoziom<0){ klasa[2]=4; xpoziom+=1;}

   if(klasa[3]==4 && xpion>0){ klasa[3]=1; xpion-=1;}
   if(klasa[3]==1 && xpion<0){ klasa[3]=4; xpion+=1;}
   
   
   for(j=1;j<5;j++){
      for(k=1;k<5;k++){
         if(k==klasa[2]+xpoziom && j==klasa[3]+xpion && k==3) mapa+="&#160; &#160; &#160; &#160; &#160; &#160; &#160; X";
         else if(k==klasa[2]+xpoziom && j==klasa[3]+xpion) mapa+="X";
         else if(k==3)mapa+="&#160; &#160; &#160; &#160; &#160; &#160; &#160; H";
         else if(k==1 && j==1) mapa+="F";
         else if(k==4 && j==1) mapa+="K";
         else if(k==1 && j==4) mapa+="Z";
         else if(k==4 && j==4) mapa+="A";
         else mapa+="H";
      }
   mapa+="<br><br>";
   }
   if(klasa[2]+xpoziom==1 && klasa[3]+xpion==1) {omega="lewego górnego rogu(F)"; klasa[21]=1; klasa[22]=1}
   else if(klasa[2]+xpoziom==1 && klasa[3]+xpion==4) {omega="lewego dolnego rogu(Z)"; klasa[21]=1; klasa[22]=4}
   else if(klasa[2]+xpoziom==4 && klasa[3]+xpion==1) {omega="prawego górnego rogu(K)"; klasa[21]=4; klasa[22]=1}
   else if(klasa[2]+xpoziom==4 && klasa[3]+xpion==4) {omega="prawego dolnego rogu(A)"; klasa[21]=4; klasa[22]=4}

   if(error>0){ 
      document.getElementById("trasa").innerHTML = "Podaj prawid³owy kod </br>";
      document.getElementById("legenda").style.fontSize = "10px";
      document.getElementById("legenda").innerHTML = "przykladowy wyglad kodu 'ZWWGMGYYWG'</br>UWAGA: kod powinien byc napisany duzymi literami";
      document.getElementById("mapa").innerHTML = "";
   }
   else if(klasa[2]+xpoziom==klasa[21] && klasa[3]+xpion==klasa[22]){ document.getElementById("trasa").innerHTML = "Idz do "+omega+"<br><br>";klasa[30]=5;}
   else if(pion==0){ document.getElementById("trasa").innerHTML = "Zaczynajac od "+omega+" idz "+poziom+" w "+x+"<br><br>";klasa[30]=5;}
   else if(poziom==0){ document.getElementById("trasa").innerHTML = "Zaczynajac od "+omega+" idz "+pion+" w "+y+"<br><br>";klasa[30]=5;}
   else{ document.getElementById("trasa").innerHTML = "Zaczynajac od "+omega+" idz "+pion+" w "+y+" i "+poziom+" w "+x+"<br><br>";klasa[30]=5;}

   if(klasa[30]==5){
      document.getElementById("mapa").innerHTML = mapa;
      document.getElementById("legenda").style.fontSize = "10px";
      document.getElementById("legenda").innerHTML = "X-Punkt docelowy<br>H-Biblioteczka<br>F, K, Z, A-Punkt startowy pokazany na poczatku kodu<br>UWAGA: Kazda biblioteczka(H) liczy sie osobno";
   }





   


/*
G< W> Y\/ M/\

F  K

Z  A
*/


}	