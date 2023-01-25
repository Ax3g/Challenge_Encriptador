# Challenge encriptador de texto
  <div align="center"><img src="https://github.com/Ax3g/Challenge_Encriptador/blob/master/img/img_Readme/Encriptador%20de%20texto.png"></div>
  <br>
  <div align="center"><a href="https://ax3g.github.io/Challenge_Encriptador/"><strong> == Enlace al encriptador de texto == </strong></a></div>
  
 ---
  
# Descripción

<p align="justify">Este es un challenge de Alura + ONE (Oracle Next Education) para fortalecer los conocimientos adquiridos en formación como principiante de programación. Se desarrollo con tecnologías como: HTML5, CSS3  y JavaScript.</p>

<p align="justify">El proyecto consiste en elaborar un encriptador/desencriptador de texto.</p>

<p align="justify">Para este proyecto, al ingresar un texto cualquiera, el "encriptador de texto" buscara las vocales (a, e, i, o, u) y las intercambiara por unas frases que llamaremos "llaves", y de esta forma el texto original se verá modificado/encriptado para dificultar su lectura/comprensión.</p>

<p align="justify">De igual manera, podremos ingresar un texto que haya sido encriptado, y el "encriptador de texto" podrá buscar y detectar las "llaves" para asi poder intercambiarlas por sus vocales correspondientes, y así regresar al mensaje original.</p>

Las llaves de encriptacion utilizadas son:

- La letra "a" es convertida en "ai"
- La letra "e" es convertida en "enter"
- La letra "i" es convertida en "imes"
- La letra "o" es convertida en "ober"
- La letra "u" es convertida en "ufat"

---

# Requisitos

- Debe funcionar solo con letras minúsculas.
- No deben ser utilizados letras con acentos ni caracteres especiales.
- Debe ser posible convertir un texto en una palabra/oración encriptada, y de igual manera también debe de devolver una palabra/oración encriptada a su versión original.
````
Por ejemplo:
"gato" => "gaitober"
"gaitober" => "gato"
````
- La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones.
- El resultado debe ser mostrado en la pantalla.

Extras:
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del área donde se muestra el resultado.

---

# Caracteristicas

explicacion de que ocurre si hay texto o no hay o si se borra despues de haber encriptado o al usar mayus o caracteres especiales............

---

# Solución [Explicación del script.js]

### Variables declaradas

<p align="justify">Al inicio creamos y declaramos las variables que se usan a lo largo del programa.</p>

<p align="justify">Las variables de las líneas 1 a la 4, son variables que contendrán texto, las dejamos vacías "[ ]", pues no sabemos el tamaño o el número de caracteres que habrá dentro de ellas.</p>

<p align="justify">En la variable "mensaje" de la línea 5 es en donde se almacenará el resultado final, asi que podrá contener el texto encriptado o desencriptado.</p>

<p align="justify">Las variables de la línea 6 serán utilizadas en diferentes funciones a lo largo de todo el script y serán de ayuda para modificar el comportamiento de algunas de las funciones del encriptador de texto.</p>

<p align="justify">La variable "vocales" de la línea 7, contiene los caracteres que serán intercambiados por las "llaves", en este caso, esos caracteres son las vocales (a, e, i, o, u), pero al declarar esta variable al inicio del programa podemos agregar los caracteres que queramos intercambiar por una llave, claro, el número de variables en "vocales" deberá coincidir con el número de variables en "llaves".</p>

<p align="justify">La variable "llaves" de la línea 8, contiene las llaves/frases/oraciones que serán intercambiadas por las vocales que sean encontradas en el texto que el usuario introduzca. Y estas llaves pueden no tener sentido o algún significado específico, de igual forma, esta variable al estar declarada al inicio del programa puede ser modificada para agregar o quitar más llaves.</p>

<p align="justify">La variable "caracteres" contiene todos los caracteres que son permitidos, es decir, los caracteres que no se encuentren aquí no permitirán que el programa realice la encriptación/desencriptación y arrojará una alerta sobre esto. Dentro de "caracteres" se encuentran solamente las letras del abecedario en minuscula, incluida la "ñ" (la letra "ñ" es un carácter especial en javascript, y solo es reconocido con el código "\u00f1"), y además se encuentra el caracter de "espacio en blanco" (el caracter de espacio en blanco es el que produce la barra espaciadora en el teclado).</p>

