const API_URL = 'https://itunes.apple.com/search';

// Login functionality
const loginForm = document.getElementById('login-form');
const loginPage = document.getElementById('login-page');
const mainContent = document.getElementById('main-content');
const homeTab = document.getElementById('home-tab');

// Handle login form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  loginPage.style.display = 'none'; // Hide login page
  mainContent.classList.remove('hidden'); // Show main content
});

// Show search section on Home tab click
homeTab.addEventListener('click', function(event) {
  event.preventDefault();
  mainContent.classList.remove('hidden'); // Ensure main content is visible
});

// Function to search songs
async function searchSongs() {
  const query = document.getElementById('search').value;
  const url = `${API_URL}?term=${encodeURIComponent(query)}&entity=musicTrack&limit=10`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const songs = data.results;
    displaySongs(songs);
  } catch (error) {
    console.error('Error fetching songs:', error);
  }
}

// Function to display songs in the song list section
function displaySongs(songs) {
  const songList = document.getElementById('song-list');
  songList.innerHTML = ''; // Clear the list

  songs.forEach(song => {
    const songItem = document.createElement('div');
    songItem.classList.add('song-item');

    songItem.innerHTML = `
      <img src="${song.artworkUrl100}" alt="${song.trackName}">
      <h3>${song.trackName}</h3>
      <p>${song.artistName}</p>
      <audio controls>
        <source src="${song.previewUrl}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    `;

    songList.appendChild(songItem);
  });
}



// Featured Music
document.addEventListener("DOMContentLoaded", function () {
  const featuredMusic = document.querySelector("#music h2"); // Featured music heading
  const travelMusic = document.querySelector(".music-item h3:nth-child(2)"); // Travel music heading
  const musicGrid = document.querySelector(".music-grid");

  // Example API endpoints (replace with real APIs)
  const featuredApiEndpoint = "https://api.example.com/featured-songs";
  const travelApiEndpoint = "https://developers.deezer.com/api";

  // Function to fetch and display songs from an API
  async function fetchSongs(apiEndpoint) {
      try {
          const response = await fetch(apiEndpoint);
          const songs = await response.json();

          // Clear existing items in the music grid
          musicGrid.innerHTML = "";

          // Populate music grid with fetched songs
          songs.forEach((song) => {
              const musicItem = document.createElement("div");
              musicItem.classList.add("music-item");

              musicItem.innerHTML = `
                  <img src="${song.albumCover}" alt="${song.title}">
                  <h3>${song.title}</h3>
                  <p>${song.artist}</p>
              `;

              musicGrid.appendChild(musicItem);
          });
      } catch (error) {
          console.error("Error fetching songs:", error);
          musicGrid.innerHTML = "<p>Failed to load songs. Please try again later.</p>";
      }
  }

  // Event listeners for clicking the headings
  featuredMusic.addEventListener("click", function () {
      fetchSongs(featuredApiEndpoint);
  });

  travelMusic.addEventListener("click", function () {
      fetchSongs(travelApiEndpoint);
  });
});
