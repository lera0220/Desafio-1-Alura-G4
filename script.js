
var boencriptar = document.getElementById("encriptar");
var bdesencriptar = document.getElementById("desencriptar");
var input= document.getElementById("entrada");
var resultado = document.getElementById("resultado");
const imagen = document.getElementById("imagen");
const linea1 = document.getElementById("linea1");
const linea2 = document.getElementById("linea2");
const copiar = document.getElementById("copiar");

var llaves=[["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];


function verif_texto_encriptar(){
    if(input.value !=""){
        encriptartexto();
   }else{
    busqueda_vacia();
   }

}
function verif_texto_desencriptar(){
    if(input.value != ""){
        desencriptartexto();
    } else {
        busqueda_vacia();
    }
}

function encriptartexto(){
    let texto = input.value;
    let texto_procesado = "";
    let encontrado = false ;

    for(let i = 0; i < texto.length; i++){
        for(let l = 0; l < llaves.length; l++){
            if(texto[i] == llaves[l][0]){
                encontrado = true;
                texto_procesado += llaves[l][1];
                break;
            }
        }
        if(encontrado == false){
            texto_procesado += texto[i];       
        }
        encontrado = false;
    }
    ver_resultado(texto_procesado);
}

function desencriptartexto(){
    let texto = input.value;

    for(let i = 0; i < llaves.length; i++){
            texto = texto.replaceAll(llaves[i][1], llaves[i][0]);
        }

    ver_resultado(texto);
}

function copiar_porta(){
    navigator.clipboard.writeText(resultado.innerHTML)
        .then(() => {
        console.log("Texto copiado")
    })
        .catch(err => {
        console.log('Error sin datos', err);
    })
}

function ver_resultado(texto_procesado){
    resultado.innerHTML = texto_procesado;
    resultado.style.display = "block";
    imagen.style.display = "none";
    linea1.style.display = "none";
    linea2.style.display = "none";
    copiar.style.display = "flex";
}

function busqueda_vacia(){
    resultado.style.display = "none";
    imagen.style.display = "flex";
    linea1.style.display = "flex";
    linea2.style.display = "flex";
    copiar.style.display = "none";
}

input.focus();
boencriptar.onclick = verif_texto_encriptar;
bdesencriptar.onclick = verif_texto_desencriptar;
copiar.onclick = copiar_porta;

