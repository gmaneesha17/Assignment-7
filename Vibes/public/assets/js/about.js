// Array of team members
const teamMembers = [
    { 
        name: 'Jane Doe', 
        role: 'Founder & CEO', 
        description: 'Music enthusiast with a passion for discovering new genres.', 
        image: './images/a.png' 
    },
    { 
        name: 'Olevia', 
        role: 'Head of Curations', 
        description: 'Expert in creating the perfect playlists for every mood.', 
        image: './images/c.png' 
    },
    { 
        name: 'Emily Davis', 
        role: 'Community Manager', 
        description: 'Loves connecting with music fans and organizing events.', 
        image: './images/b.png' 
    }
];

// Function to create team member HTML
function createTeamMember(member) {
    return `
        <div class="team-member">
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            <p>${member.description}</p>
        </div>
    `;
}

// Insert team members into the DOM
document.getElementById('team-section').innerHTML = teamMembers.map(createTeamMember).join('');

// Change introductory text after 5 seconds
const introText = document.getElementById('intro-text');
setTimeout(() => {
    introText.innerHTML = 'We are thrilled to share our passion for music with you. Join us on this musical journey!';
    introText.style.color = "#ff5733";
}, 5000);

// Theme toggle functionality
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.style.background = document.body.classList.contains('dark-theme') 
        ? "linear-gradient(to right, #333, #111)" 
        : "linear-gradient(to right, #ff6e7f, #bfe9ff)";
    themeToggleBtn.textContent = document.body.classList.contains('dark-theme') 
        ? "Switch to Light Theme" 
        : "Switch to Dark Theme";
});

// Hover effect to change border color of team member images
const teamImages = document.querySelectorAll('.team-member img');
teamImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.border = "3px solid #007BFF";
    });
    img.addEventListener('mouseleave', () => {
        img.style.border = "none";
    });
});
