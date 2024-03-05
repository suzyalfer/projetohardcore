//alert('JS CARREGADO');

//Seleção de DOM

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');
var btnPop = document.querySelector('.btn-pop');
var pop = document.querySelector('.pop');



//console.log(btnMenu);
//console.log(menu);

//Eventos (são ações geralmente causadas pelo usuário)


/*
function boasVindas(){

    alert('Olá');
}

btnMenu.addEventListener('click', boasVindas);

btnMenu.addEventListener('click', function(){
    alert('olá2');

});
*/

btnMenu.addEventListener('click', function(){

    //add ou remove a classe menu-open
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
    
    
})

menu.addEventListener('click', function(){

    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
       
    
})

/*
btnPop.addEventListener('click', function(){

    pop.classList.replace('pop','d-none');
       
    
})

*/

/*btnPop.addEventListener('click', function(){

    pop.classList.add('d-none');    
    
})*/

btnPop.addEventListener('click', function(){

    pop.style.display = 'none';
    
})

