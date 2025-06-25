let button = document.getElementById("launchBtn");




button.addEventListener("click", function(){
    alert("3... 2.. 1.. LIFTOF");
    document.getElementById("MissionStatus").textContent = "Not Mission Complete";    
})