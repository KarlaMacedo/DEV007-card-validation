import validator from './validator.js';

//SÓLO NÚMEROS
document.getElementById ("buttonCreditNumber").addEventListener ("click", function () { //escuchar el evento de click al elemento del html con ese ID y hacer la función
  const reviewer = validator.review (document.getElementById("inputCreditNumber").value);//en la variable reviewer alamacenar la información que se obtiene al mandar a llamar el método review de la variable validator contenida en el archivo validator.js y aplicarlo sobre el valor del elemento del html que tenga ese ID
  if (reviewer === "vacio") { // si reviewer obtiene el valor de "vacio" fue porque no escribio nada el usuario y entonces....
    document.getElementById("review").innerHTML = "Escribe un número de tarjeta" //modificar la etiqueta con ese ID y avisar que escriba algo
  } 
  if (reviewer === true){ //si reviewer obtiene el valor de verdadero fue porque el usuario escribio puros números enteros y entonces ahora sigue...
    //VALIDACIÓN TARJETA
    const validation = validator.isValid (document.getElementById("inputCreditNumber").value);//en la variable validation alamacenar la información que se obtiene al mandar a llamar el método isValid de la variable validator contenida en el archivo validator.js y aplicarlo sobre el valor del elemento del html que tenga ese ID
    if (validation === false) {
      document.getElementById("answerInvalid").innerHTML = "Tu tarjeta no es válida" //si se obtiene un falso, modificar el contenido del elemento con ese ID y dar el mensaje
    } 
    else {
      document.getElementById("answerValid").innerHTML = "Tu tarjeta es válida" //si no es falso, es verdadero y entonces, modificar el contenido del elemento con ese ID y dar el mensaje
    } 
  }
  else if (reviewer === false) { //si reviewer obtiene el valor de false fue porque el usuario escribio algún caracter distinto a números enteros y entonces...
    document.getElementById("review").innerHTML = "Escribe sólo números y sin espacios" //modificar la etiqueta con ese ID y avisar que escriba sólo numeros
  }
})

//ENMASCARAR NÚMERO
document.getElementById ("buttonCreditNumber").addEventListener ("click", function () { //escuchar el evento de click al elemento del html con ese ID y hacer la función
  const mask = validator.maskify (document.getElementById("inputCreditNumber").value);//en la variable mask alamacenar la información que se obtiene al mandar a llamar el método maskify de la variable validator contenida en el archivo validator.js y aplicarlo sobre el valor del elemento del html que tenga ese ID
  return document.getElementById("inputCreditNumber").value = mask //retornar en el elemento del html con ese ID y darle el valor de la variable mask
})
