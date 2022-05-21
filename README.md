# Documentação

## Parte 1 - Converter
- Criação da função que converte Hexadecimal para RGB;
- Criação da função que converte RGB para Hexadecimal;
- Criação dos testes para as duas funções conversoras;

## Parte 2 - Server
- Criação do servidor;
- Criação das rota /rgbToHex;
    Exemplo de como passar os parametros para o conversor:
      Vermelho: /rgbToHex/?red=255&green=0&blue=0
      Resultado esperado: #ff0000
- Criação das rota /hexToRgb;
    Exemplo de como passar os parametros para o conversor:
      sem opacidade:
        Azul: /hexToRgb/?hex=0000ff
        Resultado esperado: rgb(0, 0, 255)
      com opacidade:
        Green: /hexToRgb/?hex=00ff00&alpha=0.5
        Resultado esperado: rgba(0, 255, 0, 0.5)
- Criação dos testes para validação de conexão das rotas.