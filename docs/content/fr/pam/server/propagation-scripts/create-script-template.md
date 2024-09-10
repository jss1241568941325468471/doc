---
_schema: default
eleventyComputed:
  title: Créer un modèle de script
  description: Bien que Devolutions propose une grande variété de modèles de scripts PowerShell, les administrateurs peuvent en créer des personnalisés.
  status:
  keywords:
---

Bien que Devolutions propose une grande variété de modèles de scripts PowerShell, les administrateurs peuvent en créer des personnalisés. Voici les étapes pour le faire :

1. Se connecter à {{ fr.DVLS }} avec un compte administrateur.
2. Aller à ***Administration*** – ***Modules*** – ***Gestion des accès privilégiés*** – ***Propagation (Aperçu)***. ![Propagation (preview)](https://cdnweb.devolutions.net/docs/DVLS4054_2024_2.png "Propagation &#40;preview&#41;")
3. Cliquer sur ***Modèles de script***. ![Script templates icon](https://cdnweb.devolutions.net/docs/DVLS4042_2024_2.png "Script templates icon")
4. Cliquer sur ***Ajouter***. ![Add button](https://cdnweb.devolutions.net/docs/DVLS4049_2024_2.png "Add button")
5. Dans l'onglet ***Général***, ajouter un ***Nom*** pour ce modèle.

{% snippet, "badgeInfo" %}
Il est possible d'ajouter une ***Description***. L'icône peut également être modifiée en cliquant dessus.
{% endsnippet %}

6. Dans l'onglet ***Propriétés de propagation***, ajouter les variables pour le script en cliquant sur ***\+ Ajouter une propriété***. Les variables ajoutées dans cet onglet doivent représenter l'URL de la machine distante (c'est-à-dire, ComputerIP, Username, Password et RootFolder). ![Propagation properties](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0113.png "Propagation properties")
7. Dans l'onglet ***Mappage des propriétés***, ajouter les variables pour le script en cliquant sur ***\+ Ajouter une propriété***. Les variables ajoutées dans cet onglet doivent représenter le ***Mappage des champs*** de la machine distante (c'est-à-dire, FileName et FilePath). ![Property mapping](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0114.png "Property mapping")
8. Dans l'onglet ***Script***, les variables précédentes apparaissent ainsi que la variable ***NewPassword***. Cette nouvelle variable contiendra le nouveau mot de passe pour le compte lors de l'exécution du script.
9. Cliquer sur ***Générer le script de base***. ![Generate base script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0115.png "Generate base script")
{% snippet, "badgeInfo" %}
Cliquer sur ***Modifier*** pour modifier ou ajouter au script.
{% endsnippet %}
10. Cliquer sur ***Enregistrer*** pour sauvegarder cette configuration et fermer la fenêtre.
{% snippet, "badgeInfo" %}
En savoir plus sur les scripts personnalisés pour cette fonctionnalité en visitant notre [GitHub public](https://github.com/Devolutions/PAM-Providers/blob/master/Propagation-Scripts/Create-A-Template.md).
{% endsnippet %}
