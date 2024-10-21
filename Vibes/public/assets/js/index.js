document.getElementById('playlist-link').addEventListener('click', function (event) {
  event.preventDefault();
  loadContent('playlist.html');
});

document.getElementById('register-link').addEventListener('click', function (event) {
  event.preventDefault();
  loadContent('register.html');
});

document.getElementById('about-link').addEventListener('click', function (event) {
  event.preventDefault();
  loadContent('about.html');
});

function loadContent(page) {
  document.getElementById('home').style.display = 'none';
  document.getElementById('music').style.display = 'none';

  fetch(page)
    .then((response) => response.text())
    .then((html) => {
      const contentSection = document.getElementById('dynamic-content');
      contentSection.innerHTML = html;
      window.scrollTo({
        top: contentSection.offsetTop,
        behavior: 'smooth',
      });
    })
    .catch((error) => console.error('Error loading the content:', error));
}

window.onpopstate = function () {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    window.location.href = './index.html';
  }
};

document.querySelector('.btn').addEventListener('click', function (event) {
  event.preventDefault();
  const musicSection = document.getElementById('music');
  musicSection.scrollIntoView({ behavior: 'smooth' });
});
