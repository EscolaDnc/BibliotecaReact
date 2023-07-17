import livrosMock from "./mock.js";
import logo from "./assets/image/Group 1.png";
import search from "./assets/image/search2.png";
import { useState, useEffect } from "react";

function App() {
  // Define os estados iniciais da aplicação
  const [valorTermo, setvalorTermo] = useState("");
  const [mostrarLivro, setMostrarLivro] = useState("hidden");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [modalMensagem, setModalMensagem] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  // Define a função que atualiza o valorTermo com o valor do input
  function termoBusca(event) {
    setvalorTermo(event.target.value);
  }

  // Define a função que procura um livro com base no valorTermo
  function buscarLivro(input) {
    const livroPesquisado = livrosMock.find(
      (livro) =>
        livro.categoria.toLowerCase().includes(input.toLowerCase()) ||
        livro.nome.toLowerCase().includes(input.toLowerCase()) ||
        livro.autor.toLowerCase().includes(input.toLowerCase())
    );

    const { autor, categoria, imagem, nome, descricao } = livroPesquisado;

    setAutor(autor);
    setCategoria(categoria);
    setImagem(imagem);
    setNome(nome);
    setDescricao(descricao);

    setMostrarLivro("right");
    setvalorTermo("");
  }

  // Define a função que exibe o modal "Já li"
  function modalJaLi() {
    setModalMensagem("Livro reservado com sucesso na biblioteca DNC");
    setMostrarModal(true);
  }

  // Define a função que exibe o modal "Quero ler"
  function modalQueroLer() {
    setModalMensagem("Adicionado ao seu carrinho");
    setMostrarModal(true);
  }

  // Define o efeito que oculta o modal após 3 segundos
  useEffect(() => {
    if (mostrarModal) {
      const timer = setTimeout(() => {
        setMostrarModal(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [mostrarModal]);

  return (
    <div className="App">
      {/* ==== MODAL AQUI ==== */}
      {mostrarModal && (
        <div className="modal">
          <p>{modalMensagem}</p>
        </div>
      )}

      {/* ==== NAVBAR AQUI ==== */}
      <nav>
        <img src={logo} alt="bookhub logo" className="logo-image"/>
      </nav>

      {/* ==== MAIN AQUI ==== */}
      <main>
        {/* ==== INPUT DE BUSCA AQUI ==== */}
        <div className="left">
          <h1>
            Qual livro você quer
            <br /> conhecer hoje?
          </h1>
          <div className="input-wrapper">
            <input type="text" value={valorTermo} onInput={termoBusca} />
          </div>
          <button onClick={() => buscarLivro(valorTermo.trim())}>Buscar</button>
        </div>

        {/* ====RESUMO DO LIVRO AQUI ==== */}
        <div className={mostrarLivro}>
          <div className="top">
            <img src={imagem} alt={nome} />
            <div className="card">
            <h2>{nome}</h2>
            <br />
            <span>
              <b>Autor:</b> {autor}
            </span>
            <br />
            <br />
            <span>
              <b>Gênero:</b> {categoria}
            </span>
          

            <div className="buttons">
            <br />
              {/* Botão para marcar o livro como lido */}
              {/* Botão para adicionar o livro à lista de leitura */}
              <button onClick={modalJaLi} style={{ width:'300px'}}>Reservar</button> 
            </div>
          </div>
    </div>

         <div className="card">
          <div className="bottom">
          <span>
              <b>Descrição: </b> {descricao}
            </span>
            </div>
      
          </div>
        </div>
      </main>


    </div>
  );
}

export default App;
