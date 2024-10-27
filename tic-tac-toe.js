document.addEventListener('DOMContentLoaded',function(){
  //Showing game board
  let squares=document.querySelectorAll('#board div')

  squares.forEach(square=>{
    square.classList.add('square')
  });

  //Abilty to play X or O on click
  let gameTracker = Array(9).fill(null);
  let currentPlayer = 'O';

  squares.forEach((square,index)=>{
    square.addEventListener('click',function(){
      if (gameTracker[index]===null)
        {
          gameTracker[index]=currentPlayer;
          square.innerHTML=currentPlayer;
          square.classList.add(currentPlayer);

          checkWinner();

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

  //Implementing hover style change
  squares.forEach((square)=>{
    square.addEventListener('mouseenter',function(){
      square.classList.add('hover')
    });

    square.addEventListener('mouseleave',function(){
      square.classList.remove('hover')
    });
  });

  const statusID = document.getElementById('status');
  let winnerFound=false

  //Function checking for winner
  function checkWinner(){
    if (winnerFound===false){
      if (
        (gameTracker[0] && gameTracker[0] === gameTracker[1] && gameTracker[1] === gameTracker[2]) || 
        (gameTracker[3] && gameTracker[3] === gameTracker[4] && gameTracker[4] === gameTracker[5]) || 
        (gameTracker[6] && gameTracker[6] === gameTracker[7] && gameTracker[7] === gameTracker[8]) ||
        (gameTracker[0] && gameTracker[0] === gameTracker[3] && gameTracker[3] === gameTracker[6]) || 
        (gameTracker[1] && gameTracker[1] === gameTracker[4] && gameTracker[4] === gameTracker[7]) || 
        (gameTracker[2] && gameTracker[2] === gameTracker[5] && gameTracker[5] === gameTracker[8]) || 
        (gameTracker[0] && gameTracker[0] === gameTracker[4] && gameTracker[4] === gameTracker[8]) || 
        (gameTracker[2] && gameTracker[2] === gameTracker[4] && gameTracker[4] === gameTracker[6])    
        ) { 
            statusID.innerHTML = `Congratulations! ${currentPlayer} is the Winner!`;
            statusID.classList.add('you-won');
            winnerFound=true;
          }
    }
  };

  //New Game Reset Button
  const newGame = document.querySelector('.btn');

  newGame.addEventListener('click',function(){
    statusID.classList.remove('you-won')
    statusID.innerHTML= 'Move your mouse over a square and click to play an X or an O.';
    squares.forEach(square=>{
      square.classList.remove('X','O')
      square.innerHTML='';
      gameTracker.fill(null);
      currentPlayer='O'
      winnerFound=false
      
    })
  });
});

