/* let x = document.querySelector(".box");
x.style.backgroundColor = "rgb(255,255,0)";
const header = document.getElementById("color"); */
/* header.style.backgroundColor = "rgb(0,255,0)";
 */
//

function getRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  const box = document.querySelector(".box");
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  header.textContent = `rgb(${r}, ${g}, ${b})`;
}
function inject(item) {
  const box = document.querySelector(".box");
  box.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <h2 class="card-header">${item.name}</h2>
      <img src="" alt="" />
      <p></p>
    </div>`,
  );
}
const header = document.getElementById("color");
let x = 0;
document.getElementById("btn").addEventListener("click", function () {
  getRGB();
  inject("Xiyang");
});

//select the container
//create inject function that takes argument for item
//inject 1 full HTML card into the container
