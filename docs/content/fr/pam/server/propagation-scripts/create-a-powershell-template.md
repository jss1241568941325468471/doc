---
_schema: défaut
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
Bien que Devolutions propose une grande variété de modèles de scripts PowerShell, les administrateurs peuvent en créer des personnalisés. Voici les étapes pour le faire :

1. Se connecter à {{ fr.DVLS }} avec un compte administrateur.
2. Aller à ***Administration*** – ***Modules*** – ***Accès privilégié*** – ***Propagation (Aperçu)***. ![Propagation (aperçu)](https://cdnweb.devolutions.net/docs/DVLS4054_2024_2.png "Propagation &#40;aperçu&#41;")
3. Cliquer sur ***Modèles de script***. ![Icône des modèles de script](https://cdnweb.devolutions.net/docs/DVLS4042_2024_2.png "Icône des modèles de script")
4. Cliquer sur ***Ajouter***. ![Bouton Ajouter](https://cdnweb.devolutions.net/docs/DVLS4049_2024_2.png "Bouton Ajouter")
5. Dans l'onglet ***Général***, ajouter un ***Nom*** pour ce modèle. {% snippet, "badgeInfo" %}
                                                                                                                                                                                                                                                                                                                                                      Il est possible d'ajouter une ***Description***. L'icône peut également être modifiée en cliquant dessus.
                                                                                                                                                                                                                                                                                                                                                      {% endsnippet %}
6. Dans l'onglet ***Propriétés de propagation***, ajouter les variables pour le script en cliquant sur ***\+ Ajouter une propriété***. Les variables ajoutées dans cet onglet doivent représenter l'URL de la machine distante (c'est-à-dire, ComputerIP, Username, Password et RootFolder). ![Propriétés de propagation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0113.png)
7. Dans l'onglet ***Mappage des propriétés***, ajouter les variables pour le script en cliquant sur ***\+ Ajouter une propriété***. Les variables ajoutées dans cet onglet doivent représenter le ***Mappage des champs*** de la machine distante (c'est-à-dire, FileName et FilePath). ![Mappage des propriétés](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0114.png)
8. Dans l'onglet ***Script***, les variables précédentes apparaissent ainsi que la variable ***NewPassword***. Cette nouvelle variable contiendra le nouveau mot de passe pour le compte lors de l'exécution du script.
9. Cliquer sur ***Générer le script de base***. ![Générer le script de base](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0115.png) {% snippet, "badgeInfo" %}
                                                                                                                                                                                                                                                                                                                                                      Cliquer sur ***Modifier*** pour modifier ou ajouter au script.
                                                                                                                                                                                                                                                                                                                                                      {% endsnippet %}
10. Cliquer sur ***Enregistrer*** pour sauvegarder cette configuration et fermer la fenêtre. {% snippet, "badgeInfo" %}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                       En savoir plus sur les scripts personnalisés pour cette fonctionnalité en visitant notre [GitHub public](https://github.com/Devolutions/PAM-Providers/blob/master/Propagation-Scripts/Create-A-Template.md).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                       {% endsnippet %}
