const navninput = document.getElementById("navninput")
const matdiv = document.getElementById("mat")
const klaerdiv = document.getElementById("klaer")
const infoknapp = document.getElementById("infoknapp")
const hjemknapp = document.getElementById("hjemknapp")
const saldoElm = document.getElementById("saldo")

// Hent opp lagret navn fra localStorage:
const navnLagret = localStorage.getItem("navn")
if (navnLagret) {
  navninput.value = navnLagret
}

let saldo = parseInt(localStorage.getItem("saldo")) || 100
oppdaterSaldo(saldo)

function oppdaterSaldo(saldo) {
  saldoElm.innerHTML = saldo
  localStorage.setItem("saldo", saldo)
}

function tjenpenger() {
  saldo += 100
  oppdaterSaldo(saldo)
}

navninput.addEventListener("keypress", function (event) {
  const navn = navninput.value.trim()
  localStorage.setItem("navn", navn)
})

function info(skjul = false) {
  visSkjulAside(skjul ? "block" : "none")
  document.getElementById("info").classList.toggle("show")
}

function visSkjulAside(display = "none") {
  const asides = document.querySelectorAll("aside")
  for (let aside of asides) {
    aside.style.display = display
  }
  if (display == "none") {
    infoknapp.style.display = "none"
    hjemknapp.style.display = "block"
    navninput.style.display = "none"
  } else {
    infoknapp.style.display = "block"
    hjemknapp.style.display = "none"
    navninput.style.display = "block"
  }
}

function hjem() {
  visSkjulAside("block")
  matdiv.style.display = "none"
  klaerdiv.style.display = "none"
}

function mat() {
  visSkjulAside()
  matdiv.style.display = "flex"
  klaerdiv.style.display = "none"
}

function klaer() {
  visSkjulAside()
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

matDivs = document.querySelectorAll("#mat > div")
for (let matdiv of matDivs) {
  matdiv.addEventListener("touchstart", (event) => {
    const target = event.target
    target.style.display = "absolute"
    target.style.left = event.clientX + "px"
    target.style.top = event.clientY + "px"
    console.log("Trykket på ", target)
  })

  matdiv.addEventListener("touchmove", (event) => {
    event.target.style.left = event.clientX + "px"
    event.target.style.top = event.clientY + "px"
  })
}
