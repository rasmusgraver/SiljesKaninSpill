// Det elementet som er i gang med å bli spist:
let spiseElm = null
const kaninElm = document.getElementById("kanin")
const targetX = 186
const targetY = 325

const matElms = document.querySelectorAll("#mat > div > img")
for (let elm of matElms) {
  elm.addEventListener("touchstart", dragStart)
  elm.addEventListener("touchmove", dragMove)
  elm.addEventListener("touchend", dragEnd)
  elm.addEventListener("dragstart", dragStart)
  elm.addEventListener("drag", dragMove)
  elm.addEventListener("mouseup", dragEnd)
}

function dragStart(event) {
  spiseElm = event.target
  spiseElm.style.width = "50px"
  spiseElm.style.position = "fixed"
}

function dragMove(event) {
  // spiseElm = event.target
  let clientX = null
  let clientY = null
  if (typeof event.changedTouches != "undefined") {
    // Touch event:
    clientX = event.changedTouches[0].clientX
    clientY = event.changedTouches[0].clientY
  } else {
    // Click event:
    if (typeof event.clientX != "undefined") {
      clientX = event.clientX
      clientY = event.clientY
    } else {
      // Click event, men uten clientX => dragEnd!
      dragEnd()
    }
  }
  if (clientX) {
    spiseElm.style.left = clientX - 25 + "px"
    spiseElm.style.top = clientY - 25 + "px"
  }
}

function dragEnd(event) {
  // spiseElm = event.target

  let clientX = null
  let clientY = null
  if (typeof event.changedTouches != "undefined") {
    // Touch event:
    clientX = event.changedTouches[0].clientX
    clientY = event.changedTouches[0].clientY
  } else {
    // Click event:
    if (typeof event.clientX != "undefined") {
      clientX = event.clientX
      clientY = event.clientY
    } else {
      // Click event, men uten clientX => dragEnd!
      dragEnd()
    }
  }
  if (clientX) {
    console.log("DRAG END", clientX, clientY)
    const distX = clientX - targetX
    const distY = clientY - targetY
    const dist = Math.sqrt(distX ** 2 + distY ** 2)
    if (dist < 25) {
      spis()
    }
  }
}

function getXandY() {
  // TODO: Refactor
}

function spis() {
  kaninElm.src = "bilder/munn.png"
  spiseElm.style.width = "20px"
  spiseElm.style.left = targetX + "px"
  spiseElm.style.top = targetY + "px"
  setTimeout(spisFerdig, 1000)
}

function spisFerdig() {
  kaninElm.src = "bilder/kanin.png"
  // Reset elementet som blir spist:
  spiseElm.style.left = null
  spiseElm.style.top = null
  spiseElm.style.position = null
  spiseElm.style.width = null
  spiseElm = null
}
