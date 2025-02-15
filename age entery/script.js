const mtText = document.getElementById("mtText");;
const subBtn = document.getElementById("subBtn");
const statuesP = document.getElementById("statuesP");
let msge;


subBtn.onclick = function(){
    
    let age = Number(mtText.value)

    if(isNaN(age)){
        statuesP.textContent = "Pleas Enter a number";
    }
    else if(age < 0) {
        statuesP.textContent = "You can't be less than 0";
    }
    else if(age == 0) {
        statuesP.textContent = "You can't 0";
    }
    else if(age > 0 && age < 18 ) {
        statuesP.textContent = "You can't be less than 18 to Enter this site";
    }
    else if(age >= 18) {
        statuesP.textContent = "you can Enter this site";
    }
    else if(age <= 60) {
        statuesP.textContent = "you are to old to Enter this site";
    }

}