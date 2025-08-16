window.addEventListener("load", () => {
  const splash = document.getElementById("splash");

  // bloqueia scroll enquanto carrega
  document.body.style.overflow = "hidden";

  // tempo mínimo de exibição (3000ms = 3s)
  setTimeout(() => {
    splash.classList.add("hidden");
    setTimeout(() => {
      splash.style.display = "none";
      document.body.style.overflow = "auto"; // libera scroll
    }, 600); // tempo do fade-out
  }, 3000);
});



function mostrarModelo(tipo) {
  let idAlvo = "";
  let texto = "";

  if (tipo === 'intro') {
    idAlvo = "intro-modelo";
    texto = "[Contextualização]. No Brasil hodierno, lamentavelmente, o(a) [tema-problema] ainda persiste como problema para muitos brasileiros que sofrem com [principal consequência do tema-problema]. Tal questão cresce apoiada não só na(o) [causa 1], como também na(o) [causa 2] e deve ser criticamente analisada.";
  } else if (tipo === 'exem1') {
    idAlvo = "intro-modelo";
    texto = "Na canção “Cálice”, de Chico Buarque e Gilberto Gil, a denúncia sobre silenciamento e falta de acesso a direitos fundamentais se mostra emblemática na história brasileira. No Brasil hodierno, lamentavelmente, a precariedade na oferta e qualidade da educação ainda persiste como problema para muitos brasileiros que sofrem com a limitação de oportunidades e a exclusão social. Tal questão cresce apoiada não só na insuficiência de investimentos governamentais, como também na falta de políticas públicas eficazes e deve ser criticamente analisada.";
  } if (tipo === 'desenv') {
    idAlvo = "desenv-modelo";
    texto = "Primeiramente, é fundamental reconhecer que a fragilização das políticas públicas voltadas para o enfrentamento do [tema/problema] compromete diretamente a manutenção e expansão de infraestrutura(as) [socioeducacionais/ socioeconômicas/ socioambientais....]. Isso se evidencia quando analisamos que [explicação detalhada sobre o impacto da falta dessas infraestruturas no tema]. Como destaca [autor ou organização], “[citação que reforça a gravidade do problema]”. Dessa forma, observa-se que essa realidade gera [consequência 1], afetando a vida cotidiana da população, além de provocar [consequência 2], que contribui para o aprofundamento das desigualdades sociais. Além disso, é imprescindível analisar como a insuficiência da(as) infraestrutura(as) [ socioeducacionais/socioeconômicas/socioambientais] compromete a efetividade das políticas públicas relacionadas a [tema/problema]. Observa-se que a falta de [ação 1] e [ação 2] por parte do Estado resulta em consequências preocupantes, como [consequência 1], que limita o acesso e a qualidade dos serviços oferecidos, além de [consequência 2], que amplia as desigualdades já existentes. Conforme aponta [autor/organização], “[citação que reforça a importância da ação estatal]”, evidenciando a necessidade urgente de intervenções mais eficazes.";
  } else if (tipo === 'exem2') {
    idAlvo = "desenv-modelo";
    texto = "Primeiramente, é fundamental reconhecer que a fragilização das políticas públicas voltadas para o enfrentamento da educação compromete diretamente a manutenção e expansão de infraestruturas socioeducacionais, como escolas bem estruturadas e laboratórios equipados. Isso se evidencia quando analisamos que a falta dessas infraestruturas prejudica o aprendizado e limita o desenvolvimento pleno dos alunos, especialmente nas regiões mais vulneráveis. Como destaca o Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP), 'a insuficiência de infraestrutura adequada impacta negativamente o desempenho acadêmico e a permanência dos estudantes na escola'. Dessa forma, observa-se que essa realidade gera altas taxas de evasão escolar, afetando a vida cotidiana da população, além de provocar o aprofundamento das desigualdades sociais no acesso à educação. Além disso, é imprescindível analisar como a insuficiência das infraestruturas socioeducacionais compromete a efetividade das políticas públicas relacionadas à educação. Observa-se que a falta de investimento contínuo e programas de manutenção por parte do Estado resulta em consequências preocupantes, como a precarização das condições de ensino, que limita a qualidade dos serviços oferecidos, além da exclusão social crescente, que amplia as desigualdades já existentes. Conforme aponta o Ministério da Educação, 'a melhoria da infraestrutura escolar é condição imprescindível para a promoção da equidade e da qualidade na educação básica', evidenciando a necessidade urgente de intervenções mais eficazes.";
  } if (tipo === 'conc') {
    idAlvo = "conc-modelo";
    texto = "Portanto, para resolver de maneira efetiva [o problema abordado], é fundamental que [quem está envolvido ou será beneficiado] se comprometa a [o quê será feito para solucionar o problema], utilizando estratégias bem definidas, como [como essa ação será realizada]. Esse compromisso deve ser mantido com o objetivo claro de [para quê essa solução existe / qual o objetivo final], buscando não apenas uma solução imediata, mas impactos positivos duradouros.";
  } else if (tipo === 'exem3') {
    idAlvo = "conc-modelo";
    texto = "Portanto, para resolver de maneira efetiva o problema da poluição ambiental, é fundamental que governos, empresas e comunidades locais se comprometam a promover campanhas educativas abrangentes e implementar políticas de controle eficazes, utilizando estratégias bem definidas, como a conscientização pública contínua e a criação de leis ambientais rigorosas e fiscalizadas. Esse compromisso deve ser mantido com o objetivo claro de garantir a preservação dos recursos naturais para as futuras gerações, além de promover um ambiente saudável e equilibrado para toda a população.";
  } if (tipo === 'reda') {
    idAlvo = "reda-modelo";
    texto = "[Contextualização]. No Brasil hodierno, lamentavelmente, o(a) [tema-problema] ainda persiste como problema para muitos brasileiros que sofrem com [principal consequência do tema-problema]. Tal questão cresce apoiada não só na(o) [causa 1], como também na(o) [causa 2] e deve ser criticamente analisada. Primeiramente, é fundamental reconhecer que a fragilização das políticas públicas voltadas para o enfrentamento do [tema/problema] compromete diretamente a manutenção e expansão de infraestrutura(as) [socioeducacionais/ socioeconômicas/ socioambientais....]. Isso se evidencia quando analisamos que [explicação detalhada sobre o impacto da falta dessas infraestruturas no tema]. Como destaca [autor ou organização], '[citação que reforça a gravidade do problema]'. Dessa forma, observa-se que essa realidade gera [consequência 1], afetando a vida cotidiana da população, além de provocar [consequência 2], que contribui para o aprofundamento das desigualdades sociais. Além disso, é imprescindível analisar como a insuficiência da(as) infraestrutura(as) [ socioeducacionais/socioeconômicas/socioambientais] compromete a efetividade das políticas públicas relacionadas a [tema/problema]. Observa-se que a falta de [ação 1] e [ação 2] por parte do Estado resulta em consequências preocupantes, como [consequência 1], que limita o acesso e a qualidade dos serviços oferecidos, além de [consequência 2], que amplia as desigualdades já existentes. Conforme aponta [autor/organização], '[citação que reforça a importância da ação estatal]', evidenciando a necessidade urgente de intervenções mais eficazes. Portanto, para resolver de maneira efetiva [o problema abordado], é fundamental que [quem está envolvido ou será beneficiado] se comprometa a [o quê será feito para solucionar o problema], utilizando estratégias bem definidas, como [como essa ação será realizada]. Esse compromisso deve ser mantido com o objetivo claro de [para quê essa solução existe / qual o objetivo final], buscando não apenas uma solução imediata, mas impactos positivos duradouros.";
  } else if (tipo === 'exem4') {
    idAlvo = "reda-modelo";
    texto = "No filme 'Que Horas Ela Volta?', dirigido por Anna Muylaert, fica evidente a disparidade social e educacional entre diferentes classes no Brasil, revelando como essas desigualdades impactam a vida de muitas famílias brasileiras. No Brasil hodierno, lamentavelmente, a precariedade na oferta e qualidade da educação ainda persiste como problema para muitos brasileiros que sofrem com a limitação de oportunidades e a exclusão social. Tal questão cresce apoiada não só na insuficiência de investimentos públicos, como também na falta de políticas públicas eficazes e deve ser criticamente analisada. Primeiramente, é fundamental reconhecer que a fragilização das políticas públicas voltadas para o enfrentamento da educação compromete diretamente a manutenção e expansão de infraestruturas socioeducacionais, como escolas bem estruturadas e laboratórios equipados. Isso se evidencia quando analisamos que a falta dessas infraestruturas prejudica o aprendizado e limita o desenvolvimento pleno dos alunos, especialmente nas regiões mais vulneráveis. Como destaca o Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP), 'a insuficiência de infraestrutura adequada impacta negativamente o desempenho acadêmico e a permanência dos estudantes na escola'. Dessa forma, observa-se que essa realidade gera altas taxas de evasão escolar, afetando a vida cotidiana da população, além de provocar o aprofundamento das desigualdades sociais no acesso à educação. Além disso, é imprescindível analisar como a insuficiência das infraestruturas socioeducacionais compromete a efetividade das políticas públicas relacionadas à educação. Observa-se que a falta de investimento contínuo e programas de manutenção por parte do Estado resulta em consequências preocupantes, como a precarização das condições de ensino, que limita a qualidade dos serviços oferecidos, além da exclusão social crescente, que amplia as desigualdades já existentes. Conforme aponta o Ministério da Educação, 'a melhoria da infraestrutura escolar é condição imprescindível para a promoção da equidade e da qualidade na educação básica', evidenciando a necessidade urgente de intervenções mais eficazes. Portanto, para resolver de maneira efetiva a precariedade na educação pública, é fundamental que o governo, gestores escolares e a sociedade civil se comprometam a promover investimentos regulares e estratégicos na infraestrutura escolar, utilizando estratégias bem definidas, como a criação de programas de manutenção contínua e modernização das instalações. Esse compromisso deve ser mantido com o objetivo claro de garantir o acesso universal e a qualidade do ensino, buscando não apenas uma solução imediata, mas impactos positivos duradouros para o desenvolvimento social e a redução das desigualdades no país.";
  }
  const el = document.getElementById(idAlvo);
  if (el.innerText === texto) {
    el.innerText = "";
  } else {
    el.innerText = texto;
  }
}

const dicas = [
  "Crie sua própria contextualização",
  "Evite clichês como 'desde os primórdios'.",
  "Use conectivos como 'além disso', 'portanto', 'consequentemente'.",
  "Cite repertórios socioculturais (filmes, livros, fatos históricos).",
  "Evite repetir palavras ou ideias próximas umas das outras.",
  "Nunca esqueça de dar um espaço antes de cada parágrafo",
  "Na conclusão, apresente uma proposta com quem, como e para quê.",
  "Não se prenda apenas em uma estrutura de redação",

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