let numero1;
let numero2;
numero1 =  parseInt(prompt("Ingrese un numero", "0"),10);

let operacion =  prompt("Ingrese el simbolo de una operacion (+ ; - ; * ; /)");
numero2 =  parseInt(prompt("Ingrese un numero", "0"),10);

let mensaje ;

switch (operacion) 
{
    case ("+"):
        mensaje = "el resultado es: " + (numero1 + numero2)
      break;
    case ("-"):
        mensaje = "el resultado es: " + (numero1 - numero2)
      break;
    case ("*"):
        mensaje = "el resultado es: " + (numero1 * numero2)
      break;
    case ("/"):
        mensaje = "el resultado es: " + (numero1 / numero2)
      break;
    default:
      mensaje = "no se pudo realizar la operacion, puede que no haya colocado correctamente el simbolo de la operacion";
  };

alert(mensaje);

