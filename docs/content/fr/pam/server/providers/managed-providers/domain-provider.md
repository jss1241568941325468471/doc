---
eleventyComputed:
  title: Fournisseur d'utilisateur de domaine
  description: 
---
Le fournisseur ***Utilisateur de domaine*** permet à {{ fr.DVLS }} de stocker les informations d'identification du compte de domaine à utiliser pour la détection de compte Active Directory et pour réaliser la rotation ou la propagation des mots de passe.
![Domain user provider dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8141.png)

## Général
| Option      | Description                   |
|-------------|-------------------------------|
| Nom         | Nom d'affichage du fournisseur. |
| Description | Description du fournisseur.  |

## Paramètres de mot de passe
| Option                               | Description                                                                                       |
|--------------------------------------|---------------------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération | Modèle de mot de passe qui sera utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe. |

## Domaine
| Option      | Description                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------|
| Nom de domaine | FQDN du domaine contre lequel le scan ou la rotation du mot de passe sera exécuté.                     |
| Protocole    | Protocole utilisé pour contacter le contrôleur de domaine.<br> Sélectionner entre : <ul><li>LDAP</li><li>LDAPS</li></ul> |
| Port        | Définir le numéro de port utilisé avec le protocole configuré.                                                   |

## Informations d'identification
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Type d'identifiant | Options ***Identifiant personnalisé*** ou ***Identifiant lié***.            | 
| Nom d'utilisateur | Nom d'utilisateur du compte de domaine.    |
| Mot de passe | Mot de passe du compte de domaine.    |
| Identifiant lié | Identifiant directement lié à un compte PAM.              |        

## Actions
| Option                   | Description                                                         |
|--------------------------|---------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }}     | Créer un PAM {{ fr.VLT }} avec le nom du fournisseur si activé. |
| Ajouter configuration de scan   | Ouvrir le dialogue de ***Configuration de scan*** si activé.           |
