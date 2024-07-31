document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    const a = document.getElementById('a').value
    const b = document.getElementById('b').value
    const mensagemSucesso =`Formulário váldio ! O valor ${b} é maior que o valor ${a}`
    const mensagemFracasso=`Formulário inválido ! O valor ${a} é maior que o valor ${b}. Por favor tente novamente`
    if(b>a){
        alert(mensagemSucesso);
    }else {
        alert(mensagemFracasso)
    };
});