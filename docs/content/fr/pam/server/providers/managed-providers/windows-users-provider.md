---
eleventyComputed:
  title: Fournisseur d'utilisateur Windows
  description: Le fournisseur d'utilisateur Windows permet à {{ fr.DVLS }} de stocker les informations d'identification du compte Windows à utiliser pour la détection de compte local Windows ou pour effectuer la rotation des mots de passe.
---
Le fournisseur d'***utilisateur Windows*** permet à {{ fr.DVLS }} de stocker les informations d'identification du compte Windows à utiliser pour la détection de compte local Windows ou pour effectuer la rotation des mots de passe. Voir l'article de la base de connaissances [Créer un fournisseur d'utilisateurs Windows](/pam/kb/how-to-articles/create-windows-users-provider/) pour plus d'informations sur sa configuration.

{% snippet, "badgeInfo" %}
* Le [service de planification](/server/kb/knowledge-base/scheduler-service-general-information/) doit être installé et en cours d'exécution pour utiliser cette fonctionnalité.
* Si vous utilisez un administrateur différent de celui intégré par défaut, vous devez activer la politique "Contrôle de compte d'utilisateur : Mode d'approbation administrateur pour le compte Administrateur intégré". Voir l'article de Microsoft pour plus d'informations : [Description du contrôle de compte d'utilisateur et des restrictions à distance dans Windows Vista](https://learn.microsoft.com/en-us/troubleshoot/windows-server/windows-security/user-account-control-and-remote-restriction).
{% endsnippet %}

![!!ServerOp8089](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8089.png)

## Général
| Option      | Description                          |
|-------------|--------------------------------------|
| Nom         | Nom d'affichage du fournisseur.      |
| Description | Description du fournisseur.          |

## Paramètres de mot de passe
| Option                              | Description                                                                                           |
|-------------------------------------|-------------------------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération | Modèle de mot de passe qui sera utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe. |

## Hôte
| Option        | Description                             |
|---------------|-----------------------------------------|
| Nom de l'ordinateur | Nom de l'ordinateur de la machine Windows. |

## Informations d'identification
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Type d'identifiant | Options d'***identifiant personnalisé*** ou d'***identifiant lié***.            | 
| Nom d'utilisateur | Nom d'utilisateur du compte local Windows avec droits pour lister les comptes. |
| Mot de passe | Mot de passe du compte local Windows.                             |
| Identifiant lié | Identifiant directement lié à un compte PAM.              |                        

## Actions
| Option                | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }}  | Crée un PAM {{ fr.VLT }} avec le nom du fournisseur si activé. |
| Ajouter Configuration de Scan | Ouvre le dialogue de ***configuration de scan*** si activé.                 |
