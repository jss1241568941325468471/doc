---
eleventyComputed:
  title: Fournisseur d'utilisateur Azure AD / Entra ID
  description: Le fournisseur d'utilisateur Azure AD / Entra ID permet à {{ fr.DVLS }} de stocker les informations de l'application Azure AD / Entra ID à utiliser pour la détection de compte ou pour réaliser la rotation des mots de passe.
---
Le ***fournisseur d'utilisateur Azure AD / Entra ID*** permet à {{ fr.DVLS }} de stocker les informations de l'application Azure AD / Entra ID à utiliser pour la détection de compte ou pour réaliser la rotation des mots de passe.

{% snippet, "badgeHelp" %}
Voir [Créer un fournisseur PAM Azure AD](/server/kb/how-to-articles/create-azure-ad-pam-provider/) pour plus d'informations sur sa configuration.
{% endsnippet %}

![Azure AD / Entra ID user provider](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8095.png)

## Général
| Option      | Description                  |
|-------------|------------------------------|
| Nom         | Nom d'affichage du fournisseur |
| Description | Description du fournisseur   |

## Paramètres de mot de passe
| Option                           | Description                                                                  |
|----------------------------------|------------------------------------------------------------------------------|
| Modèle de mot de passe utilisé lors de la génération | Modèle de mot de passe utilisé pour générer le mot de passe lors de l'opération de réinitialisation du mot de passe |

## Serveur
| Option    | Description                          |
|-----------|--------------------------------------|
| ID de locataire | ID du locataire Azure               |
| ID de client | ID de l'application Azure          |
| Clé secrète | Clé secrète de l'application Azure |

## Actions

| Option               | Description                                                           |
|----------------------|-----------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }} | Si activé, crée un PAM {{ fr.VLT }} avec le nom du fournisseur. |
| Ajouter Configuration de Scan | Si activé, ouvre le dialogue de ***Configuration de Scan***.              |
