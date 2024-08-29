---
eleventyComputed:
  title: Fournisseur d'utilisateur Oracle
  description: Le fournisseur d'utilisateur Oracle permet à {{ fr.DVLS }} de stocker les identifiants de compte Oracle à utiliser pour réaliser la rotation des mots de passe.
---
Le fournisseur ***d'utilisateur Oracle*** permet à {{ fr.DVLS }} de stocker les identifiants de compte Oracle à utiliser pour réaliser la rotation des mots de passe.
![Oracle user provider](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8094.png)

## Général
| Option        | Description                           |
|---------------|---------------------------------------|
| Nom           | Nom d'affichage du fournisseur.       |
| Nom du modèle | Description du fournisseur.           |

## Paramètres de mot de passe
| Option                              | Description                                                                                             |
|-------------------------------------|---------------------------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération | Modèle de mot de passe qui sera utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe. |

## Propriétés
| Option        | Description                                                                                     |
|---------------|-------------------------------------------------------------------------------------------------|
| Nom d'hôte    | FQDN du serveur Oracle contre lequel le scan ou la rotation du mot de passe sera exécuté.       |
| Nom du service| Nom du service Oracle.                                                                          |
| Port          | Définir le numéro de port utilisé pour se connecter à l'hôte Oracle.                            |
| Nom d'utilisateur | Nom d'utilisateur du compte Oracle avec droits pour réinitialiser les mots de passe.        |
| Mot de passe  | Mot de passe du compte Oracle.                                                                  |

## Actions
| Option               | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }} | Créer un PAM {{ fr.VLT }} avec le nom du fournisseur si activé.          |
