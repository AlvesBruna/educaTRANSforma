const play = require('./rock-paper-scissors')

test('when rock vs scissors then rock wins', () => {
    const player1 = 'rock'
    const player2 = 'scissors'
    const result = play(player1, player2)

    expect(result).toBe(player1)
})

test('when both players use the same value returns tie', () => {
    const player1 = 'rock'
    const player2 = 'rock'
    const result = play(player1, player2)

    expect(result).toBe('tie')
})