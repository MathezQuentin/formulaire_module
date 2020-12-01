$(function () {
    var numModuleAutoC = [
      "100",
      "114",
      "122"
    ];

    var modulesAutoC = [
        "Distinguer, préparer et évaluer des données",
        "Mettre en œuvre des systèmes de codification, de compression et d’encryptage",
        "Automatiser des procédures à l’aide de scripts",
        "Distinguer, préparer et évaluer des données"
    ];

    var competenceAutoC = [
        "a",
        "b",
        "c",
        "d"
    ];

    var objectifAutoC = [
        "1",
        "2",
        "3",
        "4"
    ];

    $('#num_module').autocomplete({
        source: numModuleAutoC
    });

    $('#num_module').change(function() {
        $('#nom_module').val(modulesAutoC[numModuleAutoC.indexOf($(this).val())]);
        $('#nom_competence').val(competenceAutoC[numModuleAutoC.indexOf($(this).val())]);
        $('#nom_obj_1').val(objectifAutoC[numModuleAutoC.indexOf($(this).val())]);
    });
});