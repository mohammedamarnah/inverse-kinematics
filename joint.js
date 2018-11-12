var Joint = Joint || {
  x: 0,
  y: 0,
  len: 0,
  angle: 0,
  parent: null,

  create: function(x, y, len, angle) {
    var obj = Object.create(this);
    obj.init(x, y, len, angle);
    return obj;
  },

  init: function(x, y, len, angle) {
    this.x = x;
    this.y = y;
    this.len = len;
    this.angle = angle;
  },

  getEndPoint: function() {
    var dx = Math.cos(this.angle) * this.len;
    var dy = Math.sin(this.angle) * this.len;
    var endX = this.x + dx;
    var endY = this.y + dy;
    return [endX, endY];
  },

  draw: function(canv) {
    canv.strokeStyle = "#123456";
    canv.lineWidth = 5;
    canv.beginPath();
    canv.moveTo(this.x, this.y);
    canv.lineTo(this.getEndPoint()[0], this.getEndPoint()[1]);
    canv.arc(this.getEndPoint()[0], this.getEndPoint()[1], 5, 0, 2*Math.PI);
    canv.stroke();
  },

  moveHead: function(x, y) {
    var dx = x - this.x;
    var dy = y - this.y;
    this.angle = Math.atan2(dy, dx);
  },

  drag: function(x, y) {
    this.moveHead(x, y);
    this.x = x - Math.cos(this.angle) * this.len;
    this.y = y - Math.sin(this.angle) * this.len;
    // inverse kinematics
    // updating each parent with the 
    // current child x, y positions
    if (this.parent != null) {
      this.parent.drag(this.x, this.y);
    }
  }
}