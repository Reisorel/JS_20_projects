const imagesList = document.querySelector(".images-list")

const errorMsg = document.querySelector(".error-msg");

let searchQuery = "random";
let pageIndex = 1;

async function fetchData() {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchQuery}&client_id=dkxpHmyg5ANUU2VvRYFSTWDxGFHowl6YWmchNFHhyLk`)
    if (!response.ok) {
      throw new Error(`Erreur= ${response.status}`);
    }
    const data = await response.json()
    if (!data.total) {
      imagesList.textContent = "";
      throw new Error("Woopsy, rien de tel dans notre base de données")
    }



    console.log(data);
    createImages(data.results)
  }
  catch (error) {
    errorMsg.textContent = `${error}`;
  }
}

fetchData();

function createImages(data) {
  data.forEach(img => {
    const newImg = document.createElement("img");
    newImg.src = img.urls.regular;
    imagesList.appendChild(newImg)
  })
}

const observer = new IntersectionObserver(handleIntersect,
  { rootMargin: "50%" })
console.log(observer);

observer.observe(document.querySelector(".infinite-marker"));

function handleIntersect(entries){
  console.log(entries);
  if(window.scrollY > window.innerHeight && entries[0].isIntersecting) {
    pageIndex++;
    fetchData()
  }
}
 const input = document.querySelector("#search");
 const form = document.querySelector("form");
 form.addEventListener("submit", handleSearch)

 function handleSearch(e){
  e.preventDefault()

  imagesList.textContent = "";
  if(!input.value){
    errorMsg.textContent = "L'objet de la recherche ne peut être vide"
    return;
  }

  errorMsg.textContent = "";
  searchQuery = input.value;
  pageIndex = 1;
  fetchData()
 }

 const scrollToTop = document.querySelector(".scroll-to-top")

 scrollToTop.addEventListener("click", pushtoTop)

 function pushToTop(){
  window.scrollTo({
    top:0,
    behavior: "smooth"
  })
 }
