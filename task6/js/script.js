let lis = document.getElementsByTagName('li'),
    uls = document.getElementsByClassName('menu'),
    li = document.createElement('li'),
    title = document.getElementById('title'),
    columns = document.querySelectorAll('.column'),
    advantage = document.querySelector('.adv'),
    answer = document.getElementById('prompt');
uls[0].insertBefore(lis[2],lis[1]);
li.classList.add('menu-item');
uls[0].appendChild(li);
li.innerHTML = 'Пятый пункт';
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
title.textContent = 'Мы продаем только подлинную технику Apple';
columns[1].removeChild(advantage);
answer.textContent = prompt('Ваше отношение к технике apple');


