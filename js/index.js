let httpRequest = new XMLHttpRequest();
let url = "http://imlolicon.tk/api/hitokoto/?format=json";
httpRequest.open('GET', url, true);
httpRequest.send();
httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        let result = httpRequest.responseText;
        result = JSON.parse(result).data;
        getByteLen(result.msg) > 25 ? msg = result.msg.substr(0, 25) + '...' : msg = result.msg;
        document.getElementById("saying").innerHTML = `『${msg}』——${result.from}`; 
    }
}

function getByteLen(val) {
	var len = 0;
	for (var i = 0; i < val.length; i++) {
		var a = val.charAt(i);
		if (a.match(/[^\x00-\xff]/ig) != null){
				len += 2;
		} else{
			len += 1;
		}
	}
	return len;
}
