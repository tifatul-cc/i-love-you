/* Reset */
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; }

/* Background utama */
body {
  font-family: "Poppins", sans-serif;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #0f1750 0%, #2b2f55 60%, #2b1e33 100%);
  overflow: hidden;
  padding: 20px;
}

/* Gambar latar blur */
.bg {
  position: fixed;
  inset: 0;
  background-image: url('bg.png');
  background-size: cover;
  background-position: center;
  filter: blur(6px) brightness(0.45) saturate(0.9);
  transform: scale(1.03);
  z-index: 0;
}

/* Layout kartu utama */
.card-wrap {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

/* Avatar */
.avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 4px solid rgba(255,255,255,0.18);
  padding: 6px;
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  display: grid;
  place-items: center;
  box-shadow: 0 8px 30px rgba(8,8,30,0.6);
  overflow: hidden;
}
.avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }

/* Judul */
.title {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.2px;
  display: flex;
  gap: 8px;
  align-items: center;
}
.title .sparkle { font-size: 18px; color: #ffd9ff; }

/* Kotak pesan */
.message-card {
  width: 100%;
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
  border-radius: 18px;
  padding: 18px;
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(6px);
  box-shadow: 0 10px 30px rgba(6,6,20,0.6);
  position: relative;
}
.message-card::before {
  content: "";
  position: absolute;
  inset: 10px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.06);
  pointer-events: none;
}

/* Teks pesan */
.message-text {
  font-size: 16px;
  line-height: 1.45;
  white-space: pre-line;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}
.line {
  opacity: 0;
  transform: translateY(6px);
  transition: all 450ms cubic-bezier(.2,.9,.2,1);
}
.line.show {
  opacity: 1;
  transform: translateY(0);
}

/* Tombol balas */
.reply-btn {
  margin-top: 14px;
  width: calc(100% - 36px);
  margin-left: 18px;
  margin-right: 18px;
  display: flex;
  justify-content: center;
}
.reply-btn button {
  width: 120px;
  padding: 10px 12px;
  background: linear-gradient(180deg,#ff4d7a,#ff7db3);
  border: none;
  border-radius: 999px;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(255,77,122,0.25);
  cursor: pointer;
}

/* Catatan bawah */
.hint {
  margin-top: 12px;
  color: rgba(255,255,255,0.6);
  font-size: 12px;
  text-align: center;
  opacity: 0.9;
}

/* Responsive */
@media (max-width:420px) {
  .card-wrap { max-width: 360px; gap:14px; }
  .message-text { min-height: 140px; font-size:15px; }
  .avatar { width:84px; height:84px; }
}
