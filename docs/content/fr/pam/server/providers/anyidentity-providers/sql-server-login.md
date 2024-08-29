---
eleventyComputed:
  title: Connexion SQL Server
  description: Ce fournisseur de connexion SQL Server {{ fr.ANYID }} est conçu pour s'intégrer avec le module {{ fr.DPAM }} pour gérer les identifiants de connexion SQL Server.
---
Ce fournisseur de connexion SQL Server {{ fr.ANYID }} est conçu pour s'intégrer avec le module {{ fr.DPAM }} pour gérer les identifiants de connexion SQL Server. Il permet la détection de compte automatisée et la rotation des mots de passe pour les connexions SQL Server.

Ce fournisseur offre les capacités suivantes :

* **Détection de compte** : Énumération automatisée des comptes de connexion SQL Server.
* **Heartbeat** : Validation que les mots de passe stockés dans {{ fr.DVLS }} correspondent à ceux configurés sur l'instance SQL Server.
* **Rotation des mots de passe** : Mise à jour automatisée des mots de passe de connexion SQL Server conformément à la politique ou à la demande.

Le modèle préconstruit pour ce fournisseur {{ fr.ANYID }} peut être trouvé [sur GitHub](https://github.com/Devolutions/PAM-Providers/tree/master/Providers/sql_server_login).
