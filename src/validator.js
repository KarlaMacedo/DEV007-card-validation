const validator = {
  //NO VACIO Y SOLO NUMEROS SIN ESPACIOS
  review: function (creditCardNumber) {
    const vacio = "vacio"
    if (creditCardNumber === "") { //si el usuario no ha escrito nada
      return vacio //retornar la variable que contiene un string "vacio"
    } 
    if (/\s/.test(creditCardNumber)) { //si el usuario escribio algo, revisa si lo que escribió el usuario contiene espacios
      return false  //si contiene espacios dentro de lo que escribió, retorna un false
    }
    if (/[^0-9]/.test(creditCardNumber)) { //si el usuario escribio algo, revisa si lo que escribió el usuario contiene caracteres que no sean un número
      return false  //si contiene caracteres que no son números, retorna un false
    } 
    else { //si no envio el input vaciío, no tiene espacios dentro de lo que escribió y no contiene carácteres distintos a números
      return true //retorna true
    }
  },

  //ALGORITMO DE LUHGN
  isValid: function (creditCardNumber) {
    //******REVERSA DEL NUMERO
    const reverseCardNumber= creditCardNumber.split('').reverse();//función para convertir un string en un array y función para voltear un array o arreglo
    const newArray = []; //variable tipo array donde guardaremos un nuevo array más adelante
    for (let i = 0; i < reverseCardNumber.length; i++) {//for para ir avanzando en cada elemento de nuestro number y revisar la condición o hacer la función
      let pairs = 0
      let odds = 0
      //******MULTIPLICAR POR DOS LOS PARES
      if (i%2 !== 0) {//la condición es que si al dividir el número de la posición del elemento entre 2 el residuo es igual a 0
        pairs = reverseCardNumber[i] * 2;//nos multiplica por dos ese elemento... es decir, si se encuentra en una posición par, multiplica por dos ese elemento
        const firstDigit = parseInt(pairs.toString().charAt(0)); //creamos una variable que nos guarde el primer dígito del número obtenido, para ello primero convertimos el número en un string (toString) y extraemos el primer dígito (charAt) y todo lo convertimos a un número (parseInt)
        newArray.push(firstDigit); //lo añadimos a un nuevo array (push)
        //******SUMAR DIGITOS DE NÚMEROS DE DOS CIFRAS
        if (pairs > 9) {//comprobamos si el número obtenido es mayor igual o mayor a 10
          const secondDigit = parseInt(pairs.toString().charAt(1));//creamos una variable que nos guarde el segundo dígito del número obtenido, para ello primero convertimos el número en un string (toString) y extraemos el segundo dígito (charAt) y todo lo convertimos a un número (parseInt)
          newArray.push(secondDigit) //lo añadimos al nuevo array (push)
        }
      }
      else {//si no se cumple la condición de que el número se encuentra en una posición par
        odds = reverseCardNumber[i] * 1; //multiplicamos el número por 1 para convertirlo de string a number
        newArray.push(odds);//lo añadimos al nuevo array (push)
      }
    }
    //******SUMA DE TODOS LOS NÚMEROS
    let totalyAdd = 0; //se crea la variable que contendrá la suma total de todos los dígitos obtenidos
    for (let i = 0; i < newArray.length; i++) {//for para ir avanzando en cada elemento de nuestro number y revisar la condición o hacer la función
      totalyAdd += newArray[i]; //se va sumando el valor de cada número contenido en el nuevo array (+=)
    }
    //******VERIFICAR SI ES MÚLTIPLO DE 10
    if ((totalyAdd % 10 === 0)) {//si al dividir la suma total de los dígitos del nuevo array entre 10 da un residuo igual a cero
      return true; //retornar verdadero
    }
    else { //si no...
      return false; //retornar falso
    }
  },
  
  //OCULTAR DÍGITOS Y MOSTRAR ÚLTIMOS 4
  maskify: function (creditCardNumber) {
    const numbersHide = creditCardNumber.slice (0, -4); //extraer del primer dígito hasta antes de los últmo 4 dígitos
    const numbersShow = creditCardNumber.slice (-4); //extraer últimos cuatro dígitos
    const maskNumbers = numbersHide.replace (/./g,  "#"); // reemplazar números a ocultar usando la expersión /./g para referirse a cualcier valor
    return maskNumbers + numbersShow //sumar numeros ocultos más ultimos cuatro digitos y retornar eso
  }
}

export default validator;
