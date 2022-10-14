
const boxes = document.querySelectorAll('div.box');
const board = [[-1, -1, -1],[-1, -1, -1],[-1, -1, -1]];
const played = [false, false, false, false, false, false, false, false, false, false];
const resetBtn = document.querySelector('#reset');
let gameOver = false;
let lastPlayed = 0;//! 1 = X, 0 = O

const checkPlayedBefore = (id) => {
  let index = id[3];
  if (played[index]) {
    return true;
  }
  return false;
};

const countMove = (id, move) => {
  switch(id) {
    case 'box1':
      board[0][0] = move;
      played[1] = true;
      break;
    case 'box2':
      board[0][1] = move;
      played[2] = true;
      break;
    case 'box3':
      board[0][2] = move;
      played[3] = true;
      break;
    case 'box4':
      board[1][0] = move;
      played[4] = true;
      break;
    case 'box5':
      board[1][1] = move;
      played[5] = true;
      break;
    case 'box6':
      board[1][2] = move;
      played[6] = true;
      break;
    case 'box7':
      board[2][0] = move;
      played[7] = true;
      break;
    case 'box8':
      board[2][1] = move;
      played[8] = true;
      break;
    case 'box9':
      board[2][2] = move;
      played[9] = true;
      break;
  }
};

const play = (target, id) => {
  if(lastPlayed === 0) {
    countMove(id, 1);
    lastPlayed = 1;
    const btnX = document.createElement('button');
    btnX.textContent = 'X';
    btnX.style.color = 'purple';
    btnX.setAttribute('disabled', 'true');
    target.append(btnX);
  }
  else {
    countMove(id, 0);
    lastPlayed = 0;
    const btnO = document.createElement('button');
    btnO.textContent = 'O';
    btnO.style.color = 'red';
    btnO.setAttribute('disabled', 'true');
    target.append(btnO);
  }
}

const checkTie = () => {
  let counter = 0;
  for (let i = 1; i < played.length; i++) {
    if (played[i]) {
      counter += 1;
    }
  }

  if (counter == played.length - 1) {
    return true; //* draw
  }
  return false; //* no draw
};

const checkWinner = (arr) => {
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

  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] == 1) {
      xcount += 1;
    }
    else if(arr[0][i] == 0) {
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
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[1][i] == 1) {
      xcount += 1;
    }
    else if(arr[1][i] == 0) {
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
  for (let i = 0; i < arr[2].length; i++) {
    if (arr[2][i] == 1) {
      xcount += 1;
    }
    else if(arr[2][i] == 0) {
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

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 1) {
      xcount += 1;
    }
    else if(arr[i][0] == 0) {
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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] == 1) {
      xcount += 1;
    }
    else if(arr[i][1] == 0) {
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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][2] == 1) {
      xcount += 1;
    }
    else if(arr[i][2] == 0) {
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

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] == 1) {
      xcount += 1;
    }
    else if(arr[i][i] == 0) {
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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][arr.length - i - 1] == 1) {
      xcount += 1;
    }
    else if(arr[i][arr.length - i - 1] == 0) {
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

  for(let i = 1; i < played.length; i++) {
    played[i] = false;
  }

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      board[i][j] = -1;
    }
  }

  lastPlayed = 0;

  gameOver = false;

  const winMsgX = document.querySelector('#labelx');
  winMsgX.style.visibility = 'hidden';

  const winMsgO = document.querySelector('#labelo');
  winMsgO.style.visibility = 'hidden';

  const tieMsg = document.querySelector('#labelTie');
  tieMsg.style.visibility = 'hidden';
};

boxes.forEach((box) => {
    box.addEventListener('click', (event) => {

      if(gameOver) { return; } 

      const target = event.target;
      const id = target.id;

      if(checkPlayedBefore(id)) { return; }

      play(target, id);

      const checkWin = checkWinner(board); //* to call the function once not twice in the two ifs

      if(checkWin == 1) {
        const winMsg = document.querySelector('#labelx');
        winMsg.style.visibility = 'visible';
        gameOver = true;
      }
      else if(checkWin == 0) {
        const winMsg = document.querySelector('#labelo');
        winMsg.style.visibility = 'visible';
        gameOver = true;
      }else if(checkTie()) {
        const tieMsg = document.querySelector('#labelTie');
        tieMsg.style.visibility = 'visible';
        gameOver = true;
      }

      event.preventDefault();
    },
    {
        capture : true
    });
});

resetBtn.addEventListener('click', reset);