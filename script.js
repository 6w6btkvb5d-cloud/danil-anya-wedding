const hero = document.querySelector(".hero");
const intro = document.getElementById("intro");
const invite = document.getElementById("invite");

const envelope = document.getElementById("openEnvelope");
const typing = document.getElementById("typing");
const next = document.getElementById("continue");

const messages = [
"Мы больше не встречаемся...",
"Мы больше не парень и девушка...",
"Потому что...",
"МЫ ЖЕНИМСЯ! 🤍"
];

let index = 0;

envelope.addEventListener("click", () => {

hero.classList.add("hidden");
intro.classList.remove("hidden");

showMessage();

});

function showMessage(){

typing.innerHTML = messages[index];

setTimeout(()=>{

index++;

if(index < messages.length){

showMessage();

}else{

intro.classList.add("hidden");
invite.classList.remove("hidden");

}

},2200);

}

next.addEventListener("click",()=>{

document.body.style.overflow="auto";

invite.innerHTML=`

<h2>DANIL <span>&</span> ANYA</h2>

<p class="date">

27 июля 2027

</p>

<p class="text">

Мы счастливы пригласить вас
разделить с нами
самый важный день нашей жизни.

</p>

<br><br>

<h3>📍 База отдыха «Чистый ключ»</h3>

<br>

<h3>🕑 Сбор гостей — 14:00</h3>

<br><br>

<h2>Программа</h2>

<p class="text">

🥂 Велком-зона<br><br>

💍 Выездная регистрация<br><br>

🍽️ Праздничный ужин<br><br>

✨ Завершение вечера

</p>

<br><br>

<button onclick="location.reload()">

Вернуться

</button>

`;

});
