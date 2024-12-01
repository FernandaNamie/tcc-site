import './App.css';
import plotYear from './imgs/Year.png';
import plotDataType from './imgs/DataType.png';
import plotAmountData from './imgs/AmountData.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="App-button">
          Início
        </button>
      </header>
        <div className="Home">
        <div className="Home-subtitle">Autoria</div>
        <p className="Home-text">Projeto de Formatura 2024 - Departamento de Engenharia de Computação e Sistemas Digitais</p>
        <p className="Home-text"><span style={{'fontWeight': 'bold'}}>Integrante:</span> Fernanda Namie Takemoto Furukita</p>
        <p className="Home-text"><span style={{'fontWeight': 'bold'}}>Orientador:</span> Prof. Dr. Edson Satoshi Gomi</p>
        <br/>
        <div className="Home-subtitle">Introdução</div>
        <p className="Home-text">A Esclerose Lateral Amiotrófica (ELA) é uma doença neurodegenerativa rara que afeta os neurônios motores, com origem genética em cerca de 15% dos casos, enquanto a maioria permanece de causa desconhecida. Atualmente, existe uma necessidade urgente de biomarcadores prognósticos que auxiliem na estratificação de pacientes e na melhor caracterização da doença. Isso é essencial tanto para o desenvolvimento de novos tratamentos quanto para a garantia de qualidade de vida após o diagnóstico.</p>
        <p className="Home-text">Inicialmente, o projeto foi focado em uma solução baseada em Análise Topológica de Dados aplicada a imagens de ressonância magnética, combinada com métodos de Machine Learning, para prever o prognóstico de indivíduos afetados pela doença. No entanto, dificuldades como a escassez de dados e a falta de informações centralizadas sobre bases existentes apresentaram limitações significativas nessa etapa inicial.</p>
        <p className="Home-text">Diante desse cenário, identificou-se a importância de criar uma plataforma que reúna informações sobre os datasets disponíveis para ELA, especificando o número de participantes e os tipos de dados fornecidos (clínicos, imagens médicas e/ou coletas genéticas). Assim, o objetivo desta nova etapa do estudo é automatizar a coleta de informações em artigos acadêmicos relacionados a bases de dados de ELA, utilizando técnicas de Processamento de Linguagem Natural (NLP).</p>
        <br/>
        <div className="Home-subtitle">Metodologia</div>
        <p className="Home-text">O trabalho foi estruturado em cinco etapas principais:</p>
        <p className="Home-text">1. Coleta automatizada de textos acadêmicos: Utilizou-se a ferramenta PyPaperBot para reunir artigos relacionados a bases de dados de Esclerose Lateral Amiotrófica.</p>
        <p className="Home-text">2. Pré-processamento dos textos: Foi realizada a extração dos resumos dos artigos e a simplificação das informações para adequação aos modelos.</p>
        <p className="Home-text">3. Aplicação de modelos de NLP: Três modelos foram utilizados para identificar os tipos de dados abordados nos textos. Para validação das informações coletadas, foi implementada a técnica de Triple Modular Redundancy.</p>
        <p className="Home-text">4. Disponibilização dos resultados por API: Os resultados processados pelos modelos foram integrados em uma API.</p>
        <p className="Home-text">5. Desenvolvimento do Front-End: Para facilitar o acesso aos resultados, foi desenvolvido um front-end utilizando a framework React. As etapas de análise de texto e integração com a API foram realizadas em Python, enquanto a interface foi construída com React.</p>
        <br/>
        <div className="Home-subtitle">Resultados</div>
        <div>
          <br/>
          <div className='Home-text'>Dos 980 artigos resultantes da pesquisa no Google Scholar, 675 puderam ser baixados. Dentre estes, foram coletados datasets para 419 artigos, tipos de dados para 411 artigos e quantidade de dados para 484 artigos. Informações quantificáveis são resumidas pelos gráficos a seguir.</div>
          <div className="Summary" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
            <div><p className='Home-text'>Publicações coletadas por ano</p><img src={plotYear} alt="/plotYear" /></div>
            <div><p className='Home-text'>Distribuição dos tipos de dados coletados</p><img src={plotDataType} alt="/plotDataType" /></div>
            <div><p className='Home-text'>Distribuição da quantidade de dados nos datasets</p><img src={plotAmountData} alt="/plotAmountData" /></div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        </div>
    </div>
  );
}

export default App;
