var snakeGame, kaa, applee;
	
window.onload = function()
{
	snakeGame = new SnakeGame(450, 300, 25, 100);
	kaa = new Snake([[2,5],[1,5],[0,5]], 'right');
	applee = new Apple([8,8]);
	snakeGame.init(kaa, applee);
	snakeGame.bestScore = 0;
}