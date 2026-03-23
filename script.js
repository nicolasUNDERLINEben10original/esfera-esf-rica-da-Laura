const esfera = document.getElementById('minhaEsfera');

/**
 * Gera um gradiente radial com uma cor HSL aleatória
 */
function gerarCorAleatoria() {
    // Matiz (hue) aleatório entre 0 e 360
    const matiz = Math.floor(Math.random() * 360);
    
    // Retorna o gradiente mantendo o ponto de luz branco e a base escura
    return `radial-gradient(circle at 30% 30%, white, hsl(${matiz}, 70%, 50%), #000)`;
}

// Evento disparado quando o mouse entra na esfera
esfera.addEventListener('mouseenter', () => {
    esfera.style.background = gerarCorAleatoria();
});