var frndStatus = document.querySelector("h5")
var btn = document.querySelector("#btn")

var frndCount = 0

btn.addEventListener("click", function() {
    if(frndCount == 0) {
        frndStatus.innerHTML = "Friends"
    frndStatus.style.color = "green"
    btn.innerHTML = "Remove Friend"

    frndCount = 1
    } else {
        frndStatus.innerHTML = "Stranger"
    frndStatus.style.color = "red"
    btn.innerHTML = "Add Friend"

    frndCount = 0
    }
})