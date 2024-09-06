---
_schema: défaut
eleventyComputed:
  title: Paramètres
---
Permettre au groupe d'utilisateurs d'activer le [Mode Hors Ligne](/rdm/windows/data-sources/offline-mode/) sur la source de données {% var, "DVLS" false %} dans {% var, "RDM" false %}. La source de données doit également être configurée pour permettre le mode hors ligne. Plusieurs modes sont disponibles. ![User Groups - Settings](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8012.png)

## Paramètres

\| Option            \| Description                                                        \| \|-------------------\|--------------------------------------------------------------------\| \| ***Désactivé***    \| Aucun cache hors ligne autorisé pour le groupe d'utilisateurs.                       \| \| ***Lecture seule***   \| Un cache en lecture seule. Le groupe d'utilisateurs ne pourra pas modifier les données dans la source de données. Ce mode est autorisé uniquement pour les [Sources de Données Avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). \| \| ***Lecture/Écriture***  \| Un cache avancé, avec synchronisation des modifications. Ce mode est autorisé uniquement pour les [Sources de Données Avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). \|
