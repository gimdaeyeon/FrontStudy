"use strict";
const bannerBox = document.querySelector('#bannerBox > ul');
// 배열 반환
const bannerItem = document.querySelectorAll('.banner_item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

//패딩을 호함한 넓이를 가지고오는 기능
// 해당 요소의 길이를 가지고 온다
const size  =bannerItem[0].clientWidth;
let counter = 0;

// addEventListener
// 이벤트를 동작시킨다

// function(){} === ()=>{}
// click, wheel, mouseover, mouseleave, mousedbclick,keypress....

// 1. 처음으로 돌아가기

let banner = setInterval(()=>{
  if(counter < bannerItem.length-1){
    counter++;
    bannerBox.style.transform = "translateX(" + -size*counter + "px)";
  }else if(counter===bannerItem.length-1){
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size*counter + "px)";
  }
},5000);

nextBtn.addEventListener("click", ()=>{
  clearInterval(banner);
  setInterval(()=>{
    if(counter < bannerItem.length-1){
      counter++;
      bannerBox.style.transform = "translateX(" + -size*counter + "px)";
    }else if(counter===bannerItem.length-1){
      counter = 0;
      bannerBox.style.transform = "translateX(" + -size*counter + "px)";
    }
  },5000);

  if(counter < bannerItem.length -1){
    counter++;
    bannerBox.style.transform = "translateX(" + -size*counter + "px)";
  }else if(counter === bannerItem.length-1){
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size*counter + "px)";
  }
});

prevBtn.addEventListener('click',()=>{
  if(counter>0){
    counter--;
    bannerBox.style.transform = 'translateX(' + -size*counter + 'px)';
  }else{
    counter = bannerItem.length-1;
    bannerBox.style.transform = 'translateX(' + -size*counter + 'px)';
  }
});

/*
setInterval : 반복

ex)
setInterval(() => {
  실행할 문장
}, 반복할 시간);
*/ 

setInterval(() => {
  if(counter < bannerItem.length -1){
    counter++;
    bannerBox.style.transform = "translateX(" + -size*counter + "px)";
  }else if(counter === bannerItem.length-1){
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size*counter + "px)";
  }
}, 3000);






