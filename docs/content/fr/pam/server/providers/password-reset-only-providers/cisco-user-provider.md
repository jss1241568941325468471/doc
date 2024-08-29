---
eleventyComputed:
  title: Fournisseur d'utilisateur Cisco
  description: Le fournisseur d'utilisateur Cisco permet à {{ fr.DVLS }} de stocker les identifiants de compte Cisco à utiliser pour effectuer la rotation des mots de passe.
---
Le fournisseur ***d'utilisateur Cisco*** permet à {{ fr.DVLS }} de stocker les identifiants de compte Cisco à utiliser pour effectuer la rotation des mots de passe.
![Cisco User Provider](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8093.png)

## Général
| Option        | Description                           |
|---------------|---------------------------------------|
| Nom           | Nom d'affichage du fournisseur.       |
| Nom du modèle | Description du fournisseur.           |

## Paramètres de mot de passe
| Option                               | Description                                                                                       |
|--------------------------------------|---------------------------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération | Modèle de mot de passe qui sera utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe. |

## Propriétés
| Option    | Description                                                                                         |
|-----------|-----------------------------------------------------------------------------------------------------|
| Nom d'hôte | FQDN du serveur Cisco contre lequel le scan ou la rotation du mot de passe sera exécuté.           |
| Port      | Définir le numéro de port utilisé pour se connecter à l'hôte Cisco.                                 |
| Mot de passe | Mot de passe du compte Cisco.                                                                     |

## Actions
| Option               | Description                                                         |
|----------------------|---------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }} | Créer un PAM {{ fr.VLT }} avec le nom du fournisseur si activé. |
