fetch('https://api.exemplo.com/data?api_key=SUA_API_KEY')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));