document.addEventListener('DOMContentLoaded', function() {
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
                } else if (acertos >= 1) {
                    feedback.textContent = 'Bom trabalho! Continue aprendendo sobre esse importante tema.';
                } else {
                    feedback.textContent = 'Que tal revisar o conteúdo e tentar novamente?';
                }
                
                resultado.style.display = 'block';
                resultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        });