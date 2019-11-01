function Game() {
  this.canvas = null;
  this.ctx = null;
  this.enemies = [];
  this.player = null;
  this.gameIsOver = false;
  this.gameScreen = null;
  this.score = 0;
}

Game.prototype.start = function() {
  // Get the canvas element, create ctx, save canvas and ctx in the game object
  this.canvasContainer = document.querySelector('.canvas-container');
  this.canvas = document.querySelector('canvas');
  this.ctx = this.canvas.getContext('2d');

  // Set the canvas to be same as the viewport size
  this.containerWidth = this.canvasContainer.offsetWidth;
  this.containerHeight = this.canvasContainer.offsetHeight;
  this.canvas.setAttribute('width', this.containerWidth);
  this.canvas.setAttribute('height', this.containerHeight);

  // Create new player
  this.player = new Player(this.canvas);

  // Add event listener for keydown movements

  // Start the game loop

  this.startLoop();
};

Game.prototype.startLoop = function() {
  var loop = function() {
    console.log('in loop');

    this.player.draw();

    window.requestAnimationFrame(loop);
  }.bind(this);

  window.requestAnimationFrame(loop);
};
