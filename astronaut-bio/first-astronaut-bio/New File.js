let button = document.getElementById("launchBtn");

function launchMission() {
    for (let i = 0; i < 4; i++) {
       if (i === 3) {alert("LAUNCH");
    }else {
        alert(` launching in ${i+1}`); }
    document.getElementById("MissionStatus").textContent = "Not Mission Complete";   
    }
}

button.addEventListener("click",launchMission);