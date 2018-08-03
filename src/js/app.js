// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

const deleteLinks = document.querySelectorAll('.strato-nav__link');

Array.from(deleteLinks).forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      let element = document.getElementById(event.target.hash.replace('#', ''));

      element.scrollIntoView({
        behaviour: 'smooth'
      });
    });
});
