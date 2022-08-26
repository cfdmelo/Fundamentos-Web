var nome = window.document.querySelector('#nome')
var sobrenome = window.document.querySelector('#sobrenome')
var email = window.document.querySelector('#email')
var assunto = window.document.querySelector('#assunto')
var nomeOk = false
var sobrenomeOk = false
var emailOk = false
var assuntoOk = false
var map = document.querySelector('#map')

function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome deve conter mais de três caracteres!'
        txtNome.style.color = 'red'
    }else{
    txtNome.innerHTML = 'Nome válido!'
    txtNome.style.color = 'green'
    nomeOk = true
    }
}
function validarSobrenome(){
    let txtSobrenome = document.querySelector('#txtSobrenome')
    if(sobrenome.value.length < 3){
        txtSobrenome.innerHTML = 'Sobrenome deve conter mais de três caracteres!'
        txtSobrenome.style.color = 'red'
    }else{
    txtSobrenome.innerHTML = 'Nome válido!'
    txtSobrenome.style.color = 'green'
    sobrenomeOk = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email inválido!'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'Email válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
        if (assunto.value.length >= 100){
            txtAssunto.innerHTML = 'Texto é muito grande digite no máximo 100 cracteres'
            txtAssunto.style.color = 'red'
            txtAssunto.style.display = 'block'
        }else{
            txtAssunto.style.display = 'none'
            assuntoOk = true
        }
    }

function enviar(){
    if(nomeOk == true && sobrenomeOk == true && emailOk == true && assuntoOk == true){
    alert('Formulario enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}

function mapzoom() {
map.style.width = '800px'
map.style.height = '600px'
}

function mapout() {
    map.style.width = '300px'
    map.style.height =  '200px'
    }

