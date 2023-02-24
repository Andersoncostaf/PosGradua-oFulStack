// função para gerar gráfico de barras com D3.js
function grafico(parametros) {
  // seleciona o elemento SVG e define sua largura e altura
  let svg = d3.select('#' + parametros.seletor)
    .attr('width', parametros.largura + 'px')
    .attr('height', parametros.altura + 'px');

  let larguraPlotagem = parametros.largura - 40;
  let alturaPlotagem = parametros.altura - 40;

  let plotagem = svg
    .append('g')
    .attr('width', larguraPlotagem)
    .attr('height', alturaPlotagem)
    .attr('transform', 'translate(20, 20)')


  // cria escala linear para o eixo x
  let fnX = d3
    .scaleLinear()
    .domain([0, d3.max(parametros.dados)]) // define o domínio da escala
    .range([0, larguraPlotagem]); // define a faixa de valores

  // cria escala linear para o eixo y
  let fnY = d3
    .scaleLinear()
    .domain([0, d3.max(parametros.dados)])
    .range([alturaPlotagem, 0]);

  // adiciona retângulos (barras) ao SVG com base nos dados fornecidos
  plotagem
    .select('.barra')
    .data(parametros.dados)
    .enter()
    .append('rect')
    .classed('barra', true)
    .attr('x', (d, i) => fnX(i))
    .attr('y', (d, i) => fnY(i))
    .attr('width', (d) => fnX(1) * 0, 9)
    .attr('height', fnY(1) * 0.9)
    .attr('height', (d) => alturaPlotagem - fnY(d));

  // adiciona rótulos aos elementos do gráfico
  plotagem
    .selectAll('.rotulo') // seleciona todos os elementos com classe 'rotulo'
    .data(parametros.dados) // associa os dados aos elementos
    .enter() // adiciona novos elementos (caso existam mais dados do que elementos)
    .append('text') // adiciona um texto para cada novo elemento
    .classed('rotulo', true) // define a classe 'rotulo' para os elementos
    .text((d) => d) // define o texto de cada elemento com base no valor do dado
    .attr('x', (d) => fnX(i)) // define a posição de cada texto no eixo x
    .attr('dx', () => fnX(1) * 0.5) // define um deslocamento para a esquerda
    .attr('y', (d) => fnY(d)) // define a posição de cada texto no eixo y
    .attr('dy', -5) // define um deslocamento para o centro vertical do retângulo correspondente
  //.style('text-anchor', 'end'); // define a ancoragem do texto à direita
}
