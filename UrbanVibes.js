// alert("Salam Bhiya")

var bar = document.getElementById('bar');
var close = document.getElementById('close');
var nav = document.getElementById('navbar');
var overlay = document.getElementById('overlay');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
    overlay.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });
}

if (overlay) {
  overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });
}

// ✅ NEW PART: close navbar when clicking anywhere outside
document.addEventListener('click', (e) => {
  if (
    nav.classList.contains('active') && 
    !nav.contains(e.target) && 
    !bar.contains(e.target) && 
    !close.contains(e.target)
  ) {
    nav.classList.remove('active');
    overlay.classList.remove('active');
  }
});

// ----------------------------
// Add to cart button animation
// ----------------------------

const btn = document.getElementById("addToCartBtn");
const content = btn.querySelector(".btn-content");
const checkmark = btn.querySelector(".checkmark");
const sound = document.getElementById("cartSound");

btn.addEventListener("click", () => {
  // Step 1: Fade out text
  content.style.opacity = 0;

  // Step 4: Show checkmark after shirt drops
  setTimeout(() => {
    checkmark.style.opacity = 1;
  }, 100);

  // Step 5: Play sound
  setTimeout(() => {
    sound.currentTime = 0;
    sound.play();
  }, 100);

  // Step 7: Reset all
  setTimeout(() => {
    btn.classList.remove("cart-center", "cart-exit");
    btn.classList.add("reset");

    checkmark.style.opacity = 0;

    setTimeout(() => {
      content.style.opacity = 1;
      btn.classList.remove("reset");
    }, 500);
  }, 2400);
});