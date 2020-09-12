const data = [
    {
        "title":"Inteligência Artificial",
        "subtitle":"O que é IA",
        "body":"A Inteligência Artificial, que você vai ver por aí sendo citada apenas como IA (ou AI, de artificial intelligence) é um avanço tecnológico que permite que sistemas simulem uma inteligência similar à humana — indo além da programação de ordens específicas para tomar decisões de forma autônoma, baseadas em padrões de enormes bancos de dados./n Algo tão complicado é também um campo de estudo acadêmico — que não começou ontem. Há algumas décadas, se estuda o que se chamou de “agentes inteligentes”, que percebem seu ambiente, entendem como podem operar e qual a melhor forma. Credita-se ao professor John McCarthy o uso do termo pela primeira vez em 1956, em uma conferência de especialistas em Darmouth Colege, chamada “O Eros Eletrónico”, que definiu como “a ciência e a engenharia de produzir máquinas inteligentes”.",
        "img":"https://c.pxhere.com/images/44/09/96432f86adf24bdf732ac5dad02a-1584997.jpg!d"
    },
    {
        "title":"Machine Learning",
        "subtitle":"o que é ML",
        "body":"Machine learning é um conceito com várias definições possíveis. Aqui vai uma que nos permite assimilar bem sua essência: aprendizado de máquina é um sistema que pode modificar seu comportamento autonomamente tendo como base a sua própria experiência — o treinamento que abordamos anteriormente. A interferência humana aqui é mínima.\nA tal modificação comportamental consiste, basicamente, no estabelecimento de regras lógicas, vamos dizer assim, que visam melhorar o desempenho de uma tarefa ou, dependendo da aplicação, tomar a decisão mais apropriada para o contexto. Essas regras são geradas com base no reconhecimento de padrões dentro dos dados analisados.",
        "img":"https://p1.pxfuel.com/preview/273/263/748/computer-laptop-technology-office.jpg"
    },
    {
        "title":"Data Science",
        "subtitle":"O que é DS",
        "body":"Data Science é a área que aborda informações e conceitos complexos sobre dados. Também conhecida como Ciência de Dados, é multidisciplinar e está estruturada em variados setores, canais e plataformas. Seu funcionamento acontece por meio do seguinte fluxo: processamento, transformação, geração, categorização e, por fim, análise das informações com o objetivo de trazer mais clareza sobre algum segmento ou questão.",
        "img":"https://static.thenounproject.com/png/1456771-200.png"
    }
]

var posts = document.getElementById('posts')

console.log(data[0]["title"]);
for(datas in data){
    var div = document.createElement('div');
    div.className = 'post';

    var h1 = document.createElement('h1');
    h1.textContent=data[datas]['title'];
    div.appendChild(h1);

    var h2 = document.createElement('h2');
    h2.textContent=data[datas]['subtitle'];
    div.appendChild(h2);

    var body = document.createElement('h4');
    body.textContent=data[datas]['body'];
    div.appendChild(body);

    var img = document.createElement('img');
    img.src = data[datas]['img'];
    img.alt = data[datas]['title'] + ' imagem';
    img.className = 'post-img';
    div.appendChild(img);

    console.log(div);
    posts.appendChild(div);
}

