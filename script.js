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
  skjulAside()
  document.getElementById("info").classList.toggle("show")
}

function skjulAside() {
  const asides = document.querySelectorAll("aside")
  for (let aside of asides) {
    aside.style.display = "none"
  }
}

function mat() {
  skjulAside()
  matdiv.style.display = "flex"
  klaerdiv.style.display = "none"
}

function klaer() {
  skjulAside()
  matdiv.style.display = "none"
  klaerdiv.style.display = "flex"
}

function spill1() {
  matdiv.style.display = "none"
  klaerdiv.style.display = "none"
}

function spill2() {
  matdiv.style.display = "none"
  klaerdiv.style.display = "none"
}
