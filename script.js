let myTime = new Date();
let openingSound = new Audio("Sounds/openingSound.mp3");
let sound1 = new Audio("Sounds/1.mp3");
let sound2 = new Audio("Sounds/2.mp3");
let sound3 = new Audio("Sounds/3.mp3");
let buttons = document.querySelectorAll("button");
buttons[0].addEventListener("click",function(){
    sound1.play();
});
buttons[1].addEventListener("click",function(){
    sound2.play();
});
buttons[2].addEventListener("click",function(){
    sound3.play();
});
// openingSound.play();
let myHours = myTime.getHours();
let myDays = myTime.getDate() - 3;
console.log(myDays);
console.log(myHours);
let darkBody = document.querySelector("body");
let darkh1 = document.querySelector(".box .faq h1");
let darkBox = document.querySelector(".box");
let darkAcc = document.querySelectorAll(".accordion-button");
let darkBorder = document.querySelectorAll(".accordion-item");
let darkAccBody = document.querySelectorAll(".accordion-body");
let darkFirst = document.querySelector("#first");
let darkSecond = document.querySelector("#second");
let darkThird = document.querySelector("#third");
let darkp1 = document.querySelector("#firstp");
let darkp2 = document.querySelector(".imgsize");
let darkp3 = document.querySelector("#thirdp");
let format = "th";
    if(myDays == 1 || myDays == 21){
        format = "st";
    }
    else if(myDays == 2 || myDays == 22){
        format = "nd";
    }
    else if(myDays == 3 || myDays == 23){
        format = "rd";
    }

        //change image here
darkp2.innerHTML = "<img src='images/1.jpg'>"
darkp3.innerHTML = "";
if(myHours >= 0 && myHours <= 17){
    darkh1.innerHTML = "Happy " + myDays + format + " Sehri";
    darkp1.innerHTML = "Aw❤️, You Made It To " + myDays + format + " Roza 🌺 🌹 🌟";
}

if(myHours >= 18 && myHours <= 24){
    darkBody.style.backgroundColor = "#292929";
    darkh1.style.color = "#ffffff";
    darkh1.innerHTML = "Happy " + myDays + format + " Aftaari";
    darkBox.style.backgroundColor = "#121212";
    for(let i = 0 ; i< 3 ; i++){
        darkAcc[i].style.backgroundColor = "#1D1D1D";
        darkBorder[i].style.borderBottom = "1px solid #606368";
        darkAccBody[i].style.backgroundColor = "#3C4042";
        darkAccBody[i].style.color = "#F1F0F3";
    }
    darkp1.style.color = "#F1F0F3"
    darkp1.innerHTML = "Aw❤️, You Made It To " + myDays + format + " Roza 🌟 🌹 🌺";
    darkp3.innerHTML = "";
    darkFirst.style.color = "#CACACA";
    darkSecond.style.color = "#CACACA";
    darkThird.style.color = "#CACACA";
}

//confetti stuff
var confetti = {
	maxCount: 150,		//set max confetti count
	speed: 2,			//set the particle animation speed
	frameInterval: 15,	//the confetti animation frame interval in milliseconds
	alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
	gradient: false,	//whether to use gradients for the confetti particles
	start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
	stop: null,			//call to stop adding confetti
	toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
	pause: null,		//call to freeze confetti animation
	resume: null,		//call to unfreeze confetti animation
	togglePause: null,	//call to toggle whether the confetti animation is paused
	remove: null,		//call to stop the confetti animation and remove all confetti immediately
	isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
	isRunning: null		//call and returns true or false depending on whether the animation is running
};

(function() {
	confetti.start = startConfetti;
	confetti.stop = stopConfetti;
	confetti.toggle = toggleConfetti;
	confetti.pause = pauseConfetti;
	confetti.resume = resumeConfetti;
	confetti.togglePause = toggleConfettiPause;
	confetti.isPaused = isConfettiPaused;
	confetti.remove = removeConfetti;
	confetti.isRunning = isConfettiRunning;
	var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
	var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
	var streamingConfetti = false;
	var animationTimer = null;
	var pause = false;
	var lastFrameTime = Date.now();
	var particles = [];
	var waveAngle = 0;
	var context = null;

	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = Math.random() * Math.PI;
		return particle;
	}

	function toggleConfettiPause() {
		if (pause)
			resumeConfetti();
		else
			pauseConfetti();
	}

	function isConfettiPaused() {
		return pause;
	}

	function pauseConfetti() {
		pause = true;
	}

	function resumeConfetti() {
		pause = false;
		runAnimation();
	}

	function runAnimation() {
		if (pause)
			return;
		else if (particles.length === 0) {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			animationTimer = null;
		} else {
			var now = Date.now();
			var delta = now - lastFrameTime;
			if (!supportsAnimationFrame || delta > confetti.frameInterval) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				updateParticles();
				drawParticles(context);
				lastFrameTime = now - (delta % confetti.frameInterval);
			}
			animationTimer = requestAnimationFrame(runAnimation);
		}
	}

	function startConfetti(timeout, min, max) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimationFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, confetti.frameInterval);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
			context = canvas.getContext("2d");
		} else if (context === null)
			context = canvas.getContext("2d");
		var count = confetti.maxCount;
		if (min) {
			if (max) {
				if (min == max)
					count = particles.length + max;
				else {
					if (min > max) {
						var temp = min;
						min = max;
						max = temp;
					}
					count = particles.length + ((Math.random() * (max - min) + min) | 0);
				}
			} else
				count = particles.length + min;
		} else if (max)
			count = particles.length + max;
		while (particles.length < count)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		pause = false;
		runAnimation();
		if (timeout) {
			window.setTimeout(stopConfetti, timeout);
		}
	}

	function stopConfetti() {
		streamingConfetti = false;
	}

	function removeConfetti() {
		stop();
		pause = false;
		particles = [];
	}

	function toggleConfetti() {
		if (streamingConfetti)
			stopConfetti();
		else
			startConfetti();
	}
	
	function isConfettiRunning() {
		return streamingConfetti;
	}

	function drawParticles(context) {
		var particle;
		var x, y, x2, y2;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			x2 = particle.x + particle.tilt;
			x = x2 + particle.diameter / 2;
			y2 = particle.y + particle.tilt + particle.diameter / 2;
			if (confetti.gradient) {
				var gradient = context.createLinearGradient(x, particle.y, x2, y2);
				gradient.addColorStop("0", particle.color);
				gradient.addColorStop("1.0", particle.color2);
				context.strokeStyle = gradient;
			} else
				context.strokeStyle = particle.color;
			context.moveTo(x, particle.y);
			context.lineTo(x2, y2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle) - 0.5;
				particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= confetti.maxCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();
