const { gets, print } = require('./funcoes_auxilixares');

const map = {
    "I": 1, 
    "V": 5, 
    "X": 10, 
    "L": 50, 
    "C": 100, 
    "D": 500, 
    "M": 1000
}

  const numeroRomano = gets();
  print(romanoParaInt(numeroRomano));

function romanoParaInt(s) {
    
    let contador = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I" && s[i + 1] === "V") {
            contador += 4;
            i++;
        } else if (s[i] === "I" && s[i + 1] === "X") {
            contador += 9;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "L") {
            contador += 40;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "C") {
            contador += 90;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "D") {
            contador += 400;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "M") {
            contador += 900;
            i++;
        } else {
            contador += map[s[i]];
        }
    }
    return contador;
  }