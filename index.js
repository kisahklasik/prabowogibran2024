const main = document.getElementById('root');

const externalHTML = `
<header></header>
<main>
<h1>PRABOWO - GIBRAN CAPRES DAN CAWAPRES 2024</h1>
<hr>
<p><b>Yuk, nyoblos!</b> bersama netizen siap menangkan Prabowo - Gibran terpilih menjadi Presiden dan Wakil Presiden 2024.</p>
<p>Masukan foto terbaik Anda! selanjutnya <b>Pilih file</b> lalu klik <b>Buat</b> kemudian <b>Download</b>. dan pasang twibbon di media sosial Anda.</p>

<p>
<img id="preview" src="no_image.png"/>
<img id="twibbon" src="frame.png" style="display: none"/>
<canvas id="cvs" style="display: none">
</p>

<p>Pastikan gambar yang di upload memiliki ukuran.</p>

<p>
<input type="file" id="fileInput" accept="image/png, image/jpeg" hidden/>
<label class="btn black" for="fileInput">Pilih file</label>
<button style="font-family:Inconsolata;" class="btn blue" id="dpwload" onclick="drawImage()">Buat</button>
<a class="btn" href="#" id="dpwload2" download="download.png" style="display: none; color:white;">Download</a>
</p>
</main>
<footer>
<p>Dibuat dengan ☕ dan <a href="https://www.facebook.com/bungferry.wa">Ferry Ayunda</a></p>
</footer>`;
// shows the alert
main.innerHTML = externalHTML;
