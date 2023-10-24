function convertFtoC(fahrenheit){
    let celsius = Number((fahrenheit -32) * 5/9).toFixed(0)
    console.log(`${fahrenheit}F --> ${celsius}C`)
}

convertFtoC(212)
convertFtoC(90)
convertFtoC(72)
convertFtoC(32)
convertFtoC(0)
convertFtoC(-40)