// let name = "Hanson Tram"
// let address = "123 Main Street"
// let city = "Chandler"
// let state = "Arizona"
// let zip = "93935"

function displayMailingLabel(name, address, city, state, zip) {
  console.log(`Name: ${name}`);
  console.log(`address: ${address}`);
  console.log(`city: ${city}`);
  console.log(`state: ${state}`);
  console.log(`zip: ${zip}`);
}

function addNumbers(num1,num2){
    let sum = num1 + num2
    console.log(`${num1} + ${num2} = ${sum}`)
}

function displayReceipt(totalDue, amountPaid){
    let changeDue = amountPaid - totalDue
    console.log(`Total Due: ${totalDue}`)
    console.log(`Amount Paid: ${amountPaid}`)
    console.log(`Change Due: ${changeDue}`)
}

displayMailingLabel("Bob Marc","123 Main Street","Chandler","Arizona","93935")
console.log()
displayMailingLabel("John Doe","321 Main Street","Phoenix","Arizona","93925")
console.log()
addNumbers(100,102)
console.log()
addNumbers(65,134)
console.log()
displayReceipt(75,100)
console.log()
displayReceipt(75,75)
console.log()
displayReceipt(75,70)