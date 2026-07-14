const button = document.getElementById("openBtn");
const story = document.getElementById("story");
const hero = document.querySelector(".hero");
const text = document.getElementById("text");

const messages = [
    "Мы больше не встречаемся...",
    "Мы больше не парень и девушка...",
    "Потому что...",
    "МЫ ЖЕНИМСЯ! 🤍"
];

button.addEventListener("click", () => {

    hero.style.display = "none";
    story.classList.remove("hidden");

    let index = 0;

    text.innerHTML = messages[index];

    const interval = setInterval(() => {

        index++;

        if(index < messages.length){

            text.innerHTML = messages[index];

        }else{

            clearInterval(interval);

        }

    },2500);

});
