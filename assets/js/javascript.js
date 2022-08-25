var nome = window.document.getElementById('nome')
var nomeOk = false

function validarNome(){
    let txtNome = document.getElementById('txtNome')
    if(nome.value.length < 3){
        alert('Nome inválido!')
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
}else{
    txtNome.innerHTML = 'Nome válido!'
    txtNome.style.color = 'green'
}
}
function enviar(){
    if(nomeOk == true){
    alert('Formulario enviado com sucesso!')
    }else{
        alert('Preencha corretmente')
    }
}