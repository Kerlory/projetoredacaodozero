
document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  if (!splash) return;

  const DURATION = 3500;

  function fecharSplash() {
    splash.classList.add("fadeout");
    splash.addEventListener("animationend", () => {
      splash.remove();
      const main = document.querySelector("main");
      if (main) main.scrollIntoView({ behavior: "smooth" });
    }, { once: true });
  }

  setTimeout(() => {
    fecharSplash();
  }, DURATION);
});

function mostrarModelo(tipo) {
  let idAlvo = "";
  let texto = "";

  if (tipo === 'intro') {
    idAlvo = "intro-modelo";
    texto = "[Contextualização]. No Brasil contemporâneo, percebe-se que [tema aqui] representa um desafio persistente, resultante de fatores culturais, econômicos e estruturais. Essa realidade demanda reflexão, uma vez que compromete o exercício pleno da cidadania e o bem-estar coletivo.";
  } else if (tipo === 'desenv') {
    idAlvo = "desenv-modelo";
    texto = "Primeiramente, é necessário destacar que a ausência de políticas públicas eficazes contribui para a manutenção do problema. De acordo com dados de instituições de pesquisa, a falta de investimento e de estratégias abrangentes dificulta a solução, afetando diretamente a qualidade de vida da população. Além disso, essa lacuna gera desigualdade e perpetua situações de vulnerabilidade social.\n\nOutro aspecto relevante é a influência da desinformação. Em um contexto de rápido acesso à internet, informações falsas ou superficiais moldam opiniões e dificultam o entendimento crítico sobre o tema. Assim, a conscientização e a promoção de debates fundamentados tornam-se passos essenciais para qualquer avanço.";
  } else if (tipo === 'conc') {
    idAlvo = "conc-modelo";
    texto = "Portanto, é imprescindível que o Estado, por meio de órgãos competentes, desenvolva campanhas educativas e invista em políticas públicas integradas, com a participação da sociedade civil. Dessa forma, será possível criar um ambiente favorável à superação de desafios e à construção de uma sociedade mais justa e igualitária.";
  }

  const el = document.getElementById(idAlvo);
  if (el.innerText === texto) {
    el.innerText = "";
  } else {
    el.innerText = texto;
  }
}

function mostrarModeloCompleto(tipo) {
  let redacao = "";
  const el = document.getElementById("redacao-completa");

  if (tipo === "base") {
    redacao = `Ao longo da história, diversos pensadores refletiram sobre os impactos sociais de questões que afetam o desenvolvimento humano. No Brasil contemporâneo, percebe-se que [tema aqui] representa um desafio persistente, resultante de fatores culturais, econômicos e estruturais. Essa realidade demanda reflexão, uma vez que compromete o exercício pleno da cidadania e o bem-estar coletivo.

Primeiramente, é necessário destacar que a ausência de políticas públicas eficazes contribui para a manutenção do problema. De acordo com dados de instituições de pesquisa, a falta de investimento e de estratégias abrangentes dificulta a solução, afetando diretamente a qualidade de vida da população. Além disso, essa lacuna gera desigualdade e perpetua situações de vulnerabilidade social.

Outro aspecto relevante é a influência da desinformação. Em um contexto de rápido acesso à internet, informações falsas ou superficiais moldam opiniões e dificultam o entendimento crítico sobre o tema. Assim, a conscientização e a promoção de debates fundamentados tornam-se passos essenciais para qualquer avanço.

Portanto, é imprescindível que o Estado, por meio de órgãos competentes, desenvolva campanhas educativas e invista em políticas públicas integradas, com a participação da sociedade civil. Dessa forma, será possível criar um ambiente favorável à superação de desafios e à construção de uma sociedade mais justa e igualitária.`;
  } else if (tipo === "nota1000") {
    redacao = ` Enem 2024 Sabrina Ayumi Alves, de Araçatuba (SP)

    O livro “Nós matamos o cão tinhoso” de Luís Bernardo Honwana retrata a sociedade moçambicana durante a colonização portuguesa. Na obra literária, observa-se uma dinâmica social pautada pela inferiorização dos indivíduos negros, na qual o racismo está enraizado nas interações entre as pessoas, na qualidade de vida e na autoimagem de cada ser. Assim, ao inserir a imagem criada pelo livro no contexto brasileiro de ínfima valorização da herança africana, infere-se que o passado colonial persiste nas estruturas do Brasil, se manifestando a partir do apagamento sistemático da cultura afro-brasileira. Em razão disso, deve-se discutir o papel do Estado no setor escolar e cultural diante desse contexto de silenciamento.

Em um primeiro momento, é necessário entender a relação entre a dinâmica social brasileira e a desvalorização da herança africana. Para fundamentar essa ideia, o filósofo Ailton Krenak afirma que, no Brasil, existem dois grupos — a humanidade, formada pela elite econômica, e a subumanidade, a qual tem seus direitos negados e é constituída principalmente pelas populações marginalizadas socialmente, como os povos originários e os negros. Por conseguinte, entende-se que o apagamento da cultura africana é uma extensão do panorama da desigualdade social brasileira, já que essa desvalorização sistemática silencia as vozes de populações que são violentadas e oprimidas há séculos, o que favorece a manutensão dessas pessoas no grupo da subumanidade. Dessa forma, o Estado deve desenvolver medidas que visem valorizar e apoiar artistas e escritores relacionados à herança africana no Brasil.

Sob outra ótica, a compreensão acerca da importância da ancestralidade na formação da autoimagem e da noção de pertencimento de cada indivíduo é imperativa. Para isso, a filósofa brasileira Marilena Chaui defende a ideia de que, enquanto os animais são seres naturais, os humanos são culturais – ou seja, a cultura em que cada pessoa está inserida compõe a essência desse ser. A partir disso, compreende-se que o silenciamento da herança africana nega a uma grande parte do povo brasileiro a sua própria essência, o que constitui uma violência estrutural e resulta numa noção de não pertencimento generalizada e em uma autoimagem defasada. Frente a isso, o Estado deve agir em prol da promoção de manifestações culturais afro-brasileiras.

Em suma, conclui-se que a desvalorização da cultura africana está diretamente relacionada a um processo sistemático de silenciamento de grupos oprimidos e resulta na falta de pertencimento de muitos indivíduos. Portanto, cabe ao Estado, por meio de uma parceria entre o Ministério da Economia (ME) e o Ministério da Educação e da Cultura (MEC), desenvolver manifestações culturais afro-brasileiras nas escolas, como, por exemplo, peças teatrais e festivais de dança, música e arte, assim como investir financeiramente na promoção de artistas e escritores que têm suas carreiras relacionadas à herança africana. Por fim, essas ações serão responsáveis por impedir o perpetuamento da desvalorização da cultura africana no Brasil.`;
  }

  if (el.innerText === redacao) {
    el.innerText = "";
  } else {
    el.innerText = redacao;
  }
}



const dicas = [
  "Crie sua própria contextualização",
  "Evite clichês como 'desde os primórdios'.",
  "Use conectivos como 'além disso', 'portanto', 'consequentemente'.",
  "Cite repertórios socioculturais (filmes, livros, fatos históricos).",
  "Evite repetir palavras ou ideias próximas umas das outras.",
  "Na conclusão, apresente uma proposta com quem, como e para quê."
];

function mostrarDica() {
  const dica = dicas[Math.floor(Math.random() * dicas.length)];
  const el = document.getElementById("dicaTexto");
  if (el.innerText === dica) {
    el.innerText = "";
  } else {
    el.innerText = dica;
  }
}
