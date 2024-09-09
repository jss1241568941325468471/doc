---
_schema: default
eleventyComputed:
  title: >-
    Configurer la source de données Devolutions Server pour le mode hors ligne
    dans Remote Desktop Manager
  description: >-
    Configurer le mode hors ligne dans {{ fr.DVLS }} permet aux utilisateurs ou
    groupes d'accéder aux ressources sans nécessiter de connexion Internet
    continue.


    Configurer le mode hors ligne dans {{ fr.DVLS }} permet aux utilisateurs ou
    groupes d'accéder aux ressources sans nécessiter de connexion Internet
    continue lors de l'utilisation d'une source de données {{ fr.DVLS }} dans {{
    fr.RDM}}.
---
Configurer le ***mode hors ligne*** permet aux utilisateurs ou groupes d'accéder aux ressources sans nécessiter de connexion Internet continue lors de l'utilisation d'une source de données {{ fr.DVLS }} dans {% var, "RDM" false %}.

## Activer le mode hors ligne dans {% var, "DVLS" false %}

1. Se connecter à l'interface web de {{ fr.DVLS }}, et naviguer vers la section ***Administration***.
2. Choisir d'activer le mode hors ligne pour des ***Utilisateurs*** individuels ou pour des ***Groupes d'utilisateurs***. ![Administration – Utilisateurs/Groupes d'utilisateurs](https://cdnweb.devolutions.net/docs/DVLS4018_2024_1.png)
3. Trouver et sélectionner l'utilisateur ou le groupe dans la liste, et cliquer sur le bouton ***Modifier***. ![Liste des utilisateurs et bouton Modifier](https://cdnweb.devolutions.net/docs/DVLS6078_2024_1.png)
4. Dans le menu de modification, cliquer sur ***Paramètres***, et sélectionner le mode hors ligne approprié. ![Paramètres – Mode hors ligne](https://cdnweb.devolutions.net/docs/DVLS4021_2024_1.png)

{% snippet, "badgeNotice" %}
S'assurer que les utilisateurs ou groupes ont les permissions nécessaires pour fonctionner avec une connectivité réduite, et mettre à jour et synchroniser régulièrement les paramètres lorsque la connectivité est disponible pour maintenir la sécurité et la fonctionnalité.
{% endsnippet %}

## Activer le mode hors ligne dans {% var, "RDM" false %}

1. Ouvrir {% var, "RDM" false %}.
2. Sélectionner la source de données {% var, "DVLS" false %}.
3. Activer le [mode hors ligne](/rdm/concepts/intermediate-concepts/offline/) en cliquant sur ***Fichier - Passer hors ligne***.
4. La source de données {% var, "DVLS" false %} est maintenant disponible en mode hors ligne.

Pour en savoir plus sur le ***mode hors ligne*** dans {% var, "RDM" false %}, [cliquez ici](/rdm/data-sources/offline-mode/)

&nbsp;
