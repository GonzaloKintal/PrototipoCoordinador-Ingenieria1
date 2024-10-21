function mostrarAlert(title, text, icon, confirmButtonText, cancelButtonText, onConfirm) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
    }).then((result) => {
        if (result.isConfirmed) {
            if (onConfirm) onConfirm();
        }
    });
}

document.getElementById('consultar-pacientes').addEventListener('click', function() {
    const centroSeleccionado = sessionStorage.getItem('centroSeleccionado');
    mostrarAlert(
        'Consultar pacientes que no completaron la encuesta',
        `¿Está seguro de que desea consultar los pacientes que no completaron la encuesta para el centro ${centroSeleccionado}?`,
        'info',
        'Consultar',
        'Cancelar',
        () => {
            Swal.fire('Consultando...', 'Usted será redirigido a una nueva ventana donde verá qué pacientes no completaron la encuesta.', 'info');
        }
    );
});

document.getElementById('enviar-recordatorios').addEventListener('click', function() {
    const centroSeleccionado = sessionStorage.getItem('centroSeleccionado');
    mostrarAlert(
        'Enviar Recordatorio',
        `¿Está seguro que desea enviar un recordatorio a todos los pacientes para el centro ${centroSeleccionado}?`,
        'warning',
        'Sí, enviar',
        'Cancelar',
        () => {
            Swal.fire('Recordatorio Enviado', 'El recordatorio ha sido enviado a los pacientes.', 'success');
        }
    );
});

document.getElementById('ver-reportes').addEventListener('click', function() {
    const centroSeleccionado = sessionStorage.getItem('centroSeleccionado');
    mostrarAlert(
        'Ver Reportes de Encuestas',
        `¿Desea ver los reportes de encuestas completadas para el centro ${centroSeleccionado}?`,
        'info',
        'Sí, ver reportes',
        'Cancelar',
        () => {
            Swal.fire('Reportes Disponibles', 'Usted será redirigido a la página de reportes.', 'info');
        }
    );
});
