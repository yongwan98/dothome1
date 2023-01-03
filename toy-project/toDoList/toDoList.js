let input = document.querySelector('.input');
let button = document.querySelector('.btn');
let ul = document.querySelector('.ul');
let clear = document.querySelector('.clear');
let popUp = document.querySelector('.popupBg');
let accept = document.querySelector('.accept');
let cancle = document.querySelector('.cancle');

button.addEventListener('click', btnEffect);
clear.addEventListener('click', clearEffect);
accept.addEventListener('click', acceptEffect);
cancle.addEventListener('click', cancleEffect);

function btnEffect(e){
  e.preventDefault();

  let li = document.createElement('li');
  let inputBox = input.value;
  let liBox = li.innerHTML = `<div class="textBox">${inputBox}</div><div class="deleteBox">X</div>`;
  
  if(liBox = inputBox){
    ul.appendChild(li);
    input.value = '';
  }

  let deleteBoxs = document.querySelectorAll('.deleteBox');
  let liBoxs = document.querySelectorAll('li');

  // for(let i = 0; i < deleteBoxs.length; i++){
  //   liBoxs[i].addEventListener('click', function(){
  //     deleteBoxs[i].classList.toggle('text');
  //   });
  // }

  for(let i = 0; i < deleteBoxs.length; i++){
    deleteBoxs[i].addEventListener('click', function(){
      liBoxs[i].remove();
    });
  }
}

function clearEffect(){
  let li = document.querySelector('.ul > li');

  if(li){
    popUp.classList.add('active');
  } else {
    popUp.classList.remove('active');
  }
}

function acceptEffect(){
  popUp.classList.remove('active');
  let liAll = document.querySelectorAll('li');

  for(let i = 0; i < liAll.length; i++){
    liAll[i].remove();
  }
}

function cancleEffect(){
  popUp.classList.remove('active');
}