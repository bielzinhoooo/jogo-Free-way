
//variaveis Ator
let yAtor = 366;
let xAtor = 87;
let colisao = false;
let meusPontos = 0;

 function mostraAtor(){
    image(imagemAtor,xAtor,yAtor,30,30);
 }

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
      yAtor -= 3;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      if (podeSeMover()) {
             yAtor += 3;
      }
    }
}


function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;

      }      
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 366;
}





function incluiPontos() {
  fill(color(255, 0, 0))
  textAlign(CENTER);
  textSize(25);
  text(meusPontos,width / 5, 25);
}

function marcaPonto(params) {
  if (yAtor < 15) {
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
    
  }
}

function pontosMaiorQueZero(params) {
 return meusPontos > 0;
}


function podeSeMover(params) {
  return yAtor < 366;
}