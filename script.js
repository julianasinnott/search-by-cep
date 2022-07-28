const apiURL = 'https://viacep.com.br/ws'
const form = document.getElementById('form') 
const { cep } = form

form.addEventListener('submit', e => {
  e.preventDefault()  
  getData(cep.value)
})

function getData(cep) {
  fetch(`${apiURL}/${cep}/json/`)
    .then(response => {
      response.json().then (data => {
        if(data.cep) {
          buildCepInfo(data)
        } else {
          alert('Cep Inválido')
        }
      })
    })
    .catch(error => {
      alert('Cep Inválido')
      console.log(error)
    })
}

function buildCepInfo(data) {
  Object.keys(data).forEach((item) => {
    const element = document.getElementById(item)    
    if (element) element.innerHTML += ` ${data[item]}`
  });
}


