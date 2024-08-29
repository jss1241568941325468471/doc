---
eleventyComputed:
  title: Fournisseurs non gérés (réinitialisation de mot de passe uniquement)
  description: 
---
Dans {{ fr.DPAM }}, un fournisseur effectue généralement l'ensemble du cycle de vie de la gestion des mots de passe, y compris la détection, le battement de cœur et la rotation des mots de passe. Cependant, il n'est pas toujours approprié, nécessaire ou faisable de maintenir l'ensemble du cycle de vie pour un fournisseur d'identité. Dans de tels cas, des fournisseurs non gérés, également connus sous le nom de fournisseurs ***Réinitialisation de mot de passe uniquement***, sont utilisés.

Les fournisseurs non gérés exécutent uniquement une seule phase du cycle de vie de la gestion des mots de passe : la phase de rotation des mots de passe. Contrairement à d'autres fournisseurs, ils sont uniquement capables de réinitialiser un mot de passe pour un compte sur un fournisseur d'identité.

![Unmanaged (password reset only) providers](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2108.png)
