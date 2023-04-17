const listaspesa = [
    'Salame',
    'Pomodori',
    'Insalata',
    'Patate',
    'Legumi',
    'Maionese',
]

let i = 0

while(i < listaspesa.length){
    document.querySelector('ul').innerHTML+=`<li>${listaspesa[i]}</li>`
    i++
}