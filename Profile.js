function changeTheme() {
  let colors = ["#ffe6e6", "#e6ffe6", "#e6f0ff", "#fff5e6", "#f0e6ff"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}
