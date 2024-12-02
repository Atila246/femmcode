fetch('http://localhost:3000/usuarios')
    .then(res => res.json())
    .then((data) => {
        data.forEach((item) => {
            perfil_nome.innerHTML = item.nome
        })
    })
    .catch((err) => {
        console.log("Erro"+err)
    })

const perfil_nome = document.getElementById("perfil-nome")
const underline = document.querySelector('.underline')
const aba1 = document.getElementById("aba1")
const aba2 = document.getElementById("aba2")

const conteudos_perfil = document.querySelector(".conteudos-perfil")
const comunidades_perfil = document.querySelector(".comunidades-perfil")

const gerenciar_perfil = document.querySelector(".gerenciar-perfil")


aba1.addEventListener('click', () => {
    aba1.classList.add('ativo')
    aba2.classList.remove('ativo')
    
    underline.classList.remove('animatein')
    underline.classList.remove('animateout')

    let tamanhoAba2 = underline.style.width = `${aba2.offsetWidth}px`
    let tamanhoAba1 = underline.style.width = `${aba1.offsetWidth}px`
    underline.style.width = tamanhoAba1
  
    document.documentElement.style.setProperty('--tamanho-aba-2',tamanhoAba2)
    
    underline.classList.add('animateout')

    conteudos_perfil.style.display = "block"
    comunidades_perfil.style.display = "none"
})

aba2.addEventListener('click', () => {
    aba2.classList.add('ativo')
    aba1.classList.remove('ativo')
    
    underline.classList.remove('animateout')
    underline.classList.remove('animatein')
    
    let tamanhoAba1 = underline.style.width = `${aba1.offsetWidth}px`
    let tamanhoAba2 = underline.style.width = `${aba2.offsetWidth}px`
    underline.style.width = tamanhoAba2
    document.documentElement.style.setProperty('--tamanho-aba-1',tamanhoAba1)

    underline.classList.add('animatein')

    conteudos_perfil.style.display = "none"
    comunidades_perfil.style.display = "flex"
    
})

/*modal*/
var perfil_btn = document.getElementById('botao-perfil')
var editar_modal = document.getElementById('editar-usuario-modal'); 
var close_btn = document.getElementsByClassName('close');

perfil_btn.onclick = function () {
    editar_modal.style.display = "flex"
    console.log(editar_modal)
}

// Fechar POPUP e formulário ao clicar no 'X'
for (let i = 0; i < close_btn.length; i++) {
    close_btn[i].onclick = function () {
        editar_modal.style.display = "none"
    }
}

window.onclick = function (event) {
    if(event.target == editar_modal){
        editar_modal.style.display = "none"
    }      
}



//Editar perfil
function toggleEditProfile() {
    const editSection = document.getElementById('editProfileSection');
    if (editSection.classList.contains('hidden')) {
        editSection.classList.remove('hidden'); 
    } else {
        editSection.classList.add('hidden'); 
    }
}

function salvarPerfil() {
    const novoNome = document.getElementById('novoUsuario').value;
    const novaDescricao = document.getElementById('descricao').value;

    document.getElementById('profile-name').innerText = novoNome;
    document.getElementById('profile-description').innerText = novaDescricao;

    document.getElementById('editProfileSection').classList.add('hidden');
}


document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.innerHTML = '<i class="fi fi-sr-sun"></i>';
        } else {
            localStorage.setItem("theme", "light");
            toggleButton.innerHTML = '<i class="fi fi-sr-moon"></i>';
        }
    })
})  


const modoEscuroAtivado = localStorage.getItem('modoEscuro') === 'true';

if (modoEscuroAtivado) {
  document.body.classList.add('dark');
  document.getElementById('claroescuro').classList.add('dark');
}


let claroescuro = document.getElementById('claroescuro');

claroescuro.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.querySelector('.container__perfil-info').classList.toggle('dark');
  
  document.querySelectorAll('.menu__nav ul li a').forEach(link => {
    link.classList.toggle('dark');
  });
  
  document.querySelectorAll('h5').forEach(h5 => {
    h5.classList.toggle('dark');
  });
  
  document.querySelectorAll('.comunidade__post').forEach(post => {
    post.classList.toggle('dark');
  });
  
  document.querySelectorAll('.titulo-desc span').forEach(span => {
    span.classList.toggle('dark');
  });
  
  document.querySelectorAll('.video-item__desc').forEach(desc => {
    desc.classList.toggle('dark');
  });
  
  document.querySelectorAll('.video-item').forEach(video => {
    video.classList.toggle('dark');
  });
  
  document.querySelectorAll('.post-corpo').forEach(postBody => {
    postBody.classList.toggle('dark');
  });
  
  document.querySelectorAll('.perfil-post__nome #comunidade').forEach(nome => {
    nome.classList.toggle('dark');
  });
  
  document.querySelectorAll('.perfil-post__nome .temp').forEach(temp => {
    temp.classList.toggle('dark');
  });
  
  document.querySelectorAll('i[class^="fi-sr-"], i[class*=" fi-sr-"], span[class^="fi-sr-"], span[class*="fi-sr-"]').forEach(icon => {
    icon.classList.toggle('dark');
  });
  
  document.querySelectorAll('.perfil-post__nome .user').forEach(user => {
    user.classList.toggle('dark');
  });
  
  document.querySelectorAll('.modal-content').forEach(modal => {
    modal.classList.toggle('dark');
  });
  
  document.querySelectorAll('.editar__form button').forEach(button => {
    button.classList.toggle('dark');
  });
  
  document.querySelectorAll('.form-container h2').forEach(h2 => {
    h2.classList.toggle('dark');
  });
});

