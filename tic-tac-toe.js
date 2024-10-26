document.addEventListener('DOMContentLoaded',function(){
  let squares=document.querySelectorAll('#board div')
  squares.forEach((square)=>{
  square.classList.add('square')
  })

  let gameTracker = Array(9).fill(null);
  let currentPlayer = 'O';

  squares.forEach((square,index)=>{
    square.addEventListener('click',function(){
      if (gameTracker[index]===null)
        {
          gameTracker[index]=currentPlayer;
          square.innerHTML=currentPlayer;
          square.classList.add(currentPlayer);

          if (currentPlayer === 'X') 
          {
            currentPlayer = 'O';
          } 
          else 
          {
            currentPlayer = 'X';
          }
        }

    });
  });

  squares.forEach((square)=>{
    square.addEventListener('mouseenter',function(){
        square.classList.add('hover')
    })

    square.addEventListener('mouseleave',function(){
      square.classList.remove('hover')
  })
    
  })
});

