const burgerMenu = document.querySelector("#open-modal");
const modal = document.querySelector("#modal");

burgerMenu.addEventListener("click", () => {
  modal.showModal();
});

modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();

  const isInModal =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!isInModal) {
    modal.close();
  }
});
