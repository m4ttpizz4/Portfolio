document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const botaoAcao = document.getElementById('botaoAcao');
    if (botaoAcao) {
        botaoAcao.addEventListener('mouseover', () => {
            const textoOriginal = botaoAcao.textContent;
            let intervaloGlitch;

            const aplicarGlitch = () => {
                let textoComGlitch = '';
                for (let i = 0; i < textoOriginal.length; i++) {
                    if (Math.random() < 0.2) {
                        textoComGlitch += String.fromCharCode(33 + Math.floor(Math.random() * 94));
                    } else {
                        textoComGlitch += textoOriginal[i];
                    }
                }
                botaoAcao.textContent = textoComGlitch;
            };

            intervaloGlitch = setInterval(aplicarGlitch, 50);

            botaoAcao.addEventListener('mouseout', () => {
                clearInterval(intervaloGlitch);
                botaoAcao.textContent = textoOriginal;
            }, { once: true });
        });
    }
});