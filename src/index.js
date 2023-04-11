import validator from './validator.js';

document.getElementById ("buttonCreditNumber").addEventListener ("click", function () {
        let mask = validator.maskify (document.getElementById("inputCreditNumber").value);
        return document.getElementById("inputCreditNumber").value = mask
    }) 

console.log(validator);
