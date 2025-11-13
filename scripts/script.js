const heartFrame = document.getElementById('heartFrame');

heartFrame.addEventListener('click', () => {
  // Aplica rotação com desaceleração
  heartFrame.classList.add('rotate');
  setTimeout(() => heartFrame.classList.remove('rotate'), 5300);

  // Estouro de partículas por toda a tela
  const numParticles = 50;

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.textContent = '💖';

    const size = Math.random() * 12 + 16;
    particle.style.fontSize = `${size}px`;

    // Posição inicial aleatória na tela
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;

    // Direção e velocidade aleatórias
    const angle = Math.random() * 2 * Math.PI;
    const velocity = Math.random() * 300 + 100;
    const x = Math.cos(angle) * velocity;
    const y = Math.sin(angle) * velocity;

    particle.animate(
      [
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${x}px, ${y}px) scale(1.5)`, opacity: 0 }
      ],
      {
        duration: 1500,
        easing: 'ease-out',
        fill: 'forwards'
      }
    );

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1600);
  }
});