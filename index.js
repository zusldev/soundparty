window.addEventListener("keydown", playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    document.getElementById("myName").style.transform = "scale(1.2)";
    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== "box-shadow") return;
    document.getElementById("myName").style.transform = "scale(1.0)";
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
