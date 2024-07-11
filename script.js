function info() {
    document.getElementById("info").classList.toggle("show")
}

const navninput = document.getElementById("navninput")
navninput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const navn = navninput.value.trim()
        localStorage.setItem("navn", navn)
    }
})

// Hent opp lagret navn fra localStorage:
const navnLagret = localStorage.getItem("navn")
if (navnLagret) {
    navninput.value = navnLagret
}

