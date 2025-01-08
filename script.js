
var time = 60;
var score = 0;
var hitrn = 0;
var timer;

function makeBubble() {
    let clutter = "";

for(var i=1;i<=153;i++)
{
    var randomNumber = Math.floor(Math.random() * 10);
    clutter +=  `<div class="bubble">${randomNumber}</div>`;
}

document.querySelector("#game-area").innerHTML = clutter;

}

function remarks() {
    if(score > 120 || score < 300)
    {
        document.querySelector("#scores").textContent = `Great job 👌! You have scored ${score} points (AVG). `;
    }
    else if (score > 300)
    {
        document.querySelector("#scores").textContent = `Congratulations 🥳! You have scored ${score} points (PRO).`;
    }
    else
    {
        document.querySelector("#scores").textContent = `Oops 😥! You have scored ${score} points (NOOB).`;
    }
}


function setTimer() {

    clearInterval(timer);
    
    timer = setInterval(function() {
        if(time > 0) 
        {
            time--;
            document.querySelector("#timeVal").textContent = time;
        } else {
            clearInterval(timer);
            remarks();
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#newHit").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#game-area").addEventListener("click", (dets) => {
    var clickedNum = Number(dets.target.textContent);
    if(time > 0)
    {
        if(clickedNum === hitrn)
            {
                increaseScore();
                getNewHit();
                makeBubble();
            }
    }
})

function resetGame() {
    
    time = 60;
    score = 0;

    document.querySelector("#scoreVal").textContent = score;
    document.querySelector("#timeVal").textContent = time;
    document.querySelector("#scores").textContent = "";

    setTimer();

    makeBubble();

    getNewHit();
}

document.querySelector("#reset").addEventListener("click", resetGame);

setTimer();

makeBubble();

getNewHit();



