---
_schema: default
eleventyComputed:
  title: Licenses
---
The ***Licenses*** section contains all informations pertaining to the Devolutions product licenses linked to the application, as well as a button to add new ones in a few clicks. Licenses have a limited number of users and can be assigned automatically with ***Auto assign*** or to specific users in the ***Assigned to*** tab.

{% snippet, "badgeCaution" %}Only ***Administrators*** and users with permissions in the ***System Permissions*** – ***System*** – ***Manage {% var, "DHUBB" false %} license*** section have access to register a license in {% var, "DHUBB" false %}.{% endsnippet %}

To add or view licenses, head over to ***Administration*** and click on the ***Licences*** icon:

&nbsp;

&nbsp;

![Devolutions Hub Business licenses](https://cdnweb.devolutions.net/docs/HUBB4011_2024_2.png "Devolutions Hub Business licenses")

{% snippet, "badgeInfo" %}
A {{ en.DGW }} license is not needed when configuring a gateway, only when opening a connection.
{% endsnippet %}

Here are the different license types that can be added in {% var, "DHUBB" false %}:

* [{% var, "RDM" false %}](https://docs.devolutions.net/rdm/overview/what-is-rdm/)
* [{% var, "DHUBB" false %}](https://docs.devolutions.net/hub/overview/what-is-hub/)
* {% var, "DLAUNCHER" false %}
* {% var, "DGW" false %} module
* [Privileged access management (PAM)](https://docs.devolutions.net/pam/overview/what-is-pam/) module

&nbsp;

* [Register your {{ en.DHUBB }} License](/hub/web-interface/administration/management/licenses/register-hub-business-license/)
* [Register Product Licenses](/hub/web-interface/administration/management/licenses/register-product-licenses/)