import { getCharacters } from "./api.js";
import { renderCharacters } from "./ui.js";

async function init() {
  const data = await getCharacters();

  renderCharacters(data.results);
}

init();