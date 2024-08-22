---
_schema: default
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
1. Se connecter à {{ fr.DVLS }} avec un compte administrateur.
2. Aller à ***Administration*** – ***Modules*** – ***Privileged Access*** – ***Propagation (Preview)***. ![Propagation (Preview)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0096.png)
3. Cliquer sur ***Script Templates***. ![Script Templates](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0097.png)
4. Cliquer sur ***Add***. ![Add](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0112.png)
5. Dans l'onglet Général, ajouter un ***Nom*** pour ce modèle. {% snippet, "badgeInfo" %}
            Il est possible d'ajouter une ***Description***. L'icône peut également être modifiée en cliquant dessus.
            {% endsnippet %}
6. Dans l'onglet ***Propagation Properties***, ajouter les variables pour le script en cliquant sur ***\+ Add property***. Les variables ajoutées dans cet onglet doivent représenter l'URL de la machine distante (c'est-à-dire, ComputerIP, Username, Password et RootFolder). ![Propagation Properties](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0113.png)
7. Dans l'onglet ***Property Mapping***, ajouter les variables pour le script en cliquant sur ***\+ Add property***. Les variables ajoutées dans cet onglet doivent représenter le ***Field Mapping*** de la machine distante (c'est-à-dire, FileName et FilePath). ![Property Mapping](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0114.png)
8. Dans l'onglet ***Script***, les variables précédentes apparaissent ainsi que la variable ***NewPassword***. Cette nouvelle variable contiendra le nouveau mot de passe pour le compte lors de l'exécution du script.
9. Cliquer sur ***Generate base script***. ![Generate base script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0115.png) {% snippet, "badgeInfo" %}
            Cliquer sur ***Edit*** pour modifier ou ajouter au script.
            {% endsnippet %}
10. Cliquer sur ***Save*** pour enregistrer cette configuration et fermer la fenêtre. {% snippet, "badgeInfo" %}
               En savoir plus sur les scripts personnalisés pour cette fonctionnalité en visitant notre [GitHub public](https://github.com/Devolutions/PAM-Providers/blob/master/Propagation-Scripts/Create-A-Template.md).
               {% endsnippet %}
