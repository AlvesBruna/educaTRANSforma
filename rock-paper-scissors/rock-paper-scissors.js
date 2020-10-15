function play(player1, player2) { // 'rock' 'paper' 'scissors'
    if (player1 == player2) {
        return 'tie'
    }
    if (player1 == 'rock' && player2 == 'scissors') {
        return player1
    }
}

module.exports = play
