const add = (x, y) => {
    return x + y
}
const btn = document.querySelector('#btnCalcular')
const form = document.querySelector('#addForm')

const calculo1 = document.querySelector('#calculo1')
const calculo2 = document.querySelector('#calculo2')

const result = document.querySelector('#result')

form.addEventListener('submit', sumInputValues)

function sumInputValues(e) {
    e.preventDefault()
    result.innerHTML = add(Number(calculo1.value), Number(calculo2.value))
    calculo1.value = ''
    calculo2.value = ''
}