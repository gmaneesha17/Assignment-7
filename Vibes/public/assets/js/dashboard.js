let userData = [
    { name: "John Doe", email: "john@example.com", favoriteArtist: "Armaan Malik", playlists: 5 },
    { name: "Jane Smith", email: "jane@example.com", favoriteArtist: "Arijit Singh", playlists: 3 },
    { name: "Chris Brown", email: "chris@example.com", favoriteArtist: "Shreya Ghoshal", playlists: 8 },
    { name: "Emily White", email: "emily@example.com", favoriteArtist: "Anurag KulKarni", playlists: 4 }
];

function populateUserTable(data) {
    const tableBody = document.querySelector("#user-table tbody");
    tableBody.innerHTML = "";

    data.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.favoriteArtist}</td>
            <td>${user.playlists}</td>
        `;
        tableBody.appendChild(row);
    });
}

function addEditableRow() {
    const tableBody = document.querySelector("#user-table tbody");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><input type="text" placeholder="Enter Name"></td>
        <td><input type="email" placeholder="Enter Email"></td>
        <td><input type="text" placeholder="Enter Favorite Artist"></td>
        <td><input type="number" min="0" placeholder="Enter Playlists"></td>
    `;
    tableBody.appendChild(row);

    document.getElementById("save-button").style.display = "inline-block";
}

function saveUser() {
    const inputs = document.querySelectorAll("#user-table input");
    const name = inputs[0].value;
    const email = inputs[1].value;
    const favoriteArtist = inputs[2].value;
    const playlists = inputs[3].value;

    if (name && email && favoriteArtist && playlists) {
        userData.push({ name, email, favoriteArtist, playlists: parseInt(playlists) });
        populateUserTable(userData);
        showMessage("User saved successfully!");
        document.getElementById("save-button").style.display = "none";
    } else {
        showMessage("Please fill in all fields.", true);
    }
}

function showMessage(text, isError = false) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = text;
    messageElement.className = isError ? "message error" : "message";
}

document.getElementById("filter-name").addEventListener("input", function() {
    const filterValue = this.value.toLowerCase();
    const filteredData = userData.filter(user => user.name.toLowerCase().includes(filterValue));
    populateUserTable(filteredData);
});

document.getElementById("add-user").addEventListener("click", addEditableRow);
document.getElementById("save-button").addEventListener("click", saveUser);

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        populateUserTable(userData);
        showMessage("User data loaded successfully!");
    }, 1000);
});
