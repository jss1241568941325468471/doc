---
eleventyComputed:
  title: "{{ fr.ANYID }} fournisseurs"
  description: "{{ fr.DPAM }} offre une variété de fournisseurs gérés, mais il n'est pas faisable de prendre en charge chaque fournisseur d'identité."
---
{{ fr.DPAM }} offre une variété de fournisseurs gérés, mais il n'est pas faisable de prendre en charge chaque fournisseur d'identité. C'est là que les fournisseurs {{ fr.ANYID }} deviennent essentiels.

Les fournisseurs {{ fr.ANYID }} sont une extension des fournisseurs gérés, conçus pour combler le fossé entre les fournisseurs d'identité pris en charge nativement par le module {{ fr.DPAM }} via des fournisseurs gérés et les nombreux autres fournisseurs d'identité que les clients de Devolutions peuvent utiliser.

Un fournisseur {{ fr.ANYID }} peut prendre en charge divers fournisseurs d'identité non pris en charge nativement par {{ fr.DPAM }}, tels que :
* **Fournisseurs d'identité basés sur le nuage** : Des fournisseurs comme Okta ou Google Workspace, qui gèrent l'accès aux applications et services en nuage.
* **Applications personnalisées** : Tout système interne que votre organisation a développé qui maintient sa propre base de données utilisateur et ses mécanismes d'authentification.
* **Systèmes hérités** : Anciennes applications ou bases de données qui peuvent ne pas s'intégrer facilement aux solutions modernes de gestion des identités.

Les fournisseurs {{ fr.ANYID }} utilisent diverses actions, écrites en PowerShell sous forme de scripts d'action, qui sont exécutées soit à la demande, soit sur une base planifiée via des configurations de scan. Ces actions incluent la détection des identifiants du fournisseur d'identité, la détection des changements d'identifiants et la rotation des mots de passe pour les identifiants.

* **Détection de compte** : Enumère les identifiants sur un fournisseur d'identité.
* **Heartbeat** : Détecte si un identifiant a changé depuis le dernier heartbeat.
* **Rotation de mot de passe** : Change les mots de passe des comptes pour un nouveau mot de passe sécurisé

Si vous êtes compétent en PowerShell, vous pouvez [créer des fournisseurs {{ fr.ANYID }}](/pam/kb/how-to-articles/create-anyidentity-pam-provider-dvls) ou utiliser l'un des [modèles préconstruits](https://github.com/Devolutions/PAM-Providers).

![{{ fr.ANYID }} fournisseur](https://cdnweb.devolutions.net/docs/DVLS4026_2024_2.png)
