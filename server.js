const express = require('express');
const Converter = require("./converter")

const port = 8081

const app = express()

app.get("/hexToRgb", (req, res) => {
    let hex = req.query.hex
    let alpha = req.query.alpha
    let rgb = Converter.hexToRGB(`#${hex}`, alpha)
    res.send(`hex: ${hex} to ${rgb}` )
            
})

app.get("/rgbToHex", (req, res) => {
    let red = parseInt(req.query.red)
    let green = parseInt(req.query.green)
    let blue = parseInt(req.query.blue)
    let hex = Converter.RGBToHex(red, green, blue)
    res.send(`rgb: (${red}, ${green}, ${blue}) to hex: ${hex}`)
})

app.listen(port || 3000, () => {
    console.log(`Servidor rodando na porta ${port || 3000}`);
})