$(function () {
    var modulesAutoC = [
        "Distinguer, préparer et évaluer des données",
        "Mettre en œuvre des systèmes de codification, de compression et d’encryptage",
        "Automatiser des procédures à l’aide de scripts",
        "Distinguer, préparer et évaluer des données"
    ];

    $('#nom_module').autocomplete({
        source: modulesAutoC
    });
});