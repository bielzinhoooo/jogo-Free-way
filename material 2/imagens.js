//imagens 
let imagemEstrada;
let imagemAtor;
let imagemCarro;
// sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;
//imagens carros
let imagemCarro2;
let imagemCarro3;
let imagemCarros;
function preload() {
    imagemEstrada = loadImage("images/estrada.png");
    imagemAtor = loadImage("images/ator-1.png");
    imagemCarro = loadImage("images/carro-1.png");
    imagemCarro2 = loadImage("images/carro-2.png");
    imagemCarro3 = loadImage("images/carro-3.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,imagemCarro,imagemCarro2,imagemCarro3]

    somDaTrilha = loadSound("sons/trilha.mp3");
    somDaColisao = loadSound("sons/colidiu.mp3");
    somDoPonto = loadSound("sons/pontos.wav")
}