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

