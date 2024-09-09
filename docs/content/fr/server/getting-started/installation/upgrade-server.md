---
_schema: default
eleventyComputed:
  title: Mise à niveau de {{ fr.DVLS }}
  description: >-
    Installer la version appropriée de {{ fr.DVLSCONSOLE }} avant de mettre à niveau l'application web {{
    fr.DVLS }}.
---
Installer la version appropriée de {{ fr.DVLSCONSOLE }} avant de mettre à niveau l'application web {{ fr.DVLS }}. Elle est disponible sur notre [page de téléchargement](https://devolutions.net/server/home/download/).

Les étapes suivantes sont destinées à être réalisées sur un seul serveur ou une [topologie](/server/overview/topologies/) de base. Si votre environnement diffère de ces topologies, veuillez [nous contacter](mailto:service@devolutions.net) et nous vous guiderons pour la mise à niveau de votre {{ fr.DVLS }}.

## Flux de travail

Voici une liste de recommandations et d'étapes à suivre avant de procéder à la mise à niveau :

* Recommander fortement de tester le processus de mise à niveau dans un [environnement de test/de mise en scène](/server/kb/how-to-articles/create-server-staging-instance/) avant de mettre à niveau votre instance de production. Si vous n'avez pas d'instance de mise en scène, recommander un déploiement limité pour s'assurer que le flux de travail est pris en charge à votre satisfaction avant d'impacter toute votre équipe.
* Effectuer les étapes de mise à niveau avec le {{ fr.DVLSCONSOLE }}. Vous devrez mettre à niveau votre copie vers la dernière version qui correspond à la version cible de {{ fr.DVLS }} que vous vous préparez à installer. Suivre attentivement les étapes.
* Si vous avez choisi d'utiliser la sécurité intégrée pour vous connecter à la base de données, effectuer la mise à niveau en utilisant un compte utilisateur Windows ayant tous les droits sur la base de données. S'assurer que l'identité du pool d'applications IIS et les comptes du planificateur ont suffisamment de privilèges sur la base de données. Après une mise à niveau vers une nouvelle version, de nouvelles permissions peuvent être requises. Veuillez nous contacter pour obtenir la nouvelle liste des permissions.
* Si vous avez défini le [fournisseur de sécurité](/server/kb/how-to-articles/remove-security-provider/) sur votre {{ fr.DVLS }} actuel (2019.2.9.0 ou antérieur), des opérations spécifiques devront être effectuées avant la mise à niveau. Veuillez [nous contacter](mailto:service@devolutions.net) pour plus de détails.
* Recommander de faire une sauvegarde des clés de chiffrement avant toute opération pouvant modifier les informations de la base de données ou avant la mise à niveau de {{ fr.DVLS }}. Protéger le fichier de clé de chiffrement dans un endroit sûr pour éviter toute perte de données si {{ fr.DVLS }} doit être restauré.

### Phase de préparation

* S'assurer que les utilisateurs de l'instance ont activé le [mode hors ligne](/rdm/data-sources/offline-mode/) et qu'ils effectuent tous un rafraîchissement complet du cache (<kbd>Ctrl</kbd>\+<kbd>F5</kbd>).
* Demander à votre équipe de passer en mode hors ligne dans {{ fr.RDM }}, leur permettant de travailler pendant que le système est hors service.
* Mettre à jour la version maximale de {{ fr.RDM }} dans ***Administration – Paramètres système – Gestion des versions – Version maximale***, si cette option était définie avant la mise à niveau.
* Si un antivirus est déployé sur le serveur, inclure une exception dans sa configuration pour :
  * Le dossier d'installation de {{ fr.DVLSCONSOLE }} : **C:\\Program Files (x86)\\Devolutions\\Devolutions Server Console**.
  * Le dossier de l'application web {{ fr.DVLS }}.

### Phase 1

