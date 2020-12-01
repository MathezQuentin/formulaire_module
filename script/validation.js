$(function () {
    var index = 2;

    var dataAutoC = [
        {
            "numero":"100",
            "titre":"Distinguer, préparer et évaluer des données",
            "competence":"Préparer des informations pour une évaluation automatisée, vérifier et interpréter les résultats",
            "obj1":"Distinguer la caractéristique relative à la structure de données (texte, feuille de donnée, etc.) en vue du traitement respectivement de l´évaluation",
            "obj2":"Distinguer les caractéristiques relatives au caractère univoque des données (exhaustivité, redondance, incohérence) en vue du traitement, respectivement de l´évaluation",
            "obj3":"Choisir les informations d´un lot de données sur la base de la caractéristique et qui se prêtent à une évaluation déterminée"
        },
        {
            "numero":"114",
            "titre":"Mettre en œuvre des systèmes de codification, de compression et d’encryptage",
            "competence":"Mettre en œuvre des systèmes de codification, de compression et d’encryptage",
            "obj1":"Choisir et utiliser des procédures de compression appropriées d´archivage des informations. Démontrer quels sont les effets de la codification sur la transmission des données",
        },
        {
            "numero":"122",
            "titre":"Automatiser des procédures à l’aide de scripts",
            "obj1":"Représenter graphiquement, dans un diagramme de flux, une fonction ou processus d´automatisation compte tenu des interactions de l´utilisateur",
            "obj2":"Transposer le diagramme de flux dans un script"
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
        var value = $('#num_module').val();



        //$('#nom_module').val(dataAutoC[].titre);
        //$('#nom_competence').val(dataAutoC[key].competence);
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