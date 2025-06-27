 AOS.init();
   
   // navbar transition from red to white
   const navEl = document.querySelector('.navbar');
   window.addEventListener('scroll', () => {
      if (window.scrollY >= 56) {
         navEl.classList.add('navbar-scrolled');
      } else {
         navEl.classList.remove('navbar-scrolled');
      }
   });

   // ScrollSpy re-initialize (in case dynamic content)
   const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navhomepage',
      offset: 100
   });

   // fetch the products.html
   fetch('productSection.html')
      .then(response => {
         if (!response.ok) {
            throw new Error("Failed to load products.html");
         }
         return response.text();
      })
      .then(html => {
         document.getElementById('products-section-placeholder').innerHTML = html;
         AOS.init(); // re-init AOS after dynamic load
      })
      .catch(error => {
         console.error('Error loading Products section:', error);
      });
    
 
function scrollCarousel(direction) {
   const carousel = document.getElementById('customCarousel');
   const slideWidth = window.innerWidth;

   if (direction === 'left') {
      carousel.scrollBy({ left: -slideWidth, behavior: 'smooth' });
   } else {
      carousel.scrollBy({ left: slideWidth, behavior: 'smooth' });
   }
}

  function toggleCaption(clickedBox) {
    if (window.innerWidth < 768) {
      // Remove "active" from all product boxes
      document.querySelectorAll('.product-box-sm.active').forEach(box => {
        if (box !== clickedBox) {
          box.classList.remove('active');
        }
      });

      // Toggle active on the clicked box
      clickedBox.classList.toggle('active');
    }

    window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      document.querySelectorAll('.product-box-sm.active').forEach(box => {
        box.classList.remove('active');
      });
    }
  });
  }

