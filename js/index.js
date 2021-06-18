const close     = document.querySelector(".x")
const container = document.querySelector(".container")
const page      = document.body



page.addEventListener("mousemove", function showDiv(e){
    if(e.clientY < 10){
        container.classList.add("containerOff")
        e.currentTarget.removeEventListener("mousemove", showDiv) 
        console.log(e.clientY)
    } else {
        container.classList.add("d-none")
    }
})

    close.addEventListener("click", function() {
        container.classList.add("d-none")
    })