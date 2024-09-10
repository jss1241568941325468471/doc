---
_schema: default
eleventyComputed:
  title: Liste du processus de mise à niveau
  description: >-
    Cette liste à puces décrit chaque étape qu'un technicien de support suivra pour
    aider un client à mettre à niveau l'instance {{ fr.DVLS }}.
---
Veuillez visiter la page [Mise à niveau de {{ fr.DVLS }}](/server/getting-started/installation/upgrade-server/) pour des étapes informatives sur la procédure de mise à niveau.

Les mises à niveau de {{ fr.DVLS }} ne sont pas excessivement compliquées, mais certaines étapes doivent être planifiées avec soin. Veuillez [contacter notre équipe de support](mailto:service@devolutions.net) pour réserver une session où nous vous aiderons.

{% snippet, "badgeNotice" %}
{{ fr.DVLS }} est utilisé par des équipes, cela signifie que d'autres utilisateurs doivent être pris en compte avant de commencer la mise à niveau.

Confirmer que toutes les exigences minimales sont installées et que les dépendances atteignent les versions prises en charge selon la page [Exigences du système](/server/overview/system-requirements/).
{% endsnippet %}

Cette liste à puces décrit chaque étape qu'un technicien de support suivra pour aider un client à mettre à niveau l'instance {{ fr.DVLS }}.

1. S'assurer que le niveau fonctionnel du domaine est au moins à la version ***Windows Server 2012 R2*** si [Authentification de domaine](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/) est configurée dans {{ fr.DVLS }}.
2. Confirmer pour les sauvegardes de la base de données et du dossier de l'application web. S'assurer que l'option de sauvegarde Copie uniquement est activée dans SQL Server Management Studio pour obtenir une sauvegarde autonome qui ne fait pas partie d'un ensemble de sauvegardes.
3. S'assurer que tout le monde est en [mode hors ligne](/rdm/data-sources/offline-mode/) dans {{ fr.RDM }} si correctement configuré ou déconnecté de l'interface web {{ fr.DVLS }}.
4. Modifier la ***version maximale*** dans l'***Administration - Paramètres du système*** si configuré.
5. Confirmer l'arrêt de l'instance avec le bouton Passer hors ligne sur le {{ fr.DVLSCONSOLE }}. Si plus d'une instance {{ fr.DVLS }} (Haute disponibilité ou Équilibrage de charge), passer toutes les instances en mode hors ligne avant la mise à niveau.
6. Pour les versions antérieures à 2020.1.x, vérifier si un fournisseur de sécurité par phrase secrète est défini sur l'instance {{ fr.DVLS }}. Si c'est le cas, suivre les étapes [Supprimer le fournisseur de sécurité](/server/kb/how-to-articles/remove-security-provider/) après la mise à niveau. Cela pourrait être complété lors d'une autre session de support ou le client peut le faire lui-même.
7. Confirmer les paramètres A2F.
8. Confirmer si la sécurité intégrée est activée ou désactivée dans l'onglet Base de données.
   1. Si c'est le cas, confirmer que l'utilisateur connecté sur la machine Windows a suffisamment de permissions pour effectuer les mises à niveau de la base de données. \{type="a"\}
9. S'assurer qu'aucun anti-maliciel n'est actuellement en cours d'exécution ou de balayage des dossiers d'installation de l'application web et du {{ fr.DVLSCONSOLE }}.
10. Ouvrir le {{ fr.DVLSCONSOLE }} et dire à l'utilisateur de le mettre à niveau.
11. Mettre à niveau l'instance {{ fr.DVLS }} avec le bouton Mettre à jour sur le {{ fr.DVLSCONSOLE }}.
12. [Installer les prérequis](/server/getting-started/installation/installing-web-server-prerequisites/) pour {{ fr.DVLS }} si nécessaire.
13. Vérifier si {{ fr.DVLS }} est de retour en ligne dans le {{ fr.DVLSCONSOLE }}.
14. Tester la connexion à la page web directement sur le serveur ou depuis l'ordinateur du client avec le bouton Naviguer vers le site web sur le {{ fr.DVLSCONSOLE }}.
15. Si nécessaire, installer la dernière version de {{ fr.RDM }} qui appartient à la version {{ fr.DVLS }}.
16. Si nécessaire, mettre à jour la version du module {{ fr.PS }} qui appartient à la version {{ fr.DVLS }}.
17. Tester la connectivité de {{ fr.RDM }} à la source de données {{ fr.DVLS }}.
18. Si nécessaire, mettre à jour {{ fr.DGW }}.
19. S'assurer que les clés de chiffrement seront exportées et placées en lieu sûr pour des raisons de sécurité. Ces clés de chiffrement sont nécessaires pour la reprise après sinistre.
    1. [Exporter les clés de chiffrement](/server/kb/how-to-articles/manage-encryption-keys/#export-the-encryption-keys) \{type="a"\}
20. S'assurer que les licences {{ fr.RDM }} et {{ fr.DVLS }} correspondent.
