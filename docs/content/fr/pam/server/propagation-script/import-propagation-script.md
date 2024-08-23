---
_schema: défaut
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
Devolutions propose [des modèles de scripts de propagation préconfigurés sur son dépôt GitHub](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts). Ceux-ci sont gratuits à télécharger et à modifier, et peuvent aider les administrateurs à propager des scripts sans avoir à créer des scripts et des modèles personnalisés complexes.

{% snippet, "badgeCaution" %}Notez que chaque modèle de propagation fourni par Devolutions contient une courte explication de ce qu'il fait et comment l'utiliser dans son dossier GitHub.{% endsnippet %}

![Modèles de scripts de propagation Devolutions sur GitHub](https://cdnweb.devolutions.net/docs/INTERFACE4051.png "Modèles de scripts de propagation Devolutions sur GitHub")

## Importer un modèle dans {% var, "DVLS" false %}

Une fois le modèle souhaité téléchargé depuis le dépôt de scripts de propagation GitHub de Devolutions, ouvrir {% var, "DVLS" false %}, aller dans ***Administration*** – ***Accès privilégié*** – ***Propagation (aperçu)***, et cliquer sur l'icône ***Modèles de scripts***.

![Emplacement des modèles de scripts dans Devolutions Server](https://cdnweb.devolutions.net/docs/DVLS4042_2024_2.png "Emplacement des modèles de scripts dans Devolutions Server")

Ensuite, cliquer sur l'icône ***Importer*** :

![Icône d'importation](https://cdnweb.devolutions.net/docs/DVLS4043_2024_2.png "Icône d'importation")

Parcourir l'ordinateur pour le fichier modèle .json précédemment téléchargé depuis le dépôt de scripts de propagation GitHub ou glisser-déposer le fichier dans la boîte de téléchargement (dans ce cas, un script de propagation de mot de passe pour {% var, "DVLS" false %}). Cliquer sur ***Importer***.

![Importation d'un fichier modèle .json](https://cdnweb.devolutions.net/docs/DVLS4044_2024_2.png "Importation d'un fichier modèle .json")

Le nom du modèle, sa description, ses propriétés, le mappage des propriétés et le script lui-même peuvent ensuite être modifiés si nécessaire. Lorsque cela est fait – ou si ce n'est pas nécessaire – cliquer sur ***Enregistrer***.

![Paramètres finaux du modèle de propagation](https://cdnweb.devolutions.net/docs/DVLS4045_2024_2.png "Paramètres finaux du modèle de propagation")
