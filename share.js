let shareData = {
title: 'PRABOWO - GIBRAN CAPRES DAN CAWAPRES 2024',
text: 'Yuk, nyoblos! bersama netizen siap menangkan Prabowo - Gibran terpilih menjadi Presiden dan Wakil Presiden 2024.',
url: 'https://prabowogibrans02.vercel.app/',
}

const btn = document.querySelector('span');
const resultPara = document.querySelector('.result');

btn.addEventListener('click', () => {
navigator.share(shareData)
.then(() =>
resultPara.textContent = 'Twibbon berhasil dibagikan'
)
.catch((e) =>
resultPara.textContent = 'Error: ' + e
)
});
