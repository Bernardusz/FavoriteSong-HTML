const moonHaloButton = document.getElementById("moon-halo-button");
const daCapoButton = document.getElementById("da-capo-button");
const regressionButton = document.getElementById("regression-button");
const byeButton = document.getElementById("bye-button");
const greatestShowButton = document.getElementById("greatest-show-button");

function openYoutube(target){
    if (target == "Moon Halo"){
        window.open("https://youtu.be/xREK6gZxYLQ?si=zal-c-ia3C3xXzYJ", "_blank");
    }
    else if (target == "Da Capo"){
        window.open("https://youtu.be/9iFDPYubUbE?si=64fN-7C37P7oZR5A", "_blank");
    }
    else if (target == "Regression"){
        window.open("https://youtu.be/VrcB9PJ22F0?si=pLdompF4H6P1JDPl", "_blank");
    }
    else if (target == "Bye Bye Bye"){
        window.open("https://youtu.be/Eo-KmOd3i7s?si=Jqgxbv0pP9gvGo4A", "_blank");
    }
    else if (target == "The Greatest Show"){
        window.open("https://youtu.be/NyVYXRD1Ans?si=0f9TWpOuOupW18T8", "_blank");
    }
    else{
        window.open("https://youtu.be/dQw4w9WgXcQ?si=CxTMe9XOf7DMu1tH", "_blank")
    }
}
moonHaloButton.addEventListener("click", () => openYoutube("Moon Halo"));
daCapoButton.addEventListener("click", () => openYoutube("Da Capo"));
regressionButton.addEventListener("click", () => openYoutube("Regression"));
byeButton.addEventListener("click", () => openYoutube("Bye Bye Bye"))
greatestShowButton.addEventListener("click", () => openYoutube("The Greatest Show"))
//-----------------------------------------------\\

const boxes = document.querySelectorAll("body main #container .table");
const gradients = [
    "linear-gradient(to right, rgba(245, 110, 7, 0.8), rgba(15, 163, 221, 0.8), rgba(255, 255, 255, 0.8))",
    "linear-gradient(to right, purple, white, magenta)",
    "linear-gradient(to right, rgba(0, 183, 255, 1), white)",
    "linear-gradient(to right, orange, grey, green)",
    "linear-gradient(to right, blue, yellow)",
] 


boxes.forEach((box, index) => {
  box.addEventListener("mouseenter", () => {
    box.style.background = gradients[index];
    box.style.transform = "scale(1.1)";
  });

  box.addEventListener("mouseleave", () => {
    box.style.background = "";
    box.style.transform = "scale(1)"
  });
});
