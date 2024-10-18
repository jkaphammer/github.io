const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter your mother's maiden name");
  button.textContent = `Thanks for your bank account information, ${name}'s child`;
}

document.getElementById("clicking").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("clicking").innerHTML = "YOU CLICKED ME!";
const hovering = document.getElementById("hovering");

hovering.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseover target
    event.target.style.color = "blue";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
)};
