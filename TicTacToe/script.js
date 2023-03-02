var currentPlayer= null;
var playersChosen = null;
var board=null;

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
    if (boardRowOne[0] == 'X' && boardRowOne[1] == 'X' && boardRowOne[2] == 'X') {
	    return "X wins"
    } else if (boardRowTwo[0] == 'X' && boardRowTwo[1] == 'X' && boardRowTwo[2] == 'X') {
	    return "X wins"
    } else if (boardRowThree[0] == 'X' && boardRowThree[1] == 'X' && boardRowThree[2] == 'X') {
	    return "X wins"
    } else if (board[1][0] == 'X' && board[2][0] == 'X' && board[3][0] == 'X') {
        return "X wins"
    } else if (board[1][1] == 'X' && board[2][1] == 'X' && board[3][1] == 'X') {
        return "X wins"
    } else if (board[1][2] == 'X' && board[2][2] == 'X' && board[3][2] == 'X') {
        return "X wins"
    } else if (board[1][0] == 'X' && board[2][1] == 'X' && board [3][2] == 'X') {
    	return "X wins"
    } else if (board[1][2] == 'X' && board[2][1] == 'X' && board [3][0] == 'X') {
    	return "X wins"
    } else if (board[1][0] == 'O' && board[2][0] == 'O' && board[3][0] == 'O') {
        return "O wins"
    } else if (board[1][1] == 'O' && board[2][1] == 'O' && board[3][1] == 'O') {
        return "O wins"
    } else if (board[1][1] == 'O' && board[2][1] == 'O' && board[3][1] == 'O') {
        return "O wins"
    } else if (board[1][0] == 'O' && board[2][1] == 'O' && board[3][2] == 'O') {
        return "O wins"
    } else if (board[1][2] == 'O' && board[2][1] == 'O' && board[3][0] == 'O') {
        return "O wins"
    } else if  (boardRowOne[0] == 'O' && boardRowOne[1] == 'O' && boardRowOne[2] == 'O') {
	    return "O wins"
    } else if (boardRowTwo[0] == 'O' && boardRowTwo[1] == 'O' && boardRowTwo[2] == 'O') {
	    return "O wins"
    } else if (boardRowThree[0] == 'O' && boardRowThree[1] == 'O' && boardRowThree[2] == 'O') {
	    return "O wins"
    } else {
        return "No one wins"
    }

};

function main() {  
    board = getBoardValues();
    if (checkForWin(board) == "X wins") {
        console.log("X wins");
        alert("X wins, refresh your browser to play again");
    } else if (checkForWin(board) == "O wins") {
        console.log("O wins");
        alert("O wins, refresh your browser to play again.");
    };
};

function xClicked() {
    document.getElementById("x-or-y-container").innerHTML="";
    currentPlayer = "X"
    playersChosen = true;
};

function yClicked() {
    document.getElementById("x-or-y-container").innerHTML="";
    currentPlayer = "O";
    playersChosen = true;
};

function topLeftClicked() {
    main()
    var notCurrentPlayer = null;
    var tile = board[1][0]
    if (currentPlayer == "X") {
        notCurrentPlayer = "O"
    } else if (currentPlayer == "O") {
        notCurrentPlayer = "X"
    };
    if (tile == "" && tile != currentPlayer && tile != notCurrentPlayer){
        document.getElementById("top-left-value").innerHTML=currentPlayer;
        main()
        currentPlayer = notCurrentPlayer
    } else if (playersChosen != true) {
        alert("You must start the game first before you can play it.")
    } else {
        alert("You need to choose a square that isn't already filled.")
    }
};

