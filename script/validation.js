$(function () {
    var index = 2;

    var dataAutoC = [
        {
            "numero":"100",
            "titre":"Distinguer, préparer et évaluer des données",
            "competence":"Préparer des informations pour une évaluation automatisée, vérifier et interpréter les résultats",
            "obj":
            [
                "Distinguer la caractéristique relative à la structure de données (texte, feuille de donnée, etc.) en vue du traitement respectivement de l´évaluation",
                "Distinguer les caractéristiques relatives au caractère univoque des données (exhaustivité, redondance, incohérence) en vue du traitement, respectivement de l´évaluation",
                "Choisir les informations d´un lot de données sur la base de la caractéristique et qui se prêtent à une évaluation déterminée"
            ]
        },
        {
            "numero":"114",
            "titre":"Mettre en œuvre des systèmes de codification, de compression et d’encryptage",
            "competence":"Mettre en œuvre des systèmes de codification, de compression et d’encryptage",
            "obj":
            [
                "Choisir et utiliser des procédures de compression appropriées d´archivage des informations. Démontrer quels sont les effets de la codification sur la transmission des données",
            ]
        },
        {
            "numero":"122",
            "titre":"Automatiser des procédures à l’aide de scripts",
            "obj":
                [
                    "Représenter graphiquement, dans un diagramme de flux, une fonction ou processus d´automatisation compte tenu des interactions de l´utilisateur",
                    "Transposer le diagramme de flux dans un script"
                ]
        }
    ];

    ///Event button "+" --> ajout des champs
    $( "#button_add" ).click(function() {
        index = CreateField(index);
    });

    ///AutoComplete
    var source = [ ];
    for (var i = 0; i < dataAutoC.length; i++){
        source.push(dataAutoC[i].numero);
    }

    $('#num_module').autocomplete({
        source: source
    });

    $('#num_module').change(function() {
        var num = index - 1;

        for(var i = 1; i <= num; i++){
            $('#inscription_form').removeChild($('#nom_obj_' + i));
        }

        index = 2;
       for(var i = 0; i < dataAutoC.length; i++){
           if(dataAutoC[i].numero == $('#num_module').val()){
               $('#nom_module').val(dataAutoC[i].titre);
               $('#nom_competence').val(dataAutoC[i].competence);

               for(var obj of dataAutoC[i].obj){
                   $('#nom_obj_' + num).val(obj);
                   if(num < dataAutoC[i].obj.length){
                       index = CreateField(index);
                       num++;
                   }
               }
           }
       }
    });

    //Validate
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


    ///FUNCTION
    //Ajout des champs (objectif)
    function CreateField(index) {
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
        index++;

        return index;
    }
});