* Effectuer une sauvegarde complète de la base de données, prendre des précautions pour éviter que ce fichier de sauvegarde ne soit supprimé par un plan de maintenance.
* Archiver le contenu du dossier de l'application web contenant l'instance {{ fr.DVLS }}, déplacer dans un endroit sûr.
* Installer la version appropriée de {{ fr.DVLSCONSOLE }}. Dans chacun des sous-thèmes liés à une version spécifique de {{ fr.DVLS }}, vous trouverez la version du client dont vous avez besoin.
* Exécuter le {{ fr.DVLSCONSOLE }} avec des privilèges élevés.

### Phase 2

1. Ouvrir le [{{ fr.DVLSCONSOLE }}](/server/management/devolutions-server-console/).
2. Sélectionner l'instance que vous souhaitez mettre à niveau.
3. Mettre l'instance en ***mode hors ligne*** avec le bouton ***Passer hors ligne***. Sur une topologie de haute disponibilité/équilibrage de charge, toutes les instances doivent être mises en ***mode hors ligne*** avant de commencer le processus de mise à niveau. ![Serveur – Passer hors ligne](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2004_2024_1.png)
4. Cliquer sur ***Mettre à jour***. ![](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2000_2024_1.png)
5. Sélectionner la source de mise à niveau. Vous pouvez soit utiliser la dernière version ou la version stable disponible en ligne, soit spécifier le chemin vers un fichier ZIP que vous avez téléchargé vous-même. Utiliser ceci pour les versions bêta ou pour les versions antérieures. ![Fichier source de mise à jour](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2001_2024_1.png)
6. Cliquer sur ***Suivant***. {% snippet, "badgeWarning" %}
      Si vous mettez à niveau de la version 2021.2.14 ou plus ancienne vers la version 2022.1 ou supérieure, vous devrez fournir l'[URI d'accès](/server/kb/knowledge-base/access-uri/) pour accéder à la page web {{ fr.DVLS }}.
      {% endsnippet %}
7. Examiner le résumé et cliquer sur ***Mettre à jour*** si vous êtes satisfait. ![Résumé](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2002_2024_1.png)

Le processus va maintenant commencer. Après achèvement, un message apparaîtra pour vous informer que l'opération a réussi. ![Opération réussie](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2003_2024_1.png)

### Phase finale

{% snippet, "shieldNotice" %}
* Le ***dossier de sauvegarde*** contient des informations sur la configuration de l'instance {{ fr.DVLS }} avant la mise à niveau. Après une mise à niveau réussie, vous devez vous assurer que le contenu est soit déplacé dans un endroit sûr, soit supprimé.
* Notre service d'assistance reçoit de plus en plus de demandes urgentes d'assistance en raison d'administrateurs malveillants mettant à niveau leur propre copie de {{ fr.RDM }} et introduisant une mise à jour de schéma pour une nouvelle fonctionnalité. Cela peut empêcher d'autres utilisateurs d'utiliser le système. Nous recommandons fortement de définir à la fois les versions maximales et minimales autorisées pour se connecter à votre instance.
* Si vous avez choisi d'utiliser la sécurité intégrée pour vous connecter à la base de données dans l'onglet [base de données](/server/management/devolutions-server-console/devolutions-server-settings/database/), s'assurer que l'identité du pool d'applications IIS et les comptes du planificateur ont suffisamment de privilèges sur la base de données.
{% endsnippet %}

* Demander à un utilisateur de mettre à niveau son poste de travail avec la version de {{ fr.RDM }} prise en charge par la version {{ fr.DVLS }} et tester la connectivité avec l'instance du serveur.
* Demander aux ordinateurs exécutant des scripts PowerShell de mettre à jour la version du module {{ fr.PS }} prise en charge par la version {{ fr.DVLS }} et tester les résultats des scripts.
* Lorsque vous êtes satisfait de vos tests, demander au reste du personnel de mettre à niveau vers la même version de {{ fr.RDM }}.
* Mettre à jour la version maximale/minimale de {{ fr.RDM }} dans ***Administration – Paramètres système – Gestion des versions***.
