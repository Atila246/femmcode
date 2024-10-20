const config_post1 = document.getElementById('config-post1');
const config_post2 = document.getElementById('config-post2');
const config_post3 = document.getElementById('config-post3');

const options_post1 = document.getElementById('options-post1');
const options_post2 = document.getElementById('options-post2');
const options_post3 = document.getElementById('options-post3');
let ligado = false;

config_post1.addEventListener("click", () => {
    if(!ligado){
        options_post1.style.display = "flex";
        ligado = true;
    }else{
        options_post1.style.display = "none";
        ligado = false;
    }
});

config_post2.addEventListener("click", () => {
    if(!ligado){
        options_post2.style.display = "flex";
        ligado = true;
    }else{
        options_post2.style.display = "none";
        ligado = false;
    }
});

config_post3.addEventListener("click", () => {
    if(!ligado){
        options_post3.style.display = "flex";
        ligado = true;
    }else{
        options_post3.style.display = "none";
        ligado = false;
    }
});


console.log("Ola");

var isLoggedIn = false; // Mudar para 'false' para simular usuário não logado

        // Elementos de referência
        var criarComunidadeBtn = document.getElementById('criarComunidadeBtn');
        var loginModal = document.getElementById('loginModal');
        var criarComunidade = document.getElementById('Criarcomunidade'); // Corrigido nome da variável
        var closeButtons = document.getElementsByClassName('close');

        // Abrir POPUP ou formulário com base no login
        criarComunidadeBtn.onclick = function () {
            if (isLoggedIn) {
                // Se estiver logado, exibe o formulário de criação
                criarComunidade.style.display = "block";
            } else {
                // Se não estiver logado, exibe o aviso de login
                loginModal.style.display = "block";
            }
        };

        // Fechar POPUP e formulário ao clicar no 'X'
        for (let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].onclick = function () {
                loginModal.style.display = "none";
                criarComunidade.style.display = "none";
            };
        }

        // Fechar POPUP ao clicar fora dele
        window.onclick = function (event) {
            if (event.target == loginModal) {
                loginModal.style.display = "none";
            } else if (event.target == criarComunidade) {
                criarComunidade.style.display = "none";
            }
        };
    
    // Simulação de login ao clicar no botão "Fazer Login"
    //document.getElementById('loginButton').onclick = function() {
      //  loginModal.style.display = "none";
        //alert('Você será redirecionado para a página de login.');
        //window.location.href = 'login.html';
    //};