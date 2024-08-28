// Requerimiento UNO
// 1. Agregar las siguientes horas al arreglo de Traumatología:
let nuevasTraumatologia = (traumatologia.push(
    { hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' },
));
console.table(traumatologia);
// 1.1. Ordenar el arreglo de Traumatología de forma creciente por hora.
traumatologia.sort((a, b) => (parseInt(a.hora.split(':').join('')) > parseInt(b.hora.split(':').join(''))) ? 1 : -1);
console.table(traumatologia);

// Requerimiento DOS
// 2. Eliminar el primer y último elemento del arreglo de Radiología.
radiologia.shift();
radiologia.pop();
console.table(radiologia);

// Requerimiento TRES
// 3. Imprimir la página, con document.write, la lista de pacientes de Dental, con los datos separados por guion, y cada fila separada por un párrafo.
let imprimirLista = (lista) => {
    let texto = '';

    lista.forEach((paciente) => {
        texto += `<p> ${paciente.hora} - ${paciente.especialista} - ${paciente.paciente} - ${paciente.rut} - ${paciente.prevision}</p>`;
        return texto;;
    });
    return texto;
}
document.write('<h3 style="margin-top: 25px;">Lista pacientes Dental</h3>');
document.write(imprimirLista(dental));


// Requerimiento CUATRO
// 4. Imprimir listado total de todos los pacientes que se atendieron.
let total = traumatologia.concat(radiologia, dental);
console.table(total);

let imprimirNombres = (lista) => {
    let arregloNombres = [];
    lista.forEach((paciente) => {
        arregloNombres.push(paciente.paciente);
    });
    arregloNombres.sort();
    let texto = '';
    arregloNombres.forEach((nombre) => {
        texto += `<p>${nombre}</p>`;
        ;
    });
    return texto;
}
console.log(total)
document.write('<h3 style="margin-top: 25px;">Lista de PACIENTES atendidos en el Centro Médico</h3>');
document.write(imprimirNombres(total));

// Requerimiento CINCO
// 5. Filtrar pacientes por ISAPRE en la lista de Dental.

let filtrarIsapre = (lista) => {
    let arregloIsapre = lista.filter((paciente) => paciente.prevision === 'ISAPRE');
    let texto = '';
    arregloIsapre.forEach((paciente) => {
        texto += `<p>${paciente.paciente} - ${paciente.prevision}</p>`;
    });
    return texto;
};

document.write('<h3>Pacientes con ISAPRE en DENTAL</h3>');
document.write(filtrarIsapre(dental));

// Requerimiento SEIS
// 6. Filtrar pacientes por FONASA en la lista de Traumatología.
let filtrarFonasa = (lista) => {
    let arregloFonasa = lista.filter((paciente) => paciente.prevision === 'FONASA');
    let texto = '';
    arregloFonasa.forEach((paciente) => {
        texto += `<p>${paciente.paciente} - ${paciente.prevision}</p>`;
    });
    return texto;
};
document.write('<h3>Pacientes con FONASA en TRAUMATOLOGÍA</h3>');
document.write(filtrarFonasa(traumatologia));
