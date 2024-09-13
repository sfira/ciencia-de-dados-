</footer>
<script type="module" src="graficos/common.js"></script>
<script type="module" src="graficos/informacoesGlobais.js"></script>
<script type="module" src="graficos/quantidadeUsuarios.js"></script>
const getCSS = (variavel) => {
  return getComputedStyle(document.body).getPropertyValue(variavel)
};

export {getCSS}
import { getCSS } from "./common.js";
const data = [
  {
    x: 'nomeDasRedes',
    y: quantidadeDeUsuarios,
    type: 'bar',
    marker: {
      color: getCSS('--primary-color')
    }
  }
]
const layout = {
    plot_bgcolor: getCSS('--bg-color')
    paper_bgcolor: getCSS('--bg-color')
}
const getCSS = (variavel) => {
  return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
  color: getCSS('--primary-color'),
  size: 16,
  family: getCSS('--font')
}

export { getCSS, tickConfig }

  },
    xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'nome das redes sociais',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    },
    
