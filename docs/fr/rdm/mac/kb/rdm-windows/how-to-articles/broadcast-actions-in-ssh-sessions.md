---
eleventyComputed:
  title: Actions de diffusion dans les sessions SSH
  description: Dans {{ fr.RDM }}, vous pouvez gérer deux ou plusieurs sessions SSH actives avec des actions de diffusion pour envoyer des commandes sur toutes les sessions en même temps.
---

{% youtube '9FrSyzRvw30' %}

Dans {{ fr.RDM }}, vous pouvez gérer deux ou plusieurs sessions SSH actives avec ***des actions de diffusion*** pour envoyer des commandes sur toutes les sessions en même temps.
{% snippet, "badgeInfo" %}
Une base de données mise à niveau, par un administrateur, pourrait être requise.
{% endsnippet %}

1. Ouvrir au moins deux sessions SSH.
1. Faire un clic droit sur n'importe quel onglet SSH, cliquer sur ***Entrée de diffusion***, puis ***Gérer la diffusion***.
![!!KB4526](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4526.png)
1. Sélectionner toutes les sessions requises dans la liste et fermer la fenêtre.
![!!KB4527](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4527.png)

Vous pouvez maintenant diffuser des commandes sur toutes les sessions en même temps.

Pour retirer une session de la diffusion, vous pouvez soit ouvrir la fenêtre ***Gérer la diffusion*** pour décocher la session, soit sur l'onglet SSH spécifique, faire un clic droit pour ouvrir le menu, cliquer sur ***Entrée de diffusion***, puis ***Retirer de la diffusion***.