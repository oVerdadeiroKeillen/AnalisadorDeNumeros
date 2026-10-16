var  lista = [] //lista de números
function adicionar() {//função de adicionar o número na lista
  var numero = Number(window.document.getElementById("numero").value)//recebe o número inserido
  if (numero < 1 || numero > 100) {
    window.alert(` Vc inseriu ${numero}. O número inserido precisa estar entre 1 e 100`)
  }
  else {
    var pesquisa = lista.indexOf(numero)//verifica se o número existe na lista
    if (pesquisa != -1) {//se o número já existe na lista ele mostra a sms e não adiciona
      window.alert("O número inserido já existe na lista")//sms
    }
    else {//adiciona o número caso ele não existe ainda na lista
      lista.push(numero)//adiciona o número na lista
      
      window.document.getElementById("lista").innerText = lista.join("; ")//mostra a lista na tela. O .join("; ") mostra os números seoarados na tela por "; "
      console.log(lista)//mostra a lista no console
    }
  }
}

function result() {
  console.log(lista) //mostra a lista no console quando a função é chamada
  //Média
  var a = 0
  var soma = 0
  for (a;a<lista.length;a++) {
    soma += lista[a]
  }
  console.log(soma)
  var media = soma / lista.length
  
  if (lista.length == 0) {
    window.alert("Nenhum dado inserido")
  }
  else {
    window.document.getElementById("resultNaTela").innerText = `A lista tem ${lista.length} número\nA média entre todos os números é ${media}\nO primeiro é ${lista[0]} e o último número é ${lista[lista.length-1]}\nA soma de todos os números é ${soma}\n`
  }
}