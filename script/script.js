$(function () {
    var index = 2;

    $( "#button_add" ).click(function() {
        $('<label id="number">' + index + '</label>').attr({
            for: 'nom_obj',
            class: 'col-sm-12 form-group',
            value: index
        }).appendTo('#label_obj');


        $('<input>').attr({
            type: 'text',
            id: 'nom_obj_' + index,
            name: 'nom_obj_' + index,
            class: 'form-control',
            placeholder: 'nom de l\'objectif'
        }).appendTo('#nom_obj');
        index++;
    });

    //-------------------------------------------------VALIDATE--------------------------------------------//
    var name_rule = "nom_obj_" + index;
    $("#inscription_form").validate(
        {
            rules:{
                num_module:{
                  required: true
                },
                nom_module:{
                    required: true
                },
                nom_competence:{
                    required: true
                },
                nom_obj_1:{
                  required: true
                },
                name_rule:{
                    required: true
                }
            },
        }
    );
});