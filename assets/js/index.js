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
