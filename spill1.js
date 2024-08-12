const kanin = document.getElementById("kanin")

const compStyle = getComputedStyle(kanin)
// console.log(compStyle)
let x = parseInt(compStyle.bottom)
let y = parseInt(compStyle.left)

let vx = 0
const grav = 0.3
const xhopp = 12

// Bind "hopp" funksjonen til både klikk og spacebar:
document.body.addEventListener("click", hopp)
window.addEventListener('keydown', function(event){
    if(event.code == "Space"){
        hopp()
    }
})

function hopp() {
    // Ikke lov å hoppe mens man allerede hopper:
    if (vx == 0) {
        vx = xhopp
    }
}

function loop() {
    if (vx) {
        vx -= grav
        x += vx
        kanin.style.bottom = x + "px"
        kanin.style.left = y + "px"
    }
    if (x < 0) {
        x = 0
        vx = 0
    }

    requestAnimationFrame(loop)
}

loop()

