const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

const barras = document.querySelectorAll('.barra');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const progresso = entry.target.querySelector('.progresso');
        const porcentagemTexto = entry.target.querySelector('.porcentagem');
        const valor = entry.target.dataset.porcentagem || 0;

        if (entry.isIntersecting) {
            // Subir barra animada
            progresso.style.width = valor + '%';
            porcentagemTexto.textContent = valor + '%';
        } else {
            // Descer barra animada
            progresso.style.width = '0%';
            porcentagemTexto.textContent = '0%';
        }
    });
}, {
    threshold: 0.5 // ativa quando 50% da barra estiver visível
});

barras.forEach(barra => observer.observe(barra));
