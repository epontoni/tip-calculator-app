const bill = document.querySelector('#bill')
const tips = document.querySelector('.calculator-panel-tips-container');
const nPeople = document.querySelector('#people')
const amount = document.querySelector('#resultAmount')
const total = document.querySelector('#resultTotal')
const reset = document.querySelector('#reset')

let tip = 5;
let b = 0;
let p = 1;

let r_total = 0;
let r_amount = 0;

reset.addEventListener('click', function(){
    bill.value = ''
    tips.children[5].value = ''
    nPeople.value = ''
    amount.innerHTML = '$0.00'
    total.innerHTML = '$0.00'
})

tips.addEventListener('click', handleTip)

function handleTip(e) {
    if(e.target.type === 'button')
        tip = Number(e.target.value.replace('%', ''))
        b ? computar(b, tip, p) : null
}

tips.children[5].addEventListener('input', function(){
    tip = Number(this.value)
    b && p ? computar(b, tip, p) : null
})

bill.addEventListener('input', function(){
    b = Number(this.value)
    b ? computar(b, tip, p) : null
})

nPeople.addEventListener('input', function(){

    Number(this.value) <= 0 ? this.style.border = '2px solid red' : (p = Number(this.value), this.style.border = '2px solid hsl(172, 67%, 45%)')
    //p = this.value
    //console.log(p)
    computar(b, tip, p)
})

function computar(b, tip, p){
    r_total = (b + b*tip/100) / p
    r_amount = (b*tip/100) / p

    amount.innerHTML = `$${r_amount}`
    total.innerHTML = `$${r_total}`
}