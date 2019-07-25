var arrLeft = [0, -720, -1440, -2160, -2880];
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var box = document.querySelector('.box');
var lis = document.querySelectorAll('.dot li');
var index = 0;
var timer;
//下一张图片
function n() {
  clearInterval(timer)
  index++;
  box.style.left = arrLeft[index] + 'px';
  if (index >= arrLeft.length) {
    index = 0;
    box.style.left = arrLeft[index] + 'px';
  }
  for (var i = 0; i < arrLeft.length; i++) {
    lis[i].className = ''
  }
  lis[index].className = 'act';
  timer = setInterval(n, 2000);
}
//上一张图片
function p() {
  clearInterval(timer)
  index--;
  if (index < 0) {
    box.style.left = arrLeft[arrLeft.length] + 'px';
    index = arrLeft.length - 1;
  }
  box.style.left = arrLeft[index] + 'px';
  for (let i = 0; i < arrLeft.length; i++) {
    lis[i].className = ''
  }
  lis[index].className = 'act';
  timer = setInterval(n, 2000);
}
//点击小圆点跳转至相应图片
for (let j = 0; j < arrLeft.length; j++) {
  lis[j].addEventListener('click', function () {
    clearInterval(timer);
    box.style.left = arrLeft[j] + 'px';
    index = j;
    for (let i = 0; i < arrLeft.length; i++) {
      lis[i].className = '';
    }
    lis[index].className = 'act';
    timer = setInterval(n, 2000);
  });
}
prev.addEventListener('click', p);
next.addEventListener('click', n);
var timer = setInterval(n, 2000);