//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array global para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  // Validação: campo vazio
  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  // Adicionar no array
  amigos.push(nome);

  // Limpar o campo
  input.value = '';

  // Atualizar a lista visível
  renderizarLista();
}

// Função para renderizar a lista de amigos
function renderizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // limpar antes

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista de amigos está vazia. Adicione nomes antes de sortear.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
