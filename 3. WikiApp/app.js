// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

const form = document.querySelector("form")
const input = document.querySelector("input")
const errorMsg = document.querySelector(".error-msg")
const loader = document.querySelector(".loader")
const resultsDisplay = document.querySelector(".results-display")


form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
  e.preventDefault()

  if (input.value === "") {
    errorMsg.textContent = "Woops, veuillez remplir le champ";
    return
  } else {
    errorMsg.textContent = "";
    loader.style.display = "flex";
    resultsDisplay.textContent = "";
    wikiAPICall(input.value)
  }
}

async function wikiAPICall(searchInput) {
  try {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`);

    if (!response.ok) {
      throw new Error(`${response.status}`)
    }

    const data = await response.json()

    createCards(data.query.search)
  }
  catch (error) {
    errorMsg.textContent = `${error}`
    loader.style.display = "none";
  }
}


function createCards(data) {
  if (!data.length) {
    errorMsg.textContent = "Woops, aucun résultat"
    load.style.display = "none";
    return;
  }
  data.forEach(el => {
    const url = `https://en.wikipedia.org/?curid=${el.pageid}`
    const card = document.createElement("div");
    card.className = ".result-item"
    card.innerHTML = `
    <h3 class="result-title">
      <a href="${url}" target="_blank">${el.title}</a>
    </h3>
    <a href="${url}" class="result-link" target="_blank">${url}</a>
    <span class="result-snippet">${el.snippet}</span>
    <br>
    `
    resultsDisplay.appendChild(card)
  })
  load.style.display = "none";
}
