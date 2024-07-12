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
  const target = event.target
  target.style.width = "50px"
  target.style.position = "fixed"
}

function dragMove(event) {
  const target = event.target
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
    target.style.left = clientX - 25 + "px"
    target.style.top = clientY - 25 + "px"
  }
}

function dragEnd(event) {
  const target = event.target
  target.style.left = null
  target.style.top = null
  target.style.position = null
  target.style.width = null
}
