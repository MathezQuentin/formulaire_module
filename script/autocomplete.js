$(function () {
    var placeholderData = [
        "Mathez",
        "Quentin",
        "Dobbs",
        "Jack"
    ]

    $('#nom_competence').autocomplete({
        source: placeholderData
    });
});