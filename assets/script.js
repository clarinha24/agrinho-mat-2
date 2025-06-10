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
            
            let etapaAtual = 0;
            
            function animar() {
                if (etapaAtual >= posicoes.length) return;
                
                microplastico.style.transition = 'all 2s ease-in-out';
                microplastico.style.left = posicoes[etapaAtual].left;
                microplastico.style.top = posicoes[etapaAtual].top;
                
                etapaAtual++;
                
                if (etapaAtual < posicoes.length) {
                    setTimeout(animar, 2200);
                }
            }
            
            btnIniciar.addEventListener('click', function() {
                etapaAtual = 0;
                microplastico.style.left = '10%';
                microplastico.style.top = '20%';
                setTimeout(animar, 100);
            });
            
            btnResetar.addEventListener('click', function() {
                microplastico.style.transition = 'none';
                microplastico.style.left = '10%';
                microplastico.style.top = '20%';
                etapaAtual = 0;
            });
        });