function topMidClicked() {
    main()
    var notCurrentPlayer = null;
    var tile = board[1][1]
    if (currentPlayer == "X") {
        notCurrentPlayer = "O"
    } else if (currentPlayer == "O") {
        notCurrentPlayer = "X"
    };
    if (tile == "" && tile != currentPlayer && tile != notCurrentPlayer){
        document.getElementById("top-mid-value").innerHTML=currentPlayer;
        main()
        currentPlayer = notCurrentPlayer
    } else if (playersChosen != true) {
        alert("You must start the game first before you can play it.")
    } else {
        alert("You need to choose a square that isn't already filled.")
    }
}
function topRightClicked() {
    main()
    var notCurrentPlayer = null;
    var tile = board[1][2]
    if (currentPlayer == "X") {
        notCurrentPlayer = "O"
    } else if (currentPlayer == "O") {
        notCurrentPlayer = "X"
    };
    if (tile == "" && tile != currentPlayer && tile != notCurrentPlayer){
        document.getElementById("top-right-value").innerHTML=currentPlayer;
        main()
        currentPlayer = notCurrentPlayer
    } else if (playersChosen != true) {
        alert("You must start the game first before you can play it.")
    } else {
        alert("You need to choose a square that isn't already filled.")
    }
}
function midLeftClicked() {
    main()
    var notCurrentPlayer = null;
    var tile = board[2][0]
    if (currentPlayer == "X") {
        notCurrentPlayer = "O"
    } else if (currentPlayer == "O") {
        notCurrentPlayer = "X"
    };
    if (tile == "" && tile != currentPlayer && tile != notCurrentPlayer){
        document.getElementById("mid-left-value").innerHTML=currentPlayer;
        main()
        currentPlayer = notCurrentPlayer
    } else if (playersChosen != true) {
        alert("You must start the game first before you can play it.")
    } else {
        alert("You need to choose a square that isn't already filled.")
    }
}
function midClicked() {
    main()
    var notCurrentPlayer = null;
    var tile = board[2][1]
    if (currentPlayer == "X") {
        notCurrentPlayer = "O"
    } else if (currentPlayer == "O") {
        notCurrentPlayer = "X"
    };
    if (tile == "" && tile != currentPlayer && tile != notCurrentPlayer){
        document.getElementById("mid-value").innerHTML=currentPlayer;
        main()
        currentPlayer = notCurrentPlayer
    } else if (playersChosen != true) {
        alert("You must start the game first before you can play it.")
    } else {
        alert("You need to choose a square that isn't already filled.")
    }
}
function midRightClicked() {
    main()
    var notCurrentPlayer = null;
    var tile = board[2][2]
    if (currentPlayer == "X") {
        notCurrentPlayer = "O"
    } else if (currentPlayer == "O") {
        notCurrentPlayer = "X"
    };
    if (tile == "" && tile != currentPlayer && tile != notCurrentPlayer){
        document.getElementById("mid-right-value").innerHTML=currentPlayer;
        main()
        currentPlayer = notCurrentPlayer
    } else if (playersChosen != true) {
        alert("You must start the game first before you can play it.")
    } else {
        alert("You need to choose a square that isn't already filled.")
    }
}
function bottomLeftClicked() {
    main()
    var notCurrentPlayer = null;
    var tile = board[3][0]
    if (currentPlayer == "X") {
        notCurrentPlayer = "O"
    } else if (currentPlayer == "O") {
        notCurrentPlayer = "X"
    };
    if (tile == "" && tile != currentPlayer && tile != notCurrentPlayer){
        document.getElementById("bottom-left-value").innerHTML=currentPlayer;
        main()
        currentPlayer = notCurrentPlayer
    } else if (playersChosen != true) {
        alert("You must start the game first before you can play it.")
    } else {
        alert("You need to choose a square that isn't already filled.")
    }
}
function bottomMidClicked() {
    main()
    var notCurrentPlayer = null;
    var tile = board[3][1]
    if (currentPlayer == "X") {
        notCurrentPlayer = "O"
    } else if (currentPlayer == "O") {
        notCurrentPlayer = "X"
    };
    if (tile == "" && tile != currentPlayer && tile != notCurrentPlayer){
        document.getElementById("bottom-mid-value").innerHTML=currentPlayer;
        main()
        currentPlayer = notCurrentPlayer
    } else if (playersChosen != true) {
        alert("You must start the game first before you can play it.")
    } else {
        alert("You need to choose a square that isn't already filled.")
    }
}
function bottomRightClicked() {
    main()
    var notCurrentPlayer = null;
    var tile = board[3][2]
    if (currentPlayer == "X") {
        notCurrentPlayer = "O"
    } else if (currentPlayer == "O") {
        notCurrentPlayer = "X"
    };
    if (tile == "" && tile != currentPlayer && tile != notCurrentPlayer){
        document.getElementById("bottom-right-value").innerHTML=currentPlayer;
        main()
        currentPlayer = notCurrentPlayer
    } else if (playersChosen != true) {
        alert("You must start the game first before you can play it.")
    } else {
        alert("You need to choose a square that isn't already filled.")
    }
}
