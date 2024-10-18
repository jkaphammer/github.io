const btn = document.querySelector("button");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

btn.addEventListener("click", draw)

document.addEventListener
("DOMContentLoaded", () =>{
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;

});
function random(number){
  return Math.floor(Math.random
    () * number);
}
function random2(number){
  return(Math.random() * number);
}

function draw(){
  ctx.clearRect(0,0, canvas.width
  , canvas.height);
  for (let i = 0; i < 100; i++){
    ctx.beginPath();
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    let alpha = random2(1);
    let radius = random(50); // Set a random radius for the circles
    let color = "rgba("+red+","+green+","+blue+","+alpha+")";
    console.log(color);

    let x = random(canvas.width); // Random x position within the canvas
    let y = random(canvas.height); // Random y position within the canvas

    ctx.fillStyle = `rgba(${red}, 5, ${blue}, ${alpha})`;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }

}

// function displayMessage(msgText, msgType) {
//     const body = document.body;

//     const panel = document.createElement("div");
//     panel.setAttribute("class", "msgBox");
//     body.appendChild(panel);

//     const msg = document.createElement("p");
//     msg.textContent = msgText;
//     panel.appendChild(msg);

//     const closeBtn = document.createElement("button");
//     closeBtn.textContent = "x";
//     panel.appendChild(closeBtn);

//     closeBtn.addEventListener("click", () =>
//     panel.parentNode.removeChild(panel),
//     );
//     if (msgType === "warning") {
//         msg.style.backgroundImage = "url(warning.png)";
//         panel.style.backgroundColor = "red";
//       } else if (msgType === "chat") {
//         msg.style.backgroundImage = "url(chat.png)";
//         panel.style.backgroundColor = "aqua";
//       } else {
//         msg.style.paddingLeft = "20px";
//       }
      
// }
  