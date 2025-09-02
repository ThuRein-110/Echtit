
// Mobile menu toggle functionality
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".header-right nav");

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      nav.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("active");
      }
    });

    document.querySelectorAll(".header-right nav a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  });


// Show/hide full text on "Read more" click
document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const card = btn.closest('.card');
        card.classList.toggle('active');
        btn.textContent = card.classList.contains('active') ? 'Show less' : 'Read more';
    });
});

// Footer scroll behavior (if needed)
window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.scrollHeight;

    if (scrollPosition + windowHeight >= bodyHeight) {
        footer.style.bottom = '0';
    } else {
        footer.style.bottom = '-100px';
    }
});