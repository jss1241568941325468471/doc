---
_schema: default
eleventyComputed:
  title: Licences
---
La section ***Licences*** contient toutes les informations relatives aux licences des produits Devolutions liées à l'application, ainsi qu'un bouton pour en ajouter de nouvelles en quelques clics. Les licences ont un nombre limité d'utilisateurs et peuvent être attribuées automatiquement avec ***Attribution automatique*** ou à des utilisateurs spécifiques dans l'onglet ***Attribué à***.

{% snippet, "badgeCaution" %}Seuls les ***Administrateurs*** et les utilisateurs avec des permissions dans la section ***Permissions du système*** – ***Système*** – ***Gérer la licence {% var, "DHUBB" false %}*** ont accès pour enregistrer une licence dans {% var, "DHUBB" false %}.{% endsnippet %}

Pour ajouter ou consulter des licences, se rendre dans ***Administration*** et cliquer sur l'icône ***Licences*** :

&nbsp;

&nbsp;

![Devolutions Hub Business licenses](https://cdnweb.devolutions.net/docs/HUBB4011_2024_2.png "Devolutions Hub Business licenses")

{% snippet, "badgeInfo" %}
Une licence {{ fr.DGW }} n'est pas nécessaire lors de la configuration d'une passerelle, seulement lors de l'ouverture d'une connexion.
{% endsnippet %}

Voici les différents types de licences qui peuvent être ajoutés dans {% var, "DHUBB" false %} :

* [{% var, "RDM" false %}](https://docs.devolutions.net/rdm/overview/what-is-rdm/)
* [{% var, "DHUBB" false %}](https://docs.devolutions.net/hub/overview/what-is-hub/)
* {% var, "DLAUNCHER" false %}
* Module {% var, "DGW" false %}
* Module de [gestion des accès privilégiés (PAM)](https://docs.devolutions.net/pam/overview/what-is-pam/)

&nbsp;

* [Enregistrer votre licence {{ fr.DHUBB }}](/hub/web-interface/administration/management/licenses/register-hub-business-license/)
* [Enregistrer les licences de produit](/hub/web-interface/administration/management/licenses/register-product-licenses/)
