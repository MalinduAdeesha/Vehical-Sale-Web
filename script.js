const car=document.querySelector('.carSection');
const mainWdo=document.querySelector('.homePage');
const carWdo=document.querySelector('.car');
const back=document.querySelector('.homeButton');

car.addEventListener('click',()=>{
    carWdo.style.display="block"
    mainWdo.style.display="none"
})
back.addEventListener('click',()=>{
    carWdo.style.display="none"
    mainWdo.style.display="block"
})