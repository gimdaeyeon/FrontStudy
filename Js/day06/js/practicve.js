"use strick";
const bannerBox = document.querySelector('#banner-box > ul');

const bannerItem = document.querySelectorAll('.banner_item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const size = bannerItem[0].clientWidth;
let counter = 0; 

autoSlide();
function autoSlide(){
  setInterval(() => {
    if(counter < bannerItem.length-1){
      counter++;
      bannerBox.style.transform = `translateX(${-size*counter}px)`;  
    }else{
      counter = 0;
      bannerBox.style.transform = `translateX(${-size*counter}px)`;  
    }
  }, 4000);
}

nextBtn.addEventListener('click', ()=>{
  clearInterval(autoSlide);
  if(counter < bannerItem.length-1){
    counter++;
    bannerBox.style.transform = `translateX(${-size*counter}px)`;  
  }else{
    counter = 0;
    bannerBox.style.transform = `translateX(${-size*counter}px)`;  
  }
});

prevBtn.addEventListener('click',()=>{
  if(counter>0){
    counter--;
    bannerBox.style.transform = `translateX(${-size*counter}px)`;  
  }else{
    counter = bannerItem.length-1;
    bannerBox.style.transform = `translateX(${-size*counter}px)`;  
  }
});

const header = document.getElementById('header');
const hideMenu = document.querySelector('.hide-menu');

header.addEventListener('click',()=>{
  if(hideMenu.classList.contains('on')){
    hideMenu.classList.remove('on');
  }else{
    hideMenu.classList.add('on');
  }
});


const circle = document.getElementById('circle');
const mouse = document.getElementById('mouseEvent');

mouse.addEventListener('mousemove', (e)=>{
  const mouseX = e.clientX;
  const mouseY = e.clientY -100;

  circle.style.left = mouseX+'px';
  circle.style.top = mouseY+'px';

});







