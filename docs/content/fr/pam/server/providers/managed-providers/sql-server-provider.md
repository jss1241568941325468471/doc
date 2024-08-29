---
eleventyComputed:
  title: Fournisseur SQL Server
  description: Le fournisseur SQL Server permet à {{ fr.DVLS }} de stocker les identifiants de compte SQL à utiliser pour la détection de compte SQL ou pour effectuer la rotation des mots de passe.
---
Le ***fournisseur SQL Server*** permet à {{ fr.DVLS }} de stocker les identifiants de compte SQL à utiliser pour la détection de compte SQL ou pour effectuer la rotation des mots de passe.
![SQL Server provider dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2118.png)

## Général
| Option      | Description                  |
|-------------|------------------------------|
| Nom         | Nom d'affichage du fournisseur.|
| Description | Description du fournisseur.   |

## Paramètres de mot de passe
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération | Modèle de mot de passe qui sera utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe.  |

## Serveur
| Option      | Description                   |
|-------------|-------------------------------|
| Nom du serveur | Nom d'hôte du SQL Server.   |

## Identifiants
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Type d'identifiant | Options ***Identifiant personnalisé*** ou ***Identifiant lié***.            | 
| Nom d'utilisateur | Nom d'utilisateur du compte SQL avec droits pour lister les comptes. |
| Mot de passe | Mot de passe du compte SQL.                              |
| Identifiant lié | Identifiant directement lié à un compte PAM.              | 

## Actions
| Option                | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }}  | Créer un PAM {{ fr.VLT }} avec le nom du fournisseur si activé. |
| Ajouter configuration de scan | Ouvrir le dialogue de ***configuration de scan*** si activé.                 |
