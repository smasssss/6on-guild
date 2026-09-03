document.addEventListener("click", (event) => {
  const card = event.target.closest(".guide-row");
  if (!card || !card.textContent.includes("길드전 포인트 6일 루틴")) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  window.location.href = "./guild-war.html";
}, true);

