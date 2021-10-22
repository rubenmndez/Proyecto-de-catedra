(() => {
    if(window.addEventListener){
        window.addEventListener("load", iniciar, false)
    }else{
        window.attachEvent("onload", iniciar)
    }

    function iniciar(){
        var saveList = []
        const formularioPersona = document.getElementById("formularioParentesco")
        formularioPersona.style.visibility = 'hidden'
        const buttonRealizarPrestamo = document.getElementById('containerConfirmarAccion')
        buttonRealizarPrestamo.style.visibility = 'hidden'

        //submit del formulario 1 (Formulario registrado Objetos)
        const submitObjeto = document.getElementById('submit-FormObjeto')
        var todoCorrecto = false
        const nombreObjeto = document.getElementById("nombreObjeto")
        const descripcionObjeto = document.getElementById("descripcionObjeto")
        const categoriaOjeto = document.getElementById("categoriaObjeto")
        submitObjeto.addEventListener("click", function(){
        
        objectObjeto = {
            "nombreObjeto" :  nombreObjeto.value,
            "descripcionObjeto" : descripcionObjeto.value,
            "categoriaObjeto" : categoriaOjeto.value
        }
            if(objectObjeto["nombreObjeto"] == '' && objectObjeto["descripcionObjeto"] == ''){
                todoCorrecto = false
                formularioPersona.style.visibility = 'hidden'
                
             }else{
                todoCorrecto = true
             formularioPersona.style.visibility = 'visible'
            }   
            console.log(objectObjeto)
        }, false)
        agregarCategoria()


        const submitPersona = document.getElementById('submit-FormPersona')
        const nombrePersona = document.getElementById("personaPrestar")
        const parentescoPersona = document.getElementById("parentescoPersona")
        const correoPersona = document.getElementById("correoPersona")
        const celularPersona = document.getElementById("celularPersona")
        const fechaInicio = document.getElementById("dateAgendar")
        const fechaFin = document.getElementById("fechaLimite")
        submitPersona.addEventListener("click", function(){
           
            objectParentesco = {
                "nombrePersona" :  nombrePersona.value,
                "parentescoPersona" : parentescoPersona.value,
                "correoPersona" : correoPersona.value,
                "celularPersona" : celularPersona.value,
                "fechaInicio" : fechaInicio.value,
                "fechaFin" : fechaFin.value
            }
            buttonRealizarPrestamo.style.visibility = 'visible'
        }, false)
        
        //submit del formulario 2 (Formulario registrado Persona)
        
        agregarParentesco()
        
        const btnPrestar = document.getElementById('submitRealizarAccion')
        btnPrestar.addEventListener("click", function (){

           const dato =  getPrestamoData(nombreObjeto,descripcionObjeto,categoriaOjeto, nombrePersona,parentescoPersona,correoPersona, celularPersona, fechaInicio, fechaFin)
            saveList.push(dato)
            localStoragePrestamos(dato)
                const element = Object.values(dato);


                const showDataContainer = document.getElementById('showLocalData')
             

            const nodeText = document.createElement("h3")
            nodeText.append(element)
            showDataContainer.appendChild(nodeText)

            /*const showDataContainer = document.getElementById('showLocalData')
             getStoredData(showDataContainer)*/ 
             
            /*const nodeText = document.createElement("h1")
            nodeText.append(datosAlmacenados.value)
            showDataContainer.appendChild(nodeText)
            console.log(saveList)*/
        }, false)
    }
})()



//FUncion para agregar una nueva categoria de objetos
function agregarCategoria(){
    var selection = document.formularioPrestamosObjeto.categoriaObjeto.options[formularioPrestamosObjeto.categoriaObjeto.selectedIndex].value
    const btnAddOption = document.getElementById('addCategoria')
    var contador = 0
    btnAddOption.addEventListener("click", function(){
        contador = contador + 1
        const containerNewOption = document.getElementById('displaySubControls')
        if(contador == 1){
            const newopt = document.createElement("input")
            newopt.setAttribute("type", "text")
            newopt.setAttribute("name", "nuevaCategoria")
            newopt.setAttribute("id", "nuevaCategoria")
            newopt.setAttribute("placeholder", "Nueva Categoría")
            const newButtonOpt = document.createElement("input")
            newButtonOpt.setAttribute("type", "button")
            newButtonOpt.setAttribute("name", "buttonNewOption")
            newButtonOpt.setAttribute("id","buttonNewOption")
            newButtonOpt.setAttribute("value","Agregar a categorías")
            const cancelButtonOpt = document.createElement("input")
            cancelButtonOpt.setAttribute("type", "button")
            cancelButtonOpt.setAttribute("name", "buttoCancelOption")
            cancelButtonOpt.setAttribute("id","buttoCancelOption")
            cancelButtonOpt.setAttribute("value","Cancelar acción")
            containerNewOption.appendChild(newopt)
            containerNewOption.appendChild(newButtonOpt)
            containerNewOption.appendChild(cancelButtonOpt)

            cancelButtonOpt.addEventListener("click", function(){
                contador = 0
               containerNewOption.removeChild(cancelButtonOpt)
               containerNewOption.removeChild(newButtonOpt) 
               containerNewOption.removeChild(newopt) 
            }, false)

            newButtonOpt.addEventListener("click", function(){
                if(newopt.value == null){
                    contador = 0
                    containerNewOption.removeChild(cancelButtonOpt) 
                    containerNewOption.removeChild(newButtonOpt) 
                    containerNewOption.removeChild(newopt) 
                }
                imprimirDatos(selection, newopt.value)
                contador = 0
                containerNewOption.removeChild(cancelButtonOpt) 
                containerNewOption.removeChild(newButtonOpt) 
                containerNewOption.removeChild(newopt) 
            
            }, false)
        }
     
    }, false)
}
    

