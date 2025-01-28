// Obtén la cámara
const camera = document.querySelector('#camera');

// Velocidad de movimiento (ajusta a tu gusto)
const speed = 100;

// Función para mover la cámara con las teclas de flecha
function setupMovement() {
  window.addEventListener('keydown', (event) => {
    const position = camera.getAttribute('position');

    switch (event.key) {
      case 'ArrowUp':    // Flecha arriba
        position.z -= speed;
        break;
      case 'ArrowDown':  // Flecha abajo
        position.z += speed;
        break;
      case 'ArrowLeft':  // Flecha izquierda
        position.x -= speed;
        break;
      case 'ArrowRight': // Flecha derecha
        position.x += speed;
        break;
    }

    // Actualiza la posición de la cámara
    camera.setAttribute('position', position);
  });
}

// Función para generar obstáculos aleatorios
function generateObstacles(numObstacles) {
  const scene = document.querySelector('a-scene');

  for (let i = 0; i < numObstacles; i++) {
    // Crea una caja como obstáculo
    const obstacle = document.createElement('a-entity');
    obstacle.setAttribute('geometry', {
      primitive: 'box',
      width: 2,
      height: 2,
      depth: 2,
    });
    obstacle.setAttribute('material', {
      color: '#FF0000', // Color rojo
    });

    // Posición aleatoria en el campo (entre -40 y 40 en el eje X/Z)
    const x = (Math.random() - 0.5) * 80;
    const z = (Math.random() - 0.5) * 80;
    obstacle.setAttribute('position', { x, y: 1, z });

    // Agrega el obstáculo a la escena
    scene.appendChild(obstacle);
  }
}

// Configura el movimiento con las teclas de flecha
setupMovement();

// Genera 10 obstáculos aleatorios
generateObstacles(10);
