const BASE_URL = "https://rickandmortyapi.com/api";

// Obtener personajes por página
export async function getCharacters(page = 1) {
  try {
    const response = await fetch(`${BASE_URL}/character?page=${page}`);

    if (!response.ok) {
      throw new Error("Error al obtener personajes");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error API:", error);
  }
}