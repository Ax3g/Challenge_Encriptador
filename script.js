var frase=[];
var fraseEncriptar=[];
var fraseDesEncriptar=[];
var incrementos=[];
var mensaje;
var bandera,bandera1,banderamsg;
const vocales = ['a','e','i','o','u'];//caracteres que seran intercambiados por las llaves
const llaves = ["ai","enter","imes","ober","ufat"];//llaves de encriptacion
const caracteres = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','\u00f1','o','p','q','r','s','t','u','v','w','x','y','z'];//28 caracteres (0-27)
var ocultarImg = document.getElementById('ocultar');
ocultarImg.style.display = 'block';

function obtenerMensaje(){//almacena el texto ingresado por el usuario en una variable
    frase = document.querySelector(".texto-entrada").value;
}

function existeMensaje(){//comprueba si hay un mensaje para encriptar/desencriptar
    bandera = 0;
    banderamsg=0;
    if(frase == ''){
        bandera++;
        banderamsg=1;
    }
    if(bandera > 0){//no hay un mensaje
        ocultar();
        alert("No se encontro ningun mensaje para encriptar/desencriptar");
        document.getElementById("texto-salida").innerHTML = '';
    }
    else{//si hay un mensaje
        mostrar();
    }
}

function comprobarMinusculas(){//comprueba si el usuario introdujo minusculas y no caracteres especiales o acentos
    bandera1 = 0;
    for(let i = 0;i < frase.length;i++){
        for(let j = 0;j < caracteres.length;j++){
            if(frase[i] == caracteres[j]){
                bandera1 = 0;
                break;
            }
            else{
                bandera1 = 1;
            }
        }
        if(bandera1 == 1){
            break;
        }
    }
}

function crearIncrementos(){//esta funcion ayuda en la funcion de "desencriptar".Indica cuantos caracteres debe saltarse si encuentra una llave
    for(let i = 0;i < llaves.length ;i++){
        incrementos[i] = (llaves[i].length - 1);
    }
}

    function encriptar(){//funcion que encripta mensajes
        obtenerMensaje();
        existeMensaje();
        comprobarMinusculas();
        fraseEncriptar = [];
        let banderaLocal;
        if(bandera1 == 0){
            for(let i = 0;i < frase.length;i++){
                banderaLocal = 0;
                for(let j=0;j<vocales.length;j++){
                    if(frase[i] == vocales[j]){
                        fraseEncriptar.push(llaves[j]);
                        banderaLocal = 1;
                        break;
                    }
                }
                if(banderaLocal != 1){
                    fraseEncriptar.push(frase[i]);
                }
            }
            mensajeFinal(fraseEncriptar);
        }
        else{
            alert("Estas usando mayusculas o caracteres especiales, intenta de nuevo");
            ocultar();
            document.getElementById("texto-salida").innerHTML = '';
        }
    }

    function desEncriptar(){//funcion que desencripta mensajes
        obtenerMensaje();
        existeMensaje();
        comprobarMinusculas();
        crearIncrementos();
        fraseDesEncriptar = [];
        let banderaLocal;
        if(bandera1 == 0){
            for(let i = 0;i < frase.length;i++){
                banderaLocal = 0;
                //
                for(let j = 0;j < vocales.length;j++){
                    if(frase[i] == vocales[j]){
                        fraseDesEncriptar.push(vocales[j]);
                        banderaLocal = 1;
                        i += incrementos[j];
                        break;
                    }
                }
                if(banderaLocal != 1){
                    fraseDesEncriptar.push(frase[i]);
                }
            }
            mensajeFinal(fraseDesEncriptar);
        }
        else{
            alert("Estas usando mayusculas o caracteres especiales, intenta de nuevo");
            ocultar();
            document.getElementById("texto-salida").innerHTML = '';
        }
    }

    function mensajeFinal(texto){//mostrar el mensaje encriptado/desencriptado
        mensaje = texto[0];
        for(let i = 1;i < texto.length;i++){
            mensaje += texto[i] + '';
        }
        if(banderamsg == 0){//si hay mensaje
        //console.log(mensaje)
        document.getElementById("texto-salida").innerHTML = mensaje;
        }
    }

    function ocultar(){//oculta al boton "copiar"
        if(ocultarImg.style.display === 'none'){
            ocultarImg.style.display = 'block'; 
        }
    }

    function  mostrar(){//muestra al boton "copiar"
        if(ocultarImg.style.display === 'block'){
            ocultarImg.style.display = 'none';
        }
    }

    function copiar(){//funcion para copiar el texto encriptado/desencriptado
        let copyText = document.getElementById('texto-salida');
        copyText.select();
        document.execCommand('copy');
        let textoCopiado = document.execCommand('copy');
    }