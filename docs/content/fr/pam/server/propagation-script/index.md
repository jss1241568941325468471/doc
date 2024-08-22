---
_schema: default
eleventyComputed:
  title: Propagation de mot de passe
---
***Propagation de mot de passe*** permet aux mots de passe des comptes privilégiés réinitialisés d'être propagés aux services des serveurs distants. Ce sujet couvre la [Propagation par script](#propagation-par-script) et la [Propagation spécifique à Active Directory](#active-directory-specific-propagation).

{% youtube 'drRLA7U8YsQ?si=ihVhTcJOKxAh5kKS&amp;start=225' %}

## Propagation par script

Les sections suivantes décrivent les propriétés de la fonctionnalité de ***Propagation*** par script dans la solution de gestion des accès privilégiés de Devolutions. La section [Étapes](#steps-with-template) explique comment configurer cette fonctionnalité en utilisant un modèle Devolutions, mais il est également possible de [Créer un modèle](#create-a-powershell-template).

{% snippet, "badgeInfo" %}
Cette méthode couvre tous les fournisseurs de comptes PAM.
{% endsnippet %}

### Étapes (avec modèle)

1. Télécharger notre [fichier modèle](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts) depuis GitHub.
2. Se connecter à {{ fr.DVLS }} avec un compte administrateur.
3. Aller à ***Administration*** – ***Modules*** – ***Accès privilégié*** – ***Propagation (Aperçu)***. ![Propagation (Preview)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0096.png)
4. Cliquer sur ***Modèles de script***. ![Script Templates](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0097.png)
5. Cliquer sur ***Importer***. ![Import](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0098.png)
6. Sélectionner le fichier modèle .json précédemment téléchargé et cliquer sur ***Importer***. ![Import button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0099.png)
7. Cliquer sur ***Enregistrer***. ![Save button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0100.png)
8. Retourner à la page ***Propagation (Aperçu)***.
9. Cliquer sur ***Ajouter***. ![Add](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0101.png)
10. Sélectionner le modèle souhaité et cliquer sur ***Sélectionner***. ![Select button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0102.png)
11. Dans l'onglet ***Général***, nommer cette configuration.
12. Dans l'onglet ***Propriétés de propagation***, entrer les informations pour la machine distante.
13. Dans l'onglet ***Mappage des propriétés***, cliquer sur ***Configurer une entrée PAM*** pour sélectionner un type de compte privilégié. ![Configure a PAM entry](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0103.png)
14. Cliquer sur ***Continuer***.
15. Sélectionner les champs du compte (ou fournisseur) à associer aux variables et cliquer sur ***Enregistrer***.
16. Cliquer sur ***Enregistrer*** pour enregistrer cette nouvelle configuration et fermer la fenêtre. ![Save button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0104.png)
17. Aller à l'onglet ***Accès privilégié*** et sélectionner un type de compte précédemment configuré avec ***Propagation***.
18. Cliquer sur ***Modifier***.
19. Aller à l'onglet Propagation et cliquer sur le bouton "***\+***". ![+ button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0105.png)
20. Sélectionner la configuration à lier à ce compte, et cliquer sur ***Confirmer***. ![Confirm button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0106.png) {% snippet, "badgeInfo" %}
               Il est possible de sélectionner plusieurs configurations.
               {% endsnippet %}
21. Cliquer sur ***OK*** pour enregistrer les modifications et fermer la fenêtre. ![OK button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0107.png) {% snippet, "badgeInfo" %}
               Pour tester si le lien est réussi, cliquer sur ***Plus*** puis ***Réinitialiser le mot de passe***. Si cela fonctionne correctement, le nouveau fichier créé apparaîtra sur la machine distante. Sinon, il est recommandé de vérifier les journaux du compte.
               {% endsnippet %}

## Propagation spécifique à Active Directory

{% snippet, "badgeNotice" %}
Le WinRM doit être correctement configuré comme décrit dans l'article [WinRM et liste des hôtes de confiance](/server/kb/how-to-articles/winrm-trustedhostslist/).
{% endsnippet %} {% snippet, "badgeCaution" %}
Cette fonctionnalité de ***Propagation de mot de passe*** est uniquement disponible pour les comptes de domaine.
{% endsnippet %}

La section suivante décrit les propriétés de la fonctionnalité de ***Propagation de mot de passe*** Active Directory dans la solution de gestion des accès privilégiés. ![Password Propagation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8174.png)

### Propriétés

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Ordinateurs</strong></p></td><td><ul><li><p><em><strong>Hérité</strong></em>: hérite de la liste des ordinateurs du dossier parent.</p></li><li><p><strong>Personnalisé</strong>: définir une liste personnalisée d'ordinateurs.</p></li><li><p><strong>Personnalisé + Hérité</strong>: hérite de la liste des ordinateurs du dossier parent et définir une liste personnalisée d'ordinateurs.</p></li></ul></td></tr><tr><td><p><strong>Nom de l'ordinateur</strong></p></td><td><p>Nom de chaque ordinateur sur lequel la propagation du mot de passe aura lieu.</p></td></tr><tr><td><p><strong>Parcourir les conteneurs de domaine</strong></p></td><td><p>Parcourir le domaine pour sélectionner les ordinateurs.</p></td></tr></tbody></table>

&nbsp;
