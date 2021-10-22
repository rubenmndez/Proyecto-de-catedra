$(document).ready(function(){

    $("#submit-FormObjeto").click(function(){

        $("textarea").css({"border": "2px solid green"});
        $("#nombreObjeto").css({"border": "2px solid green"});
        $("#categoriaObjeto").css({"border": "2px solid green"});
    });

    $("#containerSubmit-FormPersona").click(function(){

        $("#personaPrestar").css({"border": "2px solid green"});
        $("#parentescoPersona").css({"border": "2px solid green"});
        $("#correoPersona").css({"border": "2px solid green"});
        $("#celularPersonas").css({"border": "2px solid green"});
    });

    $("#submit-FormObjeto").click(function(){

        $("#submit-FormObjeto").css({"border": "2px solid red"});
        $("#submit-FormPersona").css({"border": "2px solid red"});
    });

    $("#submit-FormPerson").click(function(){
        $("#submit-FormPersona").css({"border": "2px solid red"});
        $("#submitRealizarAccion").show();
        $("#dateAgendar").css({"border": "2px solid green"});
        $("#fechaLimite").css({"border": "2px solid green"});
        
    });
    $("#submit-FormObjeto").click(function(){
        var div = $("#titulopr");  
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '2em'}, "slow");
        
        
    });

});



