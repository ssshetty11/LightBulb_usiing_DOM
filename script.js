let title = document.querySelector('h1')
let sen = document.querySelector('p')
let b = document.querySelector('.bulb')
let bu = document.querySelector('.button')
let flag = 0;

//making changes to the elements
function makeChanges(){
    
    if(flag === 0){
    flag = 1; 
    title.innerHTML='Bulb is ON';
    sen.innerHTML='Click on switch to switch it off';
    b.style.backgroundColor= "#f7dc6f";
    b.style.boxShadow = ' 0 0 10px 5px #f7dc6f ';
    bu.style.opacity = '1';
    title.style.color = 'white';
    sen.style.color = 'white';

    }
    else{
    flag = 0;
    title.innerHTML='Bulb is OFF';
    sen.innerHTML='Click on switch to switch it on';
    b.style.backgroundColor= "#111";
    b.style.boxShadow = ' none';
    bu.style.opacity = '0.4';
    title.style.color = 'grey';
    sen.style.color = 'grey';
    }
}

//adding eventListener
bu.addEventListener('click',makeChanges)








    
   