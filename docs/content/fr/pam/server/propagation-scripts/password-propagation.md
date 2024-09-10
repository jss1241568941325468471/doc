---
_schema: default
eleventyComputed:
  title: Créer et appliquer une nouvelle configuration
  description: Les étapes suivantes expliquent comment configurer la fonctionnalité de propagation de mot de passe.
  status:
  keywords:
---

Les étapes suivantes expliquent comment configurer la fonctionnalité de **propagation de mot de passe**. Cela peut être fait soit en [créant un modèle](#creating-a-new-configuration), soit en [utilisant un modèle Devolutions](/pam/server/propagation-scripts/import-propagation-script-template/).

{% snippet, "badgeInfo" %}
Cette méthode couvre tous les fournisseurs de comptes PAM.
{% endsnippet %}

### Créer une nouvelle configuration

1. Aller à ***Administration*** – ***Modules*** – ***Accès privilégié*** – ***Propagation (Aperçu)***. ![Propagation (aperçu)](https://cdnweb.devolutions.net/docs/DVLS4054_2024_2.png "Propagation &#40;aperçu&#41;")
2. Cliquer sur ***Ajouter***. ![Bouton Ajouter](https://cdnweb.devolutions.net/docs/DVLS4049_2024_2.png "Bouton Ajouter")
3. Sélectionner le modèle souhaité et cliquer sur ***Sélectionner***. ![Bouton Sélectionner](https://cdnweb.devolutions.net/docs/DVLS4055_2024_2.png "Bouton Sélectionner")
4. Dans l'onglet ***Général***, nommer cette configuration.
5. Dans l'onglet ***Propriétés de propagation***, entrer les informations pour la machine distante.
6. Dans l'onglet ***Mappage des propriétés***, cliquer sur ***Configurer une entrée PAM*** pour sélectionner un type de compte privilégié. ![Configurer une entrée PAM](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0103.png "Configurer une entrée PAM")
7. Cliquer sur ***Continuer***.
8. Sélectionner les champs du compte (ou fournisseur) à associer aux variables et cliquer sur ***Enregistrer***.
9. Cliquer sur ***Enregistrer*** pour enregistrer cette nouvelle configuration et fermer la fenêtre. ![Bouton Enregistrer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0104.png "Bouton Enregistrer")

### Appliquer la configuration

1. Aller à l'onglet ***Accès privilégié***, sélectionner un type de compte précédemment configuré avec ***Propagation***, et cliquer sur le ***Bouton Modifier***. ![Bouton Modifier](https://cdnweb.devolutions.net/docs/DVLS4056_2024_2.png "Bouton Modifier")
2. Aller à l'onglet ***Propagation*** et cliquer sur le bouton ***\+***. ![Bouton +](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0105.png "Bouton +")
3. Sélectionner la configuration à lier à ce compte, et cliquer sur ***Confirmer***.

![Bouton Confirmer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0106.png "Bouton Confirmer")

{% snippet, "badgeInfo" %}
Il est possible de sélectionner plusieurs configurations.
{% endsnippet %}

5\. Cliquer sur ***OK*** pour enregistrer les modifications et fermer la fenêtre.

![Bouton OK](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0107.png "Bouton OK")

{% snippet, "badgeInfo" %}
Pour tester si le lien est réussi, cliquer sur ***Plus*** puis ***Réinitialiser le mot de passe***. Si cela fonctionne correctement, le fichier nouvellement créé apparaîtra sur la machine distante. Sinon, il est recommandé de vérifier les journaux du compte.
{% endsnippet %}

## Propagation spécifique à Active Directory

{% snippet, "badgeNotice" %}
Le WinRM doit être correctement configuré comme décrit dans l'article [WinRM et Liste des hôtes de confiance](/server/kb/how-to-articles/winrm-trustedhostslist/).
{% endsnippet %} {% snippet, "badgeCaution" %}Cette fonctionnalité de ***propagation de mot de passe*** est uniquement disponible pour les comptes de domaine.{% endsnippet %}

La section suivante décrit les propriétés de la fonctionnalité de ***propagation de mot de passe*** Active Directory au sein de la solution de Gestion des Accès Privilégiés. ![Propagation de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8174.png "Propagation de mot de passe")

### Propriétés

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Ordinateurs</strong></p></td><td><p><em><strong>Hérité</strong></em>: Hérite de la liste des ordinateurs du dossier parent.<br /><br /><em><strong>Personnalisé</strong></em>: Définir une liste personnalisée d'ordinateurs.<br /><br /><em><strong>Personnalisé + Hérité</strong></em>: Hérite de la liste des ordinateurs du dossier parent et définit une liste personnalisée d'ordinateurs.</p></td></tr><tr><td><p><strong>Nom de l'ordinateur</strong></p></td><td><p>Nom de chaque ordinateur sur lequel la propagation du mot de passe aura lieu.</p></td></tr><tr><td><p><strong>Parcourir les conteneurs de domaine</strong></p></td><td><p>Parcourir le domaine pour sélectionner les ordinateurs.</p></td></tr></tbody></table>

&nbsp;
