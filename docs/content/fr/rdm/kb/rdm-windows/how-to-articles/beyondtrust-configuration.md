---
_schema: défaut
eleventyComputed:
  title: Configuration de BeyondTrust
---
Voici les informations requises pour configurer les propriétés d'une entrée BeyondTrust.

## Paramètres

Dans la section ***Général*** de l'entrée BeyondTrust :

1. Entrer l'***Hôte***, qui est l'URL de votre portail BeyondTrust.
2. Entrer le ***Nom d'utilisateur*** et le ***Mot de passe*** d'un compte ayant les permissions pour se connecter à BeyondTrust.
3. Entrer la ***Clé API de l'application***, qui est la clé de l'une de vos ***Inscriptions API BeyondTrust***. ![General](https://cdnweb.devolutions.net/docs/RDMW4107_2024_2.png "General")

   &nbsp;

   ![Clé BeyondTrust](https://cdnweb.devolutions.net/docs/INTERFACE4052.png "BeyondTrust key"){% snippet, "shieldCaution" %}Devolutions recommande fortement d'activer l'option ***Mot de passe utilisateur requis*** dans l'inscription API pour {% var, "RDM" false %}. Ne pas le faire pourrait permettre l'usurpation de :

            * Tout utilisateur autorisé à utiliser cette politique de clé API qui n'a pas configuré son second facteur si ***Imposer l'authentification multifacteur*** est sélectionné.
            * Tout utilisateur autorisé à utiliser cette politique de clé API si l'option ***Imposer l'authentification multifacteur*** n'est PAS sélectionnée.{% endsnippet %}

{% snippet, "badgeHelp" %}
La section modèle vous permet d'appliquer un modèle pour la session que vous souhaitez ouvrir. Pour plus d'informations sur les modèles, veuillez vous référer à [Créer des modèles](https://docs.devolutions.net/rdm/windows/commands/file/templates/creating-templates).
{% endsnippet %}
