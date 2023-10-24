function convertCtoF(celsius){
    let fahrenheit = Number((celsius *9/5) + 32).toFixed(0)
    console.log(`${celsius}C --> ${fahrenheit}F`)
}

convertFtoC(100)
convertFtoC(45)
convertFtoC(19)
convertFtoC(0)
convertFtoC(-7)
convertFtoC(-40)