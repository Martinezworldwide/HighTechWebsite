// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});

// Three.js 3D Animation
// Ensure that you have included the Three.js library in your HTML.

let scene, camera, renderer, cube;

function initThreeJS() {
  const canvas = document.getElementById('three-canvas');

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  // Create a rotating cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x0ff0ff, wireframe: true });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 3;

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;

  renderer.render(scene, camera);
}

window.addEventListener('load', initThreeJS);
window.addEventListener('resize', () => {
  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
});

// Form Submission (Optional)
// You can add AJAX requests here to handle form submissions.
