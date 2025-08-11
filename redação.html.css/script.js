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
    redacao = `Brás Cubas, o defunto-autor de Machado de Assis, diz em suas Memórias Póstumas que não teve filhos e não transmitiu a nenhuma criatura o legado da nossa miséria. Talvez hoje ele percebesse acertada sua decisão: a postura de muitos brasileiros frente à intolerância religiosa é uma das faces mais perversas de uma sociedade em desenvolvimento. Com isso, surge a problemática do preconceito religioso que persiste intrinsecamente ligado à realidade do país, seja pela insuficiência de leis, seja pela lenta mudança de mentalidade social.

Essa realidade tem raízes históricas profundas, que refletem um processo de exclusão e discriminação cultural que precisa ser enfrentado com políticas públicas efetivas. Segundo o IBGE, diversos grupos religiosos ainda enfrentam dificuldades para exercer plenamente seus direitos civis, o que evidencia a urgência em promover a igualdade e o respeito entre as diferentes crenças.

Diante desse cenário, torna-se imprescindível a criação de delegacias especializadas no atendimento às vítimas de intolerância religiosa, assim como a implementação de campanhas educativas nas escolas para fomentar o respeito e a convivência pacífica entre os diversos grupos religiosos presentes no país.

Portanto, somente por meio da ação conjunta do Estado, da sociedade civil e das instituições educacionais será possível construir um Brasil mais tolerante, democrático e plural, onde a diversidade religiosa seja celebrada e protegida como um direito fundamental.`;
  }

  if (el.innerText === redacao) {
    el.innerText = "";
  } else {
    el.innerText = redacao;
  }
}
function avaliarRedacao() {
  const texto = document.getElementById("textoRedacao").value.trim();
  const resultado = document.getElementById("resultadoAvaliacao");

  if (texto.length === 0) {
    resultado.innerText = "Por favor, escreva sua redação para avaliarmos.";
    resultado.style.color = "red";
    return;
  }

  // Critérios simples:
  const tamanho = texto.length;
  const paragrafos = texto.split(/\n+/).filter(p => p.trim().length > 0).length;

  // Lista simples de conectivos comuns para verificar presença
  const conectivos = [
    "além disso", "portanto", "consequentemente", "entretanto", "todavia",
    "contudo", "assim", "logo", "porém", "de fato", "não obstante"
  ];
  let conectivosEncontrados = 0;
  const textoMinusculo = texto.toLowerCase();

  conectivos.forEach(conectivo => {
    if (textoMinusculo.includes(conectivo)) {
      conectivosEncontrados++;
    }
  });

  // Análise simples da estrutura (introdução, desenvolvimento, conclusão)
  const temIntroducao = textoMinusculo.includes("introdução") || paragrafos >= 3;
  const temConclusao = textoMinusculo.includes("conclusão") || textoMinusculo.includes("portanto") || textoMinusculo.includes("assim");

  // Pontuação simples
  let pontos = 0;
  if (tamanho > 300) pontos += 2;          // texto bom tamanho
  else if (tamanho > 150) pontos += 1;

  if (paragrafos >= 3) pontos += 2;
  else if (paragrafos === 2) pontos += 1;

  if (conectivosEncontrados >= 2) pontos += 2;
  else if (conectivosEncontrados === 1) pontos += 1;

  if (temIntroducao) pontos += 1;
  if (temConclusao) pontos += 1;

  // Classificação final
  let classificacao = "";
  switch (pontos) {
    case 0:
    case 1:
      classificacao = "Péssimo";
      break;
    case 2:
    case 3:
      classificacao = "Ruim";
      break;
    case 4:
      classificacao = "Tolerável";
      break;
    case 5:
      classificacao = "Bom";
      break;
    case 6:
      classificacao = "Ótimo";
      break;
    case 7:
    case 8:
      classificacao = "Excelente";
      break;
    default:
      classificacao = "Avaliação Indefinida";
  }

  resultado.style.color = "#00e6ff";
  resultado.innerText = `Sua redação foi avaliada como: ${classificacao}`;
}

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
