function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada elemento (dado) dentro da lista de dados
    for (let dado of dados) {
      // Cria um novo elemento HTML para cada resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }