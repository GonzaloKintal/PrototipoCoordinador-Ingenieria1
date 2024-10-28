const centros = window.centros;
const zonas = window.zonas;

function initMap() {
    const mapa = L.map('map').setView([-34.5183621, -58.7210417], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(mapa);

    mapa.on('click', () => {
        ocultarBotones()
        mapa.closePopup();
        deseleccionarCentroEnLista();
    });
    
    return mapa;
}

function agregarZonasAlMapa(zonas, mapa) {
    zonas.forEach(zona => {
        const polygon = L.polygon(zona.coordenadas, {
            color: zona.color,
            fillColor: zona.fillColor,
            fillOpacity: 0.5
        }).addTo(mapa).bindPopup(zona.nombre);

        polygon.on('click', (e) => {
            mapa.closePopup();
            polygon.openPopup();
            ocultarBotones();
            deseleccionarCentroEnLista();
        });
    });
}

function agregarCentrosAlMapa(centros, listaCentros, mapa) {
    centros.forEach(centro => {
        const marcador = crearMarcador(mapa, centro);

        marcador.on('popupclose', () => {
            ocultarBotones();
            deseleccionarCentroEnLista();
        });

        marcador.on('click', () => {
            if (centro.zona === "Zona 1") {
                mostrarBotones();
                seleccionarCentroEnLista(centro.nombre, listaCentros);
            } else {
                ocultarBotones();
                deseleccionarCentroEnLista();
            }
        });

        if (centro.zona === "Zona 1") {
            const itemLista = crearElementoListaCentro(centro);

            itemLista.addEventListener('click', () => {
                marcador.openPopup(); 
                mostrarBotones(); 
                seleccionarCentroEnLista(centro.nombre, listaCentros); 
            });
            
            listaCentros.appendChild(itemLista);
        }
    });
}

function crearMarcador(mapa, centro) {
    const marcador = L.marker(centro.coordenadas)
        .addTo(mapa)
        .bindPopup(`
            <strong>${centro.nombre}</strong><br>
            Dirección: ${centro.direccion}<br>
            Encuestas completadas: ${centro.encuestasCompletadas}
        `);
    return marcador;
}

function crearElementoListaCentro(centro) {
    const itemLista = document.createElement('li');
    itemLista.innerHTML = `
        <strong>${centro.nombre}</strong><br>
        Dirección: ${centro.direccion}<br>
        Teléfono: ${centro.telefono}
    `;
    return itemLista;
}

function mostrarBotones() {
    const contenedorBotones = document.querySelector('.info-panel');
    contenedorBotones.querySelectorAll('button').forEach(boton => boton.style.display = 'block');
}

function ocultarBotones() {
    const contenedorBotones = document.querySelector('.info-panel');
    contenedorBotones.querySelectorAll('button').forEach(boton => boton.style.display = 'none');
}

function seleccionarCentroEnLista(nombreCentro, listaCentros) {
    const itemsLista = listaCentros.getElementsByTagName('li');

    Array.from(itemsLista).forEach(item => {
        item.classList.remove('seleccionado');
    });

    Array.from(itemsLista).forEach(item => {
        if (item.innerText.includes(nombreCentro)) {
            item.classList.add('seleccionado');
            sessionStorage.setItem('centroSeleccionado', nombreCentro);
        }
    });
}

function deseleccionarCentroEnLista() {
    const listaCentros = document.getElementById('centros-lista');
    const itemsLista = listaCentros.getElementsByTagName('li');

    Array.from(itemsLista).forEach(item => {
        item.classList.remove('seleccionado');
    });

    sessionStorage.removeItem('centroSeleccionado');
}

const mapa = initMap();
agregarZonasAlMapa(zonas, mapa);

const listaCentros = document.getElementById('centros-lista');
agregarCentrosAlMapa(centros, listaCentros, mapa);