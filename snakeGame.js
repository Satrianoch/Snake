function SnakeGame(canvasWidth, canvasHeight, blockSize, delay)
{
	this.canvas = document.createElement('canvas');
	this.ctx = this.canvas.getContext('2d');
	this.blockSize = blockSize;
	this.canvas.width = canvasWidth;
	this.canvas.height = canvasHeight;
	this.canvas.style.border = '1px solid #ddd';
	this.canvas.style.margin = '0 auto';
	this.canvas.style.display = 'block';
	this.canvas.style.marginTop = '50vh';
	this.canvas.style.transform =  'translateY(-50%)';
	document.body.appendChild(this.canvas);
	this.delay = delay;
	this.score;
	this.bestScore;
	var instance = this;
	var timeout;

	var refreshCanvas = function()
	{
		instance.snake.advance();
		if(instance.checkCollision())
		{
			if (instance.score > instance.bestScore)
				instance.bestScore = instance.score;
			instance.gameOver();
		}
		else
		{
			if(instance.snake.isEatingApple(instance.apple))
			{
				do
				{
					instance.apple.setNewPosition(instance.blockSize, instance.canvas.width, instance.canvas.height);
				}while(instance.apple.isOnSnake(instance.snake))
				instance.snake.ateApple = true;
				instance.score++;
				instance.delay--;
				console.log(instance.score);
			}
			instance.ctx.clearRect(0, 0, instance.canvas.width, instance.canvas.height);
			instance.snake.draw(instance.ctx, instance.blockSize);
			instance.apple.draw(instance.ctx, instance.blockSize);
			instance.drawScore();
			timeout = setTimeout(refreshCanvas, instance.delay);
		}
	};

	this.init = function(snake, apple)
	{
		this.snake = snake;
		this.apple = apple;
		this.delay = delay;
		this.score = 0;
		snake.draw(this.ctx, this.blockSize);
		apple.draw(this.ctx, this.blockSize);
		clearTimeout(timeout);
		refreshCanvas();
	};

	this.drawScore = function()
	{
		this.ctx.save();
		this.ctx.fillSyle = '#000';
		this.ctx.fillText(this.score, 10, this.canvas.height - 10);
		this.ctx.restore();
	};

	this.gameOver = function()
	{
		this.ctx.save();
		this.ctx.fillStyle = '#000';
		this.ctx.fillText('Game Over', 10, 20);
		this.ctx.fillText('Meilleur score : ', 10, 35);
		this.ctx.fillStyle = '#A44';
		this.ctx.fillText(this.bestScore, 85, 35);
		this.ctx.fillStyle = '#000';
		this.ctx.fillText('Appuyer sur ESPACE pour rejouer', 10, 50);
		this.ctx.restore();
	};

	this.checkCollision = function()
	{
		let body = this.snake.position, 
				headX = this.snake.position[0][0],
				headY = this.snake.position[0][1],
				borderX = this.canvas.width/this.blockSize,
				borderY = this.canvas.height/this.blockSize,
				wallCollision = false,
				selfCollision = false;

		if(headX < 0 || headX >= borderX || headY < 0 || headY >= borderY)
			wallCollision = true;

		for(let i = 1; i < this.snake.position.length; i++)
			if(headX === body[i][0] && headY === body[i][1])
				selfCollision = true;

		return wallCollision || selfCollision;
	};
}