let main = document.querySelector("#main-c")
let drink = document.querySelector(".drinks")
let dessert = document.querySelector(".dessert")


function mainfunc(){
    main.classList.remove("remove");
    drink.classList.add("remove");
    dessert.classList.add("remove");

}

function drinkfunc(){
    drink.classList.remove("remove");
    main.classList.add("remove");
    dessert.classList.add("remove");
    
}

function dessertfunc(){
    dessert.classList.remove("remove");
    main.classList.add("remove");
    drink.classList.add("remove");
  
}

$('nav a[href*="#"]').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top -100
    }, 1000);
 });

 $('.sticky-flex a[href*="#"]').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top -100
    }, 200);
 });