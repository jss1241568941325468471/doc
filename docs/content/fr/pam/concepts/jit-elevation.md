---
eleventyComputed:
  title: Élévation juste-à-temps
  description: L'élévation JAT dans Devolutions PAM a deux variantes, à savoir l'élévation d'un compte normal ou d'un compte sans privilèges permanents (ZSP).
---
***Élévation juste-à-temps (JAT)*** dans Devolutions PAM a deux variantes : élever un compte standard ou un compte sans privilèges permanents (ZSP).

* **Compte standard** : Ce compte a des appartenances existantes. JAT ajoute des groupes ou rôles supplémentaires lors de la réservation qui sont ensuite supprimés lors de la restitution.
* **Compte ZSP** : Ce compte n'a pas de permissions ou d'appartenances au repos. Les appartenances sont ajoutées lors de la réservation et supprimées lors de la restitution, de manière similaire aux comptes standards. L'équipe de sécurité opérationnelle peut surveiller ces comptes pour s'assurer qu'ils restent vides d'appartenances au repos.

### Alias
* CyberArk : À la demande

### Sujets connexes
* [Élévation juste-à-temps (JAT) dans {{ fr.DVLS }}](/pam/server/just-in-time/)

### Voir aussi
* [Glossaire des termes courants de la gestion des accès privilégiés (PAM)](https://blog.devolutions.net/2021/01/glossary-of-common-privileged-access-management-pam-terms/)
* [Besoin d'une cyberassurance ? Alors vous avez probablement besoin de PAM aussi](https://blog.devolutions.net/2023/10/need-cybersecurity-insurance-then-you-probably-need-pam-too/)
