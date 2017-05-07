function Apple(position)
{
	this.position = position;
	this.draw = function(ctx, blockSize)
	{
		ctx.save();
		ctx.fillStyle = '#BADA55';
		ctx.beginPath();
		let radius = blockSize/2;
		ctx.arc((this.position[0] * blockSize) + radius, (this.position[1] * blockSize) + radius, radius, 0, 2*Math.PI);
		ctx.fill();
		ctx.restore();
	};

	this.isOnSnake = function(snake)
	{
		let isOnSnake = false;
		for(let i = 0; i < snake.position.length; i++)
		{
			if(snake.position[i][0] === this.position[0] &&
				snake.position[i][1] === this.position[1])
					isOnSnake = true;
		}

		return isOnSnake;
	};

	this.setNewPosition = function(blockSize, canvasWidth, canvasHeight)
	{
		let maxX = canvasWidth/blockSize - 1,
				maxY = canvasHeight/blockSize - 1;
		this.position[0] = Math.round(Math.random() * maxX);
		this.position[1] = Math.round(Math.random() * maxY);
	};
}