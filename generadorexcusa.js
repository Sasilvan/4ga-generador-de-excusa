let who = [' Mi gato','Mi compañero/a','Mi abuela','Mi mama'];
let action = ['come','orina','aplasta','rompe'];
let what = ['mi trabajo', 'las llaves', 'el auto' , 'la casa']; 
let when = ['antes de la clase','justo a tiempo','cuando terminé','durante mi almuerzo','mientras rezaba'];


function myexcuse( who, action, what, when){
who_index = Math.floor(Math.random() * 4 );
action_index = Math.floor(Math.random() * 4 );
what_index = Math.floor(Math.random() * 4 );
when_index = Math.floor(Math.random() * 5 );

return who[who_index] + " " + action [action_index] + " " + what [what_index] + " " + when[when_index];
}

function pepito(){
    var excusa= document.getElementById("excuse");
    excusa.innerHTML = myexcuse(who, action,  what, when);
}
window.onload = function(){
  pepito();
}