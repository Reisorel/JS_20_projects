const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
  e.preventDefault()

  const results = [];

  const radioButtons = document.querySelectorAll("input[type='radio']:checked")
  console.log(radioButtons);
}
