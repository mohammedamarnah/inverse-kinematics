window.onload = function() {
	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;
  
  var roboticArm = RoboticArm.create(width / 2, height / 2);
  var x = 0;
	for(var i = 0; i < 3; ++i, x += 20) {
		roboticArm.addJoint(70);
  }
  
	document.body.addEventListener("mousemove", function(event) {
		roboticArm.drag(event.clientX, event.clientY);
	});

	updateFrame();
	function updateFrame() {
		context.clearRect(0, 0, width, height);
		roboticArm.draw(context);
		requestAnimationFrame(updateFrame);
	}
}