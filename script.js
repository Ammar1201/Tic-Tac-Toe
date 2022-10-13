
const boxes = document.querySelectorAll('div.box');
const board = [[-1, -1, -1],[-1, -1, -1],[-1, -1, -1]];
// const board = [[undefined, undefined, undefined],[undefined, undefined, undefined],[undefined, undefined, undefined]];
const played = [false, false, false, false, false, false, false, false, false, false];
let lastPlayed = 0;//1 = X, 0 = O

// console.log(board);

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
    btnX.setAttribute('disabled', 'true');
    target.append(btnX);
  }
  else {
    countMove(id, 0);
    lastPlayed = 0;
    const btnO = document.createElement('button');
    btnO.textContent = 'O';
    btnO.setAttribute('disabled', 'true');
    target.append(btnO);
  }
}

const checkDraw = (arr) => {
  let counter = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     if (arr[i][j] == 1 || arr[i][j] == 0) {
  //       counter += 1;
  //     }
  //   }
  // }
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
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) {
      }
    }
  }
}

boxes.forEach((box) => {
    box.addEventListener('click', (event) => {
      const target = event.target;
      const id = target.id;
      if(checkPlayedBefore(id)) {
        return;
      }
      play(target, id);
      if(checkDraw(board)) {
        console.log('draw');
      }
      // console.log(board);
      // console.log(played);
      // console.log(target.id);
      // console.log(lastPlayed);
      // console.log(target);
      event.preventDefault();
    },
    {
        capture : true
    });
});