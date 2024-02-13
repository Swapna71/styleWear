let search=document.querySelector('.searchbar');
document.querySelector('#search').onclick = () =>{
    search.classList.toggle('active');
    favourate.classList.remove('active');
checkout.classList.remove('active');
login.classList.remove('active');
}

let favourate=document.querySelector('.favourate');
document.querySelector('#favourate').onclick = () =>{
    favourate.classList.toggle('active');
    search.classList.remove('active');
checkout.classList.remove('active');
login.classList.remove('active');
}

let checkout=document.querySelector('.checkout');
document.querySelector('#checkout').onclick = () =>{
    checkout.classList.toggle('active');
    search.classList.remove('active');
favourate.classList.remove('active');
login.classList.remove('active');
}

let login=document.querySelector('.login');
document.querySelector('#login').onclick = () =>{
    login.classList.toggle('active');
    search.classList.remove('active');
favourate.classList.remove('active');
checkout.classList.remove('active');
}


window.onscroll =()=>{
search.classList.remove('active');
favourate.classList.remove('active');
checkout.classList.remove('active');
login.classList.remove('active');

}
console.log('swapna')