if(new URLSearchParams(location.search).get("guide")==="duel") location.replace("./guild-war.html");
document.addEventListener("click", (event) => {
  const card = event.target.closest(".guide-row");
  if (!card || !card.textContent.includes("길드전 요일별 준비·사용 가이드")) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  window.location.href = "./guild-war.html";
}, true);

