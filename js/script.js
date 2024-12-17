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

	var trunk = new Image();
	trunk.src = "Billeder/pinetreetrunk.png";

	var top = new Image();
	top.src = "Billeder/pinetreetop.png";

	var impact = new Image();
	impact.src = "Billeder/cartoon impact.png";

	function draw(context) {
		switch (scene) {
			case 1:
				xpos++;
				ypos++;
				context.beginPath();
				context.moveTo(250, 100); // Peak of the mountain
				context.lineTo(50, 301);  // Left base corner of the mountain
				context.lineTo(450, 301); // Right base corner of the mountain
				context.closePath();
				context.fillStyle = '#BFBFBF'; // A greyish color for the mountain
				context.fill();
				context.stroke();

				context.drawImage(background_tree, 220, 180);

				context.beginPath();
				context.moveTo(251, 301);
				context.lineTo(-1, 301);
				context.lineTo(-1, 51);
				context.closePath();
				context.fillStyle = 'white';
				context.fill();
				context.stroke();
				context.drawImage(skier, xpos, ypos);
				if (ypos > 375) {
					xpos = -75;
					ypos = -55;
					scene = 2;
				}
				context.restore();
				break

			case 2:
				xpos++;
				ypos++;
				context.beginPath();
				context.moveTo(220, 70); // Peak of the mountain
				context.lineTo(20, 301);  // Left base corner of the mountain
				context.lineTo(420, 301); // Right base corner of the mountain
				context.closePath();
				context.fillStyle = '#BFBFBF'; // A greyish color for the mountain
				context.fill();
				context.stroke();
				context.drawImage(background_tree, 25, 25);
				context.drawImage(background_tree, -25, -10);
				context.drawImage(background_tree, 80, 60);
				context.drawImage(background_tree, 150, 170);
				context.drawImage(background_tree, 200, 200);
				context.drawImage(trunk, 110, 130);
				context.beginPath();
				context.moveTo(251, 301);
				context.lineTo(-1, 301);
				context.lineTo(-1, 51);
				context.closePath();
				context.fillStyle = 'white';
				context.fill();
				context.stroke();
				context.drawImage(skier, xpos, ypos);
				context.drawImage(top, 105, 90);
				if (ypos > 125) {
					scene = 3;
				}
				context.restore();
				break
			case 3:
				time++;
				context.beginPath();
				context.moveTo(220, 70); // Peak of the mountain
				context.lineTo(20, 301);  // Left base corner of the mountain
				context.lineTo(420, 301); // Right base corner of the mountain
				context.closePath();
				context.fillStyle = '#BFBFBF'; // A greyish color for the mountain
				context.fill();
				context.stroke();
				context.drawImage(background_tree, 25, 25);
				context.drawImage(background_tree, -25, -10);
				context.drawImage(background_tree, 80, 60);
				context.drawImage(background_tree, 150, 170);
				context.drawImage(background_tree, 200, 200);
				context.drawImage(trunk, 110, 130);
				context.beginPath();
				context.moveTo(251, 301);
				context.lineTo(-1, 301);
				context.lineTo(-1, 51);
				context.closePath();
				context.fillStyle = 'white';
				context.fill();
				context.stroke();
				context.drawImage(top, 105, 90);
				context.drawImage(impact, 85, 90);
				if (time >= 180) {
					xpos = -75;
					ypos = -55;
					scene = 1;
					time = 0;
				}
			}

		}

	function animate() {
		context.clearRect(0,0,300,300);
		draw(context);
		setTimeout(animate,1);
	}

	animate();
}
