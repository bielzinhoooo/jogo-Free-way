//variaveis dos carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let veloCarros = [5, 4.3, 3.5, 3.2, 3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {

  for (let i = 0; i < imagemCarros.length; i++) {

    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);

  }

}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    xCarros[i] -= veloCarros[i];
  }
}

function voltarPosicaoInicial(params) {
  for (let i = 0; i < imagemCarros.length; i++) {

    if (passouCarroDaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }


}

function passouCarroDaTela(xCarro) {
  return xCarro < -50;
}