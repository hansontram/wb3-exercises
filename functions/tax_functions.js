let getSocSecTax = (grossPay) =>  {
let taxRate = .062
let socialSecurityTax = grossPay * taxRate
console.log(`Social Security Tax: ${socialSecurityTax}`)
}

let getMedicareTax = (grossPay) =>{
    let taxRate = .0145
let medicareTax = grossPay * taxRate
console.log(`Medicare Tax: ${medicareTax}`)
}


let getFederalTax = (grossPay, withholdingCode) => {
    let taxRate;

    if (withholdingCode === 0) {
        taxRate = 0.23;
    } else if (withholdingCode === 1) {
        taxRate = 0.21;
    } else if (withholdingCode === 2) {
        taxRate = 0.195;
    } else if (withholdingCode === 3) {
        taxRate = 0.185;
    } else if (withholdingCode >= 4) {
        taxRate = Number(0.18 - ((withholdingCode - 4) * 0.005)).toFixed(2);
    }

    let federalTax = Number(grossPay * taxRate).toFixed(2);
    console.log(`Gross Pay: $${grossPay}, Federal tax: $${federalTax}, Tax rate of ${taxRate * 100}% `);
}
getFederalTax(750,0)
getFederalTax(1550,2)
getFederalTax(1100,6)