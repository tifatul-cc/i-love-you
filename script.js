// Efek teks muncul perlahan
const lines = document.querySelectorAll('.message-text .line');
let delay = 450;
lines.forEach((el, i) => {
  setTimeout(() => el.classList.add('show'), i * delay);
});

// Musik otomatis (kalau bisa)
const audio = document.getElementById('bgAudio');
audio.volume = 0.45;

function tryPlayAudio() {
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Jika autoplay diblokir, mainkan setelah user klik
      const resumeHandler = () => {
        audio.play().catch(()=>{});
        window.removeEventListener('click', resumeHandler);
        window.removeEventListener('touchstart', resumeHandler);
      };
      window.addEventListener('click', resumeHandler, {passive:true});
      window.addEventListener('touchstart', resumeHandler, {passive:true});
    });
  }
}
tryPlayAudio();

// Tombol "Balas"
const replyBtn = document.getElementById('replyBtn');
replyBtn.addEventListener('click', () => {
  const r = prompt("Tulis balasanmu untuk Mel:");
  if (r && r.trim().length) {
    alert("Terkirim: " + r.trim());
  }
});
