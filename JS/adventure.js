document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalClose = document.getElementById("modal-close");

  document.querySelectorAll(".learn-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      modalTitle.textContent = btn.dataset.title;
      modalDescription.textContent = btn.dataset.desc;
      modal.classList.remove("hidden");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
