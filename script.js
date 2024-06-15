const form = document.getElementById('presupuestoForm');
const resultado = document.getElementById('resultado');
const guardarPresupuestoBtn = document.getElementById('guardarPresupuesto');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const direccionOrigen = document.getElementById('direccionOrigen').value;
    const direccionDestino = document.getElementById('direccionDestino').value;
    const cargaFurgoneta = document.getElementById('cargaFurgoneta').value;
    const operarios = parseInt(document.getElementById('operarios').value, 10);
    const distancia = parseFloat(document.getElementById('distancia').value);
    const dificultad = document.getElementById('dificultad').value;

    // Calcular el costo base de la furgoneta
    let costeBase = 0;
    switch (cargaFurgoneta) {
        case 'minima':
            costeBase = 30;
            break;
        case 'media':
            costeBase = 55;
            break;
        case 'trescuartos':
            costeBase = 100;
            break;
        case 'completo':
            costeBase = 130;
            break;
    }

    // Calcular el costo de los operarios
    const costeOperario = operarios * 55;

    // Calcular el costo de la distancia
    const costeDistancia = distancia * 1.2;

    // Calcular el costo de la dificultad
    let costeDificultad = 0;
    switch (dificultad) {
        case 'ninguna':
            costeDificultad = 0;
            break;
        case 'baja':
            costeDificultad = 12;
            break;
        case 'media':
            costeDificultad = 25;
            break;
        case 'alta':
            costeDificultad = 38;
            break;
    }

    // Calcular el costo total
    const costeTotal = costeBase + costeOperario + costeDistancia + costeDificultad;

    // Mostrar los resultados
    resultado.innerHTML = `
        <h2>Presupuesto para: ${nombre}</h2>
        <p>Dirección de Origen: ${direccionOrigen}</p>
        <p>Dirección de Destino: ${direccionDestino}</p>
        <p>Carga de Furgoneta: ${cargaFurgoneta} (€${costeBase})</p>
        <p>Operarios: ${operarios} (€${costeOperario})</p>
        <p>Distancia (km): ${distancia} (€${costeDistancia.toFixed(2)})</p>
        <p>Dificultad: ${dificultad} (€${costeDificultad})</p>
        <hr>
        <h2>Desglose</h2>
        <p>Base: ${costeBase}€</p>
        <p>Operario: ${costeOperario}€</p>
        <p>Distancia: ${costeDistancia.toFixed(2)}€</p>
        <p>Dificultad: ${costeDificultad}€</p>
        <hr>
        <h2>Total: ${costeTotal.toFixed(2)}€</h2>
    `;
});

// Función para guardar el presupuesto en un archivo de texto
function guardarPresupuesto() {
    const nombre = document.getElementById('nombre').value;
    const direccionOrigen = document.getElementById('direccionOrigen').value;
    const direccionDestino = document.getElementById('direccionDestino').value;
    const cargaFurgoneta = document.getElementById('cargaFurgoneta').value;
    const operarios = parseInt(document.getElementById('operarios').value, 10);
    const distancia = parseFloat(document.getElementById('distancia').value);
    const dificultad = document.getElementById('dificultad').value;

    // Calcular el costo base de la furgoneta
    let costeBase = 0;
    switch (cargaFurgoneta) {
        case 'minima':
            costeBase = 30;
            break;
        case 'media':
            costeBase = 55;
            break;
        case 'trescuartos':
            costeBase = 100;
            break;
        case 'completo':
            costeBase = 130;
            break;
    }

    // Calcular el costo de los operarios
    const costeOperario = operarios * 35;

    // Calcular el costo de la distancia
    const costeDistancia = distancia * 1.2;

        // Calcular el costo de la dificultad
    let costeDificultad = 0;
    switch (dificultad) {
        case 'ninguna':
            costeDificultad = 0;
            break;
        case 'baja':
            costeDificultad = 12;
            break;
        case 'media':
            costeDificultad = 25;
            break;
        case 'alta':
            costeDificultad = 38;
            break;
    }

    // Calcular el costo total
    const costeTotal = costeBase + costeOperario + costeDistancia + costeDificultad;

    // Mostrar los resultados
    resultado.innerHTML = `
        <h2>Presupuesto Final - ${nombre}</h2>
        <p>Dirección de Origen: ${direccionOrigen}</p>
        <p>Dirección de Destino: ${direccionDestino}</p>
        <p>Carga de Furgoneta: ${cargaFurgoneta} (€${costeBase})</p>
        <p>Operarios: ${operarios} (€${costeOperario})</p>
        <p>Distancia (km): ${distancia} (€${costeDistancia.toFixed(2)})</p>
        <p>Dificultad: ${dificultad} (€${costeDificultad})</p>
        <hr>
        <h2>Desglose</h2>
        <p>Base: ${costeBase}€</p>
        <p>Operario: ${costeOperario}€</p>
        <p>Distancia: ${costeDistancia.toFixed(2)}€</p>
        <p>Dificultad: ${costeDificultad}€</p>
        <hr>
        <h2>Total: ${costeTotal.toFixed(2)}€</h2>
    `;

    // Crear el contenido del archivo de texto
    const contenidoArchivo = `
        Nombre del Cliente: ${nombre}
        Dirección de Origen: ${direccionOrigen}
        Dirección de Destino: ${direccionDestino}
        Carga de Furgoneta: ${cargaFurgoneta} (€${costeBase})
        Operarios: ${operarios} (€${costeOperario})
        Distancia (km): ${distancia} (€${costeDistancia.toFixed(2)})
        Dificultad: ${dificultad} (€${costeDificultad})
        
        Costes:
        - Base: ${costeBase}€
        - Operario: ${costeOperario}€
        - Distancia: ${costeDistancia.toFixed(2)}€
        - Dificultad: ${costeDificultad}€
        
        Total: ${costeTotal.toFixed(2)}€
    `;

    // Crear un nuevo objeto Blob con el contenido del archivo
    const archivo = new Blob([contenidoArchivo], { type: 'text/plain' });

    // Crear un objeto URL para el Blob
    const urlArchivo = URL.createObjectURL(archivo);

    // Crear un elemento <a> para descargar el archivo
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = urlArchivo;
    enlaceDescarga.download = 'presupuesto.txt';
    enlaceDescarga.click();

    // Liberar el objeto URL
    URL.revokeObjectURL(urlArchivo);
}

// Asignar la función guardarPresupuesto al evento click del botón
guardarPresupuestoBtn.addEventListener('click', guardarPresupuesto);
