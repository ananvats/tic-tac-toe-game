const turn_dom= document.querySelector('.turn');
const reset_dom=document.querySelector('.resetBtn');
const grid_dom=document.querySelectorAll('.gridBox');
 

let gameIsLive= true;
let xIsNext= true;




const resetGame= (e) => {
console.log(e);
};

const gridClick= (e) => {
console.log(e);
};





reset_dom.addEventListener('click', resetGame )


 for( const grid_dom of grid_doms){
     grid_dom.addEventListener('click', gridClick)
 }



 
  

