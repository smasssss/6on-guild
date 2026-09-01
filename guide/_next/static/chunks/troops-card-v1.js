const cardId = "guide-card-troops";

function shouldShowCard() {
  const active = [...document.querySelectorAll(".filter-row button")]
    .find((button) => button.classList.contains("active"))?.textContent?.trim();
  const search = document.querySelector("#guide-search")?.value?.trim();
  return !search && (!active || active === "전체" || active === "6ON 운영");
}

function addTroopCard() {
  const list = document.querySelector(".guide-list-home");
  if (!list || document.getElementById(cardId) || !shouldShowCard()) return;

  const card = document.createElement("button");
  card.id = cardId;
  card.className = "guide-row";
  card.type = "button";
  card.innerHTML = `<span class="guide-row-icon" aria-hidden="true">♜</span><span class="guide-row-main"><span class="guide-meta"><b>6ON 실전 · 웹 검증</b><i>6ON 운영</i></span><strong>병력관리</strong><small>병력 보존, 훈련장 운용, 병원·연구 우선순위</small></span><span class="guide-row-side"><small>상시 갱신</small><b>→</b></span>`;
  card.addEventListener("click", () => {
    window.location.href = "./troops.html";
  });

  const treatment = [...list.children].find((item) => item.textContent.includes("가속 없이 병사 치료"));
  if (treatment) treatment.after(card);
  else list.append(card);
}

const observer = new MutationObserver(addTroopCard);
observer.observe(document.body, { childList: true, subtree: true });
addTroopCard();

