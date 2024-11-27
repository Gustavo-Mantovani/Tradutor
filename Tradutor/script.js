const apiKey = 'SUA_CHAVE_DE_API_DO_GOOGLE_CLOUD'; // Insira sua chave da API do Google Cloud
const apiUrl = 'https://translation.googleapis.com/language/translate/v2';

function translateText() {
  const sourceText = document.getElementById('sourceText').value;
  const sourceLang = document.getElementById('sourceLang').value;
  const targetLang = document.getElementById('targetLang').value;

  if (!sourceText) {
    alert('Por favor, insira o texto para tradução.');
    return;
  }

  const url = `${apiUrl}?key=${apiKey}`;
  const data = {
    q: sourceText,
    source: sourceLang,
    target: targetLang,
    format: 'text'
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      alert('Erro na tradução: ' + data.error.message);
    } else {
      document.getElementById('translatedText').value = data.data.translations[0].translatedText;
    }
  })
  .catch(error => {
    alert('Erro ao se conectar ao Google Tradutor: ' + error.message);
  });
}
