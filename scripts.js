const sortearBtn = document.querySelector(".sortear-btn")
const sortearNovamenteBtn = document.querySelector(".sortear-btn-novamente")
const quantidadeNumeros = document.getElementById("quantidade-números")
const intervaloInicial = document.getElementById("intervalo-inicial")
const intervaloFinal = document.getElementById("intervalo-final")
const queroSortear = document.querySelector(".quero-sortear")
const resultadoSorteio = document.getElementById("result")
const numerosSorteados = document.querySelector(".numeros-sorteados")

sortearBtn.addEventListener("click", (event) => {
    sortearNumeros(quantidadeNumeros, intervaloInicial, intervaloFinal)
    mostrarResultadoSorteio()
})

function sortearNumeros(quantidadeNumeros, intervaloInicial, intervaloFinal){

    const qtd = parseInt(quantidadeNumeros.value)
    const inicial = parseInt(intervaloInicial.value)
    const final = parseInt(intervaloFinal.value)
    const naoRepetir = document.getElementById("no-repeat").checked

    if (isNaN(qtd)|| qtd < 1 || qtd > 10) {
        alert("Quantidade de números deve ser um número entre 1 e 10")
        return
    }

    if (isNaN(inicial) || isNaN(final) || inicial >= final) {
        alert("Intervalo inválido. Certifique-se de que o valor inicial é menor que o valor final.")
        return
    }

    const resultado = [];

    if (naoRepetir) {
        const totalDisponivel = final - inicial + 1;

        if (qtd > totalDisponivel) {
            alert("Quantidade maior que o intervalo disponível para números sem repetição.");
            return;
        }

        while (resultado.length < qtd) {
            const numero = Math.floor(Math.random() * (final - inicial + 1)) + inicial;
            if (!resultado.includes(numero)) {
                resultado.push(numero);
            }
        }

        resultado.forEach((numero) => {
            const newSpan = document.createElement("span");
            newSpan.textContent = numero;
            numerosSorteados.appendChild(newSpan); 
        });

    } else {
        for (let i = 0; i < qtd; i++) {
            const numero = Math.floor(Math.random() * (final - inicial + 1)) + inicial;
            resultado.push(numero);
        }

        resultado.forEach((numero) => {
            const newSpan = document.createElement("span");
            newSpan.textContent = numero;
            numerosSorteados.appendChild(newSpan); 
        });
    }
}

function mostrarResultadoSorteio() {
    queroSortear.classList.add("display-none")
    resultadoSorteio.classList.remove("display-none")
}

sortearNovamenteBtn.addEventListener("click", (event) => {
    sortearNovamente()
})

function sortearNovamente() {

    numerosSorteados.innerHTML = ""
    queroSortear.classList.remove("display-none")
    resultadoSorteio.classList.add("display-none")
}
