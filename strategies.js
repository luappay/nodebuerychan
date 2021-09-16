"use strict"

module.exports = {
    checkPriceLower : checkPriceLower
}

function checkPriceLower(data, pricePoint){
    let lastPrice = JSON.parse(data)["c"]

    return new Promise((resolve, reject) => {
        if (lastPrice < pricePoint){
            let msg = `Price fell below ${ pricePoint }!!!\nLast transacted price is: ${ lastPrice }`
            resolve(msg)
        }
        reject()
    })
}