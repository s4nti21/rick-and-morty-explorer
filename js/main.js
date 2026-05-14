import { getCharacters } from "./api.js";
import { renderCharacters } from "./ui.js";

async function init() {
  const data = await getCharacters();

  renderCharacters(data.results);
}

init();

// damos funcion a los botones
let currentPage = 1;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

async function loadCharacters(page) {
  const data = await getCharacters(page);

  renderCharacters(data.results);

  document.getElementById(
    "pageInfo"
  ).textContent = `Página ${page} de ${data.info.pages}`;

  prevBtn.disabled = !data.info.prev;
  nextBtn.disabled = !data.info.next;
}

nextBtn.addEventListener("click", () => {
  currentPage++;
  loadCharacters(currentPage);
});

prevBtn.addEventListener("click", () => {
  currentPage--;
  loadCharacters(currentPage);
});

loadCharacters(currentPage);