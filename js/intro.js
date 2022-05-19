const music = new Audio()
music.src="../audio/donkey-kong-game-boy.mp3"
music.loop=true


const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	music.play()
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 1050 * (idx+1))
});
  



