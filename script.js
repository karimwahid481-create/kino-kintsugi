document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".pricing-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-6px)";
    });

    card.addEventListener("mouseleave", () => {
      if (!card.classList.contains("highlight")) {
        card.style.transform = "translateY(0)";
      }
    });
  });
});
