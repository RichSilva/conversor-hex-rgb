// conversor hexa para rgb
function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

// console.log(hexToRGB('#FF0000', 0.5)); 
// console.log(hexToRGB('#c3c3c3')); 
// console.log()

// conversor rgb para hexa
function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}
  
function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

// console.log(ConvertRGBtoHex(27, 100, 200));
  

module.exports = {hexToRGB, ConvertRGBtoHex}






