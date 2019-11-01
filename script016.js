function contar() {
    //copiar as informações do html e definir variaveis
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    // Verificar se algum campo esta em branco... 
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados...')
    } else {
        //alert('Tudo OK!')
        res.innerHTML = '<strong>Contando:</strong> <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //res.innerHTML = `${i} ${f} ${p}` // teste de recebimento de variavel
        
        if (p<=0) { // caso o passo seja igual a 0, passa a ser 1
            p=1 
            window.alert('[ERRO} Passo Inválido - Considerando passo - 1') 
        }
        
        if (i < f) { // Contagem crescente
                for (let c = i; c <= f; c+= p) {
                    res.innerHTML += `\u{1f603} ${c}  <br>`
                    }
        } else { // Contagem decrescente
                for (let c = i; c >= f; c-= p) {
                    res.innerHTML += `\u{1f603} ${c}  <br>`
                    }
                }
        res.innerHTML += '\u{1f618}'
    }
        
}



// função teste
function teste() {
    window.alert('Teste OK!')
}