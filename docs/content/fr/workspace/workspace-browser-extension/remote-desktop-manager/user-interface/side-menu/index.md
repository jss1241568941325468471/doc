---
_schema: défaut
eleventyComputed:
  title: Menu latéral
---
Les onglets du ***Menu latéral*** contiennent diverses fonctionnalités {% var, "WBEX" false %}. Chaque onglet affichera une vue différente dans la ***Zone de contenu***.

Lors de l'utilisation du {% var, "WBEX" false %} avec {% var, "RDM" false %}, les onglets disponibles sont l'onglet [***Correspondance***](#matching-tab), l'onglet [***Générateur de mots de passe***](#password-generator-tab) et l'onglet [***À propos***](#about-tab).

### Onglet Correspondance

L'extension s'ouvre sur l'onglet ***Correspondance***. Il contient une liste de toutes les informations d'identification disponibles pour le site web actuellement visité.

{% snippet, "badgeInfo" %}Pour les méthodes de récupération des identifiants, visiter [Récupérer les identifiants avec le {% var, "WBEX" false %}](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/retrieve-credentials/).{% endsnippet %}

![Onglet Correspondance](https://cdnweb.devolutions.net/docs/WEBX4013_2024_2.png "Onglet Correspondance")

En haut, la barre de ***Filtre*** est utile pour rechercher toutes les informations d'identification disponibles, pas seulement celles applicables au site web actuel. Le bouton ***Actualiser*** à côté met à jour les résultats de la recherche.

Situé en haut à droite du ***Menu supérieur***, le bouton ***Ajouter un site web*** ouvre un nouvel onglet de navigateur pour ajouter manuellement une entrée de site web dans {% var, "RDM" false %} via le {% var, "WBEX" false %}.

{% snippet, "badgeInfo" %}Pour une liste complète des champs disponibles dans la fenêtre ***Ajouter un site web***, visiter [Ajouter un site web](/rdm/windows/workspace-browser-extension/workspace-browser-extension-user-interface/side-menu/add-website/). Trouver un guide étape par étape sur [comment ajouter une entrée de site web](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).{% endsnippet %}

### Onglet Générateur de mots de passe

L'onglet ***Générateur de mots de passe*** vous aide à créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site web pour votre nouveau compte. ![Onglet Générateur de mots de passe](https://cdnweb.devolutions.net/docs/WEBX4014_2024_2.png "Onglet Générateur de mots de passe")

Votre mot de passe personnalisé est généré en haut de la ***Zone de contenu*** avec un indicateur de force en dessous. Vous pouvez le copier ou en générer un nouveau en utilisant respectivement les boutons ***Copier dans le presse-papiers*** et ***Générer un mot de passe***. La ***Longueur du mot de passe***, qui est réglée par défaut à 12, peut également être ajustée.

Dans la section déroulante ***Général***, vous pouvez sélectionner les types de caractères que votre mot de passe doit contenir ainsi que le nombre minimum de caractères de chaque type qui doivent être inclus. ![Section Générale](https://cdnweb.devolutions.net/docs/WEBX4015_2024_2.png "Section Générale")

Dans la section déroulante ***Avancé***, vous pouvez personnaliser davantage votre mot de passe en entrant les caractères que vous souhaitez inclure dans votre mot de passe, suivis du nombre minimum de fois qu'ils doivent apparaître. Dans le deuxième champ, vous pouvez également entrer les caractères que vous souhaitez exclure de votre mot de passe. ![Section Avancée](https://cdnweb.devolutions.net/docs/WEBX4016_2024_2.png "Section Avancée")

{% snippet, "badgeInfo" %}Pour apprendre à utiliser le ***Générateur de mots de passe*** lors de la création d'un compte sur un site web, visiter [Créer un compte pour un site web avec le {% var, "WBEX" false %}](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/create-account-website/).{% endsnippet %}

### Onglet À propos

L'onglet ***À propos*** contient des liens utiles et des informations, notamment un lien vers notre [{% var, "DFORUM" false %}](), un lien vers notre documentation [{% var, "RDM" false %} (Aide en ligne)](), et la version actuelle du {% var, "WBEX" false %}.

![Onglet À propos](https://cdnweb.devolutions.net/docs/WEBX4017_2024_2.png "Onglet À propos")
