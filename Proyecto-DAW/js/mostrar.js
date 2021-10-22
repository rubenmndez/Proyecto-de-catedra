
function llenarTabla() {
    var tbdoy = document.querySelector('tblPrestamo tbody');


    var aName= JSON.parse(localStorage.getItem('nombreObjeto')),
        aDescrip= JSON.parse(localStorage.getItem('descripObjeto')),
        aCateg= JSON.parse(localStorage.getItem('categoryObjeto')),
        aPerso= JSON.parse(localStorage.getItem('namePersona')),
        aInicio= JSON.parse(localStorage.getItem('fechaInicio')),
        aFin= JSON.parse(localStorage.getItem('fechaFin'));

        for(var i = 1; i < 2; i++){

            var fila = document.createElement('tr');

            var celdaName = document.createElement('td'),
                celdaDecrip = document.createElement('td'),
                celdaCateg = document.createElement('td'),
                celdaPerso = document.createElement('td'),
                celdaInicio = document.createElement('td'),
                celdaFin = document.createElement('td')

            var nodoTextoName = document.createTextNode(aName[i]),
                nodoTextoDescrip = document.createTextNode(aDescrip[i]),
                nodoTextoCateg = document.createTextNode(aCateg[i]),
                nodoTextoPerso = document.createTextNode(aPerso[i]),
                nodoTextoInicio = document.createTextNode(aInicio[i]),
                nodoTextoFin = document.createTextNode(aFin[i]);

                celdaName.appendChild(nodoTextoName);
                celdaDecrip.appendChild( nodoTextoDescrip);
                celdaCateg.appendChild( nodoTextoCateg);
                celdaPerso.appendChild(nodoTextoPerso);
                celdaInicio.appendChild(nodoTextoInicio);
                celdaFin.appendChild(nodoTextoFin);


            fila.appendChild(celdaName);
            fila.appendChild(celdaDecrip);
            fila.appendChild(celdaCateg);
            fila.appendChild(celdaPerso);
            fila.appendChild(celdaInicio);
            fila.appendChild(celdaFin);

            tbody.appendChild(fila);
        }

}
llenarTabla();