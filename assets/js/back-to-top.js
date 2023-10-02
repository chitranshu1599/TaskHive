let back_to_top = document.querySelector("#back-to-top")
let top_to_bottom = document.querySelector(".top-to-bottom")

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        back_to_top.style.display = "block"
        setTimeout(() => {
            top_to_bottom.style.opacity = "1"
          }, 1);

    }else if (window.scrollY < 50) {
        back_to_top.style.display = "none"
        setTimeout(() => {
            top_to_bottom.style.opacity = "0"
          }, 1);
}
})