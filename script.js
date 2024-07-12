const navninput = document.getElementById("navninput")
const matdiv = document.getElementById("mat")
const klaerdiv = document.getElementById("klaer")

// Hent opp lagret navn fra localStorage:
const navnLagret = localStorage.getItem("navn")
if (navnLagret) {
  navninput.value = navnLagret
}

navninput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault()
    const navn = navninput.value.trim()
    localStorage.setItem("navn", navn)
  }
})

function info() {
  document.getElementById("info").classList.toggle("show")
}

function mat() {}

function klaer() {}
