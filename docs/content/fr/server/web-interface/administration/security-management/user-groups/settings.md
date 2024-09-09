---
_schema: défaut
eleventyComputed:
  title: Paramètres
---
Permettre au groupe d'utilisateurs d'activer le [mode hors ligne](/rdm/windows/data-sources/offline-mode/) sur une source de données {% var, "DVLS" false %} dans {% var, "RDM" false %}. La source de données doit également être configurée pour permettre le mode hors ligne. Plusieurs modes sont disponibles. ![Groupes d'utilisateurs - Paramètres](https://cdnweb.devolutions.net/docs/DVLS6082_2024_2.png)

## Paramètres

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p><em><strong>Désactivé</strong></em></p></td><td><p>Aucun cache hors ligne autorisé pour le groupe d'utilisateurs.</p></td></tr><tr><td><p><em><strong>Cache uniquement</strong></em> </p></td><td><p>Permettre de sauvegarder un cache de la source de données mais pas le mode hors ligne.</p></td></tr><tr><td><p><em><strong>Lecture seule</strong></em></p></td><td><p>Un cache en lecture seule. Le groupe d'utilisateurs ne pourra pas modifier les données dans la source de données. Ce mode est autorisé uniquement pour les <a href="https://docs.devolutions.net/rdm/windows/data-sources/data-sources-types/advanced-data-sources/">sources de données avancées</a>.</p></td></tr><tr><td><p><em><strong>Lecture/Écriture</strong></em></p></td><td><p>Un cache avancé, avec synchronisation des modifications. Ce mode est autorisé uniquement pour les <a href="https://docs.devolutions.net/rdm/windows/data-sources/data-sources-types/advanced-data-sources/">sources de données avancées</a>.</p></td></tr></tbody></table>
