var test;
var stats = new Array();
var pstats = new Array();
var atak;
var patak; 
var raport="";


 function save(){
              var xmlhttp=new XMLHttpRequest();
           var sende = stats.join(",");
        $.ajax({
            type: "POST",
            url: "update.php",
            data: { 'name': sende }
        })
 }
 function aktual(){
    var xmlhttp=new XMLHttpRequest();
		xmlhttp.open("GET","stats.php", false);
		xmlhttp.send();
		stats = JSON.parse(xmlhttp.responseText);
   for(i=0;i<=20;i++){
      if(i!=1 && i!=18)stats[i] = parseInt(stats[i]);
   }
 }
 function enemy(){
    var xmlhttp=new XMLHttpRequest();
		xmlhttp.open("GET","enemy.php", false);
		xmlhttp.send()
		pstats = JSON.parse(xmlhttp.responseText);
						pstats[2]=Math.floor((Math.random() * 30) + 1)+parseInt(pstats[2]);
						pstats[3]=Math.floor((Math.random() * 5) + 1)+parseInt(pstats[3]);
						pstats[4]=Math.floor((Math.random() * 10) + 1)+parseInt(pstats[4]);
						pstats[5]=Math.floor((Math.random() * 10) + 1)+parseInt(pstats[5]);
						pstats[6]=Math.floor((Math.random() * 10) + 1)+parseInt(pstats[6]);
                                pstats[13]=pstats[2];
				pstats[12]=pstats[4];
 }
$(document).ready(function(){	
				aktual();
                                enemy();
                                while(stats[19]>0&&pstats[13]>0){
                                   if(pstats[6]>stats[11] && stats[19]>0){
                                     stats[19]-=pstats[3];
                                     if(stats[19]<=0)stats[19]=0;
                                     raport+="<p class='patakowa'>"+pstats[1]+" zadal "+pstats[3]+" obrazen!</p>";
                                   }
                                     if(stats[19]>0)pstats[13]-=stats[7];
                                     if(pstats[13]<=0)pstats[13]=0;
                                     if(stats[19]>0)raport+="<p class='atakowa'>zadales "+stats[7]+" obrazen!</p>";
                                   if(pstats[6]<stats[11] && pstats[13]>0){
                                     stats[19]-=pstats[3];
                                     if(stats[19]<=0)stats[19]=0;
                                     raport+="<p class='patakowa'>"+pstats[1]+" zadal "+pstats[3]+" obrazen!</p>";
                                   }
                                }
                                $("div#wybor").html(raport);
                                if(pstats[13]<=0) stats[5]+=Math.floor(pstats[2]/5);
                                save();
				$("div#avatar").html("<br><img src='img/"+stats[2]+".jpg'>");
				$("div#Stats").html("<br><br> HP: "+stats[19]+"/"+stats[6]+"<br> STR: "+stats[7]+
				"<br> MP: "+stats[12]+"/"+stats[8]+"<br> INT: "+stats[9]+"<br> SPE: "+stats[10]+"<br><br>Zloto: "+
				stats[11]);
				$("div#nick").html(nick);
				$("div#level").html("<br>"+stats[1]+"<br>LvL:"+stats[3]+"<p style='font-size:12px'>Exp:"+stats[5]+"/"+stats[4]+"</p>");
				$("div#pavatar").html("<br><img src='img/"+pstats[1]+".jpg'>");
				$("div#pstats").html("<br>"+pstats[1]+"<br><br> HP: "+pstats[13]+"/"+pstats[2]+"<br> STR: "+pstats[3]
				+"<br> MP: "+pstats[12]+"/"+pstats[4]+"<br> INT: "+pstats[5]+"<br> SPE: "+pstats[6]);
        var settings = {
		showArrows: true
	};
	var pane = $('#wybor')
	pane.jScrollPane(settings);
	var api = pane.data('jsp');

});
/*function patakowanie(){
	stats[13]-=pstats[3];
	if(stats[13]<=0){
	stats[13]=stats[6];
	stats[11]-=stats[6]*3;
        if(stats[11]<0) stats[11]=0;
	if(stats[13]<0) stats[13]=0;
	}
	$("div#Stats").html("<br><br> HP: "+stats[13]+"/"+stats[6]+"<br> STR: "+stats[7]+
	"<br> MP: "+stats[12]+"/"+stats[8]+"<br> INT: "+stats[9]+"<br> SPE: "+stats[10]+"<br><br>Zloto: "+
	stats[11]);
}
function atakowanie(){
	pstats[13]-=stats[7];
	if(pstats[13]<=0){
		zapis();
		patak = setInterval("patakowanie();",5000-pstats[6]*10); 
		
		pstats[11]=0;
		stats[5]+=pstats[2]/10;
		stats[5] = Math.floor(stats[5]);
		stats[11] += pstats[2]/5;
		stats[11] = Math.floor(stats[11]);
			if(stats[5]>=stats[4]){
				stats[13]=stats[6];
				stats[12]=stats[4];
				stats[5]-=stats[4]
				stats[3]++
				stats[4]*=2;
				stats[17]++
				$("#sp").html(stats[17]);
				$("#awans").show();
			}
				$("div#pavatar").html("<br><img src='img/"+pstats[1]+".jpg'>");
				$("div#pstats").html("<br>"+pstats[1]+"<br><br> HP: "+pstats[13]+"/"+pstats[2]+"<br> STR: "+pstats[3]
				+"<br> MP: "+pstats[12]+"/"+pstats[4]+"<br> INT: "+pstats[5]+"<br> SPE: "+pstats[6]);
				$("div#Stats").html("<br><br> HP: "+stats[13]+"/"+stats[6]+"<br> STR: "+stats[7]+
				"<br> MP: "+stats[12]+"/"+stats[8]+"<br> INT: "+stats[9]+"<br> SPE: "+stats[10]+"<br><br>Zloto: "+
				stats[11]);
				$("div#level").html("<br>"+stats[1]+"<br>LvL:"+stats[3]+"<p style='font-size:12px'>Exp:"+stats[5]+"/"+stats[4]+"</p>");

	}
	else {$("div#pstats").html("<br>"+pstats[1]+"<br><br> HP: "+pstats[13]+"/"+pstats[2]+"<br> STR: "+pstats[3]
	+"<br> MP: "+pstats[12]+"/"+pstats[4]+"<br> INT: "+pstats[5]+"<br> SPE: "+pstats[6]);}
				$("div#avatar").html("<br><img src='img/"+stats[2]+".jpg'>");
				$("div#Stats").html("<br><br> HP: "+stats[13]+"/"+stats[6]+"<br> STR: "+stats[7]+
				"<br> MP: "+stats[12]+"/"+stats[8]+"<br> INT: "+stats[9]+"<br> SPE: "+stats[10]+"<br><br>Zloto: "+
				stats[11]);
				$("div#nick").html(nick);
				$("div#level").html("<br>"+stats[1]+"<br>LvL:"+stats[3]+"<p style='font-size:12px'>Exp:"+stats[5]+"/"+stats[4]+"</p>");
				$("div#pavatar").html("<br><img src='img/"+pstats[1]+".jpg'>");
				$("div#pstats").html("<br>"+pstats[1]+"<br><br> HP: "+pstats[13]+"/"+pstats[2]+"<br> STR: "+pstats[3]
				+"<br> MP: "+pstats[12]+"/"+pstats[4]+"<br> INT: "+pstats[5]+"<br> SPE: "+pstats[6]);
				atak	
}*/




