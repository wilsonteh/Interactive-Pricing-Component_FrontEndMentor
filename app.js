let slider = document.querySelector('.slider');
let pageview = document.querySelector('.pageviews span');
let price = document.querySelector('.price .amount'); 
let checkbox = document.querySelector('.checkbox');

let softCyan = 'hsl(174, 77%, 80%)'
let lgrayBlue = 'hsl(224, 65%, 95%)'


// values for the slider to step on
const stepValue = [10, 50, 100, 500, 1000]

// to implement callback with params
function callbackParams(callback) {
    callback()
}

function updatePageView(step) {
    let unit
    let views = stepValue[step]

    if (views < 1000) {
        unit = 'k'
    } else {
        views /= 1000
        unit = 'm'
    }

    pageview.innerHTML = `${views}${unit}`
}

function updatePrice(step) {
    let pricing
    let views = stepValue[step]

    if (views <= 10) {
        pricing = 8
    } else if (views <= 50) {
        pricing = 12
    } else if (views <= 100) {
        pricing = 16
    } else if (views <= 500) {
        pricing = 24  
    } else {
        pricing = 36
    }

    price.innerHTML = `${pricing.toFixed(2)}`
}

function applyDiscount(pricing) {
    pricing *= 0.75
    price.innerHTML = `${pricing.toFixed(2)}`
}

function undoDiscount(pricing) {
    console.log(pricing)
    pricing /= 0.75
    price.innerHTML = `${pricing.toFixed(2)}`
}

function undoCheckbox(checkbox) {
    checkbox.checked = false
}

function getPrice() {
    return Number(price.textContent)
}

slider.addEventListener('input', function callbackParams() {
    updatePageView(this.value)    
    updatePrice(this.value)
    undoCheckbox(slider.nextElementSibling.children[1].children[0])

    // apply cyan color UP TO the thumb 
    // find the current slider step, possible values are 0, 1, 2, 3, 4
    // and convert to percentage value 25%, 50%, etc
    let currentStep = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = `linear-gradient(to right, ${softCyan} 0%, ${softCyan} ${currentStep}%, ${lgrayBlue} ${currentStep}%, ${lgrayBlue} 100%)`
})  

checkbox.addEventListener('change', function callbackParams() {
    if (this.checked) {
        applyDiscount(getPrice())
    } else if (!this.checked) {
        undoDiscount(getPrice())
    }
})