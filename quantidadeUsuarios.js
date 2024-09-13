async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
  const res = await fetch(url)
  const dados = await res.json()
    
    console.log(dados)
}
quantidadeUsuarios()
{"Facebook": 3049, "Youtube": 2491, "WhatsApp": 2000, "Instagram": 2000, "TikTok": 1562}
const nomeDasRedes = Object.keys(dados)
const quantidadeUsuarios = Object.values(dados)
const data = [
  {
    x: nomeDasRedes,
    y: quantidadeUsuarios,
    type: 'bar'
  }
]
const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data)
async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuarios.json'
  const res = await fetch(url)
  const dados = await res.json()
}

quantidadeUsuarios()