function stringuear(arregloOpciones, valorOpcion){
	var elemento = ""
	for (var i = 0; i < arregloOpciones.length; i++) {
		elemento += "<option value='" + (i) + "'>" + valorOpcion + "</option>"
	}
	return elemento
}

function imprimirDatos(arregloOpciones, valorOpcion){
	arregloString = stringuear(arregloOpciones, valorOpcion)
	document.getElementById('categoriaObjeto').innerHTML += arregloString
}
//Fin de parte para agregar una categoria al objeto


//FUncion para agregar un nuevo parentesco
function agregarParentesco(){
    var selectionParentesco = document.formularioParentesco.parentescoPersona.options[formularioParentesco.parentescoPersona.selectedIndex].value
    const btnAddParentesco = document.getElementById('addParentesco')
    var contadorParentesco = 0
    btnAddParentesco.addEventListener("click", function(){
        contadorParentesco = contadorParentesco + 1
        const containerNewParentesco = document.getElementById('parentescoPersonaContainer')
        if(contadorParentesco == 1){
            const newparen = document.createElement("input")
            newparen.setAttribute("type", "text")
            newparen.setAttribute("name", "nuevaCategoria")
            newparen.setAttribute("id", "nuevaCategoria")
            newparen.setAttribute("placeholder", "Otro Parentesco")
            const newButtonParen = document.createElement("input")
            newButtonParen.setAttribute("type", "button")
            newButtonParen.setAttribute("name", "buttonNewOption")
            newButtonParen.setAttribute("id","buttonNewOption")
            newButtonParen.setAttribute("value","Agregar a parentesco")
            const cancelButtonParen = document.createElement("input")
            cancelButtonParen.setAttribute("type", "button")
            cancelButtonParen.setAttribute("name", "buttoCancelOption")
            cancelButtonParen.setAttribute("id","buttoCancelOption")
            cancelButtonParen.setAttribute("value","Cancelar acción")
            containerNewParentesco.appendChild(newparen)
            containerNewParentesco.appendChild(newButtonParen)
            containerNewParentesco.appendChild(cancelButtonParen)

            cancelButtonParen.addEventListener("click", function(){
                contadorParentesco = 0
                containerNewParentesco.removeChild(cancelButtonParen) 
                containerNewParentesco.removeChild(newButtonParen) 
                containerNewParentesco.removeChild(newparen) 
            }, false)

            newButtonParen.addEventListener("click", function(){
                if(newparen.value == null){
                    contadorParentesco = 0
                    containerNewParentesco.removeChild(cancelButtonParen) 
                    containerNewParentesco.removeChild(newButtonParen) 
                    containerNewParentesco.removeChild(newparen) 
                }
                imprimirDatos(selectionParentesco, newparen.value)
                contadorParentesco = 0
                containerNewParentesco.removeChild(cancelButtonParen) 
                containerNewParentesco.removeChild(newButtonParen) 
                containerNewParentesco.removeChild(newparen) 
            
            }, false)
        }
     
    }, false)
}
    

function stringuear(arregloOpciones, valorOpcion){
	var elemento = ""
	for (var i = 0; i < arregloOpciones.length; i++) {
		elemento += "<option value='" + (i) + "'>" + valorOpcion + "</option>"
	}
	return elemento
}

function imprimirDatos(arregloOpciones, valorOpcion){
	arregloString = stringuear(arregloOpciones, valorOpcion)
	document.getElementById('parentescoPersona').innerHTML += arregloString
}
//Fin de parte para agregar una categoria al objeto



//Guardar en localStorage

function getPrestamoData(nomObjeto, DescObjeto, CatObjeto, nomPersona, ParenPersona, mailPersona, celularPersona, agendaPersona, finalPersona){
    var datosPrestamo = {
        nameObjeto : nomObjeto.value,
        descripObjeto : DescObjeto.value,
        categoryObjeto : CatObjeto.value,
        namePersona : nomPersona.value,
        parentescoPersona : ParenPersona.value,
        correoPersona : mailPersona.value,
        telefonoPersona : celularPersona.value,
        fechaInicio : agendaPersona.value,
        fechaFin : finalPersona.value
    }
    return datosPrestamo
}

function localStoragePrestamos(lista){
    localStorage.setItem('localPrestamos', JSON.stringify(lista))   
    //document.write(JSON.stringify(lista));
}

