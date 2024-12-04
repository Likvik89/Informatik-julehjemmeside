window.onload = function() {
	var canvas = document.getElementById("mycanvas");
	var context = canvas.getContext("2d");
	var julekane = new Image();
	julekane.src = "Billeder/Julemandens kane.png";
	var xpos = -100;

	var sne = new Image();
	sne.src = "Billeder/Snowflakes.png";
	var ypos1 = -85;
	var ypos2 = -170;


	function draw(context) {
		context.drawImage(julekane,xpos, 0);
		context.drawImage(sne, 0, ypos1);
		context.drawImage(sne, 0, ypos2);
		context.drawImage(sne, 182, ypos1);
		context.drawImage(sne, 182, ypos2);
		context.drawImage(sne, 364, ypos1);
		context.drawImage(sne, 364, ypos2);
		context.drawImage(sne, 546, ypos1);
		context.drawImage(sne, 546, ypos2);
		context.drawImage(sne, 728, ypos1);
		context.drawImage(sne, 728, ypos2);
		context.restore()
	}
	
	function animate() {
			xpos++;
			ypos1++;
			ypos2++;
			context.clearRect(0, 0, 780, 500);
			draw(context);
			setTimeout(animate, 10);
			if (xpos >= 780) {
				xpos = -90
			}
			if (ypos1 >= 85) {
				ypos1 = -85
			}
			if (ypos2 >= 85) {
				ypos2 = -85
			}
	}
	animate();
}

function test() {
    alert("Test");
}

function cirkel() {
	var c = document.getElementById("mycanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(95, 50, 40, 0, 2 * Math.PI);
	ctx.stroke();
}

function slet() {
	var canvas = document.getElementById("mycanvas");
	var context = canvas.getContext("2d");
}