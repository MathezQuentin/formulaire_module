$(function () {
    var index = 2;
    var table_obj = new Array();
    table_obj.push('nom_obj_1');

    //Ajout des labels
    $( "#button_add" ).click(function() {
        $('<label id="number">' + index + '</label>').attr({
            for: 'nom_obj',
            class: 'col-sm-12 form-group',
            value: index
        }).appendTo('#label_obj');


        //Ajout des champs text
        $('<input>').attr({
            type: 'text',
            id: 'nom_obj_' + index,
            name: 'nom_obj_' + index,
            class: 'form-control',
            placeholder: 'nom de l\'objectif'
        }).appendTo('#nom_obj');
        table_obj.push('nom_obj_' + index);
        index++;
    });

    //-------------------------------------------------VALIDATE--------------------------------------------//
    $("#inscription_form").submit(function() {
        var failCount = 0;

        $("#inscription_form input").each(function() {
            if($.trim($(this).val()) === ""){
                alert("Aucun champ ne doit être vide");
                failCount++;
                return false;
            }
        });

        if(failCount > 0){
            return false;
        }
    });
});