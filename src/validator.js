const validator = {
  isValid: function () {
    let reverseCardNumber = reverse ()

  },

  maskify (number) {
    let numbersHide = number.slice (0 , -4);
    let numbersShow = number.slice (-4);
    let maskNumbers = numbersHide.replace (/./g,  "*" );
    return maskNumbers + numbersShow
  }

};

export default validator;
