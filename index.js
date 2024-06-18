const heart = document.getElementById("heart");
const restart = document.getElementById("restart");
const container = document.querySelector(".container");
const bg = document.querySelector(".bg");

function centerHeart() {
    const sWidth = window.innerWidth;
    const sHeight = window.innerHeight;

    const popUpWidth = heart.offsetWidth;
    const popUpHeight = heart.offsetHeight;

    const leftPos = (sWidth - popUpWidth) / 2;
    const topPos = (sHeight - popUpHeight) /2;

    heart.style.left = `${leftPos}px`;
    heart.style.top = `${topPos}px`;
}

centerHeart();
window.addEventListener('resize',centerHeart);

function centerCont() {
    const sWidth2 = window.innerWidth;
    const sHeight2 = window.innerHeight;

    const popUpWidth2 = container.offsetWidth;
    const popUpHeight2 = container.offsetHeight;

    const leftPos2 = (sWidth2 - popUpWidth2) / 2;
    const topPos2 = (sHeight2- popUpHeight2) /2;

    container.style.left = `${leftPos2}px`;
    container.style.top = `${topPos2}px`;
}

centerCont();
window.addEventListener('resize',centerCont);


let clicks = 5;
console.log(clicks)

// function heart() {
    
// }

heart.addEventListener('click', function() {
   
        if (clicks <= 0) {
        
            heart.style.display="none";
            container.style.display="block";
            bg.style.display = "block";
            restart.style.display="block";

            //body.style.backgroundImage= "url('gif.gif')";


        } else {
            //container.style.visibility="hidden";
            const screenWidth = window.innerWidth - 200;
            const screenHeight = window.innerHeight - 200;
            const randPosX = Math.floor(Math.random() * screenWidth);
            const randPosY = Math.floor(Math.random() * screenHeight);
            heart.style.left = `${randPosX}px`;
            heart.style.top = `${randPosY}px`;
            
            clicks--;
        }
   
});

restart.addEventListener('click', function() {
    clicks=5;
    
    heart.style.display="block";
   
    container.style.display="none";
    bg.style.display = "none";
    restart.style.display="none";


})






