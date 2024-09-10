---
_schema: default
eleventyComputed:
  title: Charger depuis les informations système
  description: Comment utiliser le chargement depuis les informations système dans {{ fr.RDM }}
---
***La fonctionnalité Charger depuis les informations système*** permet de visualiser la configuration d'une entrée, ce qui est utile si vous avez un grand nombre d'ordinateurs.

La fonctionnalité se trouve en cliquant avec le bouton droit sur une entrée et en allant dans ***Propriétés*** – ***Actif*** – ***Charger depuis les informations système***.

![Load from System Information](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6103.png)

### Types de Linux pris en charge :

* Ubuntu
* Debian

### Erreur d'informations BIOS :

* Les sessions doivent être RDP.
* La station doit être sur le même domaine.
* Les identifiants doivent être dans la section ***Outils*** de la session et être exacts.
* Tester les requêtes WMI directement depuis la station pour voir si la communication fonctionne.

### Erreur lors de l'obtention des informations sur les produits :

Classe WMI invalide ou classe WMI non trouvée sur Windows Server 2003. Sur Windows Server 2003, Win32\_Product n'est pas activé par défaut. En savoir plus sur la <a href="https://learn.microsoft.com/en-us/previous-versions/windows/desktop/legacy/aa394378(v=vs.85)" title="https://learn.microsoft.com/en-us/previous-versions/windows/desktop/legacy/aa394378(v=vs.85)" target="_blank" rel="noopener">classe Win32_Product</a>.
