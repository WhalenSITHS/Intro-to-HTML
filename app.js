function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );
}

btn.addEventListener("click", function () {
  x++;
  rgb();
});

//make 1 html card, comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons
