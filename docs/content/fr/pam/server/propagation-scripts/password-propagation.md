---
eleventyComputed:
  title: Propagation de mot de passe
  description: >-
    La propagation de mot de passe permet de propager la réinitialisation des mots de passe des comptes privilégiés aux services des serveurs distants.
_schema: default
---
***Propagation de mot de passe*** permet de propager la réinitialisation des mots de passe des comptes privilégiés aux services des serveurs distants. Ce sujet couvre [Propagation par script](#propagation-par-script) et [Propagation spécifique à Active Directory](#propagation-specifique-a-active-directory).

{% youtube 'drRLA7U8YsQ?si=ihVhTcJOKxAh5kKS&amp;start=225' %}

## Propagation par script

Les sections suivantes décrivent les propriétés de la fonctionnalité de ***Propagation*** par script au sein de la solution de Gestion des Accès Privilégiés. La section [Étapes](#etapes-avec-modele) explique comment configurer cette fonctionnalité en utilisant un modèle Devolutions, mais il est également possible de [Créer un modèle](#creer-un-modele-powershell).

{% snippet, "badgeInfo" %}
Cette méthode couvre tous les fournisseurs de comptes PAM.
{% endsnippet %}

### Étapes (avec modèle)

1. Télécharger un des [fichiers modèle de Devolutions](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts) depuis GitHub.
2. Se connecter à {{ fr.DVLS }} avec un compte administrateur.
3. Aller à ***Administration*** – ***Modules*** – ***Accès Privilégié*** – ***Propagation (Aperçu)***. ![Propagation (aperçu)](https://cdnweb.devolutions.net/docs/DVLS4054_2024_2.png "Propagation &#40;aperçu&#41;")
4. Cliquer sur ***Modèles de script***. ![Icône des modèles de script](https://cdnweb.devolutions.net/docs/DVLS4042_2024_2.png "Icône des modèles de script")
5. Cliquer sur ***Importer***. ![Icône d'importation](https://cdnweb.devolutions.net/docs/DVLS4043_2024_2.png "Icône d'importation")
6. Sélectionner le fichier modèle .json précédemment téléchargé et cliquer sur ***Importer***. ![Bouton d'importation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0099.png "Bouton d'importation")
7. Cliquer sur ***Enregistrer***. ![Bouton d'enregistrement](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0100.png "Bouton d'enregistrement")
8. Retourner à la page ***Propagation (Aperçu)***.
9. Cliquer sur ***Ajouter***. ![Bouton Ajouter](https://cdnweb.devolutions.net/docs/DVLS4049_2024_2.png "Bouton Ajouter")
10. Sélectionner le modèle désiré et cliquer sur ***Sélectionner***. ![Bouton Sélectionner](https://cdnweb.devolutions.net/docs/DVLS4055_2024_2.png "Bouton Sélectionner")
11. Dans l'onglet ***Général***, nommer cette configuration.
12. Dans l'onglet ***Propriétés de propagation***, entrer les informations pour la machine distante.
13. Dans l'onglet ***Mappage des propriétés***, cliquer sur ***Configurer une entrée PAM*** pour sélectionner un type de compte privilégié. ![Configurer une entrée PAM](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0103.png)
14. Cliquer sur ***Continuer***.
15. Sélectionner les champs du compte (ou fournisseur) à associer aux variables et cliquer sur ***Enregistrer***.
16. Cliquer sur ***Enregistrer*** pour enregistrer cette nouvelle configuration et fermer la fenêtre. ![Bouton d'enregistrement](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0104.png)
17. Aller à l'onglet ***Accès privilégié*** et sélectionner un type de compte précédemment configuré avec ***Propagation***.
18. Cliquer sur ***Modifier***.
19. Aller à l'onglet ***Propagation*** et cliquer sur le bouton "***\+***". ![Bouton +](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0105.png)
20. Sélectionner la configuration à lier à ce compte, et cliquer sur ***Confirmer***. ![Bouton Confirmer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0106.png) {% snippet, "badgeInfo" %}
                                                                                                                                                                                                                                                                                                                                                                                                                                                            Il est possible de sélectionner plusieurs configurations.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   {% endsnippet %}
21. Cliquer sur ***OK*** pour enregistrer les modifications et fermer la fenêtre. ![Bouton OK](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0107.png) {% snippet, "badgeInfo" %}Pour tester si le lien est réussi, cliquer sur ***Plus*** puis ***Réinitialiser le mot de passe***. Si cela fonctionne correctement, le fichier nouvellement créé apparaîtra sur la machine distante. Sinon, il est recommandé de vérifier les journaux du compte.{% endsnippet %}

## Propagation spécifique à Active Directory

{% snippet, "badgeNotice" %}
Le WinRM doit être correctement configuré comme décrit dans l'article [WinRM et Liste des Hôtes de Confiance](/server/kb/how-to-articles/winrm-trustedhostslist/).
{% endsnippet %} {% snippet, "badgeCaution" %}Cette fonctionnalité de ***Propagation de mot de passe*** est uniquement disponible pour les comptes de domaine.{% endsnippet %}

La section suivante décrit les propriétés de la fonctionnalité de ***Propagation de mot de passe*** Active Directory au sein de la solution de Gestion des Accès Privilégiés. ![Propagation de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8174.png)

### Propriétés

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Ordinateurs</strong></p></td><td><p><em><strong>Hérité</strong></em>: Hérite de la liste des ordinateurs du dossier parent.<br /><br /><em><strong>Personnalisé</strong></em>: Définir une liste personnalisée d'ordinateurs.<br /><br /><em><strong>Personnalisé + Hérité</strong></em>: Hérite de la liste des ordinateurs du dossier parent et définit une liste personnalisée d'ordinateurs.</p></td></tr><tr><td><p><strong>Nom de l'ordinateur</strong></p></td><td><p>Nom de chaque ordinateur sur lequel la propagation du mot de passe aura lieu.</p></td></tr><tr><td><p><strong>Parcourir les conteneurs de domaine</strong></p></td><td><p>Parcourir le domaine pour sélectionner les ordinateurs.</p></td></tr></tbody></table>