<p align="justify">Las líneas 10 y 11 sirven para relacionar una sección de archivo de index.html en la que se muestra una imagen y dos textos (en el área donde se mostrarán los resultados de encriptar/desencriptar) con la variable "ocultarImg". Después la variable "ocultarImg" se establece como "block" para que esta imagen y texto se muestran y posteriormente en el código puede cambiar de "block" a "none" para ocultarlos y viceversa.</p>

<div align="center"><img src="https://github.com/Ax3g/Challenge_Encriptador/blob/master/img/img_Readme/Parametros_iniciales.PNG"></div>

### Función obtenerMensaje

<p align="justify">La siguiente es la función "obtenerMensaje" con la cual, con querySelector relacionamos el textarea en el que el usuario ingresa un texto cualquiera para encriptar/desencriptar.</p>
  
<p align="justify">Este textarea tiene una clase llamada "texto-entrada" y gracias a ".value" podemos obtener ese texto y almacenarlo en la variable global "frase".</p> 
  
<p align="justify">Gracias a que "frase" es una variable global, es que podemos utilizarla y modificarla a lo largo de todo el código del script.</p>

<div align="center"><img src="https://github.com/Ax3g/Challenge_Encriptador/blob/master/img/img_Readme/Funcion_obtenerMensaje.PNG"></div>

### Funcion existeMensaje

<p align="justify">Esta función sirve para saber si el textarea no está vacío y si es que existe algún mensaje para encriptar/desencriptar el programa continue.</p>

<p align="justify">El primer "if" que abarca de la línea 20 a la 23, compara si "frase" es igual nada (''), es decir, pregunta si en el textarea hay algún texto para encriptar/desencriptar. La variable "bandera" se utiliza en el siguiente if y la variable "banderamsg" se utiliza en la función de "mensajeFinal()".</p>

<p align="justify">El segundo "if" que abarca de la línea 24 a la 31, pregunta si la variable "bandera" es mayor a cero, ¿si "bandera" es mayor a cero? esto indica que no se encontró un texto para encriptar/desencriptar. Entonces, al no existir ningún texto, mandamos llamar a la función "ocultar()" de la línea 25, que veremos más adelante, la linea 26 mostrara un mensaje emergente que indicara que no hay mensajes para encriptar/desencriptar y por ultimo, la linea 27 borrara cualquier tipo de texto/mensaje que se encuentre en el textaarea en el que se muestran el resultado de la encriptacion/desencriptacion. </p>
  
<p align="justify">En cambio, ¿si "bandera" es igual a cero?, esto indica que si existe texto para encriptar/desencriptar. Entonces, en la línea 30 mandamos llamar a la función "mostrar()", la cual se explicará más adelante.</p>

<div align="center"><img src="https://github.com/Ax3g/Challenge_Encriptador/blob/master/img/img_Readme/Funcion_existeMensaje.PNG"></div>

### Funcion comprobarMinusculas

<p align="justify">Esta funcion sirve para comprobar que el texto que ha ingresado el usuario contiene solamente letras minusculas.</p>

<p align="justify">Inisiaremos con un ejemplo facil, supongamos que el usuario a ingresado el texto de "hola" para que sea encriptado. El texto de "hola" se ha almacenado en la variable de "frase".</p>

<p align="justify">Primero hay que indicar que hay dos ciclos for. El primer ciclo for (linea 36 a 49) contiene dentro a un segundo ciclo for (linea 37 a 45).</p>

<p align="justify">El primer ciclo for nos ayudara a recorrer cada uno de los caracteres que conforman al texto de "hola", es decir, nos permitira iniciar con la "h", depues pasaremos a la "o", luego a la "l" y por ultimo a la "a". Gracias a "frase.length" podemos estar seguros de que sea cual sea el texto que ingrese un usuario, podremos recorrer desde el primer caracter hasta el ultimo.</p>

<p align="justify">El segundo ciclo for nos ayudara a recorrer todos los caracteres que hemos almacenado en la variable "caracteres", la cual solamente contiene los caracteres del abecedario y en minusculas, ademas del espacio en blanco. Si quisieramos que nuestro encriptador de texto reconosca mas caracteres como numeros, o caracteres especiales como parentesis, comillas, signos de interrogacion, signos de exclamacion, etc., solo bastaria con agregarlos a la variable de  "caracteres".</p>

<p align="justify">sección en construcción... (lamentamos las molestias.)</p>
<p align="justify"></p>
<p align="justify"></p>
<p align="justify"></p>
<p align="justify"></p><p align="justify"></p>

<div align="center"><img src="https://github.com/Ax3g/Challenge_Encriptador/blob/master/img/img_Readme/Funcion_comprobarMinusculas.PNG"></div>


Mas secciones en construcción ...
