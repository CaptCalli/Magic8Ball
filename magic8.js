var answer = document.getElementById("answer");
var ask = document.getElementById("ask");
var question = document.getElementById("question");


var answers = [
				"imgs/asiseeityes.png",
				"imgs/askagainlater.png",
				"imgs/betternottellyounow.png",
				"imgs/cannotpredictnow.png",
				"imgs/concentrateandaskagain.png",
				"imgs/dontcountonit.png",
				"imgs/itiscertain.png",
				"imgs/itisdecidedlyso.png",
				"imgs/mostlikely.png",
				"imgs/myreplyisno.png",
				"imgs/mysourcessayno.png",
				"imgs/outlookgood.png",
				"imgs/outlooknotsogood.png",
				"imgs/replyhazytryagain.png",
				"imgs/signspointtoyes.png",
				"imgs/verydoubtful.png",
				"imgs/withoutadoubt.png",
				"imgs/yes.png",
				"imgs/yesdefinitely.png",
				"imgs/youmayrelyonit.png"
			];


ask.addEventListener("click", function(){
	var magic = answers[Math.floor(Math.random() * answers.length)];
	if (question.value === "") {
		document.getElementById("question").classList.add('danger');
		} else {
			question.value = "";
			answer.src = magic;
			document.getElementById("question").classList.remove('danger');
		}
	});