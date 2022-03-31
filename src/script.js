const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#plus-button");
const closeModalButton = document.querySelector("#close-button");
const audioOpen = new Audio();
audioOpen.src = "openClick.mp3";
audioOpen.volume = 0.5;
const audioClose = new Audio();
audioClose.src = "closeClick.mp3";
audioClose.volume = 0.5;

openModalButton.addEventListener("click", removeHiddenClass = () => {
    overlay.classList.remove("scale-0");
    modal.classList.remove("scale-0");
    audioOpen.play();
})

closeModalButton.addEventListener("click", closeWindow = () => {
    overlay.classList.add("scale-0");
    modal.classList.add("scale-0");
    audioClose.play();
})









