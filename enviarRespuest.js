// Función para enviar la respuesta al servidor
function enviarRespuesta(usuarioID, nodoID, respuesta) {
    fetch('http://localhost:3000/guardar-respuesta', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            usuarioID: usuarioID,  // ID único del usuario
            nodoID: nodoID,        // ID del nodo o pregunta en el árbol
            respuesta: respuesta   // Respuesta seleccionada por el usuario
        })
    })
    .then(response => response.json())  // Procesar la respuesta del servidor
    .then(data => {
        console.log('Respuesta guardada:', data);  // Mostrar en consola la respuesta del servidor
    })
    .catch(error => {
        console.error('Error al guardar la respuesta:', error);  // Manejo de errores si ocurre alguno
    });
}
