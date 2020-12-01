<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Formulaire</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <link rel="stylesheet" href="jquery-ui.css">

    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script></head>
<body>
<div class="container">
    <div class="row">
        <div class="header">
            <!--<h3>Insertion des modules</h3>-->
        </div>
    </div>

    <div class="panel panel-primary">
        <div class="panel-heading">
            Insertion des modules
        </div>
    </div>

    <div class="panel-body">
        <form id="inscription_form" action="./../check/check_form.php" method="post">
            <!--Numéro et titre-->
            <div class="form-group row">
                <label for="nom_per" class="col-sm-3 col-form-label">Numéro et titre du module</label>
                <div class="col-sm-2">
                    <!--<input type="number" class="form-control" id="num_module" name="num_module" min="1" placeholder="numéro du module">-->
                    <input type="text" class="form-control" id="num_module" name="num_module" min="1" placeholder="numéro du module">
                </div>
                <div class="col-sm-7">
                    <input type="text" class="form-control" id="nom_module" name="nom_module" placeholder="titre du module">
                </div>
            </div>

            <!--Compétence-->
            <div class="form-group row">
                <label for="nom_per" class="col-sm-3 col-form-label">Compétence</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="nom_competence" name="nom_competence" placeholder="nom de la compétence">
                </div>
            </div>

            <!--Liste des objectif-->
            <div class="form-group row" id="obj">
                <label for="nom_obj" class="col-sm-3 col-form-label">Liste des objectifs</label>

                <div class="col-sm-1 form-group" id="label_obj">
                    <label for="nom_obj" name class="col-sm-12 form-group">1</label>
                </div>


                <div class="col-sm-8" id="nom_obj">
                    <input type="text" class="form-control" id="nom_obj_1" name="nom_obj_1" placeholder="nom de l'objectif">
                </div>
            </div>



            <!--Bouton ajouter-->
            <div class="form-group row">
                <div class="col-sm-offset-12">
                    <input type="button" name="button_add" id="button_add" value="+">
                </div>
            </div>

            <!--Bouton valider-->
            <div class="form-group row">
                <div class="col-sm-offset-11">
                    <button class="btn btn-primary" type="submit" id="send">Valider</button>
                </div>
            </div>
        </form>
    </div>

    <div class="panel-footer">

    </div>
</div>
<script src="script/validation.js"></script>
<!--<script src="script/autocomplete.js"></script>-->
</body>
</html>