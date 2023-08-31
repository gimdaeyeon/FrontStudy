"use strick";

const circle = document.getElementById('circle');

// document.addEventListener('mousemove',(e)=>{
//   const mouseX = e.clientX;
//   const mouseY =e.clientY;

//   circle.style.left = mouseX+'px';
//   circle.style.top = mouseY+'px';
// });

const font = document.getElementById('font');
const container = document.getElementById('container');

document.addEventListener('mouseover', (e)=>{
    const mouseX = e.clientX;
    const mouseY =e.clientY;

    // header 높이가 48px(rem) 이상일 때만
    // 해상도가 1800px 이하일 때만
    if(mouseY > 48 && mouseX < 1800){
      // 보이게 하고, 따라오게 해라
      font.style.display = 'block';
      font.style.left = mouseX+'px';
      font.style.top = mouseY+'px';
    }else{
      // 안보이게해라
      font.style.display = 'none';
    }

});

container.addEventListener('click',()=>{
  console.log(font);
  if(font.innerText === 'Pause'){
    font.innerText = 'Play';
  }else{
    font.innerText = 'Pause';
  }


})




