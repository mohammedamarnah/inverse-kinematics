var RoboticArm = RoboticArm || {
  x: 0,
  y: 0,
  joints: null,
  head: null,

  create: function(x, y) {
    var obj = Object.create(this);
    obj.init(x, y);
    return obj;
  },

  init: function(x, y) {
    this.x = x;
    this.y = y;
    this.joints = []
  },

  addJoint: function(len) {
    var j = Joint.create(0, 0, len, 0);
    j.x, j.y = this.head ? (this.head.getEndPoint()[0], this.head.getEndPoint()[1]) : (this.x, this.y);
    j.parent = this.head || null;
    this.joints.push(j);
    this.head = j;
  },

  draw: function(canvas) {
    this.joints.forEach(joint => {
      joint.draw(canvas);
    });
  },

  drag: function(x, y) {
    this.head.drag(x, y);
  }
}