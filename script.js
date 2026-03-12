// select the cursor element
const cursor = document.querySelector(".cursor");

// variables for mouse and cursor position
let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;



// track mouse movement
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// smooth trailing animation
function animate() {
  posX += (mouseX - posX) * 0.1; // adjust 0.1 for speed of delay
  posY += (mouseY - posY) * 0.1;

  cursor.style.left = posX + "px";
  cursor.style.top = posY + "px";

  requestAnimationFrame(animate);
}

animate();

// hover effect for links (no glow, yellow)
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    cursor.style.background = "yellow"; // change to yellow
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)"; // grow cursor
  });

  link.addEventListener("mouseleave", () => {
    cursor.style.background = "white"; // back to default
    cursor.style.transform = "translate(-50%, -50%) scale(1)"; // reset size
  });
});



