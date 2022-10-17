
const vars = {
  boxes: document.querySelectorAll('div.box'),
  board: [[-1, -1, -1],[-1, -1, -1],[-1, -1, -1]],
  played: [false, false, false, false, false, false, false, false, false, false],
  resetBtn: document.querySelector('#reset'),
  gameOver: false,
  lastPlayed: 0 //! 1 = X, 0 = O
}

const checkPlayedBefore = (id) => {
  let index = id[3];
  if (vars.played[index]) {
    return true;
  }
  return false;
};

const countMove = (id, move) => {
  switch(id) {
    case 'box1':
      vars.board[0][0] = move;
      vars.played[1] = true;
      break;
    case 'box2':
      vars.board[0][1] = move;
      vars.played[2] = true;
      break;
    case 'box3':
      vars.board[0][2] = move;
      vars.played[3] = true;
      break;
    case 'box4':
      vars.board[1][0] = move;
      vars.played[4] = true;
      break;
    case 'box5':
      vars.board[1][1] = move;
      vars.played[5] = true;
      break;
    case 'box6':
      vars.board[1][2] = move;
      vars.played[6] = true;
      break;
    case 'box7':
      vars.board[2][0] = move;
      vars.played[7] = true;
      break;
    case 'box8':
      vars.board[2][1] = move;
      vars.played[8] = true;
      break;
    case 'box9':
      vars.board[2][2] = move;
      vars.played[9] = true;
      break;
  }
};

const play = (target, id) => {
  if(vars.lastPlayed === 0) {
    countMove(id, 1);
    vars.lastPlayed = 1;
    const btnX = document.createElement('button');
    btnX.textContent = 'X';
    btnX.style.color = 'purple';
    btnX.setAttribute('disabled', 'true');
    target.append(btnX);
  }
  else {
    countMove(id, 0);
    vars.lastPlayed = 0;
    const btnO = document.createElement('button');
    btnO.textContent = 'O';
    btnO.style.color = 'red';
    btnO.setAttribute('disabled', 'true');
    target.append(btnO);
  }
}

const checkTie = () => {
  let counter = 0;
  for (let i = 1; i < vars.played.length; i++) {
    if (vars.played[i]) {
      counter += 1;
    }
  }

  if (counter == vars.played.length - 1) {
    return true; //* draw
  }
  return false; //* no draw
};

const checkWinner = () => {
  let xcount = 0;
  let ocount = 0;

  //! --------------------
  /*
    return 1 if x wins
    return 0 if o wins
  */
  //! --------------------

  //! ----------------rows------------------------

  //* First row ---------------------------------

  for (let i = 0; i < vars.board[0].length; i++) {
    if (vars.board[0][i] == 1) {
      xcount += 1;
    }
    else if(vars.board[0][i] == 0) {
      ocount += 1;
    }

    if(xcount == 3) {
      return 1;
    }
    else if(ocount == 3) {
      return 0;
    }
  }

  xcount = 0;
  ocount = 0;

  //* Second row ---------------------------------
  for (let i = 0; i < vars.board[1].length; i++) {
    if (vars.board[1][i] == 1) {
      xcount += 1;
    }
    else if(vars.board[1][i] == 0) {
      ocount += 1;
    }

    if(xcount == 3) {
      return 1;
    }
    else if(ocount == 3) {
      return 0;
    }
  }

  xcount = 0;
  ocount = 0;

  //* Third row ---------------------------------
  for (let i = 0; i < vars.board[2].length; i++) {
    if (vars.board[2][i] == 1) {
      xcount += 1;
    }
    else if(vars.board[2][i] == 0) {
      ocount += 1;
    }

    if(xcount == 3) {
      return 1;
    }
    else if(ocount == 3) {
      return 0;
    }
  }

  xcount = 0;
  ocount = 0;

  //! ----------------columns------------------------

  //* First column -----------------------------------

  for (let i = 0; i < vars.board.length; i++) {
    if (vars.board[i][0] == 1) {
      xcount += 1;
    }
    else if(vars.board[i][0] == 0) {
      ocount += 1;
    }

    if(xcount == 3) {
      return 1;
    }
    else if(ocount == 3) {
      return 0;
    }
  }

  xcount = 0;
  ocount = 0;

  //* Second column ---------------------------------
  for (let i = 0; i < vars.board.length; i++) {
    if (vars.board[i][1] == 1) {
      xcount += 1;
    }
    else if(vars.board[i][1] == 0) {
      ocount += 1;
    }

    if(xcount == 3) {
      return 1;
    }
    else if(ocount == 3) {
      return 0;
    }
  }

  xcount = 0;
  ocount = 0;

  //* Third column ---------------------------------
  for (let i = 0; i < vars.board.length; i++) {
    if (vars.board[i][2] == 1) {
      xcount += 1;
    }
    else if(vars.board[i][2] == 0) {
      ocount += 1;
    }

    if(xcount == 3) {
      return 1;
    }
    else if(ocount == 3) {
      return 0;
    }
  }

  xcount = 0;
  ocount = 0;

  //! ----------------diagonals------------------------

  //? Main diagonal ------------------------------------

  for (let i = 0; i < vars.board.length; i++) {
    if (vars.board[i][i] == 1) {
      xcount += 1;
    }
    else if(vars.board[i][i] == 0) {
      ocount += 1;
    }

    if(xcount == 3) {
      return 1;
    }
    else if(ocount == 3) {
      return 0;
    }
  }

  xcount = 0;
  ocount = 0;

   //? Secondary diagonal -----------------------------
  for (let i = 0; i < vars.board.length; i++) {
    if (vars.board[i][vars.board.length - i - 1] == 1) {
      xcount += 1;
    }
    else if(vars.board[i][vars.board.length - i - 1] == 0) {
      ocount += 1;
    }

    if(xcount == 3) {
      return 1;
    }
    else if(ocount == 3) {
      return 0;
    }
  }

}

const reset = () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.remove();
  });

  for(let i = 1; i < vars.played.length; i++) {
    vars.played[i] = false;
  }

  for(let i = 0; i < vars.board.length; i++) {
    for(let j = 0; j < vars.board[i].length; j++) {
      vars.board[i][j] = -1;
    }
  }

  vars.lastPlayed = 0;

  vars.gameOver = false;

  const winMsg = document.querySelector('#winMsg');
  winMsg.innerText = "Let's see who is better";
  winMsg.style.color = 'cornflowerblue';
};

vars.boxes.forEach((box) => {
    box.addEventListener('click', (event) => {

      if(vars.gameOver) { return; } 

      const target = event.target;
      const targetID = target.id;

      if(checkPlayedBefore(targetID)) { return; }

      play(target, targetID);

      const checkWin = checkWinner(vars.board); //* to call the function once not twice in the two ifs
      const winMsg = document.querySelector('#winMsg');

      if(checkWin == 1) {
        winMsg.innerHTML = 'Player1 Wins - <span style="color: purple;">X</span>';
        winMsg.style.color = 'coral';
        gameOver = true;
      }
      else if(checkWin == 0) {
        winMsg.innerHTML = 'Player2 Wins - <span style="color: red;">O</span>';
        winMsg.style.color = 'coral';
        gameOver = true;
      }else if(checkTie()) {
        winMsg.innerHTML = `You both seem good It's a <span style="color: coral;">TIE</span>`;
        winMsg.style.color = 'cornflowerblue';
        gameOver = true;
      }

      event.preventDefault();
    },
    {
        capture : true
    });
});

vars.resetBtn.addEventListener('click', reset);