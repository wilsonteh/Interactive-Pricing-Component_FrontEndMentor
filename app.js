let slider = document.getElementById('slider');
let pageview = document.querySelector('.pageviews span');
let price = document.querySelector('.price span'); 

// to implement callback with params
function callbackParams(callback) {
    callback()
}

function updatePageView(views) {
    let unit

    // 10 is 10k bcs we remove the trailing zeros 
    if (views < 1000) {
        unit = 'k'
    } else {
        views /= 1000
        unit = 'm'
    }

    pageview.innerHTML = `${views}${unit}`
}

function updatePrice(views) {
    let pricing

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

    price.innerHTML = `$${pricing}`
}


slider.addEventListener('input', function callbackParams() {
    updatePageView(this.value)    
    updatePrice(this.value)
})
