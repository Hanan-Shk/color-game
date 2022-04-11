var numbs = 6;
var color = randomColor(numbs);

var square = document.querySelectorAll(".square");
var New = document.querySelector("#New");

var RGb = document.getElementById("RGb");
var Message = document.getElementById("message");
var mod = document.querySelectorAll(".mod");

var h1 = document.querySelector("h1");
var colorPicker = pickColor();






RGb.textContent = colorPicker;


	


//Square color loop 
    for (var i = 0; i < square.length; i++) {
	square[i].style.backgroundColor = color[i];
	square[i].addEventListener("click" , function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor , colorPicker);
		if(clickedColor === colorPicker){
			Message.textContent = "Well Done!!";
			New.textContent = "Play Again";
			displayColor(clickedColor);
			h1.style.backgroundColor = colorPicker;
		} else {
			Message.textContent = "Try again";
			this.style.background = "#232323";
		}
	});
	}



// Easy and Hard button Reset and squares
	for (var i = 0; i < mod.length; i++) {
		mod[i].addEventListener("click" , function(){
			mod[0].classList.remove("selected");
			mod[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Hard"){
				numbs = 6;
			} else {
				numbs = 3;
			}
			Reset();
			
		});
	}


//Reset function for the New color and Try again Button
	function Reset(){
	color = randomColor(numbs);
	colorPicker = pickColor();
	RGb.textContent = colorPicker;
	message.textContent = "";
	New.textContent = "New Color";
	for (var i = 0; i < square.length; i++) {
	if(color[i]){
		square[i].style.display = "block";
		square[i].style.backgroundColor = color[i];
	} else {
		square[i].style.display = "none";
	}
	}
	h1.style.backgroundColor= "steelblue";
	};



// Reset function
	function displayColor(colors){
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = colors;
	}
	}
	New.addEventListener("click" , function(){
	color = randomColor(numbs);
	colorPicker = pickColor();
	RGb.textContent = colorPicker;
	message.textContent = "";
	this.textContent = "New Color";
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = color[i];
	}
		h1.style.backgroundColor= "steelblue";
	});




// The random number for the RGB With colors
	function pickColor(){
		var random = Math.floor(Math.random() * color.length);
		return color[random];
	}

	function randomColor(num){
		var arr = [];

		for (var i = 0; i < num; i++) {
		arr.push(number());
	}
		console.log(arr);

		return arr;
	}



//The random Number for the RGB
	function number(){
		var R = Math.floor(Math.random() * 256);
		var G = Math.floor(Math.random() * 256);
		var B = Math.floor(Math.random() * 256);
		return "rgb(" + R + ", " + G + ", " + B + ")";
	}