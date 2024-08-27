---
_schema: défaut
eleventyComputed:
  title: Licences
---
La section ***Licences***, située dans ***Administration*** – ***Licences***, contient toutes les informations relatives aux licences des produits Devolutions liées à l'application, ainsi qu'un bouton pour en ajouter de nouvelles en quelques clics. Les licences ont un nombre limité d'utilisateurs et peuvent être attribuées automatiquement avec ***Attribution automatique*** ou à des utilisateurs spécifiques dans l'onglet ***Attribué à***.

{% snippet, "badgeCaution" %}Seuls les ***Administrateurs*** et les utilisateurs avec des permissions dans la section ***Permissions du système*** – ***Système*** – ***Gérer la licence {% var, "DHUBB" false %}*** ont accès pour enregistrer une licence dans {% var, "DHUBB" false %}.{% endsnippet %}

![Devolutions Hub Business licenses](https://cdnweb.devolutions.net/docs/HUBB4011_2024_2.png "Licences Devolutions Hub Business")

Voici les différents types de licences qui peuvent être ajoutés dans {% var, "DHUBB" false %} :

* [{% var, "RDM" false %}](https://docs.devolutions.net/rdm/overview/what-is-rdm/)
* [{% var, "DVLS" false %}](https://docs.devolutions.net/server/overview/what-is-server/)
* [{% var, "DHUBB" false %}](https://docs.devolutions.net/hub/overview/what-is-hub/)
* {% var, "DLAUNCHER" false %}
* [{% var, "DPAM" false %}](https://docs.devolutions.net/pam/overview/what-is-pam/) module
* [{% var, "DGW" false %}](https://docs.devolutions.net/dgw/overview/what-is-dgw/) module

  {% snippet, "badgeInfo" %}
  Une licence {{ fr.DGW }} n'est pas nécessaire lors de la configuration d'une passerelle, seulement lors de l'ouverture d'une connexion.
  {% endsnippet %}
