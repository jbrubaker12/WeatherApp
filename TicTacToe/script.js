var xFirst = false
var yFirst = false
var player1 = null
var player2 = null

function getBoardValues() {
    var board = {
        1:[document.getElementById("top-left-value").innerHTML,document.getElementById("top-mid-value").innerHTML,document.getElementById("top-right-value").innerHTML],
        2:[document.getElementById("mid-left-value").innerHTML,document.getElementById("mid-value").innerHTML,document.getElementById("mid-right-value").innerHTML],
        3:[document.getElementById("bottom-left-value").innerHTML,document.getElementById("bottom-mid-value").innerHTML,document.getElementById("bottom-right-value").innerHTML]
    }
    return board
}


function checkForWin(board) {
    var boardRowOne = board[1];
    var boardRowTwo = board[2];
    var boardRowThree = board[3];
    var boardColOne = [boardRowOne[0],boardRowTwo[0],boardRowThree[0]];
    var boardColTwo = [boardRowOne[1],boardRowTwo[1],boardRowThree[1]];
    var boardColThree = [boardRowOne[2],boardRowTwo[2],boardRowThree[2]]
    if (boardRowOne[0] == 'X' && boardRowOne[1] == 'X' && boardRowOne[2] == 'X') {
	    return "X wins"
    } else if (boardRowTwo[0] == 'X' && boardRowTwo[1] == 'X' && boardRowTwo[2] == 'X') {
	    return "X wins"
    } else if (boardRowThree[0] == 'X' && boardRowThree[1] == 'X' && boardRowThree[2] == 'X') {
	    return "X wins"
    } else if  (boardRowOne[0] == 'O' && boardRowOne[1] == 'O' && boardRowOne[2] == 'O') {
	    return "O wins"
    } else if (boardRowTwo[0] == 'O' && boardRowTwo[1] == 'O' && boardRowTwo[2] == 'O') {
	    return "O wins"
    } else if (boardRowThree[0] == 'O' && boardRowThree[1] == 'O' && boardRowThree[2] == 'O') {
	    return "O wins"
    } else {
        return "No one Wins"
    }

};

function main() {  
    var board = getBoardValues();
    if (checkForWin(board) == "X wins") {
        console.log("X") //Need code here to end the game if X wins
    } else if (checkForWin(board) == "O wins") {
        console.log("O") //Need code here to end the game if O wins
    }
};

function xClicked() {
    document.getElementById("x-or-y-container").innerHTML="";
    player1 = "X";
    player2 = "Y";
    main()
};

function yClicked() {
    document.getElementById("x-or-y-container").innerHTML="";
    player1 = "Y";
    player2 = "X";
    main()
};

function handleUserClick() {

}
