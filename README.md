# Challenge encriptador de texto
  <div align="center"><img src="https://github.com/Ax3g/Challenge_Encriptador/blob/master/img/img_Readme/Encriptador%20de%20texto.png"></div>
  <br>
  <div align="center"><a href="https://ax3g.github.io/Challenge_Encriptador/"><strong> == Enlace al encriptador de texto == </strong></a></div>
  
 ---
  
# Descripción

<p align="justify">Este es un challenge de Alura + ONE (Oracle Next Education) para fortalecer los conocimientos adquiridos en formación como principiante de programación.
Se desarrollo con tecnologías como: HTML5, CSS3  y JavaScript.

El proyecto consiste en elaborar un encriptador/desencriptador de texto.

Para este proyecto, al ingresar un texto cualquiera, el "encriptador de texto" buscara las vocales (a, e, i, o, u) y las intercambiara por unas frases que llamaremos "llaves", y de esta forma el texto original se verá modificado/encriptado para dificultar su lectura/comprensión.

De igual manera, podremos ingresar un texto que haya sido encriptado, y el "encriptador de texto" podrá buscar y detectar las "llaves" para asi poder intercambiarlas por sus vocales correspondientes, y así regresar al mensaje original.</p>

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
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
````
Por ejemplo:
"gato" => "gaitober"
"gaitober" => "gato"
````
- La página debe tener campos parainserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
- El resultado debe ser mostrado en la pantalla.

Extras:
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del área donde se muestra el resultado.

---

# Solución [Explicación del script.js]

<p align="justify">
Al inicio creamos y declaramos las variables que se usan a lo largo del programa.

Las variables de las líneas 1 a la 4, son variables que contendrán texto, las dejamos vacías "[ ]", pues no sabemos el tamaño o el número de caracteres que habrá dentro de ellas.

La variable "vocales" de la línea 7, contiene los caracteres que serán intercambiados por las "llaves", en este caso, esos caracteres son las vocales (a,e,i,o,u), pero al declarar esta variable al inicio del programa podemos agregar los caracteres que queramos intercambiar por una llave, claro, el número de variables en "vocales" deberá coincidir con el número de variables en "llaves".

La variable "llaves" de la línea 8, contiene las llaves/frases/oraciones que serán intercambiadas por las vocales que sean encontradas en el texto que el usuario introduzca. Y estas llaves pueden no tener sentido o algún significado específico, de igual forma, esta variable al estar declarada al inicio del programa puede ser modificada para agregar o quitar más llaves.

La variable "caracteres" contiene todos los caracteres que son permitidos, es decir, los caracteres que no se encuentren aquí no permitirán que el programa realice la encriptación/desencriptación y arrojará una alerta sobre esto. Dentro de "caracteres" se encuentran solamente las letras del abecedario en minuscula, incluida la "ñ" (la letra "ñ" es un carácter especial en javascript, y solo es reconocido con el código "\u00f1"), y además se encuentra el caracter de "espacio en blanco" (el caracter de espacio en blanco es el que produce la barra espaciadora en el teclado).

Las líneas 10 y 11 sirven para relacionar una sección de archivo de index.html en la que se muestra una imagen y dos textos (en el área donde se mostrarán los resultados de encriptar/desencriptar) con la variable "ocultarImg". Después la variable "ocultarImg" se establece como "block" para que esta imagen y texto se muestran y posteriormente en el código puede cambiar de "block" a "none" para ocultarlos y viceversa.
</p>

<div align="center"><img src="https://github.com/Ax3g/Challenge_Encriptador/blob/master/img/img_Readme/Parametros_iniciales.PNG"></div>
--------------------------------------------------------------------------------------------------------------------------------------------------------------

<p align="justify">
Lo siguiente es la funcion "obtenerMensaje" con la cual, con querySelector relacionamos el textarea en el que el usuario ingresara un texto cualquiera.
Este textarea tiene una clase llamada "texto-emntrada" y gracias a ".value" podemos obtener ese texto y almacenarlo en la variable global "frase". 
Gracias a que "frase" es una variable global, es que podemos utilizarla y modificarla a lo largo de todo el codigo del script.
</p>

<div align="center"><img src="https://github.com/Ax3g/Challenge_Encriptador/blob/master/img/img_Readme/Funcion_obtenerMensaje.PNG"></div>

Mas secciones en construcción ...
