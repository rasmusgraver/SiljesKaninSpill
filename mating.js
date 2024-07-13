// Det elementet som er i gang med å bli spist:
let spiseElm = null
const kaninElm = document.getElementById("kanin")
const targetX = 186
const targetY = 325

const matElms = document.querySelectorAll("#mat > div > img")
for (let elm of matElms) {
  elm.addEventListener("touchstart", dragStart)
  elm.addEventListener("touchmove", dragMove)
  // elm.addEventListener("touchend", dragEnd)
  elm.addEventListener("dragstart", dragStart)
  elm.addEventListener("drag", dragMove)
  // elm.addEventListener("mouseup", dragEnd)
}

function dragStart(event) {
  if (spiseElm == null) {
    if (saldo < 200) {
      visMelding("Du har ikke nok penger!!")
    } else {
      spiseElm = event.target
      spiseElm.style.width = "50px"
      spiseElm.style.position = "fixed"
    }
  }
}

function dragMove(event) {
  // spiseElm = event.target
  if (spiseElm == null) {
    return
  }
  let clientX = null
  let clientY = null
  if (typeof event.changedTouches != "undefined") {
    // Touch event:
    clientX = event.changedTouches[0].clientX
    clientY = event.changedTouches[0].clientY
  } else if (typeof event.clientX != "undefined") {
    // Click event:
    clientX = event.clientX
    clientY = event.clientY
  }
  if (clientX) {
    spiseElm.style.left = clientX - 25 + "px"
    spiseElm.style.top = clientY - 25 + "px"
    const distX = clientX - targetX
    const distY = clientY - targetY
    const dist = Math.sqrt(distX ** 2 + distY ** 2)
    if (dist < 25) {
      spis()
    }
  }
}

function spis() {
  if (spiseElm == null) {
    return
  }
  kaninElm.src = "bilder/munn.png"
  spiseElm.style.width = "20px"
  spiseElm.style.left = targetX - 10 + "px"
  spiseElm.style.top = targetY - 3 + "px"
  setTimeout(spisFerdig, 1000)
}

function spisFerdig() {
  if (spiseElm == null) {
    return
  }
  kaninElm.src = "bilder/kanin.png"
  // Reset elementet som blir spist:
  spiseElm.style.left = null
  spiseElm.style.top = null
  spiseElm.style.position = null
  spiseElm.style.width = null
  spiseElm = null
  brukpenger(200)
}
