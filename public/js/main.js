for (var i=0; i<6; i++) {
	var row = document.querySelector("table").insertRow(-1);
	for (var j=0; j<6; j++) {
		var letter = String.fromCharCode("A".charCodeAt(0)+j-1);
		row.insertCell(-1).innerHTML = i&&j ? "<input id='"+ letter+i +"'/>" : i||letter;
	}
}