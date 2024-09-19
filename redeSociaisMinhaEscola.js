<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redes Sociais</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.plot.ly/plotly-2.27.0.min.js" charset="utf-8"></script>
</head>
<body>
    <header>
        <h1>Relatório das redes sociais</h1>
        <nav>
            <a href="index.html">Mundo</a>
            <a href="#">Minha escola</a>
        </nav>
    </header>
    <main class="graficos-section">
        <section id="graficos-container" class="graficos-container">
            <!-- crie os gráficos/texto aqui -->
        </section>
    </main>
    <footer>
        <p>Desenvolvido por Gui Lima</p>
    </footer>
    <script type="module" src="graficos/common.js"></script>
    <script type="module" src="graficos/informacoesGlobais.js"></script>
    <script type="module" src="graficos/quantidadeUsuarios.js"></script>
    <script type="module" src="graficos/redesFavoritasMundo.js"></script>
</body>
</html>
    <script type="module" src="graficos/redesSociaisMinhaEscola.js"></script>
</body>
</html>
async function redesSociaisFavoritasMinhaEscola() {
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=rSe23zaQC7gOvWgFJbdtPaqh7ewsO5hQmusYOeqdorTRN8C25vVV3BicsPo6HS3jnJY9NNhy_pNZj6prQdxDH3305Mro8vNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1nSncGQajx_ryfhECjZEnPvESZ9fvnAeFWqfIvIacdoRZcVMZ-nDSydw9_0gseo2TN3y60rOTtwDBCYnKQf6yIqgf8yOzNfccjP633C9VnHmUmPZvRBJY9z9Jw9Md8uu&lib=MCARBaBtNBMHKiEwMeRap3j6V_G7SlGWF'
    const res = await fetch(url) 
    const dados = await res.json()
 localStorage.setItem('respostaRedesSociais', JSON.stringify(dados))
        processarDados(dadosLocais)
    const redesSociais = dados.slice(1).map(redes = redes[1])
    console.table(dados)
}
redesSociaisFavoritasMinhaEscola()
const contagemRedesSociais = redesSociais.reduce((acc, redesSociais) => {
    acc[redesSociais] = (acc[redesSociais] || 0) + 1
    return acc
}, {})
import { criarGrafico, getCSS } form "./common.js"
//código omitido

const data = [
  {
    values: '',
    labels: '',
    type: 'pie',
    textinfo: 'label+percent'
  }
]
    criarGrafico(data, layout)
    incluirTexto(`Como no mundo, a amostra de pessoas entrevistadas por mim, demonstra um apreço pelo <span>Instagram</span> em relação a outras redes`)
}

redesSociaisFavoritasMinhaEscola()
            localStorage.setItem('respostaRedesSociais', JSON.stringify(dados))
            processarDados(dadosLocais)
    }
}

function processarDados(dados) {
    const redesSociais = dados.slice(1).map…
    const dadosLocaisString = localStorage.getItem('respostaRedesSociais')
if (dadosLocaisString) {
    const dadosLocais = JSON.parse(dadosLocaisString)
    processarDados(dadosLocais)
    }
