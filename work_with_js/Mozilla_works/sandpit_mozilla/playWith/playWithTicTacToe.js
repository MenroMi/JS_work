/*
Assume that the board comes in the form of a 3x3 array, 
where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O".

We want our function to return:

    -1 if the board is not yet finished AND no one has won yet (there are empty spots),
    1 if "X" won,
    2 if "O" won,
    0 if it's a cat's game (i.e. a draw).

    [[0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]]

*/

function tictactoe(board) {

    let b1, b2, b3, b4, b5, b6, b7, b8, b9, sum = 0;
    const arr = board.flat();

    assimitionB(arr);

    function assimitionB(arr) {
        for ( let i = 0; i < arr.length; i++) {
            sum = i;
            switch(sum) {
                case 0:
                    b1 = arr[i];
                    break;
                case 1:
                    b2 = arr[i];
                    break;
                case 2:
                    b3 = arr[i];
                    break;
                case 3:
                    b4 = arr[i];
                    break;
                case 4:
                    b5 = arr[i];
                    break;
                case 5:
                    b6 = arr[i];
                    break;
                case 6:
                    b7 = arr[i];
                    break;
                case 7:
                    b8 = arr[i];
                    break;
                case 8:
                    b9 = arr[i];
                    break;
            }
        }
    }

    function checkOurValue() {



    }


}


tictactoe([[1, 1, 1], [0, 0, 2], [2, 0, 2]]); // 1
// tictactoe([ [ 2, 2, 2 ], [ 0, 1, 1 ], [ 1, 0, 0 ] ]); // 2
// tictactoe([ [ 0, 0, 2 ], [ 0, 0, 0 ], [ 1, 0, 1 ] ]); // -1
// tictactoe([ [ 1, 2, 1 ], [ 1, 1, 2 ], [ 2, 1, 2 ] ]); // 0
// tictactoe([ [ 2, 1, 2 ], [ 2, 1, 1 ], [ 1, 2, 1 ] ]); // 0