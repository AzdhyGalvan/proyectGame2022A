const audio= new Audio()
audio.src="../audio/sfx-piano-fantasia2.mp3"
audio.loop=true

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	audio.play()
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
  



