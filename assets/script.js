document.addEventListener('DOMContentLoaded', function() {
    const microplastico = document.getElementById('microplastico');
    const btnIniciar = document.getElementById('btn-iniciar');
    const btnResetar = document.getElementById('btn-resetar');
    
    const posicoes = [
        { left: '10%', top: '20%' },
        { left: '30%', top: '60%' },
        { left: '50%', top: '20%' },
        { left: '70%', top: '60%' },
        { left: '90%', top: '20%' }
    ];
    
    let animacaoAtiva = false;
    let etapaAtual = 0;
    
    function animarMicroplastico() {
        if (etapaAtual >= posicoes.length) return;
        
        microplastico.style.transition = 'all 2s ease-in-out';
        microplastico.style.left = posicoes[etapaAtual].left;
        microplastico.style.top = posicoes[etapaAtual].top;
        
        etapaAtual++;
        
        if (etapaAtual < posicoes.length) {
            setTimeout(animarMicroplastico, 2200);
        } else {
            animacaoAtiva = false;
        }
    }
    
    btnIniciar.addEventListener('click', function() {
        if (!animacaoAtiva) {
            animacaoAtiva = true;
            etapaAtual = 0;
            microplastico.style.left = '10%';
            microplastico.style.top = '20%';
            setTimeout(animarMicroplastico, 100);
        }
    });
    
    btnResetar.addEventListener('click', function() {
        microplastico.style.transition = 'none';
        microplastico.style.left = '10%';
        microplastico.style.top = '20%';
        etapaAtual = 0;
        animacaoAtiva = false;
    });
    
    const opcoes = document.querySelectorAll('.opcao');
    const btnVerificar = document.getElementById('btn-verificar');
    const resultado = document.getElementById('resultado');
    const pontuacao = document.getElementById('pontuacao');
    const feedback = document.getElementById('feedback');
    
   const respostasCorretas = {
        pergunta1: 'b',
        pergunta2: 'c',
        pergunta3: 'c'
    };
    
    opcoes.forEach(opcao => {
        opcao.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.querySelectorAll('.opcao').forEach(op => {
                op.classList.remove('selecionada');
            });
            
            this.classList.add('selecionada');
            this.dataset.selecionada = 'true';
        });
    });
    
    btnVerificar.addEventListener('click', function() {
        let acertos = 0;
        
        for (let i = 1; i <= 3; i++) {
            const pergunta = document.getElementById(`pergunta${i}`);
            const opcaoSelecionada = pergunta.querySelector('.opcao.selecionada');
            
            if (opcaoSelecionada && opcaoSelecionada.dataset.resposta === respostasCorretas[`pergunta${i}`]) {
                acertos++;
                opcaoSelecionada.style.backgroundColor = '#a5d6a7';
            } else if (opcaoSelecionada) {
                opcaoSelecionada.style.backgroundColor = '#ef9a9a';
            }
        }
        
        pontuacao.textContent = `Você acertou ${acertos} de 3 perguntas.`;
        
        if (acertos === 3) {
            feedback.textContent = 'Parabéns! Você é um expert em microplásticos!';
            feedback.style.color = '#2e7d32';
        } else if (acertos >= 1) {
            feedback.textContent = 'Bom trabalho! Continue aprendendo sobre esse importante tema.';
            feedback.style.color = '#1a6ca6';
        } else {
            feedback.textContent = 'Que tal revisar o conteúdo e tentar novamente?';
            feedback.style.color = '#d32f2f';
        }
        
        resultado.style.display = 'block';
        resultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
