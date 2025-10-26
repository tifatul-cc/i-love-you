const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");

// Tombol "No" akan kabur saat disorot
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  const newY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Klik "Yes" akan tampil hasil cinta 🥰
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  resultContainer.style.display = "block";
});
