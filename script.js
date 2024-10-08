var map = L.map('map').setView([-34.5183621, -58.7210417], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

var zona1 = L.polygon([
    [-34.5363845, -58.6966104],
    [-34.5183621, -58.7210417],
    [-34.5664343, -58.729618]
], {
    color: 'blue',       
    fillColor: '#6e83b7', 
    fillOpacity: 0.5     
}).addTo(map).bindPopup("Zona 1 - Su zona a cargo");

var zona2 = L.polygon([
    [-34.532683, -58.7013386],
    [-34.4831795, -58.6825548],
    [-34.5091541, -58.7285355],
    [-34.5180441, -58.721119]
], {
    color: 'green',
    fillColor: '#82b67a',
    fillOpacity: 0.5
}).addTo(map).bindPopup("Zona 2");

var zona3 = L.polygon([
    [-34.5183217, -58.7213241],
    [-34.5094945, -58.8234511],
    [-34.5571286, -58.7761039]
], {
    color: 'red',
    fillColor: '#f28c8c',
    fillOpacity: 0.5
}).addTo(map).bindPopup("Zona 3");


// Pines de centros
var centro1 = L.marker([-34.5241413, -58.7528047]).addTo(map).bindPopup(`
    <strong>Centro 1 - Hospital Duhau</strong><br>
    Dirección: Av. del Sesquicentenario 1898, Bella Vista<br>
`);

var centro2 = L.marker([-34.5169151, -58.7409193]).addTo(map).bindPopup(`
    <strong>Centro 2 - Hospital Mercante</strong><br>
    Dirección: Calle L. Pasteur 800, José C. Paz<br>
`);

var centro3 = L.marker([-34.5125784, -58.7957356]).addTo(map).bindPopup(`
    <strong>Centro 3 - Hospital Caporaletti</strong><br>
    Dirección: Blas Parera 1587, José C. Paz<br>
`);

var centro4 = L.marker([-34.4982873, -58.693946]).addTo(map).bindPopup(`
    <strong>Centro 4 - Hospital Carillo</strong><br>
    Dirección: Calle E. Tobal 1683, San Miguel<br>
`);

var centro5 = L.marker([-34.5072248, -58.7058069]).addTo(map).bindPopup(`
    <strong>Centro 5 - Centro Maggio</strong><br>
    Dirección: Gaspar Campos 1325, San Miguel<br>
`);

var centro6 = L.marker([-34.5208437, -58.7167286]).addTo(map).bindPopup(`
    <strong>Centro 6 - Polo Sanitario</strong><br>
    Dirección: Balbín 2602, San Miguel<br>
`);

var centro1 = L.marker([-34.5360467, -58.7206976]).addTo(map).bindPopup(`
    <strong>Centro 1 - Hospital Larcade</strong><br>
    Dirección: Av. Presidente Perón 2153, San Miguel<br>
    Encuestas completadas: 78%
`);
var centro2 = L.marker([-34.5409446, -58.7121195]).addTo(map).bindPopup(`
    <strong>Centro 2 - Clínica Bessone</strong><br>
    Dirección: Av. Ricardo Balbín 2229, San Miguel<br>
    Encuestas completadas: 64%
`);
var centro3 = L.marker([-34.5425484, -58.7135853]).addTo(map).bindPopup(`
    <strong>Centro 3 - Sanatorio San Miguel</strong><br>
    Dirección: Charlone 654, San Miguel<br>
    Encuestas completadas: 82%
`);

document.getElementById('centers-list').innerHTML = `
    <li><strong>Centro 1: Hospital Larcade</strong><br>
        Dirección: Av. Presidente Perón 2153, San Miguel<br>
        Teléfono: (011) 4451-4411
    </li>
    <li><strong>Centro 2: Clínica Bessone</strong><br>
        Dirección: Av. Ricardo Balbín 2229, San Miguel<br>
        Teléfono: (011) 4664-8400
    </li>
    <li><strong>Centro 3: Sanatorio San Miguel</strong><br>
        Dirección: Charlone 654, San Miguel<br>
        Teléfono: (011) 4664-4500
    </li>
`;

// Funcionalidad de los botones con SweetAlert
document.getElementById('send-reminder').addEventListener('click', function() {
    Swal.fire({
        title: '¿Enviar recordatorio a los pacientes?',
        text: "Esto enviará un recordatorio a todos los pacientes cuyas encuestas estén pendientes.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, enviar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Enviado!',
                'El recordatorio ha sido enviado a los pacientes.',
                'success'
            );
        }
    });
});

document.getElementById('view-reports').addEventListener('click', function() {
    Swal.fire({
        title: '¿Ver reportes de encuestas?',
        text: "Usted será redirigido a una nueva ventana donde verá reportes de las encuestas completadas.",
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, ver reportes',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Cargando reportes!',
                'Mostrando los reportes de encuestas.',
                'success'
            );
        }
    });
});

