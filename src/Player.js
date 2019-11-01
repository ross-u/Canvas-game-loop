function Player(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.size = 100;
  this.x = canvas.width / 2;
  this.y = 200;
}

Player.prototype.draw = function() {
  this.ctx.fillStyle = '#66D3FA';
  // fillRect(x, y, width, height)
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
};
