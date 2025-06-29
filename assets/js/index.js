function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');

  includes.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to fetch ${file}`);
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(error => {
        console.error('Error including HTML:', error);
      });
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);


// Quick Links
 document.querySelectorAll(".link-card").forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const url = this.getAttribute("data-url");

          fetch(url)
            .then((response) => {
              if (!response.ok) throw new Error("Page not found");
              return response.text();
            })
            .then((data) => {
              document.getElementById("dynamicContent").innerHTML = data;
            })
            .catch((err) => {
              document.getElementById(
                "dynamicContent"
              ).innerHTML = `<div class="alert alert-danger">Failed to load content: ${err.message}</div>`;
            });
        });
      });

// Research Section
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / 100);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });

  // Image Zoom
 function openCarousel(index) {
    const carousel = new bootstrap.Modal(document.getElementById('imageModal'));
    carousel.show();
    const carouselInner = document.querySelector('#galleryCarousel .carousel-inner');
    const items = carouselInner.querySelectorAll('.carousel-item');
    items.forEach((item, i) => {
      item.classList.remove('active');
      if (i === index) item.classList.add('active');
      item.classList.add('border-primary', 'border-3');
    });
}





