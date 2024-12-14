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
	animation();
}

function animation(){
	var canvas = document.getElementById("contentcanvas");
	var context = canvas.getContext("2d");

	var time = 0;
	var scene = 1;

	var skier = new Image();
	skier.src = "Billeder/skier.png";
	xpos = -75;
	ypos = -55;

	var tree = new Image();
	tree.src = "Billeder/pinetree.png";

	var background_tree = new Image();
	background_tree.src = "Billeder/backgroundpinetree.png"

	function draw(context) {
		switch (scene) {
			case 1:
				xpos++;
				ypos++;
				context.beginPath();
				context.moveTo(251, 301);  // Right angle point (top left)
				context.lineTo(-1, 301);  // First cathetus (horizontal line)
				context.lineTo(-1, 51);  // Second cathetus (vertical line)
				context.closePath();
				context.fillStyle = 'white'; // Set the fill color to white
				context.fill(); // Fill the triangle
				context.stroke(); // Optional: add a stroke outline
				context.drawImage(skier, xpos, ypos);
				if (ypos > 375) {
					scene = 2;
				}
				context.restore();
				break

			case 2:
				xpos++;
				ypos++;
				context.drawImage(background_tree, 25, 25);
				context.drawImage(background_tree, -25, -10);
				context.drawImage(background_tree, 80, 60);
				context.drawImage(background_tree, 150, 170);
				context.drawImage(background_tree, 200, 200);
				context.beginPath();
				context.moveTo(251, 301);  // Right angle point (top left)
				context.lineTo(-1, 301);  // First cathetus (horizontal line)
				context.lineTo(-1, 51);  // Second cathetus (vertical line)
				context.closePath();
				context.fillStyle = 'white'; // Set the fill color to white
				context.fill(); // Fill the triangle
				context.stroke(); // Optional: add a stroke outline
				context.drawImage(skier, xpos, ypos);
				if (ypos > 375) {
					xpos = -75;
					ypos = -55;
				}
				context.restore();

				break
			}

		}

	function animate() {
		time++;
		context.clearRect(0,0,300,300);
		draw(context);
		setTimeout(animate,1);
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