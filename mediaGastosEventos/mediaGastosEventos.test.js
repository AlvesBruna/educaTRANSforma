const calculaMediaGastos = require('./mediaGastosEventos')

test('retorna a média de gastos por evento', () => {
    const gastosNoMes = 300
    const quantidadeDeEventos = 5

    const resultado = calculaMediaGastos(gastosNoMes, quantidadeDeEventos)

    expect(resultado).toBe(60)
})
