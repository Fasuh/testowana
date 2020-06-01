var nick="a", nicktest;
var test;
var stats = new Array();
var pstats = new Array();
var sklepiczek = new Array(40, 40, 40, 40, 40);
var atak;
var patak;

 function aktual(){
    var xmlhttp=new XMLHttpRequest();
		xmlhttp.open("GET","stats.php",false);
		xmlhttp.send
		();
		stats = JSON.parse(xmlhttp.responseText);
 }

$(document).ready(function(){	
	nick="";
	
	$("#heal").click(function(){
		if(stats[7]>=((stats[2]-stats[11])*2)){
			stats[7]-=((stats[2]-stats[11])*2)
			stats[11]=stats[2]
			stats[11] = Math.floor(stats[11]);
		}else{
			stats[11]+=(stats[7]/2)
			stats[7]=0
			stats[11] = Math.floor(stats[11]);
		}
		$("#heal").val('Leczenie('+((stats[2]-stats[11])*2)+')');
		$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
		"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
		stats[7]);
	})

	$("#zamkshop").click(function(){
			$("#sklepik").hide();
	})
	$("#shope").click(function(){
			$("#sklepik").show();
			$("#error2").html("")
			$("#miecz").val('Kup miecz('+sklepiczek[1]+')');
			$("#zbroja").val('Kup zbroje('+sklepiczek[0]+')');
			$("#buty").val('Kup buty('+sklepiczek[4]+')');
			$("#rozczka").val('Kup rozczke('+sklepiczek[3]+')');
			$("#peleryna").val('Kup peleryne('+sklepiczek[2]+')');
	})
	
	$("#miecz").click(function(){
		$("#error2").html("")
		if(stats[7]>=sklepiczek[1]){
			stats[3]+=5;
			stats[7]-=sklepiczek[1];
			sklepiczek[1]*=4;
			$("#miecz").val('Kup miecz('+sklepiczek[1]+')');
			$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
			"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
			stats[7]);
		}
		else{
			$("#error2").html("<br><br>Za malo zlota!")
		}
	})
	$("#zbroja").click(function(){
		$("#error2").html("")
		if(stats[7]>=sklepiczek[0]){
			stats[2]+=15;
			stats[11]+=15;
			stats[7]-=sklepiczek[0];
			sklepiczek[0]*=4;
			$("#zbroja").val('Kup zbroje('+sklepiczek[0]+')');
			$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
			"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
			stats[7]);
		}
		else{
			$("#error2").html("<br><br>Za malo zlota!")
		}
	})
	$("#buty").click(function(){
		$("#error2").html("")
		if(stats[7]>=sklepiczek[4]){
			stats[6]+=20;
			stats[7]-=sklepiczek[4];
			sklepiczek[4]*=4;
			atak = window.clearInterval(atak);
			atak = setInterval("atakowanie();",5000-pstats[6]*10); 
			$("#buty").val('Kup buty('+sklepiczek[4]+')');
			$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
			"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
			stats[7]);
		}
		else{
			$("#error2").html("<br><br>Za malo zlota!")
		}

	})
	$("#rozczka").click(function(){
		$("#error2").html("")
		if(stats[7]>=sklepiczek[3]){
			stats[5]+=5;
			stats[7]-=sklepiczek[3];
			sklepiczek[3]*=4;
			$("#rozczka").val('Kup rozczke('+sklepiczek[3]+')');
			$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
			"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
			stats[7]);
		}
		else{
			$("#error2").html("<br><br>Za malo zlota!")
		}
	})
	$("#peleryna").click(function(){
		$("#error2").html("")
		if(stats[7]>=sklepiczek[2]){
			stats[4]+=15;
			stats[12]+=15;
			stats[7]-=sklepiczek[2];
			sklepiczek[2]*=4;
			$("#peleryna").val('Kup peleryne('+sklepiczek[2]+')');
			$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
			"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
			stats[7]);
		}
		else{
			$("#error2").html("<br><br>Za malo zlota!")
		}
	})
	
	    $("input[name=class]").change(function(){
			stats[2] = $("input[name=class]:checked").val();
			$("div#error1").html("");
			switch (stats[2]) {
				case "1":
					stats[1]="Wojownik";
					stats[2]=120;
					stats[3]=15;
					stats[4]=50;
					stats[5]=45;
					stats[6]=100;
					break; 
				case "2":
					stats[1]="Zlodziej";
					stats[2]=110;
					stats[3]=10;
					stats[4]=60;
					stats[5]=55;
					stats[6]=110;
					break; 
				case "3":
					stats[1]="Mag";
					stats[2]=95;
					stats[3]=5;
					stats[4]=100;
					stats[5]=80;
					stats[6]=105;
					break; 
				case "4":
					stats[1]="Lucznik";
					stats[2]=100;
					stats[3]=15;
					stats[4]=60;
					stats[5]=55;
					stats[6]=110;
					break; 
			}
			$("div#avatar").html("<br><img src='img/"+stats[1]+".jpg'>");
			$("div#Stats").html("<br>"+stats[1]+"<br><br> HP: "+stats[2]+"<br> STR: "+stats[3]+"<br> MP: "+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]);
		});

		$("#nickname").keyup(function(){	
		nicktest = $("input#nickname").val();
		if(nicktest.length<10){
			nick = $("input#nickname").val();
                        nick=nicktest.toLowerCase();
                        nick=nick.substr(0, 1).toUpperCase() + nick.substr(1);
			$("div#error1").html("");
			$("div#nick").html(nick);
		}
		else{
			$("div#error1").html("nick jest za dlugi");
		}
		})
		$("#containerz").ready(function(){
				aktual();

				stats[7]=300;
				stats[8]=0;
				stats[9]=50;
				stats[20]=0;
				stats[11]=stats[2];
				stats[12]=stats[4];
				
				pstats[0] = Math.floor((Math.random() * 4) + 1);
				switch (pstats[0]) {
					case 1:					
						pstats[1]="Golem";
						pstats[2]=Math.floor((Math.random() * 30) + 1)+80;
						pstats[3]=Math.floor((Math.random() * 5) + 1)+7;
						pstats[4]=Math.floor((Math.random() * 10) + 1)+20;
						pstats[5]=Math.floor((Math.random() * 10) + 1)+20;
						pstats[6]=Math.floor((Math.random() * 10) + 1)+90;
						pstats[7]=pstats[2];
						pstats[11]=pstats[2];
						pstats[12]=pstats[4];
						break;
					case 2:
						pstats[1]="Goblin";
						pstats[2]=Math.floor((Math.random() * 30) + 1)+60;
						pstats[3]=Math.floor((Math.random() * 5) + 1)+5;
						pstats[4]=Math.floor((Math.random() * 10) + 1)+30;
						pstats[5]=Math.floor((Math.random() * 10) + 1)+30;
						pstats[6]=Math.floor((Math.random() * 10) + 1)+100;
						pstats[7]=pstats[2];
						pstats[11]=pstats[2];
						pstats[12]=pstats[4];
						break; 
					case 3:
						pstats[1]="Zywiolak";
						pstats[2]=Math.floor((Math.random() * 30) + 1)+50;
						pstats[3]=Math.floor((Math.random() * 5) + 1)+2;
						pstats[4]=Math.floor((Math.random() * 10) + 1)+80;
						pstats[5]=Math.floor((Math.random() * 10) + 1)+70;
						pstats[6]=Math.floor((Math.random() * 10) + 1)+100;
						pstats[7]=pstats[2];
						pstats[11]=pstats[2];
						pstats[12]=pstats[4];
						break; 
					case 4:
						pstats[1]="Centaur";
						pstats[2]=Math.floor((Math.random() * 30) + 1)+50;
						pstats[3]=Math.floor((Math.random() * 5) + 1)+8;
						pstats[4]=Math.floor((Math.random() * 10) + 1)+30;
						pstats[5]=Math.floor((Math.random() * 10) + 1)+30;
						pstats[6]=Math.floor((Math.random() * 10) + 1)+100;
						pstats[7]=pstats[2];
						pstats[11]=pstats[2];
						pstats[12]=pstats[4];
						break; 
				}
				
				$("div#avatar").html("<br><img src='img/"+stats[1]+".jpg'>");
				$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
				"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
				stats[7]);
				$("div#nick").html(nick);
				$("div#level").html("<br>"+stats[1]+"<br>LvL:"+stats[2]+"<p style='font-size:12px'>Exp:"+stats[8]+"/"+stats[9]+"</p>");
				$("div#pavatar").html("<br><img src='img/"+pstats[1]+".jpg'>");
				$("div#pstats").html("<br>"+pstats[1]+"<br><br> HP: "+pstats[11]+"/"+pstats[2]+"<br> STR: "+pstats[3]
				+"<br> MP: "+pstats[12]+"/"+pstats[4]+"<br> INT: "+pstats[5]+"<br> SPE: "+pstats[6]);
				atak
				atak = setInterval("atakowanie();", 5000-stats[6]*10); 
				patak = setInterval("patakowanie();",5000-pstats[6]*10); 
				
				
				$("#bitwa").show();
				$("#heal").val('Leczenie('+((stats[2]-stats[11])*2)+')');
		})
		$("#HP").click(function(){
			stats[20]--
			stats[2]+=15;
			stats[11]+=15;
			stats[11]=stats[2];
			if(stats[20]<=0){
				$("#awans").hide();
				$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
				"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
				stats[7]);
			}
		})
		$("#STR").click(function(){
			stats[20]--
			stats[3]+=5;
			stats[11]=stats[2];
			if(stats[20]<=0){
				$("#awans").hide();
				$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
				"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
				stats[7]);
			}
		})
		$("#INT").click(function(){
			stats[20]--
			stats[5]+=5;
			stats[11]=stats[2];
			if(stats[20]<=0){
				$("#awans").hide();
				$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
				"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
				stats[7]);
			}
		})
		$("#MP").click(function(){
			stats[20]--
			stats[4]+=10;
			stats[12]+=10;
			if(stats[20]<=0){
				$("#awans").hide();
				$("#sp").html(stats[20]);
				$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
				"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
				stats[7]);
			}
		})
		$("#SPE").click(function(){
			stats[20]--
			stats[6]+=20;
			atak = window.clearInterval(atak);
			atak = setInterval("atakowanie();",5000-pstats[6]*10); 
			if(stats[20]<=0){
				$("#awans").hide();
				$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
				"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
				stats[7]);
			}
		})
	
});
function patakowanie(){
	stats[11]-=pstats[3];
	if(stats[11]<=0){
	stats[11]=stats[2];
	stats[7]-=stats[2]*3;
	stats[8]/=4;
	if(stats[7]<0) stats[7]=0;
	}
	$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
	"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
	stats[7]);
	$("#heal").val('Leczenie('+((stats[2]-stats[11])*2)+')');
}
function atakowanie(){
	pstats[11]-=stats[3];
	if(pstats[11]<=0){
		
		patak = window.clearInterval(patak);
		
		patak = setInterval("patakowanie();",5000-pstats[6]*10); 
		
		pstats[11]=0;
		stats[7]+=pstats[2]/10;
		stats[7] = Math.floor(stats[7]);
		stats[8] += pstats[2]/5;
		stats[8] = Math.floor(stats[8]);
		pstats[0] = Math.floor((Math.random() * 4) + 1);
			if(stats[8]>=stats[9]){
				stats[11]=stats[2];
				stats[12]=stats[4];
				stats[8]-=stats[9]
				stats[2]++
				stats[9]*=2;
				stats[20]++
				$("#sp").html(stats[20]);
				$("#awans").show();
			}
			
				switch (pstats[0]) {
					case 1:					
						pstats[1]="Golem";
						pstats[2]=Math.floor((Math.random() * 30) + 1)+80;
						pstats[3]=Math.floor((Math.random() * 5) + 1)+7;
						pstats[4]=Math.floor((Math.random() * 10) + 1)+20;
						pstats[5]=Math.floor((Math.random() * 10) + 1)+20;
						pstats[6]=Math.floor((Math.random() * 10) + 1)+90;
						pstats[7]=pstats[2];
						pstats[11]=pstats[2];
						pstats[12]=pstats[4];
						break;
					case 2:
						pstats[1]="Goblin";
						pstats[2]=Math.floor((Math.random() * 30) + 1)+60;
						pstats[3]=Math.floor((Math.random() * 5) + 1)+5;
						pstats[4]=Math.floor((Math.random() * 10) + 1)+30;
						pstats[5]=Math.floor((Math.random() * 10) + 1)+30;
						pstats[6]=Math.floor((Math.random() * 10) + 1)+100;
						pstats[7]=pstats[2];
						pstats[11]=pstats[2];
						pstats[12]=pstats[4];
						break; 
					case 3:
						pstats[1]="Zywiolak";
						pstats[2]=Math.floor((Math.random() * 25) + 1)+50;
						pstats[3]=Math.floor((Math.random() * 5) + 1)+2;
						pstats[4]=Math.floor((Math.random() * 10) + 1)+80;
						pstats[5]=Math.floor((Math.random() * 10) + 1)+70;
						pstats[6]=Math.floor((Math.random() * 10) + 1)+100;
						pstats[7]=pstats[2];
						pstats[11]=pstats[2];
						pstats[12]=pstats[4];
						break; 
					case 4:
						pstats[1]="Centaur";
						pstats[2]=Math.floor((Math.random() * 30) + 1)+50;
						pstats[3]=Math.floor((Math.random() * 5) + 1)+8;
						pstats[4]=Math.floor((Math.random() * 10) + 1)+30;
						pstats[5]=Math.floor((Math.random() * 10) + 1)+30;
						pstats[6]=Math.floor((Math.random() * 10) + 1)+100;
						pstats[7]=pstats[2];
						pstats[11]=pstats[2];
						pstats[12]=pstats[4];
						break; 
				}
				
				$("div#pavatar").html("<br><img src='img/"+pstats[1]+".jpg'>");
				$("div#pstats").html("<br>"+pstats[1]+"<br><br> HP: "+pstats[11]+"/"+pstats[2]+"<br> STR: "+pstats[3]
				+"<br> MP: "+pstats[12]+"/"+pstats[4]+"<br> INT: "+pstats[5]+"<br> SPE: "+pstats[6]);

				
				$("div#Stats").html("<br><br> HP: "+stats[11]+"/"+stats[2]+"<br> STR: "+stats[3]+
				"<br> MP: "+stats[12]+"/"+stats[4]+"<br> INT: "+stats[5]+"<br> SPE: "+stats[6]+"<br><br>Zloto: "+
				stats[7]);
				$("#heal").val('Leczenie('+((stats[2]-stats[11])*2)+')');

				$("div#level").html("<br>"+stats[1]+"<br>LvL:"+stats[2]+"<p style='font-size:12px'>Exp:"+stats[8]+"/"+stats[9]+"</p>");

	}
	else {$("div#pstats").html("<br>"+pstats[1]+"<br><br> HP: "+pstats[11]+"/"+pstats[2]+"<br> STR: "+pstats[3]
	+"<br> MP: "+pstats[12]+"/"+pstats[4]+"<br> INT: "+pstats[5]+"<br> SPE: "+pstats[6]);}
	
}
function logout(){
	xmlhttp.open("GET","scripts.php",true);
}




