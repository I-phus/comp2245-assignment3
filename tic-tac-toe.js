document.addEventListener('DOMContentLoaded',function(){
  let squares=document.querySelectorAll('#board div')
  squares.forEach((squares)=>{
  squares.classList.add('square')
  })
});