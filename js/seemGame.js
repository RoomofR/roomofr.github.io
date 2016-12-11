var faceElement = document.getElementById("seem");
var explosionElement = document.getElementById("explosion");
var startElement = document.getElementById("start");

var SPAWNRATE = 1000;
var FACES = ["fadelFace","moyFace","theFace","clownFace","seemFace"];

var X=0;
var Y=0;

//random();

startElement.onclick = function() {
	startElement.disabled=true;
	startElement.style.opacity=0;
	random();
}


faceElement.onclick = function() {
	faceElement.style.opacity=0;
	faceElement.style.top=(-Y-25).toString()+"px"; //Remove Clickable

	explosionElement.style.opacity=100;
	explosionElement.style.left=(X-25).toString()+"px";
	explosionElement.style.top=(Y-25).toString()+"px";
	setTimeout(function(){explosionElement.style.opacity=0;explosionElement.style.top=(-Y-25).toString()+"px";},1000);
	setTimeout(random,SPAWNRATE);
}

function random(){
	faceElement.style.opacity=0;
	X = (Math.floor(Math.random() * window.innerWidth) + 0)*0.9;
	Y = (Math.floor(Math.random() * window.innerHeight) + 0)*0.5;
	var r = (Math.floor(Math.random()*45) + 0)*(Math.floor(Math.random()*2) == 1 ? 1 : -1);

	document.getElementById("seem").src="img/"+ (FACES[Math.floor(Math.random() * FACES.length) + 0]).toString() +".png";
	faceElement.style.left=X.toString()+"px";
	faceElement.style.top=Y.toString()+"px";
	faceElement.style.transform="rotate("+r.toString()+"deg)";

	//explosionElement.style.zIndex=1;
	//explosionElement.style.left=(x-25).toString()+"px";
	//explosionElement.style.top=(y-25).toString()+"px";

	unfade(document.getElementById("seem"));
	faceElement.setAttribute("enable","enable");
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}