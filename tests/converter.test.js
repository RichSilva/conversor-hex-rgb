const { assert } = require('chai')

const Converter = require("../converter")

describe("Convertendo cores hexadecimal para rgb", () => {
    
    it("Sucesso ao converter rgb", () => {
        const valorEsperado = "rgb(255, 255, 255)"
        const resultado = Converter.hexToRGB("#FFFFFF")
        assert.equal(resultado, valorEsperado)
    })

    it("Sucesso ao converter rgba", () => {
        const valorEsperado = "rgba(255, 255, 255, 0.5)"
        const resultado = Converter.hexToRGB("#FFFFFF", 0.5)
        assert.equal(resultado, valorEsperado)
    })

})

describe("Convertendo cores rgb para hexadecimal", () => {
    it("Sucesso ao converter hexadecimal", () => {
        const valorEsperado = "#000000"
        const resultado = Converter.RGBtoHex(0, 0, 0)
        assert.equal(resultado, valorEsperado)
    })
})