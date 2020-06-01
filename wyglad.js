function ustaw_cookie( nazwa, wartosc, wygasniecie, polozenie ) 
{   
	if(wygasniecie) 
	{     
		var teraz = new Date();     
		teraz.setTime( teraz.getTime() + Math.round(86400000*wygasniecie) );     
		wygasniecie = teraz.toGMTString();   
	}  
	wygasniecie = wygasniecie ? '; expires=' + wygasniecie : '';   
	polozenie = polozenie ?'; path=' + polozenie:'';   
	document.cookie = nazwa + '=' + escape(wartosc) + wygasniecie + polozenie; 
}  
function wybierz_cookie( nazwa ) 
{   
	var cookie = document.cookie;   
	if( cookie.indexOf( nazwa + '=' ) < 0 ) 
	{ 
		return null; 
	}   
	var start = cookie.indexOf( nazwa + '=' ) + nazwa.length + 1;   
	var koniec = cookie.substring( start, cookie.length );   
	koniec = ( koniec.indexOf( ';' ) < 0 ) ? cookie.length : start + koniec.indexOf( ';' );   
	return unescape( cookie.substring( start, koniec ) ); 
}  
function wybierz_arkusz( nazwa ) 
{   
	var link = document.getElementsByTagName( 'link' ), i, tab, tytul;   
	for( i=0; (tab = link[i]); i++ ) 
	{     
		if( 'alternate stylesheet'===tab.getAttribute( 'rel' ) && ( tytul = tab.getAttribute( 'title' ) ) ) 
		{   
			tab.disabled = true; 
			tab.disabled = ( tytul !== nazwa ); 
		} 
	} 
}  
function zmien_styl( title ) 
{  
	var nazwa;  
	if( ( nazwa = title ) ) 
	{   
		ustaw_cookie( 'style', nazwa, 90, '/' );   
		wybierz_arkusz( nazwa ); 
	} 
}  

if( ( nazwa = wybierz_cookie( 'style' ) ) ) 
 {   
	wybierz_arkusz( nazwa ); 
 }