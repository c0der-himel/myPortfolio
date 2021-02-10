const all = document.getElementById('all');
const full = document.getElementById('full');
const front = document.getElementById('front');
const back = document.getElementById('back');
const allP = document.querySelectorAll('.all');
const fullP = document.querySelectorAll('.full');
const frontP = document.querySelectorAll('.front');
const backP = document.querySelectorAll('.back');

all.addEventListener('click', function (e) {
  for (let i = 0; i < allP.length; i++) {
    allP[i].classList.remove('d-none');
    allP[i].classList.add('d-block', 'animate__zoomIn');
  }
});

front.addEventListener('click', function (e) {
  for (let i = 0; i < frontP.length; i++) {
    frontP[i].classList.remove('d-none');
    frontP[i].classList.add('d-block', 'animate__zoomIn');
  }
  for (let i = 0; i < fullP.length; i++) {
    fullP[i].classList.add('d-none', 'animate__zoomIn');
  }
  for (let i = 0; i < backP.length; i++) {
    backP[i].classList.add('d-none', 'animate__zoomIn');
  }
});

back.addEventListener('click', function (e) {
  for (let i = 0; i < backP.length; i++) {
    backP[i].classList.remove('d-none');
    backP[i].classList.add('d-block', 'animate__zoomIn');
  }
  for (let i = 0; i < frontP.length; i++) {
    frontP[i].classList.add('d-none', 'animate__zoomIn');
  }
  for (let i = 0; i < fullP.length; i++) {
    fullP[i].classList.add('d-none', 'animate__zoomIn');
  }
});

full.addEventListener('click', function (e) {
  for (let i = 0; i < fullP.length; i++) {
    fullP[i].classList.remove('d-none');
    fullP[i].classList.add('d-block', 'animate__zoomIn');
  }
  for (let i = 0; i < frontP.length; i++) {
    frontP[i].classList.add('d-none', 'animate__zoomIn');
  }
  for (let i = 0; i < backP.length; i++) {
    backP[i].classList.add('d-none', 'animate__zoomIn');
  }
});
