let slider = document.querySelector('.slider');
let pageview = document.querySelector('.pageviews span');
let price = document.querySelector('.price .amount'); 
let checkbox = document.querySelector('.checkbox');


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

    price.innerHTML = `${pricing}`
}

function discount(pricing) {
    pricing *= 0.75
    price.innerHTML = `${pricing}`
}

function undoDiscount(pricing) {
    console.log(pricing)
    pricing /= 0.75
    price.innerHTML = `${pricing}`
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
})

checkbox.addEventListener('change', function callbackParams() {
    if (this.checked) {
        discount(getPrice())
    } else if (!this.checked) {
        undoDiscount(getPrice())
    }
})