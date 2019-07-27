var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var box = document.querySelector('.box');
var lis = document.querySelectorAll('.dot li');
var index = 0;
var timer;
arr = [0, -700, -1400, -2100];
// 下一张
function n() { 
  clearInterval(timer);
  index++;
  box.style.left = arr[index] + 'px';
  if (index >= arr.length) {
    index = 0;
    box.style.left = arr[index] + 'px';
  }
  for ( var i = 0; i < arr.length; i++) {
    lis[i].className = '';
  }
  lis[index].className = 'current';
  timer = setInterval(n, 2000);
}
//上一张
function p() {
  clearInterval(timer);
  index--;
  if (index < 0) {
    index = arr.length - 1;
    box.style.left = arr[index] + 'px';
  }
  box.style.left = arr[index] + 'px';
  for ( var i = 0; i < arr.length; i++) {
    lis[i].className = '';
  }
  lis[index].className = 'current';
  timer = setInterval(n, 2000);
}
//点击小圆点直接跳转到相应图片
for (var i = 0; i < lis.length; i++) {
  (function(i){ 
    lis[i].addEventListener('click', function () {
      clearInterval(timer);
      box.style.left = arr[i] + 'px';
      for (var j = 0; j < lis.length; j++) {
        lis[j].className = '';
      }
      lis[i].className = 'current';
      timer = setInterval(n, 2000);
    });
    
  })(i);
}
timer = setInterval(n, 2000);
next.addEventListener('click', n);
prev.addEventListener('click', p);
