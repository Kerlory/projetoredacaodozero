const dicas = [
  "Evite clichês como 'desde os primórdios'.",
  "Use conectivos como 'além disso', 'portanto', 'consequentemente'.",
  "Cite repertórios socioculturais (filmes, livros, fatos históricos).",
  "Evite repetir palavras ou ideias próximas umas das outras.",
  "Na conclusão, apresente uma proposta com quem, como e para quê."
];

function mostrarDica() {
  const dica = dicas[Math.floor(Math.random() * dicas.length)];
  document.getElementById("dicaTexto").innerText = dica;
}

function mostrarModelo(tipo) {
  let texto = "";

  if (tipo === 'intro') {
    texto = "Em 300, filme baseado em fatos históricos, observa-se que o sacrifício coletivo era essencial para combater ameaças sociais. Essa ideia dialoga com o tema da intolerância religiosa, pois...";
    document.getElementById("intro-modelo").innerText = texto;
  } else if (tipo === 'desenv') {
    texto = "Em primeiro lugar, é importante destacar que a falta de educação sobre diversidade contribui para a intolerância. Segundo o IBGE (2022), mais de 30% das vítimas de violência religiosa não receberam apoio institucional...";
    document.getElementById("desenv-modelo").innerText = texto;
  } else if (tipo === 'conc') {
    texto = "Portanto, é necessário que o Estado, por meio do MEC, promova campanhas educativas nas escolas, a fim de estimular o respeito à diversidade religiosa e prevenir atitudes intolerantes.";
    document.getElementById("conc-modelo").innerText = texto;
  }
}

function mostrarRedacao() {
  const redacao = `Em 300, filme baseado em fatos históricos, observa-se que o sacrifício coletivo era essencial para combater ameaças sociais. Essa ideia dialoga com o tema da intolerância religiosa, uma vez que a sociedade atual ainda enfrenta obstáculos relacionados à liberdade de crença.\n\nEm primeiro lugar, é importante destacar que a falta de educação sobre diversidade contribui para a intolerância. Segundo o IBGE (2022), mais de 30% das vítimas de violência religiosa não receberam apoio institucional, o que evidencia a negligência com o problema.\n\nAlém disso, a ausência de leis específicas para punição de crimes religiosos dificulta o enfrentamento dessas práticas. Conforme a Constituição Federal, todos têm direito à liberdade religiosa, mas a aplicação da lei ainda é falha.\n\nPortanto, é necessário que o Estado, por meio do MEC, promova campanhas educativas nas escolas, a fim de estimular o respeito à diversidade religiosa e prevenir atitudes intolerantes.`;

  document.getElementById("redacao-completa").innerText = redacao;
}
