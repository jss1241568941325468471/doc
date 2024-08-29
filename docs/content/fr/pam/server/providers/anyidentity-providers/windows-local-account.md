---
eleventyComputed:
  title: Comptes locaux Windows
  description: Le fournisseur de comptes locaux Windows permet la gestion des comptes locaux Windows sur plusieurs hôtes.
---
Le fournisseur de ***comptes locaux Windows*** permet la gestion des comptes locaux Windows sur plusieurs hôtes. Bien que le fournisseur de ***comptes Windows*** existe déjà au sein de {{ fr.DVLS }}, il est limité à la gestion des comptes sur un seul hôte. Ce fournisseur {{ fr.ANYID }} étend cette capacité, permettant la gestion des comptes sur de nombreux hôtes, tous gérés par le même fournisseur.
![Windows local accounts provider configuration](https://cdnweb.devolutions.net/docs/DVLS4024_2024_2.png)

Le modèle préconstruit pour ce fournisseur {{ fr.ANYID }} peut être trouvé [sur GitHub](https://github.com/Devolutions/PAM-Providers/tree/master/Providers/Windows%20Accounts).

## Général
| Option      | Description                  |
|-------------|------------------------------|
| Nom         | Nom d'affichage du fournisseur.|
| Nom du modèle | Modèle du fournisseur.     |

## Propriétés
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Description                         | Description du fournisseur.                                                                        |
| Hôte | Adresse IP ou nom d'hôte où se trouvent les comptes locaux Windows.                                                             |
| ExcludeDisabledAccountsInDiscovery| Exclure les comptes désactivés en mode découverte.                                                  |
| HostsLDAPSearchFilter | Ajouter des filtres de recherche LDAP.                                                                          | 

## Identifiants
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Type d'identifiant | Identifiants personnalisés ou options d'identifiants liés.|
| Nom d'utilisateur | Nom d'utilisateur du compte local Windows avec droits pour lister les comptes.|
| Mot de passe | Mot de passe du compte local Windows.                           |
| Identifiant lié | Identifiant directement lié à un compte PAM.                | 

## Actions
| Option                | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Ajouter PAM {{ fr.VLT }}  | Créer un PAM {{ fr.VLT }} avec le nom du fournisseur si activé. |
| Ajouter Configuration de Scan| Ouvrir la boîte de dialogue de configuration de scan si activé.                 |
