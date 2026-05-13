export function createCharacterCard(character) {
    return `
      <article class="card">
        <img src="${character.image}" alt="${character.name}" />
  
        <div class="card-content">
          <h2>${character.name}</h2>
  
          <p>
            <span class="status ${character.status.toLowerCase()}"></span>
            ${character.status}
          </p>
  
          <p>${character.species}</p>
          <p>${character.origin.name}</p>
        </div>
      </article>
    `;
  }