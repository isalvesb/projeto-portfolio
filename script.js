// Passo 1: pegar o botão
const btn = document.querySelector('#btn-toggle');
const root = document.documentElement; // <html>
const icon = btn.querySelector('i');

// Passo 2: checar o tema salvo no localStorage
const saved = localStorage.getItem('theme');
if (saved === 'dark') {
    root.setAttribute('data-theme', 'dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
} else {
    root.removeAttribute('data-theme');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}

// Passo 3: ouvir o click e adicionar o evento de clique no botão
btn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light'); // salva o tema claro
    } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // salva o tema escuro
    }


    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// JS para a página Register 

const form = document.getElementById('curriculo-form');
// console.log(form);

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    // console.log(formData);
    const dados = Object.fromEntries(formData);
    //console.log(dados);

    const resposta = fetch('https://69825d839c3efeb892a23e87.mockapi.io/api/v1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });

    if ((resposta).ok) {
        alert('Formulário enviado com sucesso!');
        form.reset();
    } else {
        alert('Erro ao enviar o formulário.', console.error(form)
        );
    }
})
