let button = document.getElementById("launchBtn");

// Function to launch the mission with countdown
function launchMission() {
    for (let i = 0; i < 4; i++) {
       if (i === 3) {window.alert("LAUNCH");
    }else {
        window.alert(`launching in ${i+1}`); }
    document.getElementById("MissionStatus").textContent = "Not Mission Complete";   
    }
}

// Add event listener to the button
button.addEventListener("click",launchMission);      
