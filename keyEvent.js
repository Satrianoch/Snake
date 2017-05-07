document.addEventListener('keydown', function(e)
{
	let direction = snakeGame.snake.direction;
	switch(e.key)
	{
		case 'ArrowRight':
			direction = direction === 'left' ? 'left' : 'right';
			break;
		case 'ArrowDown':
			direction = direction === 'up' ? 'up' : 'down';
			break;
		case 'ArrowUp':
			direction = direction === 'down' ? 'down' : 'up';
			break;
		case 'ArrowLeft':
			direction = direction === 'right' ? 'right' : 'left';
			break;
		case ' ':
			kaa = new Snake([[2,5],[1,5],[0,5]], 'right');
			applee = new Apple([8,8]);
			snakeGame.init(kaa, applee);
			snakeGame.score = 0;
			return;
	}
	snakeGame.snake.direction = direction;
})