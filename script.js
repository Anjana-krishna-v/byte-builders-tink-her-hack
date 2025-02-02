// Redirect to different pages
function redirectToPage(page) {
    window.location.href = page;
}

// Sign Up Function
function signUp() {
    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;

    if (!username || !password) {
        alert("Enter username and password!");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Sign Up Successful! Redirecting to Sign In...");
    window.location.href = "signin.html";
}

// Sign In Function
function signIn() {
    let username = document.getElementById("signinUsername").value;
    let password = document.getElementById("signinPassword").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("loggedIn", "true");
        alert("Sign In Successful!");
        window.location.href = "tracker.html";
    } else {
        alert("Incorrect username or password!");
    }
}

// Display Username
document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("username");
    if (document.getElementById("usernameDisplay")) {
        document.getElementById("usernameDisplay").innerText = username || "Guest";
    }
});

// Add Cycle Data
function addCycle() {
    let startDate = document.getElementById("periodStart").value;
    let cycleLength = document.getElementById("cycleLength").value;

    if (!startDate || !cycleLength) {
        alert("Enter valid details!");
        return;
    }

    let nextPeriod = new Date(startDate);
    nextPeriod.setDate(nextPeriod.getDate() + parseInt(cycleLength));
    
    let ovulationDay = new Date(startDate);
    ovulationDay.setDate(ovulationDay.getDate() + 14);

    document.getElementById("prediction").innerHTML = `
        <p>Next Period: ${nextPeriod.toDateString()}</p>
        <p>Ovulation Date: ${ovulationDay.toDateString()}</p>
    `;

    let cycleHistory = document.getElementById("cycleHistory");
    let listItem = document.createElement("li");
    listItem.textContent = `Start: ${startDate}, Cycle: ${cycleLength} days`;
    cycleHistory.appendChild(listItem);
}

// Save Symptoms
function saveSymptoms() {
    let symptoms = document.getElementById("symptoms").value;
    localStorage.setItem("symptoms", symptoms);
    document.getElementById("savedSymptoms").innerText = `Symptoms: ${symptoms}`;
}

// Logout
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
