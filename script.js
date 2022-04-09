let myTime = new Date();
let openingSound = new Audio("Sounds/OpeningSound.mp3");
const opsound = () => {
	setTimeout(function(){
		openingSound.play();
	},900);
};
opsound();
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
document.getElementById("secondpage").onclick = function(){
	location.href = "page2.html";
}

let myHours = myTime.getHours();
let myDays = myTime.getDate() - 2;

let quotes = ["Tm sb se achi ho 🌟", "Meeri Jaaani ❤️ sb se paayaaariiiii ❤️", "Jb tm hansti ho, Bht achii lgtii hoo ❤️", "Me hamaisha tmare bary me sochta hu har roz 🌹", "Tm ho to sb kuch hai 🌺", "Me hamaisha tmse payaar kru ga meri Butterflyyy 🌺", "Tmare milne k baad meri khushian he alag hn 😍", "Mere khoabo ki raaani, mera sb kuch tm ho 🌺", "Jb tmare sath hota hu, sb kuch bht acha lgta h 😍", "Tm soch b nai skti, kitna zada wala payaar h mujhe tmse ❤️", "Sb kuch theek h, lekin jb tm samne hoti ho, Haaayee kaya batau tmme 😍", "Tmari waja se mujhe khud per yakeen h 🌺", "Me tumse payaar krta tha, tumse payar krta hu, tumse payaaar kru ga hamaishaaa 🌺", "I'm honestly very lucky k you're mine 😍, Haaaye 😍", "Mere liyee tm sb kuchh hoo ❤️", "Chache jo marzii hoo jaaye, me hamaisha tmara ❤️", "Mera sbse khaas din wohi hota h jo tmare sath ho ❤️", "Tmme pta, jb log apni achievements discuss kr rhy hote, to mere mind me aik he achievement aati h, or wo tm ho 😍", "Haayeee jb tm blush krti ho 😍, Allah 😍", "Bhhhttt zaaada yaaaad aa rhi hoooo tm 🌟", "Me tmme kbi ni jane du ga apne paas se 🌟, you're staying 🥰", "Tmme pta, Sb se payaaari ho tm, meri jaaani ho tm 🌟", "Me jb b apni blessings count kru, tm hamaisha top per ho gi ❤️", "Bhhht zada khush krti ho tm mujhe ❤️, So lucky to have you ❤️", "I am the luckiest man alive because I get to call you mine, Hayyeee 😍", "I know you the best ❤️, and I'm proud of it", "Aaj subha bed se chalangain mar k utha hu, bs subha subha yaad krta hu na tmme ❤️", "Agr me na b bolu kuch, tmme hamaisha pta chal jata h, you're such a cutieee ❤️", "Meeri saari wishes tmhare se related hn 😍, All I need is you ❤️", "I will do everything for you ❤️"];

let quotes2 = ["Jb b future ka sochta hu, bs tmm hoti ho usme 😍","Tmare sath rhna is a lovee adventure everyday ❤️", "Tm meri best friend, meri sb kuch, meri jaaanii❤️, Mera payaar ❤️", "Meera dil sirf tmme sochta h har wakt ❤️" , "Tmme rooz raat ko gooodnighttt krne k baad me ginne lg jata hu k dubara kb baat kryn ge hm ❤️", "If I could get a star for every time you crossed my mind, I’m sure I’d own the entire galaxy by now ❤️", "Har trhaaa se mujhee bhht payaari lgtii hoo tm 😍","Meeeri Butterflyyy ❤️, Meri Jaaani ❤️", "Meerri Payaaari ❤️", "My favourive sound in the world is your laugh 😍", "I miss youu sooo much, I can never get enough of you ❤️", "You're cute, I'm keeping you forever with me ❤️", "You make my everyday better, Always 🌟", "All I want for future, Sirf tm sirf tm sirf tm 😍" ,"All I dream is you being mine ❤️, and us together forever 🌟","Tm joo b krtii ho mere liye, it's honestly everything for me 🌟", "Tmari trha khushi mujhe kisi se nai milti 😍", "Me hamaisha tmare sath rhu ga, sb kuch ho tm meri 😍", "Comeeee hereeee, I want to seeee youuuuur smileeee ❤️", "Meri har dua me tm hoti ho 😍", "Mujhe to pta he nai tha koi itnaaa khush b krr stka h mujhe 😍", "Haayee ourr smilee staress 😍, Eid aanee do bs🥰", "Bs tmme deakhta huu, or wooo gaya me 😍", "I hope tmara din tmari smile ki trha bhht payaara sa guzre 😍", "Hamaishaa mere sath rhne k liyee thank Youuu, you always make me feel speacial ❤️", "Malsim Forever ❤️", "Jitna marzi likh lu tmare liye, it's never enough 😍, so beautiful you are ❤️", "Mere liyee tmarri happiness he sb kuch h ❤️", "Aaj meera din bhht acha guzraa, Sirf tmme socha h mene saara din 😍", "I always want to be yours only 😍"];

console.log(quotes.length);
console.log(quotes2.length);
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

if(myHours >= 0 && myHours <= 17){
	darkp2.innerHTML = "<img src='images/"+myDays+".png'>";
	darkp3.innerHTML = quotes[myDays - 1];

    darkh1.innerHTML = "Happy " + myDays + format + " Sehri";
    darkp1.innerHTML = "Aw❤️, You Made It To " + myDays + format + " Roza 🌺 🌹 🌟";
}

if(myHours >= 18 && myHours <= 24){
	darkp3.innerHTML = quotes2[myDays - 1];
	darkp3.style.color="white";
	darkp2.innerHTML = "<img src='images/"+(myDays+30)+".png'>";
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
