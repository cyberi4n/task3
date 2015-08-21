var cookieValue;
var cookieName;

function formValues() {
    var inputs = document.getElementsByTagName('input');
    for (var i=0; i < inputs.length; i++) {
        if (inputs[i].getAttribute('type') == 'text')
        {
            cookieName = inputs[i].getAttribute('name');
            cookieValue = inputs[i].value;
            setCookie(cookieName, cookieValue, 7);

        }
    } 
}

function setCookie(cookieName, cookieValue, days) {
    if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = cookieName+"="+cookieValue+expires+"; path=/";
}

function getCookie(cookieName) {
    var content = cookieName + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(content) == 0) return c.substring(content.length,c.length);
    }
    console.log();
    return "";
}