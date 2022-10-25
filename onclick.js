document.getElementById("65").addEventListener("click", playSound65);
document.getElementById("83").addEventListener("click", playSound83);
document.getElementById("68").addEventListener("click", playSound68);
document.getElementById("70").addEventListener("click", playSound70);
document.getElementById("71").addEventListener("click", playSound71);
document.getElementById("72").addEventListener("click", playSound72);
document.getElementById("74").addEventListener("click", playSound74);
document.getElementById("75").addEventListener("click", playSound75);
document.getElementById("76").addEventListener("click", playSound76);

function playSound65() {
    var audio = document.getElementById("65Audio");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("myName").style.transform = "scale(1.2)";
    document.getElementById("65").classList.add("playing");
}

function removeTransition65() {
    document.getElementById("myName").style.transform = "scale(1.0)";
    document.getElementById("65").classList.remove("playing");
}

function playSound83() {
    var audio = document.getElementById("83Audio");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("myName").style.transform = "scale(1.2)";
    document.getElementById("83").classList.add("playing");
}

function removeTransition83() {
    document.getElementById("myName").style.transform = "scale(1.0)";
    document.getElementById("83").classList.remove("playing");
}

function playSound68() {
    var audio = document.getElementById("68Audio");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("myName").style.transform = "scale(1.2)";
    document.getElementById("68").classList.add("playing");
}

function removeTransition68() {
    document.getElementById("myName").style.transform = "scale(1.0)";
    document.getElementById("68").classList.remove("playing");
}

function playSound70() {
    var audio = document.getElementById("70Audio");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("myName").style.transform = "scale(1.2)";
    document.getElementById("70").classList.add("playing");
}

function removeTransition70() {
    document.getElementById("myName").style.transform = "scale(1.0)";
    document.getElementById("70").classList.remove("playing");
}

function playSound71() {
    var audio = document.getElementById("71Audio");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("myName").style.transform = "scale(1.2)";
    document.getElementById("71").classList.add("playing");
}

function removeTransition71() {
    document.getElementById("myName").style.transform = "scale(1.0)";
    document.getElementById("71").classList.remove("playing");
}

function playSound72() {
    var audio = document.getElementById("72Audio");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("myName").style.transform = "scale(1.2)";
    document.getElementById("72").classList.add("playing");
}

function removeTransition72() {
    document.getElementById("myName").style.transform = "scale(1.0)";
    document.getElementById("72").classList.remove("playing");
}

function playSound74() {
    var audio = document.getElementById("74Audio");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("myName").style.transform = "scale(1.2)";
    document.getElementById("74").classList.add("playing");
}

function removeTransition74() {
    document.getElementById("myName").style.transform = "scale(1.0)";
    document.getElementById("74").classList.remove("playing");
}

function playSound75() {
    var audio = document.getElementById("75Audio");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("myName").style.transform = "scale(1.2)";
    document.getElementById("75").classList.add("playing");
}

function removeTransition75() {
    document.getElementById("myName").style.transform = "scale(1.0)";
    document.getElementById("75").classList.remove("playing");
}

function playSound76() {
    var audio = document.getElementById("76Audio");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("myName").style.transform = "scale(1.2)";
    document.getElementById("76").classList.add("playing");
}

function removeTransition76() {
    document.getElementById("myName").style.transform = "scale(1.0)";
    document.getElementById("76").classList.remove("playing");
}
