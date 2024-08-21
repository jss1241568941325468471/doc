---
_schema: default
eleventyComputed:
  title: Gestion des actifs informatiques dans {{ fr.RDM }}
  description: Comment utiliser la gestion des actifs dans {{ fr.RDM }}.
---
### Actif

La section ***Actif*** d'une entrée {% var, "RDM" false %} est utilisée pour gérer et documenter des informations détaillées sur les ***actifs informatiques***, tels qu'un ordinateur, un serveur ou d'autres matériels.

1. Faire un clic droit sur une entrée et sélectionner ***Propriétés***.
2. Aller à ***Vue*** - ***Actif***.
3. Entrer les informations.
4. Cliquer sur ***Mettre à jour*** pour enregistrer les modifications et fermer la fenêtre.
5. Dans le ***Tableau de bord*** de l'entrée, sélectionner l'onglet ***Actif*** pour voir les informations.

![Onglet Actif](https://cdnweb.devolutions.net/docs/RDMW6082_2024_2.png "Onglet Actif")

### Gestion des actifs informatiques

La fonctionnalité de ***Gestion des actifs informatiques*** peut être utilisée pour lier un gestionnaire d'actifs (par exemple, BlueTally, [Lansweeper](/rdm/kb/rdm-windows/how-to-articles/lansweeper/)) via les propriétés d'une entrée. {% snippet, "badgeInfo" %}Seuls les types d'entrée ***Session***, ***Gestion à distance***, ***Divers***, ***VPN***, ***Synchroniseur*** et ***Modèle*** prennent en charge cette fonctionnalité pour le moment. Les [***entrées de gestion des actifs informatiques***](https://docs.devolutions.net/rdm/kb/rdm-windows/knowledge-base/it-asset-entry/) fonctionnent différemment de la fonctionnalité.{% endsnippet %}

1. Faire un clic droit sur une entrée et sélectionner ***Propriétés***.
2. Aller à ***Vue*** – ***Gestion des actifs informatiques***.
3. Sélectionner un ***Type de service*** dans la liste déroulante.
4. Entrer l'URL vers un actif spécifique. ![Gestion des actifs informatiques](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0058.png)
5. Cliquer sur ***OK*** pour enregistrer les modifications et fermer la fenêtre.
6. Dans le ***Tableau de bord***, sélectionner l'onglet ***Gestion des actifs informatiques***. {% snippet, "badgeInfo" %}
                     L'onglet sera nommé selon ce qui a été écrit dans le ***champ de titre de la gestion des actifs informatiques***. Si le champ est laissé vide, ***BlueTally*** apparaîtra (si ce service a été choisi), ou apparaîtra comme ***Gestion des actifs informatiques***.
                     {% endsnippet %}

![Onglet Gestion des actifs informatiques](https://cdnweb.devolutions.net/docs/RDMW6080_2024_2.png "Onglet Gestion des actifs informatiques")

7. Se connecter à ce service.
