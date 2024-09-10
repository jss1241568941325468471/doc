---
_schema: default
eleventyComputed:
  title: Créer un fournisseur PAM Azure AD
  description: >-
    Le guide suivant fournit les étapes pour créer un fournisseur PAM utilisateur Azure AD
    pour {{ fr.DVLS }}.
---
Le guide suivant fournit les étapes pour créer un fournisseur PAM utilisateur Azure AD pour {{ fr.DVLS }}.

#### Dans le portail Azure

1. Dans une page de navigateur, ouvrir le [Portail Microsoft Azure AD](https://azure.microsoft.com) et se connecter à votre compte.
2. Sélectionner ***Microsoft Entra ID*** dans la section ***Services Azure***. Si vous ne le voyez pas, cliquer sur ***Plus de services*** pour faire apparaître d'autres services. ![Microsoft Entra ID](https://cdnweb.devolutions.net/docs/DVLS6085_2024_2.png)
3. Dans ***Enregistrements d'applications***, cliquer sur ***Nouvel enregistrement***. ![Enregistrements d'applications – Nouvel enregistrement](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2133.png)
4. Définir le ***Nom*** de votre application.
5. Cliquer sur ***Enregistrer*** en bas lorsque c'est fait. ![Définir le Nom et cliquer sur Enregistrer](https://cdnweb.devolutions.net/docs/DVLS6087_2024_2.png)

#### Dans {{ fr.DVLS }}

6. Se connecter à votre {{ fr.DVLS }}.
7. Aller à ***Administration – Accès Privilégié – Fournisseurs***, puis cliquer sur ***Ajouter***. ![Administration – Accès Privilégié – Fournisseurs – Ajouter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2134.png)
8. Sélectionner ***Utilisateur Azure AD*** comme nouveau fournisseur PAM, puis cliquer sur ***Continuer***. ![Ajouter un nouveau fournisseur PAM – Utilisateur Azure AD](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8065.png)
9. Dans la fenêtre ***Fournisseur***, entrer un ***Nom*** (obligatoire) et une ***Description*** (optionnelle) pour votre nouveau fournisseur PAM Utilisateur Azure AD. Si besoin, sélectionner un ***Modèle de mot de passe*** dans la liste déroulante. ![Nom, Description, et Modèle de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2135.png)

#### Dans le portail Azure

10. Dans l'***Aperçu*** de votre nouvel enregistrement d'application, copier l'***ID de répertoire (locataire)***. ![Copier l'ID de répertoire (locataire)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2136.png)

#### Dans {{ fr.DVLS }}

11. Coller l'ID copié à l'étape précédente dans le champ ***ID de locataire***. ![ID de locataire](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2138.png)

#### Dans le portail Azure

12. Toujours dans l'***Aperçu*** de votre nouvel enregistrement d'application, copier l'***ID d'application (client)***. ![Copier l'ID d'application (client)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2137.png)

#### Dans {{ fr.DVLS }}

13. Coller l'ID copié à l'étape précédente dans le champ ***ID client***. ![ID client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2139.png)

#### Dans le portail Azure

14. Dans ***Certificats et secrets***, cliquer sur ***Secrets clients***, puis sur ***Nouveau secret client***. ![Nouveau secret client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8064.png)
15. Dans la fenêtre ***Ajouter un secret client***, entrer une ***Description*** et sélectionner une date d'expiration pour ce secret client, selon vos meilleures pratiques de sécurité internes. ![Ajouter un secret client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2140.png)
16. Cliquer sur ***Ajouter***.
17. Copier la ***Valeur*** de ce nouveau secret client en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté. ![Copier la Valeur du Secret Client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8067.png)

#### Dans {{ fr.DVLS }}

18. Coller la valeur copiée à l'étape précédente dans le champ ***Clé secrète***. ![Clé secrète](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8068.png)
19. Tester la connexion pour voir si elle fonctionne, puis cliquer sur ***Enregistrer***. La fenêtre ***Configuration de l'analyse*** apparaîtra : la garder ouverte car elle sera remplie à une étape ultérieure.

#### Dans le portail Azure

{% snippet, "badgeCaution" %}
Attribuer des permissions API comme décrit dans les étapes 20 à 26 n'est utile que si vous souhaitez effectuer une détection de comptes Azure (analyse). Si ce n'est pas le cas, pour éviter d'attribuer des permissions inutiles à l'application, passer à l'étape 27.
{% endsnippet %}

