let saldo = 20000
let transa = []


function actualizarSaldo () {
    document.getElementById("saldo").innerHTML = `Saldo actual es: $$ ${saldo}`
}

function Consulta() {
    alert(`Su saldo es: $$ ${saldo}`)
}

function mostrarTransa(){
    const transaccionesList = document.getElementById("Transacciones");
    transaccionesList.innerHTML = '';

    transa.forEach(transaccion => {
        const li = document.createElement('li');
        li.innerText = transaccion;
        transaccionesList.appendChild(li);
    });
}

function Deposito() {
    const cantidad = parseFloat(document.getElementById("cantidad").value)

    if (isNaN(cantidad) | cantidad <=0) {
        alert("La cantidad a depositar deber ser mayor 0")
        return;
    }

saldo+= cantidad
    transa.push(`Se depositaron ${cantidad}`);
    actualizarSaldo(); //todo
    mostrarTransa();
    alert(`Se han depositado $$ ${cantidad}`)
}

function Retiro() {
    const cantidad = parseFloat(document.getElementById("cantidad").value)
    if (isNaN(cantidad) || cantidad <=0) {
        alert("La cantidad a depositar deber ser mayor 0")
        return;
    } 
    if (cantidad > saldo) {
        alert("Los fondos para esta transaccion son insuficientes")
        return
    }
    saldo -= cantidad
    transa.push(`Se retiraron $$ ${cantidad}`)
    actualizarSaldo(); // todo
    mostrarTransa();
    alert(`Se han retirado $$ ${cantidad}`)
}