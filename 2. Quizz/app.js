const responses =
  [
    "a", "c", "c", "a", "b",
    "c", "a", "a", "a", "b",
    "c", "a", "b", "c", "a",
    "a", "a", "b", "b", "a"
  ];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
  e.preventDefault()

  const results = [];

  const radioButtons = document.querySelectorAll("input[type='radio']:checked")

  radioButtons.forEach((radioButton, index) => {
    if (radioButton.value === responses[index]) {
      results.push(true)
    } else {
      results.push(false);
    }
  })

  showResults(results)
}

const titleResult = document.querySelector('.results h2')
const markResult = document.querySelector('.mark')
const helpResult = document.querySelector('.help')

function showResults(results) {
  const errorsNumber = results.filter(el => el === false).length;

  console.log(errorsNumber);
  switch (errorsNumber) {
    case 0:
      titleResult.textContent = `🏆 Bravo, tu es un spécialiste du ROCK ! 🏆`;
      helpResult.style.display = "block";
      helpResult.textContent = "Grands moments et petites anecdotes n'ont aucun secret pour toi !";
      markResult.style.display = "block";
      markResult.innerHTML = `Score : <span>${20-errorsNumber}/ 20</span>`;
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      titleResult.textContent = `🥈 Super, tu possèdes un bonne connaissance du ROCK! 🥈`;
      helpResult.style.display = "block";
      helpResult.textContent = "Tu aimes la culture rock, mais il te manque encore quelques détails !";
      markResult.style.display = "block";
      markResult.innerHTML = `Score : <span>${20-errorsNumber}/ 20</span>`;
      break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      titleResult.textContent = `🥈 Tu aimes le rock...mais tu peux t'améliorer ! 🥈`;
      helpResult.style.display = "block";
      helpResult.textContent = "La culture du rock ne t'es pas étrangère, mais il faut encore un peu bosser pour être au top !";
      markResult.style.display = "block";
      markResult.innerHTML = `Score : <span>${20-errorsNumber}/ 20</span>`;
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      titleResult.textContent = `😅 Hum, tu devrais écouter plus de rock si tu veux t'améliorer !😅`;
      helpResult.style.display = "block";
      helpResult.textContent = "Il ne faut pas se décourager, tu peux t'améliorer sur le ROCK";
      markResult.style.display = "block";
      markResult.innerHTML = `Score : <span>${20-errorsNumber}/ 20</span>`;
      break;
    default:
      titleResult.textContent = `❌ Besoin de réviser tes connaissances sur le ROCK ! ❌`;
      helpResult.style.display = "block";
      helpResult.textContent = "Il semble que tu aies besoin de revoir certains aspects du rock.";
      markResult.style.display = "block";
      markResult.innerHTML = `Score : <span>${20 - errorsNumber}/ 20</span>`;
      break;
    }
  }

  console.log(markResult);