20. Dans ***Permissions API***, cliquer sur ***Ajouter une permission***. ![Permissions API – Ajouter une permission](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2141.png)
21. Dans la fenêtre ***Demande de permissions API***, sélectionner ***Microsoft Graph***. ![Microsoft Graph](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2142.png)
22. Cliquer sur ***Permissions d'application***, puis cocher les cases à côté des permissions API Microsoft Graph suivantes pour les sélectionner :
    * ***Group.Read.All***
    * ***RoleManagement.Readwrite.Directory***
    * ***User.Read.All*** ![Sélectionner les permissions API](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2143.png)

    {% snippet, "badgeInfo" %}
           Utiliser la barre de filtre au-dessus de la liste des permissions pour trouver celles que vous recherchez.
           {% endsnippet %}

23. Lorsque toutes les permissions ci-dessus ont été sélectionnées, cliquer sur ***Ajouter des permissions*** en bas.
24. La liste des permissions sera mise à jour pour inclure celles qui viennent d'être sélectionnées. Supprimer toutes les autres permissions inutiles en utilisant le bouton à points de suspension à côté. ![Supprimer les Permissions Inutiles](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2328.png)
25. Les permissions nécessitent un consentement d'administrateur. Cliquer sur le bouton ***Octroyer le consentement d'administrateur pour &lt; Votre Organisation &gt;***, puis cliquer sur ***Oui*** pour confirmer. ![Octroyer le consentement d'administrateur pour votre organisation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2329.png)
26. Pour confirmer que le consentement d'administrateur a été accordé, vérifier le ***Statut*** de vos permissions. ![Statut Accordé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2330.png)
27. Pour octroyer à l'application la capacité de faire tourner les mots de passe, quitter les ***Enregistrements d'applications*** pour revenir à Azure Active Directory, puis sélectionner ***Rôles et administrateurs*** dans le menu de gauche.
28. Dans ***Tous les rôles***, cliquer sur le rôle ***Administrateur du service d'assistance***. Si les comptes gérés par le module PAM sont membres de n'importe quel rôle ou groupe d'administrateur, alors l'application a besoin du rôle ***Administrateur d'authentification privilégiée***. ![Tous les rôles – Administrateur du service d'assistance](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8072.png)
29. Dans ***Affectations***, cliquer sur le bouton ***Ajouter des affectations***. ![Administrateur du service d'assistance – Ajouter des affectations](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8073.png)
30. Filtrer la liste pour trouver l'application Azure précédemment créée, la sélectionner, puis cliquer sur ***Ajouter***. ![Ajouter des affectations](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8074.png) Votre nouvelle affectation devrait maintenant être affichée dans ***Affectations***.

#### Dans {{ fr.DVLS }}

31. Les dernières étapes sont dédiées à la configuration d'une analyse pour ce fournisseur. Dans la fenêtre ***Configuration de l'analyse*** qui est apparue lorsque vous avez enregistré votre configuration de fournisseur à l'étape 19, sous ***Général***, entrer un ***Nom*** pour cette configuration. ![Nom de la Configuration de l'analyse](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2144.png)
32. Sous ***Configuration***, sélectionner ***Groupes*** ou ***Rôles*** dans la liste déroulante ***Mode de recherche***. Vous pouvez filtrer le ***Mode de recherche*** pour des groupes ou rôles Azure AD spécifiques en cliquant sur le bouton ***Modifier*** à côté de la liste déroulante. ![Mode de recherche de la Configuration de l'analyse](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8077.png)
33. Cliquer sur ***OK*** lorsque la configuration est terminée.
34. Dans {{ fr.DVLS }}, aller à ***Administration – Accès Privilégié – Configurations d'analyse***. Si l'option ***Démarrer l'analyse à l'enregistrement*** a été laissée activée pendant la configuration de l'analyse, l'analyse devrait avoir commencé d'elle-même. Pendant le processus, la colonne ***Statut*** affiche une icône de sablier à côté de l'entrée de l'analyse. ![Administration – Accès Privilégié – Configurations d'analyse](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2145.png)
35. Lorsque le processus est terminé, l'icône de sablier change en une coche verte. À ce moment-là, sélectionner des comptes et les importer dans les comptes privilégiés comme tout autre type de compte privilégié.
