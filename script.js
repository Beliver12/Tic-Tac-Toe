function Gameboard() {
    const board = [];
    for (let i = 0; i < 9; i++) {
      board[i] = [];
      board[i].push(Makecell())
    }
    const getBoard = () => board;
    return { getBoard}
  }
  
  function Makecell() {
    let values = '';
    const addMarker = (function (player) {
      values = player;
      this.mark = values;
    });
    const getValue = () => values;
  
    return {
      addMarker, getValue,
    };
  }
  
  const Createplayers = (name, marker) => {
    const board = Gameboard()
    const getName = () => name;
    const addMarker = () => marker;
    const players = [
      {
        name,
        marker: 'X',
      },
      {
        name,
        marker: 'O',
      },
    ];
    let activePlayer = players[0];
  
    const switchPlayerTurn = () => {
      const playerTurn = document.querySelector('.turn');
      if (activePlayer === players[0]) {
        activePlayer = players[1];
        playerTurn.textContent = `PLAYER: ${activePlayer.name}'s turn..`;
      } else if (activePlayer === players[1]) {
        activePlayer = players[0]
        playerTurn.textContent = `PLAYER: ${activePlayer.name}'s turn..`;
      }
    };
    const getActivePlayer = () => activePlayer;
    const choosePlayerName = () => {
      const playerTurn = document.querySelector('.turn');
      players[0].name = '';
      players[1].name = '';
      players[0].name = prompt("Please enter your name player one");
      players[1].name = prompt("Please enter your name player two");
      
     activePlayer = players[0]
      playerTurn.textContent = `PLAYER: ${activePlayer.name}'s turn..`;
      console.log(players[0], players[1]);
    }
  
    const confirmAction = () => {
        const playerTurn = document.querySelector('.turn');
      const response = confirm("Do you want to play against Ai")
      if(response) {
        players[1].name = 'AI'
        players[0].name = prompt("Please enter your name player one");
        activePlayer = players[0]
        playerTurn.textContent = `PLAYER: ${activePlayer.name}'s turn..`;
      } else {
        choosePlayerName()
      }
    }
  
  
    return {
     addMarker, name, marker, getBoard: board.getBoard, getActivePlayer, switchPlayerTurn, choosePlayerName,  confirmAction
    };
  };
  
  function Createboard() {
    
    const boardDiv = document.querySelector('.board');
    const game = Createplayers();
    
    const board = game.getBoard();
    function updateScreen() {
      if (boardDiv.children) {
      boardDiv.textContent = '';
      game.confirmAction();
      Createboard();
      } else {
        return false;
      }
    }
  
  
        for (let i = 0; i < board.length; i++) {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
       
        cellButton.setAttribute('id', 'cellButton');
        cellButton.setAttribute('value', i);
        boardDiv.appendChild(cellButton);
        }
  
    function controlEvent(e) {
      const winner = document.querySelector('.win');
      const divs = document.getElementsByClassName('cell');
      const activePlayer = game.getActivePlayer();
   
      if (e.target.textContent === '') {
      e.target.textContent = activePlayer.marker;
      let value = e.target.getAttribute('value')
      let val = parseFloat(value);
      value = 0;
  
      board[val][value].addMarker(activePlayer.marker)
      game.switchPlayerTurn();
      {
        const computerChoice = Math.floor(Math.random() * divs.length);
        window.setTimeout( function() {
          const activePlayer = game.getActivePlayer();
          if (activePlayer.name === 'AI') {
          divs[computerChoice].click();
          }
      }, 1000);
      console.log(board);
      }
      (function declareWinner() {
        if ((board[0][0].mark === 'X' 
        && board[1][0].mark === 'X'
        && board[2][0].mark === 'X') 
        || (board[3][0].mark === 'X' 
        && board[4][0].mark === 'X'
        && board[5][0].mark === 'X') 
        || (board[6][0].mark === 'X' 
        && board[7][0].mark === 'X'
        && board[8][0].mark === 'X')
        || (board[0][0].mark === 'X' 
        && board[4][0].mark === 'X'
        && board[8][0].mark === 'X')
        || (board[0][0].mark === 'X' 
        && board[3][0].mark === 'X'
        && board[6][0].mark === 'X')
        || (board[1][0].mark === 'X' 
        && board[4][0].mark === 'X'
        && board[7][0].mark === 'X')
        || (board[2][0].mark === 'X' 
        && board[5][0].mark === 'X'
        && board[8][0].mark === 'X')
        || (board[2][0].mark === 'X' 
        && board[4][0].mark === 'X'
        && board[6][0].mark === 'X')) {
         winner.textContent = (`${activePlayer.name} Win's Play again?`);
         (function disable () {
          for(let i = 0; i < divs.length; i++) {
            divs[i].disabled = true
            board[i][0].mark = '';
          }
        }())
        } else if ((board[0][0].mark === 'O' 
        && board[1][0].mark === 'O'
        && board[2][0].mark === 'O') 
        || (board[3][0].mark === 'O' 
        && board[4][0].mark === 'O'
        && board[5][0].mark === 'O') 
        || (board[6][0].mark === 'O' 
        && board[7][0].mark === 'O'
        && board[8][0].mark === 'O')
        || (board[0][0].mark === 'O' 
        && board[4][0].mark === 'O'
        && board[8][0].mark === 'O')
        || (board[0][0].mark === 'O' 
        && board[3][0].mark === 'O'
        && board[6][0].mark === 'O')
        || (board[1][0].mark === 'O' 
        && board[4][0].mark === 'O'
        && board[7][0].mark === 'O')
        || (board[2][0].mark === 'O' 
        && board[5][0].mark === 'O'
        && board[8][0].mark === 'O')
        || (board[2][0].mark === 'O' 
        && board[4][0].mark === 'O'
        && board[6][0].mark === 'O')) {
          console.log(board)
          winner.textContent = (`${activePlayer.name} Win's Play again?`);
          (function disable () {
           for(let i = 0; i < divs.length; i++) {
             divs[i].disabled = true
             board[i][0].mark = '';
           }
         }())
        } else if ((board[0][0].mark === 'O' 
        && board[1][0].mark === 'X'
        && board[2][0].mark === 'O' && board[3][0].mark === 'X'
        && board[4][0].mark === 'O' && board[5][0].mark === 'X'
        && board[6][0].mark === 'X' && board[7][0].mark === 'O'
        && board[8][0].mark === 'X')
  
        || (board[0][0].mark === 'X' && board[1][0].mark === 'X'
        && board[2][0].mark === 'O' && board[3][0].mark === 'O'
        && board[4][0].mark === 'O' && board[5][0].mark === 'X'
        && board[6][0].mark === 'X' && board[7][0].mark === 'X'
        && board[8][0].mark === 'O')
  
        || (board[0][0].mark === 'X' && board[1][0].mark === 'O'
        && board[2][0].mark === 'X' && board[3][0].mark === 'X'
        && board[4][0].mark === 'O' && board[5][0].mark === 'X'
        && board[6][0].mark === 'O' && board[7][0].mark === 'X'
        && board[8][0].mark === 'O')
  
        || (board[0][0].mark === 'O' && board[1][0].mark === 'X'
        && board[2][0].mark === 'X' && board[3][0].mark === 'X'
        && board[4][0].mark === 'O' && board[5][0].mark === 'O'
        && board[6][0].mark === 'O' && board[7][0].mark === 'X'
        && board[8][0].mark === 'X')
        
        || (board[0][0].mark === 'X' && board[1][0].mark === 'O'
        && board[2][0].mark === 'X' && board[3][0].mark === 'O'
        && board[4][0].mark === 'O' && board[5][0].mark === 'X'
        && board[6][0].mark === 'X' && board[7][0].mark === 'X'
        && board[8][0].mark === 'O')
  
        || (board[0][0].mark === 'X' && board[1][0].mark === 'O'
        && board[2][0].mark === 'X' && board[3][0].mark === 'X'
        && board[4][0].mark === 'O' && board[5][0].mark === 'O'
        && board[6][0].mark === 'O' && board[7][0].mark === 'X'
        && board[8][0].mark === 'X')
  
        || (board[0][0].mark === 'O' && board[1][0].mark === 'X'
        && board[2][0].mark === 'X' && board[3][0].mark === 'X'
        && board[4][0].mark === 'O' && board[5][0].mark === 'O'
        && board[6][0].mark === 'X' && board[7][0].mark === 'O'
        && board[8][0].mark === 'X')
  
        || (board[0][0].mark === 'X' && board[1][0].mark === 'X'
        && board[2][0].mark === 'O' && board[3][0].mark === 'O'
        && board[4][0].mark === 'O' && board[5][0].mark === 'X'
        && board[6][0].mark === 'X' && board[7][0].mark === 'O'
        && board[8][0].mark === 'X')
  
        || (board[0][0].mark === 'X' && board[1][0].mark === 'O'
        && board[2][0].mark === 'X' && board[3][0].mark === 'X'
        && board[4][0].mark === 'X' && board[5][0].mark === 'O'
        && board[6][0].mark === 'O' && board[7][0].mark === 'X'
        && board[8][0].mark === 'O')
  
        || (board[0][0].mark === 'O' && board[1][0].mark === 'X'
        && board[2][0].mark === 'X' && board[3][0].mark === 'X'
        && board[4][0].mark === 'X' && board[5][0].mark === 'O'
        && board[6][0].mark === 'O' && board[7][0].mark === 'O'
        && board[8][0].mark === 'X')
  
        || (board[0][0].mark === 'O' && board[1][0].mark === 'X'
        && board[2][0].mark === 'O' && board[3][0].mark === 'O'
        && board[4][0].mark === 'X' && board[5][0].mark === 'X'
        && board[6][0].mark === 'X' && board[7][0].mark === 'O'
        && board[8][0].mark === 'X')
  
        || (board[0][0].mark === 'X' && board[1][0].mark === 'O'
        && board[2][0].mark === 'O' && board[3][0].mark === 'O'
        && board[4][0].mark === 'X' && board[5][0].mark === 'X'
        && board[6][0].mark === 'X' && board[7][0].mark === 'X'
        && board[8][0].mark === 'O')
  
        || (board[0][0].mark === 'O' && board[1][0].mark === 'X'
        && board[2][0].mark === 'O' && board[3][0].mark === 'X'
        && board[4][0].mark === 'X' && board[5][0].mark === 'O'
        && board[6][0].mark === 'X' && board[7][0].mark === 'O'
        && board[8][0].mark === 'X')
  
        || (board[0][0].mark === 'X' && board[1][0].mark === 'X'
        && board[2][0].mark === 'O' && board[3][0].mark === 'O'
        && board[4][0].mark === 'X' && board[5][0].mark === 'X'
        && board[6][0].mark === 'X' && board[7][0].mark === 'O'
        && board[8][0].mark === 'O')
  
        || (board[0][0].mark === 'X' && board[1][0].mark === 'O'
        && board[2][0].mark === 'X' && board[3][0].mark === 'O'
        && board[4][0].mark === 'X' && board[5][0].mark === 'X'
        && board[6][0].mark === 'O' && board[7][0].mark === 'X'
        && board[8][0].mark === 'O')
  
        || (board[0][0].mark === 'O' && board[1][0].mark === 'O'
        && board[2][0].mark === 'X' && board[3][0].mark === 'X'
        && board[4][0].mark === 'X' && board[5][0].mark === 'O'
        && board[6][0].mark === 'O' && board[7][0].mark === 'X'
        && board[8][0].mark === 'X')
        )
        {
          winner.textContent = 'It\'s a tie Play again?';
          (function disable() {
            for (let i = 0; i < divs.length; i++) {
              divs[i].disabled = true;
              board[i][0].mark = '';
            }
          }())
        }
       }());
      } else {
        const computerChoice = Math.floor(Math.random() * divs.length);
        window.setTimeout( function() {
          const activePlayer = game.getActivePlayer();
          if (activePlayer.name === 'AI') {
          divs[computerChoice].click();
          }
      }, 500);
        return false;
      }
    }
   
  
    boardDiv.addEventListener('click', controlEvent);
   
  
    const winner = document.querySelector('.win');
    winner.addEventListener('click', () => {
      if (winner.textContent) {
        winner.textContent = '';
        updateScreen();
      } else {
        return false;
      }
    });
    window.addEventListener('load', game.confirmAction)
  }
  
  Createboard()