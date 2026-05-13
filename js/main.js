const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

let currentPage = 1;
let totalPages = 1;

async function loadPage(page) {

    const response = await fetch(
        
    );

    const data = await response.json();

    currentPage = page;
    totalPages = data.info.pages;

    pageInfo.textContent =
        `Página ${currentPage} de ${totalPages}`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    console.log(data.results);
}

nextBtn.addEventListener("click", () => {

    if (currentPage < totalPages) {
        loadPage(currentPage + 1);
    }

});

prevBtn.addEventListener("click", () => {

    if (currentPage > 1) {
        loadPage(currentPage - 1);
    }

});

loadPage(1);