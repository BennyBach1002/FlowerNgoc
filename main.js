onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

function updateText(text) {
  let delay = 200;

  let h1 = document.getElementById("animated");

  h1.innerHTML = text
    .split("")
    .map((letter) => {
      console.log(letter);
      return `<span>` + letter + `</span>`;
    })
    .join("");

  Array.from(h1.children).forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("wavy");
    }, index * 60 + delay);
  });
}

document.getElementById("textField").addEventListener("input", (event) => {
  updateText(event.target.value);
});

updateText("Ngọc Happy 20-10");
