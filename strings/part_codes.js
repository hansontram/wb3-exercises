// supplierCode:productNumber-size
// ACME:123-L
// DI:12345-M
// ACE:1-12
// the large (L) part 123 is supplied by ACME
// the medium (M) part 12345 is supplied by DI
// the size 12 part 1 is supplied by ACE

let productCode = "ACME:123-L";

function getSupplier(code) {
    let colon = code.indexOf(":");
    return ( code.substring(0, colon) );
}
let supplier = getSupplier(productCode)
console.log("Supplier: ", supplier)

function getProductNumber (code){
    let hyphen = code.indexOf("-")
    let colon = code.indexOf(":");
    return ( code.substring(colon+1, hyphen))
}
let productNumber = getProductNumber(productCode)
console.log("Product #: ", productNumber)

function getSize (code){
    let hyphen = code.indexOf("-")
    return(code.substring(hyphen+1))
}
let size = getSize(productCode)
console.log("Size:", size)