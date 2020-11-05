var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);

// color1.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// })

// color2.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// })

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";	
	css.textContent = body.style.background + ";";
	//뒤에 + ";"; 없어도 동작은 함
}

setGradient()

function random(){
	var colorCode1  = "#" + Math.round(Math.random() * 0xffffff).toString(16)
	var colorCode2  = "#" + Math.round(Math.random() * 0xffffff).toString(16)
	color1.value = colorCode1
	color2.value = colorCode2
	body.style.background = "linear-gradient(to right, " + colorCode1 + ", " + colorCode2 + ")";	
	css.textContent = body.style.background + ";";
}

// color1.addEventListener("input", setGradient)

// color2.addEventListener("input", setGradient)