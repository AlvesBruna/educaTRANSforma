const {calculaConsumo, alcoolOuGasolina} = require('./calculaConsumo')

test('retorna a média de consumo por distancia percorrida', () => {
    const distanciaPercorrida = 480
    const capacidadeDoTanque = 40

    const resultado = calculaConsumo(distanciaPercorrida, capacidadeDoTanque)

    expect(resultado).toBe(12)
})

test('retorna "gasolina" quando a média do combustivel é menor do que alcool', () => {
    const distanciaPercorridaComGasolina = 400
    const distanciaPercorridaComAlcool = 480
    const capacidadeDoTanque = 40

    const result = alcoolOuGasolina(distanciaPercorridaComGasolina, distanciaPercorridaComAlcool, capacidadeDoTanque)

    expect(result).toBe('gasolina')
})

test('retorna "alcool" quando a média do combustivel é menor do que gasolina', () => {
    const distanciaPercorridaComGasolina = 480
    const distanciaPercorridaComAlcool = 300
    const capacidadeDoTanque = 40

    const result = alcoolOuGasolina(distanciaPercorridaComGasolina, distanciaPercorridaComAlcool, capacidadeDoTanque)

    expect(result).toBe('alcool')
})
