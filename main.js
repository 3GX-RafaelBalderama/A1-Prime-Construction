AOS.init();

// Navbar transition from red to white
const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
   if (window.scrollY >= 56) {
      navEl.classList.add('navbar-scrolled');
   } else {
      navEl.classList.remove('navbar-scrolled');
   }
});

// ScrollSpy re-initialize
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
   target: '#navhomepage',
   offset: 100
});

// Load products.html dynamically
fetch('productSection.html')
   .then(response => {
      if (!response.ok) throw new Error("Failed to load products.html");
      return response.text();
   })
   .then(html => {
      document.getElementById('products-section-placeholder').innerHTML = html;
      AOS.init(); // re-init AOS after content load
   })
   .catch(error => {
      console.error('Error loading Products section:', error);
   });

// Scroll carousel on mobile
function scrollCarousel(direction) {
   const carousel = document.getElementById('customCarousel');
   const slideWidth = window.innerWidth;
   carousel.scrollBy({ left: direction === 'left' ? -slideWidth : slideWidth, behavior: 'smooth' });
}

// Toggle product caption on mobile
function toggleCaption(clickedBox) {
   if (window.innerWidth < 768) {
      document.querySelectorAll('.product-box-sm.active').forEach(box => {
         if (box !== clickedBox) box.classList.remove('active');
      });
      clickedBox.classList.toggle('active');
   }
}

// Remove active class on resize if width >= 768px
window.addEventListener('resize', function () {
   if (window.innerWidth >= 768) {
      document.querySelectorAll('.product-box-sm.active').forEach(box => {
         box.classList.remove('active');
      });
   }
});
