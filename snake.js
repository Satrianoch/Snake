function Snake(position, direction)
{
	this.position = position;
	this.direction = direction;
	this.ateApple = false;
	this.draw = function(ctx, blockSize)
	{
		ctx.save();
		ctx.fillStyle = '#BAC9FE';
		for(let i = 0; i < this.position.length; i++)
			ctx.fillRect((this.position[i][0] * blockSize) - 1, (this.position[i][1] * blockSize) - 1, blockSize, blockSize);
		ctx.restore();
	};

	this.advance = function()
	{
		let x = this.position[0][0],
				y = this.position[0][1];
			switch(this.direction)
			{
				case "right":		
					x++;
					break;
				case "left":		
					x--;
					break;
				case "up":		
					y--;
					break;
				case "down":		
					y++;
					break;
				default:
					x++;
			}

		this.position.unshift([x, y]);
		if(!this.ateApple)
			this.position.pop();
		else
			this.ateApple = false;      
	};

	this.isEatingApple = function(apple)
	{
		let headX = this.position[0][0],
				headY = this.position[0][1],
				appleX = apple.position[0],
				appleY = apple.position[1],
				isEatingApple = false;

		if(headX === appleX && headY === appleY)
			isEatingApple = true;

		return isEatingApple;
	};
}