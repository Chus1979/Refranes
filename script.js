const getRefranURL = 'http://localhost:3000/api/refran/';
const addRefranURL = 'http://localhost:3000/api/addRefran/';
const segundosPausa = 5;
const inicioHTML = document.querySelector('.inicios');
const finalHTML = document.querySelector('.finales');
const nuevoInicioHTML = document.querySelector('#nuevoInicio');
const nuevoFinalHTML = document.querySelector('#nuevoFinal');
const enviarHTML = document.querySelector('#enviar');


function getRefran () {
    fetch(getRefranURL)
        .then(
             resp=>resp.json()
        )
        .then(
             obj=>{
                inicioHTML.innerText = obj.inicios;
                finalHTML.innerText = obj.finales;
            }
        )
    setTimeout(getRefran,segundosPausa*1000);
}
function enviar(){
    /**Post en formato mime-multipart */
    /**var data =  new FormData(); //un obj donde guardar los datos
    data.append('inicio',nuevoInicioHTML.value);
    data.append('final',nuevoFinalHTML.value);
    var requestOptions = {
        method: 'POST',
        body: data,
    };*/

    /**Post en formato JSON */
    var data = {
        inicios: nuevoInicioHTML.value,
        finales: nuevoFinalHTML.value,
    };
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
        }
    };
    fetch(addRefranURL,requestOptions)
        .then(res=>window.alert('Gracias por participar;p'))
        .catch(res=>window.alert('¡¡La cagaste!!'))
}

enviarHTML.onclick = enviar

getRefran();