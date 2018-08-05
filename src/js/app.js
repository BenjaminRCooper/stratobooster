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

const config5 = {
  "profile": {"screenName": 'stratobooster'},
  "domId": 'strato-social__twitter-list',
  "maxTweets": 2,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": false,
  "lang": 'en'
};

document.addEventListener("DOMContentLoaded", function(event){
  twitterFetcher.fetch(config5);
});
