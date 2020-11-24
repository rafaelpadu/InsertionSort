let insert = document.querySelector(".insert");
let cresc = document.querySelector(".valCrescente");
let desc = document.querySelector(".valDecrescente")
let val = [];
let numCresc = []
let numDecresc = []

document.addEventListener('keydown', (event) => {//ouve o evento de apertar espaço
    const key = event.keyCode || event.which //permite ouvir qual o código da tecla q esta sendo pressionada
    const space = key === 32;
    if(space){
        val = insert.value.split(" ")// cria o array que foi digitado pelo usuario
        numCresc = val.map(num => parseInt(num))//transforma as strings do array em numeros
        numDecresc = val.map(num => parseInt(num))//transforma as strings do array em numeros
        cresc.innerHTML = insertionCresc(numCresc);
        desc.innerHTML = insertionDecresc(numDecresc);
    }
})




function insertionCresc(numCresc) {
    let n = numCresc.length; 
        for (let i = 1; i < n; i++) {
            let atual = numCresc[i]; //o numero que esta sendo ordenado
            let x = i-1; //a casa anterior à casa do numero que está sendo comparada
            while ((x > -1) && (atual < numCresc[x])) {
                numCresc[x+1] = numCresc[x]; //a número daquela casa é movido para a direita
                x--;//decresce uma casa
            }
            numCresc[x+1] = atual;
        }
    return numCresc;
}

function insertionDecresc(numDecresc) {
    let n = numDecresc.length; 
        for (let i = 1; i < n; i++) {
            let atual = numDecresc[i]; //o numero que esta sendo ordenado
            let x = i-1; //a casa anterior à casa do numero que está sendo comparada
            while ((x > -1) && (atual > numDecresc[x])) {
                numDecresc[x+1] = numDecresc[x]; //a número daquela casa é movido para a direita
                x--;//decresce uma casa
            }
            numDecresc[x+1] = atual;
        }
    return numDecresc;
}

