async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
  const res = await fetch(url)
  const dados = await res.json()
    
    console.log(dados)
}
quantidadeUsuarios()
{"Facebook": 3049, "Youtube": 2491, "WhatsApp": 2000, "Instagram": 2000, "TikTok": 1562}

