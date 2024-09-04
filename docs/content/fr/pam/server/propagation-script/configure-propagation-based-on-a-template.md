---
_schema: défaut
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
Que le modèle ait été créé manuellement ou [téléchargé depuis le dépôt GitHub de Devolutions](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts), une configuration de propagation doit être appliquée par la suite.

## Configuration

Se rendre dans ***Administration*** – ***Accès privilégié*** – ***Propagation (aperçu)***, et cliquer sur le bouton Ajouter.

![Ajouter une nouvelle configuration de propagation](https://cdnweb.devolutions.net/docs/DVLS4046_2024_2.png "Ajouter une nouvelle configuration de propagation")

Une fenêtre devrait s'ouvrir contenant les modèles précédemment téléchargés ou créés. Choisir celui désiré et cliquer sur le bouton ***Sélectionner***.

{% snippet, "badgeCaution" %}Le présent sujet utilise le modèle de propagation de mot de passe {% var, "DVLS" false %} importé dans le sujet [Importer un modèle de script de propagation](/pam/server/propagation-script/import-propagation-script/).{% endsnippet %}

![Sélectionner un modèle à configurer](https://cdnweb.devolutions.net/docs/DVLS4047_2024_2.png "Sélectionner un modèle à configurer")

Dans l'onglet ***Général***, entrer un nom pour la configuration :

![Onglet Général](https://cdnweb.devolutions.net/docs/DVLS4052_2024_2.png "Onglet Général")

Remplir les informations requises concernant le {% var, "DVLS" false %} dans l'onglet ***Propriétés de propagation*** :

<table><thead><tr><th><p>CHAMP</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>DevolutionsServerUrl</strong></p></td><td><p></p></td></tr><tr><td><p><strong>ApplicationKey</strong></p></td><td><p></p></td></tr><tr><td><p><strong>ApplicationSecret</strong></p></td><td><p></p></td></tr><tr><td><p><strong>{% var, "VLT_MAJ" false %}Id</strong></p></td><td><p></p></td></tr><tr><td><p><strong>{% var, "VLT_MAJ" false %}Name</strong></p></td><td><p></p></td></tr><tr><td><p><strong>RunAsPassword</strong></p></td><td><p></p></td></tr><tr><td><p><strong>PSSessionConfigurationName</strong></p></td><td><p></p></td></tr></tbody></table>

&nbsp;
